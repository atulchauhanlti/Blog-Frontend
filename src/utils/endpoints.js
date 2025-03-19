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
    updatePost: "/Posts/{id}",
    deletePost: "/Posts/{id}", 
    getPostsByCategory: "/Posts/category/{category}",
    getPostsBySlug: "/Posts/slug/{slug}",
    getPostsByTag: "/Posts/tag", 
    getPostsByUser: "/Posts/user", 
    getPostById: "/Posts/{id}",
  },
  categories: {
    getCategories: "/Categories", 
    addCategory: "/Categories",
    getCategoryById: "/Categories/{id}",
    updateCategory: "/Categories/{id}",
    deleteCategory: "/Categories/{id}",
  },
  tags: {
    getTags: "/Tags", 
    addTag: "/Tags", 
    getTagById: "/Tags", 
    updateTag: "/Tags", 
    deleteTag: "/Tags", 
  },
};
