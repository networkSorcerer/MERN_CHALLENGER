import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice.jsx";
import centerSlice from "./center/centerSlice.jsx";
import classSlice from "./class/classSlice.jsx";
const store = configureStore({
  reducer: {
    user: userSlice,
    center: centerSlice,
    class: classSlice,
  },
});

export default store;
