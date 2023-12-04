import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    name: "aa",
  },
  reducers: {
    changeNameAction: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const { changeNameAction } = profileSlice.actions;
export default profileSlice.reducer;
