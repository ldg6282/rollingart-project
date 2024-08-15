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

describe("StaticBall 컴포넌트", () => {
  const mockTexture = "mockTexturePath.jpg";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("올바르게 렌더링되어야 한다", () => {
    const { getByTestId } = render(<StaticBall currentBallPatternTexture={mockTexture} />);
    const mesh = getByTestId("static-ball-mesh");
    expect(mesh).toBeTruthy();
  });

  it("텍스처를 올바른 속성으로 생성해야 한다", () => {
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

  it("useFrame에서 회전을 업데이트해야 한다", () => {
    const mockRotation = { x: 0 };
    const mockMesh = { current: { rotation: mockRotation } };
    jest.spyOn(React, "useRef").mockReturnValue(mockMesh);

    render(<StaticBall currentBallPatternTexture={mockTexture} />);

    expect(mockRotation.x).toBe(-0.03);
  });
});
