import React from "react";
import { render } from "@testing-library/react-native";
import CustomButton from "../components/CustomButton/CustomButton";

describe("CustomButton", () => {
  it("renders correctly", () => {
    const { getByText } = render(<CustomButton buttonText="Test Button" />);
    expect(getByText("Test Button")).toBeTruthy();
  });
});
