import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMultidataAction = createAsyncThunk(
  "fetchMultidata",
  // extraInfo: dispatch action时携带的参数
  async (extraInfo, store) => {
    const res = await axios.get("");
    return res.data;
  }
);
const catagorySlice = createSlice({
  name: "catagory",
  initialState: {
    banners: [],
    recommends: [],
  },
  reducers: {
    changeBanners: (state, { payload }) => {
      state.banners = payload;
    },
    changeRecommends: (state, { payload }) => {
      state.recommends = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMultidataAction.fulfilled, (state, { payload }) => {
      state.banners = payload.data.banner.list;
      state.recommends = payload.data.recommend.list;
    });
  },
});

export const { changeBanners, changeRecommends } = catagorySlice.actions;
export default catagorySlice.reducer;

