import deepFreeze from "deep-freeze";

describe("color Reducer", () => {
  it("ADD_COLOR success", () => {
    expect(5).toEqual(5);
  });

  it("RATE_COLOR success", () => {
    let state = {
      id: 0
    };

    deepFreeze(state);

    // state.id = 1;

    expect(state).toEqual({
      id: 0
    });
  });

  it("FOO_COLOR success");
});
