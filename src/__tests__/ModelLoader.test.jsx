import { render } from "@testing-library/react-native";
import * as THREE from "three";

import ModelLoader from "../hooks/ModelLoader";

jest.mock("@react-three/drei/native", () => ({
  useGLTF: jest.fn(),
}));

jest.mock("three", () => {
  const actualThree = jest.requireActual("three");
  return {
    ...actualThree,
    TextureLoader: jest.fn().mockImplementation(() => ({
      load: jest.fn().mockImplementation((_, onLoad) => {
        onLoad({
          flipY: false,
          generateMipmaps: false,
          minFilter: null,
          magFilter: null,
        });
      }),
    })),
  };
});

describe("ModelLoader", () => {
  it("should load the model and apply textures", () => {
    const mockScene = {
      traverse: jest.fn(),
    };

    const mockUseGLTF = require("@react-three/drei/native").useGLTF;
    mockUseGLTF.mockReturnValue({ scene: mockScene });

    const mockOnLoad = jest.fn();

    render(
      <ModelLoader modelUri="test-model.glb" textureUri="test-texture.png" onLoad={mockOnLoad} />,
    );

    expect(mockScene.traverse).toHaveBeenCalled();
    expect(mockOnLoad).toHaveBeenCalledWith(mockScene);
  });

  it("land와 fence에 올바른 material을 적용시켜야 한다.", () => {
    const mockLandMesh = {
      isMesh: true,
      name: "land",
      material: {},
    };

    const mockFenceMesh = {
      isMesh: true,
      name: "fence",
      material: {},
    };

    const mockScene = {
      traverse: jest.fn((callback) => {
        callback(mockLandMesh);
        callback(mockFenceMesh);
      }),
    };

    const mockUseGLTF = require("@react-three/drei/native").useGLTF;
    mockUseGLTF.mockReturnValue({ scene: mockScene });

    render(
      <ModelLoader modelUri="test-model.glb" textureUri="test-texture.png" onLoad={() => {}} />,
    );

    expect(mockLandMesh.material.map).toBeDefined();
    expect(mockLandMesh.material.needsUpdate).toBe(true);
    expect(mockFenceMesh.material).toBeInstanceOf(THREE.MeshStandardMaterial);
    expect(mockFenceMesh.material.color.getHex()).toBe(0xddd6ca);
  });
});
