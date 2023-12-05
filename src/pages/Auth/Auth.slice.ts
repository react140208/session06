import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginForm } from "./Login";

interface AuthStore {
  token: string;
  email: string;
}

const initialState: AuthStore = {
  token: "", //TODO:
  email: "",
};

export const login = createAsyncThunk(
  "auth/login",
  async (loginForm: LoginForm) => {}
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
