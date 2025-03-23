import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import BreedsList from "../BreedsList";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import breedReducer from "@/store/breedsSlice";

// mock store para pruebas
const createMockStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      breeds: breedReducer,
    },
    preloadedState: {
      breeds: {
        breeds: ["labrador", "poodle", "bulldog"],
        imagesCount: {},
        loading: false,
        ...initialState,
      },
    },
  });
};

describe("BreedsList", () => {
  test("renderiza la lista de razas correctamente", () => {
    const store = createMockStore();

    render(
      <Provider store={store}>
        <BreedsList />
      </Provider>
    );

    // verificar que todas las razas se muestran
    expect(screen.getByText("Labrador")).toBeInTheDocument();
    expect(screen.getByText("Poodle")).toBeInTheDocument();
    expect(screen.getByText("Bulldog")).toBeInTheDocument();
  });

  test("filtra las razas al buscar", () => {
    const store = createMockStore();

    render(
      <Provider store={store}>
        <BreedsList />
      </Provider>
    );

    // buscar una raza específica
    const searchInput = screen.getByPlaceholderText("Search");
    fireEvent.change(searchInput, { target: { value: "lab" } });

    // verificar que solo se muestra la raza filtrada
    expect(screen.getByText("Labrador")).toBeInTheDocument();
    expect(screen.queryByText("Poodle")).not.toBeInTheDocument();
    expect(screen.queryByText("Bulldog")).not.toBeInTheDocument();
  });
});
