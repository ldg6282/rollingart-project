import findGeometries from "../utils/findGeometries";

describe("findGeometries", () => {
  it("mesh와 line objects를 찾을 수 있어야 한다.", () => {
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

  it("올바른 geometries가 없을 때에는 빈 배열을 반환해야 한다.", () => {
    const mockObject = {
      children: [{ children: [] }, { children: [{ children: [] }] }],
    };

    const result = findGeometries(mockObject);

    expect(result).toHaveLength(0);
  });
});
