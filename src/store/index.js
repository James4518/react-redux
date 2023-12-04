import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "./features/home";
import profileReducer from "./features/profile";
import catagoryReducer from "./features/catagory";

const store = configureStore({
  reducer: {
    home: homeReducer,
    profile: profileReducer,
    catagory: catagoryReducer,
  },
});

export default store;

