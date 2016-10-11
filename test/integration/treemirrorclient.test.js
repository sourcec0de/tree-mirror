testAddedOrMoved = () => {
  document.body.appendChild(window.div);
}

testAttributes = () => {
  window.div.setAttribute("class", "test");
}

testRemoved = () => {
  window.div.remove();
}

describe("TreeMirrorClient", () => {
  it("exists in window context", () => {
    expect(typeof window.TreeMirrorClient === "function").toBe(true);
  });
});

describe("TreeMirrorClient", () => {

  beforeAll((done) => {
    window.div = document.createElement("div");
    window.tests = {addedOrMoved: [], attributes: [], removed: []}
    window.mirror = new TreeMirrorClient(document);

    window.mirror.mirror.applyChanged = function(removed, addedOrMoved, attributes) {

      // Test node added or moved
      if (window.tests.addedOrMoved.length == 0)
        window.tests.addedOrMoved = addedOrMoved;

      // Test attribute change
      if (window.tests.attributes.length == 0)
        window.tests.attributes = attributes;

      // Test node remove
      if (window.tests.removed.length == 0)
        window.tests.removed = removed;
    }

    // Need to be timed because of asynchronous event handling
    setTimeout(testAddedOrMoved, 100);
    setTimeout(testAttributes, 200);
    setTimeout(testRemoved, 300);
    setTimeout(done, 400);
  });

  it("initializes correctly", () => {
    expect(typeof window.mirror == "object").toBe(true);
  });

  it("reacts to DOM append child correctly", () => {
    expect(window.tests.addedOrMoved.length).toBe(1);
  });

  it("reacts to attribute change correctly", () => {
    expect(window.tests.attributes.length).toBe(1);
  });

  it("reacts to DOM remove child correctly", () => {
    expect(window.tests.removed.length).toBe(1);
  });
});
