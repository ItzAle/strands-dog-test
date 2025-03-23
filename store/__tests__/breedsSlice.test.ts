import reducer, { fetchBreeds, fetchImagesCount } from "../breedsSlice";

// mock de fetch para las pruebas
global.fetch = jest.fn();

describe("breedsSlice", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe manejar el estado inicial", () => {
    const initialState = reducer(undefined, { type: "unknown" });
    expect(initialState).toEqual({
      breeds: [],
      imagesCount: {},
      loading: false,
    });
  });

  test("debe manejar fetchBreeds.fulfilled", () => {
    const breeds = ["labrador", "poodle", "bulldog"];
    const action = { type: fetchBreeds.fulfilled.type, payload: breeds };
    const state = reducer(
      { breeds: [], imagesCount: {}, loading: true },
      action
    );

    expect(state).toEqual({
      breeds,
      imagesCount: {},
      loading: false,
    });
  });

  test("debe manejar fetchImagesCount.fulfilled", () => {
    const imagesCount = { labrador: 50, poodle: 30 };
    const action = {
      type: fetchImagesCount.fulfilled.type,
      payload: imagesCount,
    };
    const state = reducer(
      { breeds: ["labrador", "poodle"], imagesCount: {}, loading: true },
      action
    );

    expect(state).toEqual({
      breeds: ["labrador", "poodle"],
      imagesCount,
      loading: false,
    });
  });
});
