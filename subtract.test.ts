/**
 * Unit tests for substract()
 * Loads the compiled substract.js so window.substract is available (same as in the browser).
 */
declare global {
    interface Window {
      substract: (a: number, b: number) => number;
    }
  }
  
  beforeAll(() => {
    // Load the built script that attaches substract to window (non-module)
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("./substract.js");
  });
  
  describe("substract", () => {
    it("substracts two positive numbers", () => {
      expect(window.substract(8, 6)).toBe(2);
    });
  
    it("substracts negative numbers and positive numbers", () => {
      expect(window.substract(-5, 4)).toBe(-9);
    });
  
    it("returns the first number when the second is 0", () => {
      expect(window.substract(10, 0)).toBe(10);
    });
  });
  
  export {};
  