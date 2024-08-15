import * as THREE from "three";
import { render, act } from "@testing-library/react-native";
import CameraController from "../components/CameraController/CameraController";

jest.mock("three", () => {
  const actualThree = jest.requireActual("three");
  return {
    ...actualThree,
    Vector3: jest.fn().mockImplementation(() => ({
      set: jest.fn(),
      copy: jest.fn().mockReturnThis(),
      add: jest.fn().mockReturnThis(),
      clone: jest.fn().mockReturnThis(),
    })),
  };
});

jest.mock("@react-three/fiber/native", () => ({
  useFrame: jest.fn(),
  useThree: () => ({
    camera: {
      position: {
        copy: jest.fn(),
        lerp: jest.fn(),
        lerpVectors: jest.fn(),
      },
      lookAt: jest.fn(),
    },
  }),
}));

describe("CameraController Component", () => {
  let followTarget;
  let setIsAnimating;

  beforeEach(() => {
    followTarget = { current: { position: new THREE.Vector3() } };
    setIsAnimating = jest.fn();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("initializes and starts the animation", () => {
    render(
      <CameraController
        followTarget={followTarget}
        isAnimating={false}
        setIsAnimating={setIsAnimating}
      />,
    );

    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(setIsAnimating).toHaveBeenCalledWith(true);
  });

  it("does not update camera position when isAnimating is true", () => {
    render(
      <CameraController followTarget={followTarget} isAnimating setIsAnimating={setIsAnimating} />,
    );

    const mockUseFrame = jest.requireMock("@react-three/fiber/native").useFrame;
    const frameCallback = mockUseFrame.mock.calls[0][0];

    frameCallback();

    expect(followTarget.current.position.set).not.toHaveBeenCalled();
  });
  it("handles null followTarget without error", () => {
    expect(() => {
      render(
        <CameraController
          followTarget={null}
          isAnimating={false}
          setIsAnimating={setIsAnimating}
        />,
      );
    }).not.toThrow();
  });
  it("sets isAnimating to false after animation completes", () => {
    jest.useFakeTimers();
    render(
      <CameraController
        followTarget={followTarget}
        isAnimating={false}
        setIsAnimating={setIsAnimating}
      />,
    );

    act(() => {
      jest.advanceTimersByTime(100);
      jest.runAllTimers();
    });

    expect(setIsAnimating).toHaveBeenCalledWith(false);
    jest.useRealTimers();
  });
});
