import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchDataStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
    fetchDataFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  dataSlice.actions;
export default dataSlice.reducer;
