import React from "react";
import { render } from "@testing-library/react-native";
import * as THREE from "three";

import StaticBall from "../components/StaticBall/StaticBall";

jest.mock("@react-three/fiber", () => ({
  useFrame: jest.fn((callback) => callback()),
}));

jest.mock("three", () => {
  const actualThree = jest.requireActual("three");
  return {
    ...actualThree,
    TextureLoader: jest.fn().mockImplementation(() => ({
      load: jest.fn().mockReturnValue({
        wrapS: null,
        wrapT: null,
        repeat: { set: jest.fn() },
      }),
    })),
    RepeatWrapping: 1000,
  };
});

describe("StaticBall", () => {
  const mockTexture = "mockTexturePath.jpg";

  it("renders correctly", () => {
    const { getByTestId } = render(<StaticBall currentBallPatternTexture={mockTexture} />);
    const mesh = getByTestId("static-ball-mesh");
    expect(mesh).toBeTruthy();
  });

  it("creates texture with correct properties", () => {
    const mockTextureInstance = {
      wrapS: null,
      wrapT: null,
      repeat: { set: jest.fn() },
    };

    const mockTextureLoader = {
      load: jest.fn().mockReturnValue(mockTextureInstance),
    };

    jest.spyOn(THREE, "TextureLoader").mockImplementation(() => mockTextureLoader);

    render(<StaticBall currentBallPatternTexture={mockTexture} />);

    expect(mockTextureLoader.load).toHaveBeenCalledWith(mockTexture);
    expect(mockTextureInstance.wrapS).toBe(THREE.RepeatWrapping);
    expect(mockTextureInstance.wrapT).toBe(THREE.RepeatWrapping);
    expect(mockTextureInstance.repeat.set).toHaveBeenCalledWith(3, 1);
  });

  it("updates rotation in useFrame", () => {
    const mockRotation = { x: 0 };
    const mockMesh = { current: { rotation: mockRotation } };
    jest.spyOn(React, "useRef").mockReturnValue(mockMesh);

    render(<StaticBall currentBallPatternTexture={mockTexture} />);

    expect(mockRotation.x).toBe(-0.03);
  });
});
