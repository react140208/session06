import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginForm } from "./Login";
import axios from "axios";

interface AuthStore {
  token: string;
  email: string;
  loading: boolean;
}

const initialState: AuthStore = {
  token: "", //TODO:
  email: "",
  loading: false,
};

export const loginAction = createAsyncThunk(
  "auth/login",
  async (loginForm: LoginForm) => {
    const resp = await axios.post(
      "http://localhost:3010/auth/login",
      loginForm
    );
    return { token: resp.data.token, email: loginForm.email };
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.email = action.payload.email;
    });
    builder.addCase(loginAction.rejected, (state) => {
      state.loading = false;
      state.token = "";
      state.email = "";
    });
  },
});

export default authSlice.reducer;
