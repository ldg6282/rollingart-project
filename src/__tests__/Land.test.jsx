import React from "react";
import { render } from "@testing-library/react-native";
import { Stage1Land, Stage2Land, TutorialStageLand } from "../components/Land/Land";

jest.mock("@/utils/getAssetUri.js", () => jest.fn(() => "mockedUri"));
jest.mock("@/hooks/ModelLoader.jsx", () => () => null);
jest.mock("@/hooks/ExtractPathVertices", () => () => null);
jest.mock("@/components/ColliderBox/ColliderBox", () => () => null);
jest.mock("@/components/EventZone/EventZone", () => () => null);

jest.mock("../../assets/models/stage1.glb", () => "mocked-stage1.glb", { virtual: true });
jest.mock("../../assets/models/stage2.glb", () => "mocked-stage2.glb", { virtual: true });
jest.mock("../../assets/models/tutorialStage.glb", () => "mocked-tutorial-stage.glb", {
  virtual: true,
});

jest.mock("../../assets/images/stage1Texture.jpg", () => "mocked-stage1-texture.jpg", {
  virtual: true,
});
jest.mock("../../assets/images/stage2Texture.jpg", () => "mocked-stage2-texture.jpg", {
  virtual: true,
});
jest.mock("../../assets/images/tutorialStageTexture.jpg", () => "mocked-tutorial-texture.jpg", {
  virtual: true,
});

describe("Land 컴포넌트", () => {
  const mockSetLandRef = jest.fn();
  const mockSetColliderRef = jest.fn();
  const mockStartZoneRef = { current: {} };
  const mockEndZoneRef = { current: {} };
  const mockOnGameStart = jest.fn();
  const mockOnGameOver = jest.fn();
  const mockSetCorrectPath = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Stage1Land이 정상적으로 렌더링 되어야 한다", () => {
    render(
      <Stage1Land
        setLandRef={mockSetLandRef}
        setColliderRef={mockSetColliderRef}
        startZoneRef={mockStartZoneRef}
        endZoneRef={mockEndZoneRef}
        onGameStart={mockOnGameStart}
        onGameOver={mockOnGameOver}
        setCorrectPath={mockSetCorrectPath}
      />,
    );
  });

  it("Stage2Land가 정상적으로 렌더링 되어야 한다", () => {
    render(
      <Stage2Land
        setLandRef={mockSetLandRef}
        setColliderRef={mockSetColliderRef}
        startZoneRef={mockStartZoneRef}
        endZoneRef={mockEndZoneRef}
        onGameStart={mockOnGameStart}
        onGameOver={mockOnGameOver}
        setCorrectPath={mockSetCorrectPath}
      />,
    );
  });

  it("TutorialStageLand가 정상적으로 렌더링 되어야 한다.", () => {
    render(<TutorialStageLand setLandRef={mockSetLandRef} />);
  });
});
