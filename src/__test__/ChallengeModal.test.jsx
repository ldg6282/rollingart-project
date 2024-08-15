import { render, fireEvent } from "@testing-library/react-native";
import ChallengeModal from "../components/ChallengeModal/ChallengeModal";

jest.mock("react-native-expo-viewport-units", () => ({
  vw: jest.fn((value) => value),
  vh: jest.fn((value) => value),
}));

describe("ChallengeModal Component", () => {
  const mockSetIsPaused = jest.fn();

  beforeEach(() => {
    mockSetIsPaused.mockClear();
  });

  it("renders correctly for stage 1", () => {
    const { getByText } = render(<ChallengeModal currentStage={1} setIsPaused={mockSetIsPaused} />);

    expect(getByText("도전 과제")).toBeTruthy();
    expect(getByText("그림과 길의 일치율 65% 이상")).toBeTruthy();
    expect(getByText("남은 시간 5초 이상")).toBeTruthy();
    expect(getByText("남은 시간 15초 이상")).toBeTruthy();
  });

  it("renders correctly for stage 2", () => {
    const { getByText } = render(<ChallengeModal currentStage={2} setIsPaused={mockSetIsPaused} />);

    expect(getByText("도전 과제")).toBeTruthy();
    expect(getByText("그림과 길의 일치율 60% 이상")).toBeTruthy();
    expect(getByText("남은 시간 10초 이상")).toBeTruthy();
    expect(getByText("남은 시간 20초 이상")).toBeTruthy();
  });

  it("renders error message for invalid stage", () => {
    const { getAllByText } = render(
      <ChallengeModal currentStage={3} setIsPaused={mockSetIsPaused} />,
    );

    const errorMessages = getAllByText("오류가 발생했습니다. 게임을 다시 시작해주세요.");
    expect(errorMessages.length).toBe(3);
  });

  it("closes modal and unpauses game when background is pressed", () => {
    const { getByTestId } = render(
      <ChallengeModal currentStage={1} setIsPaused={mockSetIsPaused} />,
    );

    fireEvent.press(getByTestId("modal-background"));

    expect(mockSetIsPaused).toHaveBeenCalledWith(false);
  });

  it("does not close modal when modal content is pressed", () => {
    const { getByTestId } = render(
      <ChallengeModal currentStage={1} setIsPaused={mockSetIsPaused} />,
    );

    fireEvent.press(getByTestId("modal-content"));

    expect(mockSetIsPaused).not.toHaveBeenCalled();
  });
});
