import React from "react";
import { render } from "@testing-library/react-native";
import * as THREE from "three";
import DynamicTextureApplier from "../hooks/DynamicTextureApplier";

jest.mock("three", () => {
  const actualThree = jest.requireActual("three");
  return {
    ...actualThree,
    ShaderMaterial: jest.fn().mockImplementation(() => ({
      needsUpdate: false,
    })),
    Vector3: jest.fn().mockImplementation((x, y, z) => ({ x, y, z })),
  };
});

describe("DynamicTextureApplier", () => {
  let mockScene;
  let mockDynamicTexture;
  let mockBallPosition;
  let mockBrushRadius;

  beforeEach(() => {
    mockScene = {
      traverse: jest.fn(),
    };
    mockDynamicTexture = new THREE.Texture();
    mockBallPosition = new THREE.Vector3(0, 0, 0);
    mockBrushRadius = 0.1;
    jest.clearAllMocks();
  });

  it("land mesh에는 shader material이 적용되어야 한다.", () => {
    const mockLandMesh = {
      isMesh: true,
      name: "land",
      material: {
        map: new THREE.Texture(),
      },
    };

    mockScene.traverse.mockImplementation((callback) => callback(mockLandMesh));

    render(
      <DynamicTextureApplier
        scene={mockScene}
        dynamicTexture={mockDynamicTexture}
        ballPosition={mockBallPosition}
        brushRadius={mockBrushRadius}
      />,
    );

    expect(THREE.ShaderMaterial).toHaveBeenCalled();
    expect(mockLandMesh.material).toBeDefined();
    expect(mockLandMesh.material.needsUpdate).toBe(true);
  });

  it("land가 아닌 mesh에는 shader material이 적용되어선 안 된다.", () => {
    const mockNonLandMesh = {
      isMesh: true,
      name: "not-land",
      material: {
        map: new THREE.Texture(),
      },
    };

    mockScene.traverse.mockImplementation((callback) => callback(mockNonLandMesh));

    render(
      <DynamicTextureApplier
        scene={mockScene}
        dynamicTexture={mockDynamicTexture}
        ballPosition={mockBallPosition}
        brushRadius={mockBrushRadius}
      />,
    );

    expect(mockNonLandMesh.material).not.toHaveProperty("uniforms");
  });

  it("props이 바뀌면 shader가 업데이트 되어야 한다.", () => {
    const mockLandMesh = {
      isMesh: true,
      name: "land",
      material: {
        map: new THREE.Texture(),
      },
    };

    mockScene.traverse.mockImplementation((callback) => callback(mockLandMesh));

    const { rerender } = render(
      <DynamicTextureApplier
        scene={mockScene}
        dynamicTexture={mockDynamicTexture}
        ballPosition={mockBallPosition}
        brushRadius={mockBrushRadius}
      />,
    );

    const newBallPosition = new THREE.Vector3(1, 1, 1);
    const newBrushRadius = 0.2;

    rerender(
      <DynamicTextureApplier
        scene={mockScene}
        dynamicTexture={mockDynamicTexture}
        ballPosition={newBallPosition}
        brushRadius={newBrushRadius}
      />,
    );

    expect(THREE.ShaderMaterial).toHaveBeenCalled();
    expect(mockLandMesh.material.needsUpdate).toBe(true);
  });
});
