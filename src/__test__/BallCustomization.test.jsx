import { render, fireEvent, cleanup } from "@testing-library/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BallCustomization from "../components/BallCustomization/BallCustomization";

jest.mock("../components/StaticBall/StaticBall", function MockStaticBall() {
  return function StaticBall({ testID }) {
    return <mock-StaticBall testID={testID} />;
  };
});

jest.mock("@react-three/fiber", () => ({
  ...jest.requireActual("@react-three/fiber"),
  Canvas: ({ children }) => children,
}));

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
}));

describe("BallCustomization Component", () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const { getByTestId } = render(<BallCustomization />);
    const ballContainer = getByTestId("ball-container");
    expect(ballContainer).toBeTruthy();
  });

  it("changes pattern when next and prev buttons are clicked", () => {
    const { getByTestId, getAllByTestId } = render(<BallCustomization />);

    const staticBall = getByTestId("static-ball");
    expect(staticBall).toBeTruthy();

    const nextButton = getAllByTestId("arrow-button")[1];
    fireEvent.press(nextButton);

    expect(AsyncStorage.setItem).toHaveBeenCalledWith("selectedPatternIndex", "1");

    const prevButton = getAllByTestId("arrow-button")[0];
    fireEvent.press(prevButton);

    expect(AsyncStorage.setItem).toHaveBeenCalledWith("selectedPatternIndex", "0");
  });

  it("saves the selected pattern index to AsyncStorage", () => {
    const { getAllByTestId } = render(<BallCustomization />);

    const nextButton = getAllByTestId("arrow-button")[1];
    fireEvent.press(nextButton);

    expect(AsyncStorage.setItem).toHaveBeenCalledWith("selectedPatternIndex", "1");
  });
});
