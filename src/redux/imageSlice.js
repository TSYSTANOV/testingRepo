import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";

export const fetchImages = createAsyncThunk("image/fetch", async (holiday) => {
  const data = await fetch(URI_API + "image/" + holiday)
    .then((data) => data.json())
    .then((data) => data);
  return data;
});

const imageSlice = createSlice({
  name: "image",
  initialState: {
    image: "",
    loading: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImages.pending, (state, action) => {
      state.loading = "loading";
    });
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.loading = "success";
      state.image = action.payload;
    });
    builder.addCase(fetchImages.rejected, (state, action) => {
      state.loading = "failed";
    });
  },
});

export default imageSlice.reducer;
