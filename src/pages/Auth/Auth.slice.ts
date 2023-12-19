import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginForm } from "./Login";
import { appApi } from "../../core/appApi";
import { RegisterForm } from "./Register";

interface AuthStore {
  token: string;
  email: string;
  loading: boolean;
}

const token = localStorage.getItem("token") || "";
const email = localStorage.getItem("email") || "";
const initialState: AuthStore = {
  token: token,
  email: email,
  loading: false,
};

export const loginAction = createAsyncThunk(
  "auth/login",
  async (loginForm: LoginForm) => {
    const resp = await appApi.post("auth/login", loginForm);
    return { token: resp.data.token, email: loginForm.email };
  }
);

export const registerAction = createAsyncThunk(
  "auth/register",
  async (form: RegisterForm) => {
    const resp = await appApi.post("auth/register", form);
    return { token: resp.data.token, email: form.email };
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.email = "";
      state.token = "";
      localStorage.setItem("token", "");
      localStorage.setItem("email", "");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.email = action.payload.email;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("email", action.payload.email);
    });
    builder.addCase(loginAction.rejected, (state) => {
      state.loading = false;
      state.token = "";
      state.email = "";
    });

    builder.addCase(registerAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerAction.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.email = action.payload.email;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("email", action.payload.email);
    });
    builder.addCase(registerAction.rejected, (state) => {
      state.loading = false;
      state.token = "";
      state.email = "";
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
