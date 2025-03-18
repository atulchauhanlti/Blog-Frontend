import { configureStore } from "@reduxjs/toolkit";
import authReducer, { setToken } from "../features/auth/authSlice";
import Auth from "../utils/auth";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

const token = Auth.getToken();
if (token) {
  store.dispatch(setToken({ token, user: null })); // Use the `setToken` action
}

export default store;
