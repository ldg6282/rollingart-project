import { render, fireEvent } from "@testing-library/react-native";
import GameDescriptionModal from "../components/GameDescriptionModal/GameDescriptionModal";

const mockSetIsPaused = jest.fn();
const mockOnGameStart = jest.fn();
const mockSetIsGameDescriptionModalVisible = jest.fn();
const mockSetDescriptionImages = jest.fn();

describe("GameDescriptionModal 컴포넌트", () => {
  const defaultProps = {
    setIsPaused: mockSetIsPaused,
    onGameStart: mockOnGameStart,
    setIsGameDescriptionModalVisible: mockSetIsGameDescriptionModalVisible,
    isGameDescriptionModalVisible: true,
    isPauseButtonVisible: true,
    descriptionImages: 0,
    setDescriptionImages: mockSetDescriptionImages,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("컴포넌트가 올바르게 렌더링되어야 한다", () => {
    const { getByText } = render(<GameDescriptionModal {...defaultProps} />);
    expect(getByText("게임 시작")).toBeTruthy();
    expect(getByText("설명 닫기")).toBeTruthy();
  });

  it("handleNextImageButtonTouch 함수가 올바르게 동작해야 한다", () => {
    const { getByTestId } = render(<GameDescriptionModal {...defaultProps} />);
    const nextButton = getByTestId("next-button");
    fireEvent.press(nextButton);
    expect(mockSetDescriptionImages).toHaveBeenCalledWith(expect.any(Function));
  });

  it("handlePrevImageButtonTouch 함수가 올바르게 동작해야 한다", () => {
    const { getByTestId } = render(
      <GameDescriptionModal {...defaultProps} descriptionImages={1} />,
    );
    const prevButton = getByTestId("prev-button");
    fireEvent.press(prevButton);
    expect(mockSetDescriptionImages).toHaveBeenCalledWith(expect.any(Function));
  });

  it("handleCloseButtonTouch 함수가 올바르게 동작해야 한다", async () => {
    const { getByText } = render(<GameDescriptionModal {...defaultProps} />);
    const closeButton = getByText("설명 닫기");
    await fireEvent.press(closeButton);
    expect(mockSetIsGameDescriptionModalVisible).toHaveBeenCalledWith(false);
    expect(mockSetDescriptionImages).toHaveBeenCalledWith(0);
    expect(mockSetIsPaused).toHaveBeenCalledWith(false);
    expect(mockOnGameStart).toHaveBeenCalledWith(true);
  });

  it("descriptionText1 함수가 올바른 텍스트를 반환해야 한다", () => {
    const { getByText, rerender } = render(<GameDescriptionModal {...defaultProps} />);
    expect(getByText("스테이지 최초 입장시 기울기가 0으로 적용됩니다.")).toBeTruthy();

    rerender(<GameDescriptionModal {...defaultProps} descriptionImages={2} />);
    expect(getByText("남은 타이머가 표시됩니다.")).toBeTruthy();
  });

  it("descriptionText2 함수가 올바른 텍스트를 반환해야 한다", () => {
    const { getByText, rerender } = render(<GameDescriptionModal {...defaultProps} />);
    expect(
      getByText(
        "디바이스 기울기가 앞, 뒤, 좌, 우로 90도가 넘을 시 센서가 정상적으로 작동하지 않습니다.",
      ),
    ).toBeTruthy();

    rerender(<GameDescriptionModal {...defaultProps} descriptionImages={3} />);
    expect(getByText("버튼을 터치하면 타이머와 공이 멈춥니다.")).toBeTruthy();
  });

  it("descriptionText3 함수가 올바른 텍스트를 반환해야 한다", () => {
    const { getByText, rerender } = render(<GameDescriptionModal {...defaultProps} />);
    expect(getByText("튜토리얼을 통해 조작감을 익혀보세요!")).toBeTruthy();

    rerender(<GameDescriptionModal {...defaultProps} descriptionImages={4} />);
    expect(getByText("9에 가까워질수록 센서가 민감해집니다.")).toBeTruthy();
  });
});
