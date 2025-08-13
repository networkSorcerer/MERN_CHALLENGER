import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const addClass = createAsyncThunk(
  "class/addClass",
  async (query, { rejectWithValue }) => {
    try {
      const response = await api.post("class/", query);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.error);
    }
  }
);

const classSlice = createSlice({
  name: "class",
  initialState: {
    centerList: [],
    selectedClass: null,
    loading: false,
    error: "",
    success: false,
  },
  reducer: {
    setSelectClass: (state, action) => {
      state.selectedClass = action.payload;
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
      .addCase(addClass.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addClass.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.success = true;
      })
      .addCase(addClass.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { setSelectClass, setFilteredList, clearError } =
  classSlice.actions;
export default classSlice.reducer;
