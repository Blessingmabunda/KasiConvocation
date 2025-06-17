import { defineStore } from "pinia";
import { ref, computed } from "vue";
import apiService from "@/api/Videos/Videos"; // Importing the video API service
import Swal from 'sweetalert2';  // For SweetAlert

export const useVideoStore = defineStore("videoStore", () => {
  // Define state
  const videos = ref([]);
  const currentVideo = ref(null);
  const loading = ref(false);
  const error = ref(null);

  // Action to fetch all video titles
  const fetchVideoTitles = async () => {
    loading.value = true;
    error.value = null; // Reset error state
    
    try {
      const response = await apiService.getVideoTitles();
      console.log("API Response:", response); // Debug log
      
      // Extract the data array from the Axios response
      if (response && response.data && Array.isArray(response.data)) {
        videos.value = [...response.data]; // Use response.data instead of response
        console.log("Videos set to:", videos.value);
      } else {
        console.error("API response.data is not an array:", response);
        videos.value = []; // Set to empty array if response is not as expected
      }
      
      return videos.value; // Return the reactive reference
    } catch (err) {
      console.error("Error in fetchVideoTitles:", err);
      error.value = err.message || "Failed to fetch video titles.";
      videos.value = []; // Reset to empty array on error
      throw err;
    } finally {
      loading.value = false;
    }
  };

  // Action to get video by ID
  const getVideoById = async (videoId) => {
    loading.value = true;
    error.value = null;
    currentVideo.value = null;
    
    try {
      const response = await apiService.getVideoById(videoId);
      console.log("Video details response:", response);
      
      if (response && response.data) {
        currentVideo.value = response.data;
        return currentVideo.value;
      } else {
        throw new Error("Video not found or invalid response format");
      }
    } catch (err) {
      console.error("Error in getVideoById:", err);
      error.value = err.message || "Failed to fetch video details.";
      Swal.fire({
        title: 'Error!',
        text: error.value,
        icon: 'error',
        confirmButtonText: 'OK',
      });
      throw err;
    } finally {
      loading.value = false;
    }
  };

  // Action to upload a video
  const uploadVideo = async (idVideo, title, base64) => {
    loading.value = true;
    try {
      const response = await apiService.postVideo(idVideo, title, base64);
      Swal.fire({
        title: 'Success!',
        text: 'Video uploaded successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      await fetchVideoTitles();  // Refresh the video list after upload
    } catch (err) {
      error.value = err.message || "Failed to upload video.";
      Swal.fire({
        title: 'Error!',
        text: error.value,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    } finally {
      loading.value = false;
    }
  };

  // Action to delete a video by ID
  const deleteVideo = async (videoId) => {
    loading.value = true;
    try {
      await apiService.deleteVideo(videoId);
      Swal.fire({
        title: 'Deleted!',
        text: 'Video has been deleted.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      await fetchVideoTitles();  // Refresh the video list after deletion
      
      // Reset currentVideo if the deleted video was the current one
      if (currentVideo.value && currentVideo.value.id === videoId) {
        currentVideo.value = null;
      }
    } catch (err) {
      error.value = err.message || "Failed to delete video.";
      Swal.fire({
        title: 'Error!',
        text: error.value,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    } finally {
      loading.value = false;
    }
  };

  // Computed property to check if videos are available
  const hasVideos = computed(() => {
    return videos.value && videos.value.length > 0;
  });

  // Computed property for video count
  const videoCount = computed(() => videos.value.length);

  return {
    videos,
    currentVideo,
    loading,
    error,
    hasVideos,
    videoCount,
    fetchVideoTitles,
    getVideoById,
    uploadVideo,
    deleteVideo,
  };
});