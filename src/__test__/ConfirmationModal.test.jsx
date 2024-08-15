import { render, fireEvent } from "@testing-library/react-native";
import ConfirmationModal from "../components/ConfirmationModal/ConfirmationModal";

jest.mock("../components/CustomButton/CustomButton", () => "CustomButton");

jest.mock("react-native-expo-viewport-units", () => ({
  vw: jest.fn(() => 10),
}));

describe("ConfirmationModal", () => {
  const mockLeftButtonTouch = jest.fn();
  const mockRightButtonTouch = jest.fn();

  const props = {
    visible: true,
    modalMessage: "Test message",
    onLeftButtonTouch: mockLeftButtonTouch,
    onRightButtonTouch: mockRightButtonTouch,
  };

  it("renders correctly", () => {
    const { getByText, getAllByTestId } = render(<ConfirmationModal {...props} />);

    expect(getByText("Test message")).toBeTruthy();
    const buttons = getAllByTestId("CustomButton");
    expect(buttons).toHaveLength(2);
    expect(buttons[0].props.buttonText).toBe("YES");
    expect(buttons[1].props.buttonText).toBe("NO");
  });

  it("calls onLeftButtonTouch when YES button is pressed", () => {
    const { getAllByTestId } = render(<ConfirmationModal {...props} />);

    const buttons = getAllByTestId("CustomButton");
    fireEvent.press(buttons[0]);
    expect(mockLeftButtonTouch).toHaveBeenCalled();
  });

  it("calls onRightButtonTouch when NO button is pressed", () => {
    const { getAllByTestId } = render(<ConfirmationModal {...props} />);

    const buttons = getAllByTestId("CustomButton");
    fireEvent.press(buttons[1]);
    expect(mockRightButtonTouch).toHaveBeenCalled();
  });

  it("is not visible when visible prop is false", () => {
    const { queryByText } = render(<ConfirmationModal {...props} visible={false} />);

    expect(queryByText("Test message")).toBeNull();
  });
});
