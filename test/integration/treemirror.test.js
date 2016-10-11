describe("TreeMirror", () => {
  it("exists in window context", () => {
    expect(typeof window.TreeMirror === "function").toBe(true);
  });
});

describe("TreeMirror", () => {
  it("initializes correctly", () => {
    var mirror = new window.TreeMirror();
    expect(typeof mirror == "object").toBe(true);
  });
});
