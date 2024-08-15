import React from "react";
import { render } from "@testing-library/react-native";

import ExtractPathVertices from "../hooks/ExtractPathVertices";

jest.mock("../utils/findGeometries", () => jest.fn());

jest.mock("three", () => ({
  Vector3: jest.fn().mockImplementation(() => {
    let x = 0;
    let z = 0;

    return {
      fromBufferAttribute: jest.fn().mockImplementation(function (attr, index) {
        this.x = attr.array[index * 3];
        this.z = attr.array[index * 3 + 2];
      }),
      get x() {
        return x;
      },
      set x(value) {
        x = value;
      },
      get z() {
        return z;
      },
      set z(value) {
        z = value;
      },
    };
  }),
}));

describe("ExtractPathVertices", () => {
  it("올바른 경로에서는 버텍스 좌표를 수집해야 한다.", () => {
    const mockModel = {
      getObjectByName: jest.fn().mockReturnValue({
        name: "correctPath",
      }),
    };

    const mockGeometry = {
      getAttribute: jest.fn().mockReturnValue({
        count: 2,
        array: new Float32Array([1, 0, 3, 2, 0, 4]),
        itemSize: 3,
      }),
    };

    const mockGeometryObject = {
      geometry: mockGeometry,
      localToWorld: jest.fn((v) => v),
    };

    const findGeometries = require("../utils/findGeometries");
    findGeometries.mockReturnValue([mockGeometryObject]);

    const mockSetCorrectPath = jest.fn();

    render(<ExtractPathVertices model={mockModel} setCorrectPath={mockSetCorrectPath} />);

    expect(mockModel.getObjectByName).toHaveBeenCalledWith("correctPath");
    expect(findGeometries).toHaveBeenCalled();
    expect(mockSetCorrectPath).toHaveBeenCalledWith([
      { x: 1, z: 3 },
      { x: 2, z: 4 },
    ]);
  });

  it("올바른 경로가 아닐 때에는 버텍스 좌표를 수집해서는 안 된다.", () => {
    const mockModel = {
      getObjectByName: jest.fn().mockReturnValue(null),
    };

    const mockSetCorrectPath = jest.fn();

    render(<ExtractPathVertices model={mockModel} setCorrectPath={mockSetCorrectPath} />);

    expect(mockModel.getObjectByName).toHaveBeenCalledWith("correctPath");
    expect(mockSetCorrectPath).not.toHaveBeenCalled();
  });
});
