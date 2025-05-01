import { createSlice } from "@reduxjs/toolkit";

export const imagesSlice = createSlice({
  name: "images",
  initialState: {
    images: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchImagesStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchImagesSuccess(state, action) {
      state.images = action.payload;
      state.isLoading = false;
    },
    fetchImagesFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { fetchImagesStart, fetchImagesSuccess, fetchImagesFailure } =
  imagesSlice.actions;
export default imagesSlice.reducer;
