import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/calls";
import { api } from "../../utils/endpoints";

// Thunk to fetch tags
export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const response = await API.getSecureRequests(api.tags.getTags);
  return response.data;
});

// Thunk to add a new tag
export const createTag = createAsyncThunk("tags/createTag", async (newTag) => {
  const response = await API.postSecureRequest(api.tags.addTag, newTag);
  return response.data;
});

const tagsSlice = createSlice({
  name: "tags",
  initialState: {
    tags: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createTag.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createTag.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tags.push(action.payload); // Add the new tag to the state
      })
      .addCase(createTag.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default tagsSlice.reducer;
