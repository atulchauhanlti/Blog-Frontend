import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authActions";
import Auth from "../../utils/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    // Logout action
    logout(state) {
      state.user = null;
      state.token = null;
      Auth.deauthenticateUser(); // Clear token from cookies
    },
    setToken(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user || null; // Optional: If user data is provided
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;

        Auth.authenticateUser(action.payload.token); // Save token to cookies
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, setToken } = authSlice.actions;

export default authSlice.reducer;
