import { render } from "@testing-library/react-native";
import { View } from "react-native";

import Game3DScreen from "../../app/Game3DScene/Game3DScene";
import { Stage1Land, Stage2Land, TutorialStageLand } from "../components/Land/Land";

function MockViewComponent(props) {
  return <View {...props} />;
}

jest.mock("@react-three/fiber/native", () => ({
  Canvas: ({ children }) => <MockViewComponent>{children}</MockViewComponent>,
  extend: jest.fn(),
}));

jest.mock("expo-sensors", () => ({
  Accelerometer: {
    setUpdateInterval: jest.fn(),
    addListener: jest.fn(() => ({ remove: jest.fn() })),
  },
}));

jest.mock("expo-av", () => ({
  Audio: {
    Sound: jest.fn().mockImplementation(() => ({
      getStatusAsync: jest.fn().mockResolvedValue({ isLoaded: false }),
      loadAsync: jest.fn(),
      unloadAsync: jest.fn(),
      playAsync: jest.fn(),
      stopAsync: jest.fn(),
    })),
  },
}));

jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
}));

jest.mock("../components/Land/Land", () => ({
  Stage1Land: jest.fn(() => null),
  Stage2Land: jest.fn(() => null),
  TutorialStageLand: jest.fn(() => null),
}));

jest.mock("../components/Ball/Ball", () => () => null);
jest.mock("../components/CameraController/CameraController", () => () => null);
jest.mock("../hooks/DynamicTextureApplier", () => () => null);

describe("Game3DScreen", () => {
  const defaultProps = {
    isOverlayVisible: false,
    onGameStart: jest.fn(),
    onGameOver: jest.fn(),
    isPaused: false,
    reloadKey: 0,
    sensitiveCount: 1,
    currentStage: 1,
    correctPath: [],
    setCorrectPath: jest.fn(),
    ballPath: [],
    handlePathUpdate: jest.fn(),
    setIsLoading: jest.fn(),
    isLoading: false,
    setIsAnimating: jest.fn(),
    isAnimating: false,
  };

  it("정상적으로 렌더링 되어야 한다.", () => {
    render(<Game3DScreen {...defaultProps} />);
  });

  it("currentStage 값이 1일 때 Stage1Land가 렌더링 되어야 한다.", () => {
    render(<Game3DScreen {...defaultProps} currentStage={1} />);
    expect(Stage1Land).toHaveBeenCalled();
  });

  it("currentStage 값이 2일 때 Stage2Land가 렌더링 되어야 한다.", () => {
    render(<Game3DScreen {...defaultProps} currentStage={2} />);
    expect(Stage2Land).toHaveBeenCalled();
  });

  it("currentStage 값이 0일 때 TutorialStageLand가 렌더링 되어야 한다.", () => {
    render(<Game3DScreen {...defaultProps} currentStage={0} />);
    expect(TutorialStageLand).toHaveBeenCalled();
  });
});
