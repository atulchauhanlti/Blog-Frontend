import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/calls";
import { api } from "../../utils/endpoints";

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
  const response = await API.getSecureRequests(api.categories.getCategories);
  return response.data;
});

export const createCategory = createAsyncThunk("categories/createCategory", async (newCategory) => {
  const response = await API.postSecureRequest(api.categories.addCategory, newCategory);
  return response.data;
});

export const editCategory = createAsyncThunk("categories/editCategory", async ({ id, updatedData }) => {
  const endpoint = api.categories.updateCategory.replace("{id}", id); 
  const response = await API.putSecureRequest(endpoint, updatedData);
  return response.data;
});

export const deleteCategory = createAsyncThunk("categories/deleteCategory", async (id) => {
  const endpoint = api.categories.deleteCategory.replace("{id}", id); 
  await API.deleteSecureRequest(endpoint);
  return id;
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories.push(action.payload); 
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(editCategory.fulfilled, (state, action) => {
        state.categories = state.categories.map((category) =>
          category.id === action.payload.id ? action.payload : category
        );
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter((category) => category.id !== action.payload);
      });
  },
});

export default categoriesSlice.reducer;
