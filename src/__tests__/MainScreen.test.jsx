import { Platform, BackHandler } from "react-native";
import { render, fireEvent } from "@testing-library/react-native";
import { useRouter } from "expo-router";
import MainScreen from "../../app/MainScreen/MainScreen";

jest.mock(
  "../../src/components/BallCustomization/BallCustomization",
  () => "MockBallCustomization",
);

describe("MainScreen 컴포넌트", () => {
  const mockRouter = { replace: jest.fn() };

  beforeEach(() => {
    useRouter.mockReturnValue(mockRouter);
    jest.clearAllMocks();
  });

  it("컴포넌트가 렌더링되어야 한다", () => {
    const { getByText, getByTestId } = render(<MainScreen />);
    expect(getByText("게임 시작")).toBeTruthy();
    expect(getByText("게임 종료")).toBeTruthy();
    expect(getByTestId("logo-image")).toBeTruthy();
  });

  it("handleOpenModal 함수가 동작해야 한다", () => {
    const { getByText } = render(<MainScreen />);
    fireEvent.press(getByText("게임 종료"));
    expect(getByText("게임을 종료하시겠습니까?")).toBeTruthy();
  });

  it("handleCloseModal 함수가 동작해야 한다", () => {
    const { getByText, queryByText } = render(<MainScreen />);
    fireEvent.press(getByText("게임 종료"));
    fireEvent.press(getByText("NO"));
    expect(queryByText("게임을 종료하시겠습니까?")).toBeNull();
  });

  it("handleExitButtonTouch 함수가 동작해야 한다", () => {
    BackHandler.exitApp = jest.fn();
    Platform.OS = "android";
    const { getByText } = render(<MainScreen />);
    fireEvent.press(getByText("게임 종료"));
    fireEvent.press(getByText("YES"));
    expect(BackHandler.exitApp).toHaveBeenCalled();
  });

  it("handleStartButtonTouch 함수가 올바르게 동작해야 한다", () => {
    const { getByText } = render(<MainScreen />);
    fireEvent.press(getByText("게임 시작"));
    expect(mockRouter.replace).toHaveBeenCalledWith("/StageSelectScreen/StageSelectScreen");
  });

  it("iOS에서는 게임 종료 버튼이 보이지 않아야 한다", () => {
    require("react-native").Platform.OS = "ios";
    const { queryByText } = render(<MainScreen />);
    expect(queryByText("게임 종료")).toBeNull();
  });
});
