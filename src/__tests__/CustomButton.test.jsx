import React from "react";
import { render } from "@testing-library/react-native";
import CustomButton from "../components/CustomButton/CustomButton";

describe("CustomButton", () => {
  it("정확하게 렌더링되어야 한다.", () => {
    const { getByText } = render(<CustomButton buttonText="Test Button" />);
    expect(getByText("Test Button")).toBeTruthy();
  });
});
