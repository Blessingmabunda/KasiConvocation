import { defineStore } from "pinia";
import { ref, computed } from "vue";
import apiService from "@/api/Blogs/blogs";
import Swal from 'sweetalert2';  // Add this line at the top of blogs.js


export const useBlogStore = defineStore("blog", () => {
  const blogTitles = ref([]);
  const blogContents = ref({});

  const getBlogTitles = computed(() => blogTitles.value);
  const getBlogContents = (blogTitleId) =>
    computed(() => blogContents.value[blogTitleId] || []);

  const fetchBlogTitles = async () => {
    try {
      const response = await apiService.getBlogTitle();
      blogTitles.value = response.data;
    } catch (error) {
      console.error("Error fetching blog titles:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An error occurred while fetching the blog titles.',
      });
    }
  };
  

  const addBlogTitle = async (name) => {
    try {
      if (!name || typeof name !== 'string' || name.trim() === '') {
        throw new Error('Blog title must be a non-empty string');
      }
  
      console.log('Sending blog title:', name);
      
      const response = await apiService.postBlogTitle(name);
      
      if (response && response.data) {
        blogTitles.value.push(response.data);
        return response.data;
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error("Detailed error adding blog title:", error);
      throw error; // Let the component handle this
    }
  };
  

  const deleteBlogTitle = async (blogTitleId) => {
    try {
      await apiService.deleteBlogTitle(blogTitleId);
      blogTitles.value = blogTitles.value.filter(
        (title) => title.id !== blogTitleId
      );
    } catch (error) {
      console.error("Error deleting blog title:", error);
    }
  };

  const fetchBlogContent = async (blogTitleId) => {
    try {
      const response = await apiService.getBlogContent(blogTitleId);
      blogContents.value[blogTitleId] = response.data;
    } catch (error) {
      console.error("Error fetching blog content:", error);
    }
  };

  const addBlogContent = async (title, blogTitleId, message) => {
    try {
      const response = await apiService.postBlogContent(
        title,
        blogTitleId,
        message
      );
      if (!blogContents.value[blogTitleId]) {
        blogContents.value[blogTitleId] = [];
      }
      blogContents.value[blogTitleId].push(response.data);
    } catch (error) {
      console.error("Error adding blog content:", error);
    }
  };

  const deleteBlogContent = async (blogContentId, blogTitleId) => {
    try {
      await apiService.deleteBlogContent(blogContentId);
      blogContents.value[blogTitleId] = blogContents.value[blogTitleId].filter(
        (content) => content.id !== blogContentId
      );
    } catch (error) {
      console.error("Error deleting blog content:", error);
    }
  };

  return {
    blogTitles,
    blogContents,
    getBlogTitles,
    getBlogContents,
    fetchBlogTitles,
    addBlogTitle,
    deleteBlogTitle,
    fetchBlogContent,
    addBlogContent,
    deleteBlogContent,
  };
});
