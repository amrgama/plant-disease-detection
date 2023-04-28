import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";
import { notifyError, notifySuccess } from "../../utils/helpers";

const initialState = {
  user: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  statusLoading: false,
  isFirstLogin: true,
  message: "",
};

export const getStatus = createAsyncThunk("/auth/status", async (thunkAPI) => {
  try {
    const res = await userService.getStatus();
    notifySuccess(`Welcome back ${res.firstname}`);
    return res;
  } catch (error) {
    notifyError(error?.response?.data?.message);
    return thunkAPI.rejectWithValue(error?.response?.data?.message);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset(state) {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStatus.pending, (state) => {
        state.statusLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(getStatus.fulfilled, (state, action) => {
        state.statusLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Login Success";
        state.isFirstLogin = false;
        state.user = action.payload;
      })
      .addCase(getStatus.rejected, (state, action) => {
        state.statusLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
