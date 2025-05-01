import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/data/dataSlice";
import imageReducer from "./features/images/imagesSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      data: dataReducer,
      image: imageReducer,
    },
  });
};
