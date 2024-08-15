import React from "react";
import * as THREE from "three";
import { render, act } from "@testing-library/react-native";
import Ball from "../components/Ball/Ball";

jest.spyOn(React, "useEffect").mockImplementation((f) => f());

jest.mock("@react-three/fiber", () => ({
  useFrame: jest.fn((callback) => {
    callback({ clock: { getElapsedTime: () => 0 } }, 0.016);
    return jest.fn();
  }),
}));

jest.mock("three", () => {
  const actualThree = jest.requireActual("three");
  return {
    ...actualThree,
    Vector3: jest.fn((...args) => ({
      x: args[0] || 0,
      y: args[1] || 0,
      z: args[2] || 0,
      set: jest.fn().mockReturnThis(),
      copy: jest.fn().mockReturnThis(),
      normalize: jest.fn().mockReturnThis(),
      crossVectors: jest.fn().mockReturnThis(),
    })),
    Quaternion: jest.fn(() => ({
      copy: jest.fn().mockReturnThis(),
      setFromAxisAngle: jest.fn().mockReturnThis(),
      multiplyQuaternions: jest.fn().mockReturnThis(),
    })),
    Raycaster: jest.fn(() => ({
      set: jest.fn(),
      intersectObject: jest.fn(() => []),
    })),
    TextureLoader: jest.fn(() => ({
      load: jest.fn(() => ({
        wrapS: null,
        wrapT: null,
        repeat: { set: jest.fn() },
      })),
    })),
    Box3: jest.fn(() => ({
      setFromObject: jest.fn(),
      containsPoint: jest.fn(),
    })),
  };
});

describe("Ball 컴포넌트", () => {
  let mockProps;
  let mockBallMeshRef;

  beforeEach(() => {
    jest.useFakeTimers();
    mockBallMeshRef = { current: null };
    mockProps = {
      currentBallPatternTexture: "texture.png",
      initialPosition: { x: 0, y: 1, z: 140 },
      initialVelocity: { x: 0, y: 0, z: 0 },
      accelData: { x: 0, y: 0, z: 0 },
      friction: 1.2,
      initialTilt: { current: { x: 0, y: 0, z: 0 } },
      ballMeshRef: mockBallMeshRef,
      handlePathUpdate: jest.fn(),
      landRef: { current: { traverse: jest.fn() } },
      startZoneRef: { current: {} },
      endZoneRef: { current: {} },
      colliderRefs: { current: [] },
      onGameStart: jest.fn(),
      onGameOver: jest.fn(),
      isPaused: false,
      sensitiveCount: 0,
      currentStage: 0,
      correctPath: [],
      ballPath: [],
      updateBallPosition: jest.fn(),
      dynamicTexture: { needsUpdate: false },
      setIsBallLoaded: jest.fn(),
      isAnimating: false,
    };
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it("컴포넌트가 올바르게 렌더링되어야 한다.", () => {
    const { toJSON } = render(<Ball {...mockProps} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("ballMeshRef가 준비되었을 때  setIsBallLoaded가 호출되어야 한다.", async () => {
    const setIsBallLoaded = jest.fn();
    mockProps.setIsBallLoaded = setIsBallLoaded;

    const { rerender } = render(<Ball {...mockProps} />);
    expect(setIsBallLoaded).not.toHaveBeenCalled();

    act(() => {
      mockBallMeshRef.current = {
        quaternion: new THREE.Quaternion(),
        position: new THREE.Vector3(0, 1, 140),
      };
    });

    await act(async () => {
      rerender(<Ball {...mockProps} />);
      jest.runAllTimers();
      await Promise.resolve();
    });

    expect(setIsBallLoaded).toHaveBeenCalledWith(true);
  });
});
