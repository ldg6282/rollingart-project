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

describe("CameraController 컴포넌트", () => {
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

  it("애니메이션이 초기화되고 시작되어야 한다.", () => {
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

  it("isAnimating이 true일 때 카메라 위치가 업데이트 되어서는 안된다.", () => {
    render(
      <CameraController followTarget={followTarget} isAnimating setIsAnimating={setIsAnimating} />,
    );

    const mockUseFrame = jest.requireMock("@react-three/fiber/native").useFrame;
    const frameCallback = mockUseFrame.mock.calls[0][0];

    frameCallback();

    expect(followTarget.current.position.set).not.toHaveBeenCalled();
  });
  it("오류 없이 followTarget을 처리해야 한다.", () => {
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
  it("애니메이션이 완료되면 isAnimating을 false로 설정해야 한다.", () => {
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
