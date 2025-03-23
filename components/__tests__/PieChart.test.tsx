import { render, screen } from "@testing-library/react";
import DogPieChart from "../PieChart";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import breedReducer from "@/store/breedsSlice";

// mock de recharts para evitar problemas con SVG en tests
jest.mock("recharts", () => {
  const OriginalModule = jest.requireActual("recharts");

  return {
    ...OriginalModule,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
  };
});

const createMockStore = (imagesCount = {}) => {
  return configureStore({
    reducer: {
      breeds: breedReducer,
    },
    preloadedState: {
      breeds: {
        breeds: [],
        imagesCount,
        loading: false,
      },
    },
  });
};

describe("DogPieChart", () => {
  test("muestra mensaje de carga cuando no hay datos", () => {
    const store = createMockStore();

    render(
      <Provider store={store}>
        <DogPieChart />
      </Provider>
    );

    expect(screen.getByText("Loading data...")).toBeInTheDocument();
  });

  test("muestra información cuando hay datos", () => {
    const imagesCount = {
      labrador: 50,
      poodle: 30,
      bulldog: 20,
    };

    const store = createMockStore(imagesCount);

    render(
      <Provider store={store}>
        <DogPieChart />
      </Provider>
    );

    expect(
      screen.getByText("Total of images analyzed: 100")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Showing top 10 breeds out of 3 total breeds/)
    ).toBeInTheDocument();
  });
});
