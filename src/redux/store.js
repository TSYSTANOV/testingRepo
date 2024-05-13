import { configureStore } from "@reduxjs/toolkit";
import HolidaySlice from "./HolidaySlice";
import TextSlice from "./TextSlice";
import imageSlice from "./imageSlice";

export const store = configureStore({
  reducer: {
    holiday: HolidaySlice,
    text: TextSlice,
    image: imageSlice,
  },
});
