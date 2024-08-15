import colliderBoxes from "../utils/colliderBoxes";

describe("colliderBoxes", () => {
  it("should have the correct number of collider boxes", () => {
    expect(colliderBoxes).toHaveLength(5);
  });

  it("should have correct properties for each collider box", () => {
    colliderBoxes.forEach((box) => {
      expect(box).toHaveProperty("id");
      expect(box).toHaveProperty("size");
      expect(box).toHaveProperty("position");
      expect(box).toHaveProperty("rotation");
      expect(box.size).toHaveLength(3);
      expect(box.position).toHaveLength(3);
      expect(box.rotation).toHaveLength(3);
    });
  });

  it("should have correct values for the first collider box", () => {
    const firstBox = colliderBoxes[0];
    expect(firstBox.id).toBe("collider1");
    expect(firstBox.size).toEqual([70, 50, 5]);
    expect(firstBox.position).toEqual([-37, 20, 135]);
    expect(firstBox.rotation).toEqual([0, Math.PI / 2.1, 0]);
  });
});
