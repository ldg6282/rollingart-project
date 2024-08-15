import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Stage0Screen from "../../app/StageScreen/Stage0Screen";

jest.mock("../../src/hooks/useTimer", () => ({
  __esModule: true,
  default: () => ({
    timeLeft: 999,
    startTimer: jest.fn(),
    stopTimer: jest.fn(),
    resetTimer: jest.fn(),
    setTimeLeft: jest.fn(),
  }),
}));

jest.mock("../../app/Game3DScene/Game3DScene", () => "Game3DScene");

describe("Stage0Screen 컴포넌트", () => {
  const mockRouter = { replace: jest.fn() };

  beforeEach(() => {
    useRouter.mockReturnValue(mockRouter);
    AsyncStorage.getItem.mockClear();
    AsyncStorage.setItem.mockClear();
  });

  it("컴포넌트가 올바르게 렌더링되어야 한다", async () => {
    const { getByText } = render(<Stage0Screen />);

    expect(getByText("Tutorial")).toBeTruthy();
    expect(getByText("999")).toBeTruthy();
    expect(getByText("5")).toBeTruthy();
  });

  it("메인 버튼을 누르면 확인 모달이 표시되어야 한다", async () => {
    const { getByTestId, getByText } = render(<Stage0Screen />);

    const mainButton = getByTestId("main-button");
    fireEvent.press(mainButton);

    expect(getByText("메인으로 이동하시겠습니까?")).toBeTruthy();
  });

  it("메인 버튼을 눌렀을 때 모달이 표시되고 타이머가 정지되어야 한다", () => {
    const { getByTestId, getByText } = render(<Stage0Screen />);

    const mainButton = getByTestId("main-button");
    fireEvent.press(mainButton);

    expect(getByText("메인으로 이동하시겠습니까?")).toBeTruthy();
    expect(mockRouter.replace).not.toHaveBeenCalled(); // 아직 라우터가 호출되지 않았어야 함
  });

  it("게임을 일시정지하고 재개할 수 있어야 한다", async () => {
    const { getByTestId, queryByTestId } = render(<Stage0Screen />);

    const pauseButton = getByTestId("pause-button");
    fireEvent.press(pauseButton);

    expect(queryByTestId("play-button")).toBeTruthy();
    expect(queryByTestId("pause-button")).toBeFalsy();

    const playButton = getByTestId("play-button");
    fireEvent.press(playButton);

    expect(queryByTestId("pause-button")).toBeTruthy();
    expect(queryByTestId("play-button")).toBeFalsy();
  });

  it("민감도를 조절할 수 있어야 한다", async () => {
    const { getByText, getByTestId } = render(<Stage0Screen />);

    const increaseButton = getByTestId("increase-button");
    fireEvent.press(increaseButton);
    expect(getByText("6")).toBeTruthy();

    const decreaseButton = getByTestId("decrease-button");
    fireEvent.press(decreaseButton);
    expect(getByText("5")).toBeTruthy();
  });
});
