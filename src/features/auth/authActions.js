import { createAsyncThunk } from "@reduxjs/toolkit";
import Auth from "../../utils/auth";
import API from "../../utils/calls";
import { api } from "../../utils/endpoints";

export const loginUser = createAsyncThunk(api.auth.login, async (credentials, thunkAPI) => {
  try {
    const response = await API.postRequest(api.auth.login, credentials); // Use API utility
    const { token } = response.data;

    // Save token to cookies/local storage
    Auth.authenticateUser(token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || "Something went wrong");
  }
});
