import { configureStore } from "@reduxjs/toolkit";
import HolidaySlice from "./HolidaySlice";
import TextSlice from "./TextSlice";


export const store = configureStore({
    reducer:{
        holiday:HolidaySlice,
        text:TextSlice
    }
})