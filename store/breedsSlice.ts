import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface BreedState {
  breeds: string[];
  imagesCount: Record<string, number>;
  loading: boolean;
  error?: string;
}

const initialState: BreedState = {
  breeds: [],
  imagesCount: {},
  loading: false,
};

// obtener todas las razas
export const fetchBreeds = createAsyncThunk("breeds/fetchBreeds", async () => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();
  return Object.keys(data.message);
});

// contamos las imagenes de cada raza
export const fetchImagesCount = createAsyncThunk(
  "breeds/fetchImagesCount",
  async (breeds: string[]) => {
    const countMap: Record<string, number> = {};

    // para cada raza, obtener sus imagenes y contar cuantas hay
    const promises = breeds.map(async (breed) => {
      try {
        const response = await fetch(
          `https://dog.ceo/api/breed/${breed}/images`
        );

        if (!response.ok) {
          throw new Error(
            `Error fetching images for ${breed}: ${response.status}`
          );
        }

        const data = await response.json();
        countMap[breed] = data.message.length;
      } catch (error) {
        console.error(`Error fetching images for ${breed}:`, error);
        countMap[breed] = 0; // si hay un error, se asigna 0
      }
    });

    await Promise.all(promises);
    return countMap;
  }
);

// reducer para el estado de las raza, maneja las acciones

const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreeds.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.breeds = action.payload;
        state.loading = false;
      })
      .addCase(fetchBreeds.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchImagesCount.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchImagesCount.fulfilled, (state, action) => {
        state.imagesCount = action.payload;
        state.loading = false;
      })
      .addCase(fetchImagesCount.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default breedsSlice.reducer;
