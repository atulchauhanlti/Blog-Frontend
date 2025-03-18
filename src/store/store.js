import { configureStore } from "@reduxjs/toolkit";
import authReducer, { setToken } from "../features/auth/authSlice";
import Auth from "../utils/auth";
import postsReducer from "../features/posts/postsSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import tagsReducer from "../features/tags/tagsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    categories: categoriesReducer,
    tags: tagsReducer,
  },
});

const token = Auth.getToken();
if (token) {
  store.dispatch(setToken({ token, user: null })); 
}

export default store;
