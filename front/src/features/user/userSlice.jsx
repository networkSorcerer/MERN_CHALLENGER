import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const loginWithGoogle = createAsyncThunk(
  "user/loginWithGoogle",
  async (token, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/google", { token });
      if (response.status === 200) {
        sessionStorage.setItem("token", response.data.token);
        return response.data.user;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loginError: null,
    registrationError: null,
    success: false,
    loading: false,
  },
  reducers: {
    // 여기 꼭 reducers여야 함!
    clearErrors: (state) => {
      state.loginError = null;
      state.registrationError = null;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginWithGoogle.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.loginError = null;
        state.user = action.payload;
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.loginError = action.payload;
      });
  },
});

export const { clearErrors, clearUser } = userSlice.actions;
export default userSlice.reducer;
