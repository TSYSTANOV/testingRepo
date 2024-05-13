import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";

export const fetchHolidays = createAsyncThunk("holiday/fetch", async () => {
  const data = await fetch(URI_API)
    .then((data) => data.json())
    .then((data) => data);
  return data;
});

const HolidaySlice = createSlice({
  name: "holiday",
  initialState: {
    holidays: {},
    holiday: "",
    loading: "",
  },
  reducers: {
    setHoliday: (state, action) => {
      state.holiday = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHolidays.pending, (state, action) => {
      state.loading = "loading";
    });
    builder.addCase(fetchHolidays.fulfilled, (state, action) => {
      state.loading = "success";
      state.holidays = action.payload;
    });
    builder.addCase(fetchHolidays.rejected, (state, action) => {
      state.loading = "failed";
    });
  },
});
export const { setHoliday } = HolidaySlice.actions;
export default HolidaySlice.reducer;
