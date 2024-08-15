import { render, waitFor } from "@testing-library/react-native";
import GameResultModal from "../components/GameResultModal/GameResultModal";

jest.mock("expo-router", () => ({
  useRouter: () => ({
    replace: jest.fn(),
  }),
}));

jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(() => Promise.resolve(null)),
  setItem: jest.fn(() => Promise.resolve()),
}));

describe("GameResultModal", () => {
  it("정상적으로 렌더링 되어야 한다.", async () => {
    const { getByText } = render(
      <GameResultModal
        visible
        currentStage={1}
        gameResultMessage="finish"
        timeLeft={10}
        matchedRate={70}
      />,
    );

    await waitFor(() => {
      expect(getByText("훌륭합니다!")).toBeTruthy();
      expect(getByText("일치율 70%")).toBeTruthy();
    });
  });
});
