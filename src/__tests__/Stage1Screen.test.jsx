import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Stage1Screen from "../../app/StageScreen/Stage1Screen";

jest.mock("../../src/hooks/useTimer", () => ({
  __esModule: true,
  default: () => ({
    timeLeft: 60,
    startTimer: jest.fn(),
    stopTimer: jest.fn(),
    resetTimer: jest.fn(),
    setTimeLeft: jest.fn(),
  }),
}));

jest.mock("../../app/Game3DScene/Game3DScene", () => "Game3DScene");
jest.mock("../../src/components/ChallengeModal/ChallengeModal", () => "ChallengeModal");
jest.mock("../../src/components/GameResultModal/GameResultModal", () => "GameResultModal");

describe("Stage1Screen 컴포넌트", () => {
  const mockRouter = { replace: jest.fn() };

  beforeEach(() => {
    useRouter.mockReturnValue(mockRouter);
    AsyncStorage.getItem.mockClear();
    AsyncStorage.setItem.mockClear();
  });

  it("컴포넌트가 올바르게 렌더링되어야 한다", async () => {
    const { getByText } = render(<Stage1Screen />);

    expect(getByText("Stage 1")).toBeTruthy();
    expect(getByText("60")).toBeTruthy();
    expect(getByText("5")).toBeTruthy();
  });

  it("메인 버튼을 누르면 확인 모달이 표시되어야 한다", async () => {
    const { getByTestId, getByText } = render(<Stage1Screen />);

    const mainButton = getByTestId("main-button");
    fireEvent.press(mainButton);

    expect(getByText("메인으로 이동하시겠습니까?")).toBeTruthy();
  });

  it("메인 버튼을 눌렀을 때 모달이 표시되고 타이머가 정지되어야 한다", () => {
    const { getByTestId, getByText } = render(<Stage1Screen />);

    const mainButton = getByTestId("main-button");
    fireEvent.press(mainButton);

    expect(getByText("메인으로 이동하시겠습니까?")).toBeTruthy();
    expect(mockRouter.replace).not.toHaveBeenCalled();
  });

  it("게임을 일시정지하고 재개할 수 있어야 한다", () => {
    const { getByTestId, queryByTestId } = render(<Stage1Screen />);

    const pauseButton = getByTestId("pause-button");
    fireEvent.press(pauseButton);

    expect(queryByTestId("play-button")).toBeTruthy();
    expect(queryByTestId("pause-button")).toBeFalsy();

    const playButton = getByTestId("play-button");
    fireEvent.press(playButton);

    expect(queryByTestId("pause-button")).toBeTruthy();
    expect(queryByTestId("play-button")).toBeFalsy();
  });

  it("게임 시작 전에만 민감도를 조절할 수 있어야 한다", async () => {
    const { getByText, getByTestId, queryByTestId } = render(<Stage1Screen />);

    const increaseButton = getByTestId("increase-button");
    fireEvent.press(increaseButton);
    expect(getByText("6")).toBeTruthy();

    const decreaseButton = getByTestId("decrease-button");
    fireEvent.press(decreaseButton);
    expect(getByText("5")).toBeTruthy();

    await waitFor(() => {
      const { onGameStart } = getByTestId("game-3d-scene").props;
      onGameStart();
    });

    expect(queryByTestId("increase-button")).toBeFalsy();
    expect(queryByTestId("decrease-button")).toBeFalsy();
  });

  it("게임 오버 시 결과 모달이 표시되어야 한다", async () => {
    const { getByTestId } = render(<Stage1Screen />);

    await waitFor(() => {
      const { onGameOver } = getByTestId("game-3d-scene").props;
      onGameOver("timeout");
    });

    expect(getByTestId("game-result-modal")).toBeTruthy();
  });

  it("Challenge 모달이 애니메이션 종료 후 표시되어야 한다", async () => {
    const { getByTestId } = render(<Stage1Screen />);

    await waitFor(() => {
      const { setIsAnimating } = getByTestId("game-3d-scene").props;
      setIsAnimating(false);
    });

    expect(getByTestId("challenge-modal")).toBeTruthy();
  });
});
