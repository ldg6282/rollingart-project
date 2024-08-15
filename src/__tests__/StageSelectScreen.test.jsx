import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StageSelectScreen from "../../app/StageSelectScreen/StageSelectScreen";

describe("StageSelectScreen 컴포넌트", () => {
  const mockRouter = { replace: jest.fn() };

  beforeEach(() => {
    useRouter.mockReturnValue(mockRouter);
    AsyncStorage.getItem.mockClear();
  });

  it("컴포넌트가 올바르게 렌더링되어야 한다", async () => {
    AsyncStorage.getItem.mockResolvedValue(null);
    const { getByText } = render(<StageSelectScreen />);

    await waitFor(() => {
      expect(getByText("STAGE")).toBeTruthy();
      expect(getByText("Tutorial")).toBeTruthy();
      expect(getByText("Stage 1")).toBeTruthy();
      expect(getByText("Stage 2")).toBeTruthy();
      expect(getByText("메인")).toBeTruthy();
    });
  });

  it("loadStarCounts 함수가 올바르게 동작해야 한다", async () => {
    const mockStarData = JSON.stringify({ 1: 2, 2: 1 });
    AsyncStorage.getItem.mockResolvedValue(mockStarData);

    render(<StageSelectScreen />);

    await waitFor(() => {
      expect(AsyncStorage.getItem).toHaveBeenCalledWith("starData");
    });
  });

  it("handleStageCardButtonTouch 함수가 올바르게 동작해야 한다", async () => {
    AsyncStorage.getItem.mockResolvedValue(null);
    const { getByText } = render(<StageSelectScreen />);

    await waitFor(() => {
      fireEvent.press(getByText("Tutorial"));
    });
    expect(mockRouter.replace).toHaveBeenCalledWith("/StageScreen/Stage0Screen");
  });

  it("handleMainButtonTouch 함수가 올바르게 동작해야 한다", async () => {
    AsyncStorage.getItem.mockResolvedValue(null);
    const { getByText } = render(<StageSelectScreen />);

    await waitFor(() => {
      fireEvent.press(getByText("메인"));
    });
    expect(mockRouter.replace).toHaveBeenCalledWith("/MainScreen/MainScreen");
  });
});
