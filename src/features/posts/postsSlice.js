import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/calls";
import { api } from "../../utils/endpoints";

// Thunk to fetch posts
export const fetchPosts = createAsyncThunk(api.posts.getPosts, async () => {
  const response = await API.getSecureRequests(api.posts.getPosts);
  return response.data;
});

// Thunk to create a new post
export const createPost = createAsyncThunk(
    "posts/createPost",
    async (postData, { rejectWithValue }) => {
      try {
        // Initialize FormData
        const formData = new FormData();
        formData.append("title", postData.title);
        formData.append("content", postData.content);
        formData.append("categoryId", postData.categoryId);
        formData.append("tagIds", postData.tagIds); // Convert array to JSON string
        formData.append("imageFile", postData.imageFile);
  
        // Use the secure form data request
        const response = await API.postSecureFormDataRequest(api.posts.addPost, formData);
        return response.data; // Return the response data
      } catch (err) {
        return rejectWithValue(err.response.data || "Failed to create post");
      }
    }
  );

// Thunk to delete a post
export const deletePost = createAsyncThunk("posts/deletePost", async (postId, { rejectWithValue }) => {
  try {
    await API.deleteSecureRequest(`${api.posts.deletePost}/${postId}`);
    return postId;
  } catch (err) {
    return rejectWithValue(err.response.data || "Failed to delete post");
  }
});

const postsSlice = createSlice({
    name: "posts",
    initialState: {
      posts: [],
      status: "idle",
      error: null,
    },
    reducers: {
      resetCreateStatus: (state) => {
        state.status = "idle";
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchPosts.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.posts = action.payload;
        })
        .addCase(fetchPosts.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        })
        .addCase(createPost.pending, (state) => {
          state.status = "loading";
        })
        .addCase(createPost.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.posts.push(action.payload);
        })
        .addCase(createPost.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload;
        });
    },
  });
  
  export const { resetCreateStatus } = postsSlice.actions;
  export default postsSlice.reducer;
  
