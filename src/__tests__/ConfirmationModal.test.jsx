import { render, fireEvent } from "@testing-library/react-native";
import ConfirmationModal from "../components/ConfirmationModal/ConfirmationModal";

jest.mock("../components/CustomButton/CustomButton", () => "CustomButton");

jest.mock("react-native-expo-viewport-units", () => ({
  vw: jest.fn(() => 10),
}));

describe("ConfirmationModal 컴포넌트", () => {
  const mockLeftButtonTouch = jest.fn();
  const mockRightButtonTouch = jest.fn();

  const props = {
    visible: true,
    modalMessage: "Test message",
    onLeftButtonTouch: mockLeftButtonTouch,
    onRightButtonTouch: mockRightButtonTouch,
  };

  it("정확하게 렌더링되어야 한다.", () => {
    const { getByText, getAllByTestId } = render(<ConfirmationModal {...props} />);

    expect(getByText("Test message")).toBeTruthy();
    const buttons = getAllByTestId("CustomButton");
    expect(buttons).toHaveLength(2);
    expect(buttons[0].props.buttonText).toBe("YES");
    expect(buttons[1].props.buttonText).toBe("NO");
  });

  it("YES 버튼을 눌렀을 때  onLeftButtonTouch를 호출해야 한다.is pressed", () => {
    const { getAllByTestId } = render(<ConfirmationModal {...props} />);

    const buttons = getAllByTestId("CustomButton");
    fireEvent.press(buttons[0]);
    expect(mockLeftButtonTouch).toHaveBeenCalled();
  });

  it("NO 버튼을 눌렀을 때 onRightButtonTouch을 호출해야 한다", () => {
    const { getAllByTestId } = render(<ConfirmationModal {...props} />);

    const buttons = getAllByTestId("CustomButton");
    fireEvent.press(buttons[1]);
    expect(mockRightButtonTouch).toHaveBeenCalled();
  });

  it("visible이 false일 때에는 화면에 보이지 않는다.", () => {
    const { queryByText } = render(<ConfirmationModal {...props} visible={false} />);

    expect(queryByText("Test message")).toBeNull();
  });
});
