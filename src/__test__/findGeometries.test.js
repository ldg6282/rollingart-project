import findGeometries from "../utils/findGeometries";

describe("findGeometries", () => {
  it("should find mesh and line objects", () => {
    const mockMesh = { isMesh: true };
    const mockLine = { isLine: true };
    const mockObject = {
      children: [mockMesh, { children: [mockLine] }, { children: [{ children: [mockMesh] }] }],
    };

    const result = findGeometries(mockObject);

    expect(result).toHaveLength(3);
    expect(result).toContain(mockMesh);
    expect(result).toContain(mockLine);
  });

  it("should return an empty array for objects with no geometries", () => {
    const mockObject = {
      children: [{ children: [] }, { children: [{ children: [] }] }],
    };

    const result = findGeometries(mockObject);

    expect(result).toHaveLength(0);
  });
});
