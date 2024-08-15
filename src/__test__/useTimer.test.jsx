import { renderHook, act } from "@testing-library/react-native";
import { AppState } from "react-native";

import useTimer from "../hooks/useTimer";

jest.useFakeTimers();
jest.mock("react-native", () => ({
  AppState: {
    addEventListener: jest.fn(() => ({
      remove: jest.fn(),
    })),
    currentState: "active",
  },
}));

describe("useTimer", () => {
  it("should initialize with the given time", () => {
    const { result } = renderHook(() => useTimer(60));
    expect(result.current.timeLeft).toBe(60);
  });

  it("should start the timer", () => {
    const { result } = renderHook(() => useTimer(60));
    act(() => {
      result.current.startTimer();
    });
    expect(result.current.timeLeft).toBe(60);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current.timeLeft).toBe(59);
  });

  it("should stop the timer", () => {
    const { result } = renderHook(() => useTimer(60));
    act(() => {
      result.current.startTimer();
      jest.advanceTimersByTime(5000);
      result.current.stopTimer();
    });
    const { timeLeft } = result.current;
    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(result.current.timeLeft).toBeGreaterThanOrEqual(timeLeft - 1);
    expect(result.current.timeLeft).toBeLessThanOrEqual(timeLeft);
  });

  it("should reset the timer", () => {
    const { result } = renderHook(() => useTimer(60));
    act(() => {
      result.current.startTimer();
      jest.advanceTimersByTime(5000);
      result.current.resetTimer();
    });
    expect(result.current.timeLeft).toBe(60);
  });

  it("should handle app state changes", () => {
    const { result } = renderHook(() => useTimer(60));
    act(() => {
      result.current.startTimer();
      jest.advanceTimersByTime(5000);
    });
    const { timeLeft } = result.current;

    act(() => {
      const mockCallback = AppState.addEventListener.mock.calls[0][1];
      mockCallback("background");

      jest.advanceTimersByTime(5000);
      mockCallback("active");

      jest.advanceTimersByTime(100);
    });

    expect(result.current.timeLeft).toBeGreaterThanOrEqual(timeLeft - 12);
    expect(result.current.timeLeft).toBeLessThanOrEqual(timeLeft - 6);
  });
});
