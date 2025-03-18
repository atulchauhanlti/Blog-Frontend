// Base URL for the API
export const BASE_URL = "http://localhost:44301/api"; 

// Updated API structure
export const api = {
  auth: {
    login: "/auth/login",
    logout: "/auth/signup",
    roles: "/users/roles",
  },
  posts: {
    addPost: "/Posts/create", 
    getPosts: "/Posts/All", 
    updatePost: "/Posts/slug",
    deletePost: "/Posts/1", 
    getPostsByCategory: "/Posts/category",
    getPostsByTag: "/Posts/tag", 
    getPostsByUser: "/Posts/user", 
    getPostBySlug: "/Posts/slug",
  },
  categories: {
    getCategories: "/Categories", 
    addCategory: "/Categories",
    getCategoryById: "/Categories",
    updateCategory: "/Categories",
    deleteCategory: "/Categories",
  },
  tags: {
    getTags: "/Tags", 
    addTag: "/Tags", 
    getTagById: "/Tags", 
    updateTag: "/Tags", 
    deleteTag: "/Tags", 
  },
};
