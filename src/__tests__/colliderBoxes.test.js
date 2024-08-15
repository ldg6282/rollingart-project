import colliderBoxes from "../utils/colliderBoxes";

describe("colliderBoxes", () => {
  it("collider boxes가 올바른 수만큼 존재해야 한다.", () => {
    expect(colliderBoxes).toHaveLength(5);
  });

  it("각 collider boxes마다 올바른 속성을 가지고 있어야 한다.", () => {
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

  it("첫 번째 collider box가 올바른 값을 가지고 있어야 한다.", () => {
    const firstBox = colliderBoxes[0];
    expect(firstBox.id).toBe("collider1");
    expect(firstBox.size).toEqual([70, 50, 5]);
    expect(firstBox.position).toEqual([-37, 20, 135]);
    expect(firstBox.rotation).toEqual([0, Math.PI / 2.1, 0]);
  });
});
