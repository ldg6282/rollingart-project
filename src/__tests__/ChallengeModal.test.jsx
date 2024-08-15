import { render, fireEvent } from "@testing-library/react-native";
import ChallengeModal from "../components/ChallengeModal/ChallengeModal";

jest.mock("react-native-expo-viewport-units", () => ({
  vw: jest.fn((value) => value),
  vh: jest.fn((value) => value),
}));

describe("ChallengeModal 컴포넌트", () => {
  const mockSetIsPaused = jest.fn();

  beforeEach(() => {
    mockSetIsPaused.mockClear();
  });

  it("stage 1 도전과제가 정확하게 렌더링되어야 한다.", () => {
    const { getByText } = render(<ChallengeModal currentStage={1} setIsPaused={mockSetIsPaused} />);

    expect(getByText("도전 과제")).toBeTruthy();
    expect(getByText("그림과 길의 일치율 65% 이상")).toBeTruthy();
    expect(getByText("남은 시간 5초 이상")).toBeTruthy();
    expect(getByText("남은 시간 15초 이상")).toBeTruthy();
  });

  it("stage 2 도전과제가 정확하게 렌더링되어야 한다.", () => {
    const { getByText } = render(<ChallengeModal currentStage={2} setIsPaused={mockSetIsPaused} />);

    expect(getByText("도전 과제")).toBeTruthy();
    expect(getByText("그림과 길의 일치율 60% 이상")).toBeTruthy();
    expect(getByText("남은 시간 10초 이상")).toBeTruthy();
    expect(getByText("남은 시간 20초 이상")).toBeTruthy();
  });

  it("유효하지 않은 스테이지에서는 에러 메세지가 출력되어야 한다.", () => {
    const { getAllByText } = render(
      <ChallengeModal currentStage={3} setIsPaused={mockSetIsPaused} />,
    );

    const errorMessages = getAllByText("오류가 발생했습니다. 게임을 다시 시작해주세요.");
    expect(errorMessages.length).toBe(3);
  });

  it("배경을 누르면 모달을 닫고 게임의 일시정지를 해제한다.", () => {
    const { getByTestId } = render(
      <ChallengeModal currentStage={1} setIsPaused={mockSetIsPaused} />,
    );

    fireEvent.press(getByTestId("modal-background"));

    expect(mockSetIsPaused).toHaveBeenCalledWith(false);
  });

  it("모달 콘텐츠를 눌렀을 때에는 모달을 닫지 않는다.", () => {
    const { getByTestId } = render(
      <ChallengeModal currentStage={1} setIsPaused={mockSetIsPaused} />,
    );

    fireEvent.press(getByTestId("modal-content"));

    expect(mockSetIsPaused).not.toHaveBeenCalled();
  });

  it("title이 정확하게 출력되어야 한다.", () => {
    const { getByTestId } = render(
      <ChallengeModal currentStage={1} setIsPaused={mockSetIsPaused} />,
    );
    expect(getByTestId("modal-title").props.children).toBe("도전 과제");
  });

  it("description이 정확하게 출력되어야 한다.", () => {
    const { getByTestId } = render(
      <ChallengeModal currentStage={1} setIsPaused={mockSetIsPaused} />,
    );
    expect(getByTestId("description-text-1").props.children).toBe("그림과 길의 일치율 65% 이상");
    expect(getByTestId("description-text-2").props.children).toBe("남은 시간 5초 이상");
    expect(getByTestId("description-text-3").props.children).toBe("남은 시간 15초 이상");
  });
});
