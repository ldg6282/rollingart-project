import { render } from "@testing-library/react-native";
import EventZone from "../components/EventZone/EventZone";

jest.mock("@react-three/drei", () => {
  const React = require("react");

  const Box = React.forwardRef(({ args, position, rotation, children }, ref) => (
    <mock-Box ref={ref} args={args} position={position} rotation={rotation} testID="event-zone">
      {children}
    </mock-Box>
  ));
  Box.displayName = "Box";

  return {
    Box,
  };
});

describe("EventZone", () => {
  const React = require("react");

  const defaultProps = {
    zoneRef: React.createRef(),
    position: [0, 0, 0],
    boxColor: "red",
    size: [1, 1, 1],
    rotation: [0, 0, 0],
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<EventZone {...defaultProps} />);
    const eventZone = getByTestId("event-zone");
    expect(eventZone).toBeTruthy();
  });

  it("applies correct props", () => {
    const { getByTestId } = render(<EventZone {...defaultProps} />);
    const eventZone = getByTestId("event-zone");

    expect(eventZone.props.args).toEqual(defaultProps.size);
    expect(eventZone.props.position).toEqual(defaultProps.position);
    expect(eventZone.props.rotation).toEqual(defaultProps.rotation);
  });

  it("contains meshStandardMaterial with correct props", () => {
    const { getByTestId } = render(<EventZone {...defaultProps} />);
    const eventZone = getByTestId("event-zone");

    const meshStandardMaterial = eventZone.props.children;
    expect(meshStandardMaterial.type).toBe("meshStandardMaterial");
    expect(meshStandardMaterial.props.args[0]).toEqual({
      color: defaultProps.boxColor,
      transparent: true,
      opacity: 0,
    });
  });
});
