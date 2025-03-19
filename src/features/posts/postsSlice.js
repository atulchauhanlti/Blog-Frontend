import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/calls";
import { api } from "../../utils/endpoints";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (_, { rejectWithValue }) => {
  try {
    const response = await API.getSecureRequests(api.posts.getPosts);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || "Failed to fetch posts");
  }
});

export const fetchPostsByCategory = createAsyncThunk(
  "posts/fetchPostsByCategory",
  async (categoryName, { rejectWithValue }) => {
    try {
      const url = `${api.posts.getPostsByCategory.replace("{category}", categoryName)}`;
      const response = await API.getRequests(url);

      if (!response || !response.data) {
        throw new Error("Invalid API response");
      }

      return { categoryName, posts: response.data }; 
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch posts by category");
    }
  }
);

export const createPost = createAsyncThunk("posts/createPost", async (postData, { rejectWithValue }) => {
  try {
    const formData = new FormData();
    formData.append("title", postData.title);
    formData.append("content", postData.content);
    formData.append("categoryId", postData.categoryId);
    formData.append("tagIds", postData.tagIds);
    formData.append("imageFile", postData.imageFile);

    const response = await API.postSecureFormDataRequest(api.posts.addPost, formData);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || "Failed to create post");
  }
});

export const deletePost = createAsyncThunk("posts/deletePost", async (postId, { rejectWithValue }) => {
  try {
    await API.deleteSecureRequest(`${api.posts.deletePost}/${postId}`);
    return postId;
  } catch (err) {
    return rejectWithValue(err.response?.data || "Failed to delete post");
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [], 
    businessPosts: [],
    freshPosts: [],
    travelPosts: [],
    politicsPosts: [],
    categoryPosts: [], 
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
        state.error = action.payload;
      });

    builder
      .addCase(fetchPostsByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostsByCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { categoryName, posts } = action.payload;

        switch (categoryName) {
          case "Business":
            state.businessPosts = posts;
            break;
          case "Fresh":
            state.freshPosts = posts;
            break;
          case "Travel":
            state.travelPosts = posts;
            break;
          case "Politics":
            state.politicsPosts = posts;
            break;
          default:
            state.categoryPosts = posts;
            break;
        }
      })
      .addCase(fetchPostsByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

    builder
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

    builder
      .addCase(deletePost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetCreateStatus } = postsSlice.actions;
export default postsSlice.reducer;
