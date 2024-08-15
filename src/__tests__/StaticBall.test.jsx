import React from "react";
import { render } from "@testing-library/react-native";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import StaticBall from "../components/StaticBall/StaticBall";

jest.mock("@react-three/fiber", () => ({
  useFrame: jest.fn((cb) => cb()),
}));

describe("StaticBall Component", () => {
  const mockTexture = "mockTextureUrl";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("텍스처를 로드하고 공에 적용해야한다.", () => {
    render(<StaticBall currentBallPatternTexture={mockTexture} />);
    expect(THREE.TextureLoader).toHaveBeenCalled();
  });

  it("공이 회전해야한다.", () => {
    const mockMesh = { rotation: { x: 0 } };
    jest.spyOn(React, "useRef").mockReturnValue({ current: mockMesh });

    render(<StaticBall currentBallPatternTexture={mockTexture} />);

    expect(useFrame).toHaveBeenCalled();
    expect(mockMesh.rotation.x).toBe(-0.03);
  });
});
