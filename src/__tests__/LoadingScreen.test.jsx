import { render } from "@testing-library/react-native";
import LoadingScreen from "../../app/LoadingScreen/LoadingScreen";

jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(() => Promise.resolve(null)),
}));

jest.mock("@react-three/fiber", () => ({
  Canvas: ({ children }) => <mock-canvas>{children}</mock-canvas>,
}));

jest.mock("react-native-expo-viewport-units", () => ({
  vw: jest.fn((val) => val),
  vh: jest.fn((val) => val),
}));

jest.mock("../../src/components/StaticBall/StaticBall", () => "MockStaticBall");

describe("LoadingScreen", () => {
  it("renders the loading screen correctly", () => {
    const { getByText, getByTestId } = render(<LoadingScreen />);

    expect(getByText("Loading...")).toBeTruthy();

    expect(getByTestId("circle-image")).toBeTruthy();

    expect(getByTestId("ball-container")).toBeTruthy();
  });
});
