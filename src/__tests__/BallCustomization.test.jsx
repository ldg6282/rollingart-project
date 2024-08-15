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

describe("BallCustomization 컴포넌트", () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("컴포넌트가 올바르게 렌더링되어야 한다.", () => {
    const { getByTestId } = render(<BallCustomization />);
    const ballContainer = getByTestId("ball-container");
    expect(ballContainer).toBeTruthy();
  });

  it("prev buttons을 클릭했을 때 다음 패턴으로 변경되어야 한다.", () => {
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

  it("AsyncStorage에 선택된 패턴의 index가 저장되어야 한다.", () => {
    const { getAllByTestId } = render(<BallCustomization />);

    const nextButton = getAllByTestId("arrow-button")[1];
    fireEvent.press(nextButton);

    expect(AsyncStorage.setItem).toHaveBeenCalledWith("selectedPatternIndex", "1");
  });
});
