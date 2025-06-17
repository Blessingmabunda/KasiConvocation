import httpService from  "@/api/httpService";

const apiService = {
  // Add blog title
  postBlogTitle: (name) => {
    // Ensure name is a string and not an object
    return httpService.post("/api/blog-title", { name: name });
  },
  
  // Get blog titles
  getBlogTitle: () => {
    return httpService.get("/api/blog-title");
  },

  // Post blog content
  postBlogContent: (title, blogTitleId, message) => {
    const data = {
      title,
      blogTitleId,
      message,
    };
    return httpService.post("/api/blog-content", data);
  },

  // Get blog content by blogTitleId
  getBlogContent: (blogTitleId) => {
    return httpService.get(`/api/blog-content/${blogTitleId}`);
  },

  // Delete blog content by blogContentId
  deleteBlogContent: (blogContentId) => {
    return httpService.delete(`/api/blog-content/${blogContentId}`);
  },

  // Delete blog title by blogTitleId
  deleteBlogTitle: (blogTitleId) => {
    return httpService.delete(`/api/blog-title/${blogTitleId}`);
  },
};

export default apiService;
