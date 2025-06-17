import httpService from "@/api/httpService";

const apiService = {
  // Upload video
  postVideo: (idVideo, title, base64) => {
    return httpService.post("/api/video", {
      idVideo,
      title,
      base64,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  },

  // Delete video by ID
  deleteVideo: (videoId) => {
    return httpService.delete(`/api/video`, {
      params: { videoId },
    });
  },

  // Get video by ID
  getVideoById: (videoId) => {
    return httpService.get(`/api/video/${videoId}`);
  },

  // Get all video titles
  getVideoTitles: () => {
    return httpService.get("/api/video-titles");
  },
};

export default apiService;
