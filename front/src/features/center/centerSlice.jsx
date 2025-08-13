import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const addCenter = createAsyncThunk(
  "center/addCenter",
  async (query, { rejectWithValue }) => {
    try {
      const response = await api.post("center/", query);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.error);
    }
  }
);

const centerSlice = createSlice({
  name: "center",
  initialState: {
    centerList: [],
    selectedCenter: null,
    loading: false,
    error: "",
    success: false,
  },
  reducer: {
    setSelectCenter: (state, action) => {
      state.selectedCenter = action.payload;
    },
    setFilteredList: (state, action) => {
      state.filteredList = action.payload;
    },
    clearError: (state) => {
      state.error = "";
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCenter.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addCenter.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.success = true;
      })
      .addCase(addCenter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { setSelectedProduct, setFilteredList, clearError } =
  centerSlice.actions;
export default centerSlice.reducer;
