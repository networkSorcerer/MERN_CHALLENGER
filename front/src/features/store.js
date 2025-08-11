import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    user: userSlicce,
  },
});

export default store;
