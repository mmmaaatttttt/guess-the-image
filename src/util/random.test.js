import { randomIntBetween } from "./random";

describe("random tests", () => {
  describe("randomIntBetween", () => {
    it("throws an error if max is smaller than min", () => {
      expect(() => {
        randomIntBetween(10, 5);
      }).toThrow("min (10) must be less than or equal to max (5).");
    });

    it("gives a random value between min and max", () => {
      jest
        .spyOn(Math, "random")
        .mockReturnValueOnce(0.25)
        .mockReturnValueOnce(0.5);
      expect(randomIntBetween()).toEqual(2);
      expect(randomIntBetween(10, 100)).toEqual(55);
      jest.restoreAllMocks();
    });
  });
});
