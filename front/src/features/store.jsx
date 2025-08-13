import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice.jsx";
import centerSlice from "./center/centerSlice.jsx";

const store = configureStore({
  reducer: {
    user: userSlice,
    center: centerSlice,
  },
});

export default store;
