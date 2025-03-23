import { configureStore } from "@reduxjs/toolkit";
import breedReducer from "./breedsSlice";

// configuracion del store
// reducer para el estado de las razas
export const store = configureStore({
  reducer: {
    breeds: breedReducer,
  },
});

// tipos de estado y dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
