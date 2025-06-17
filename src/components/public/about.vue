<template>
    <div class="blank-page">
      <div class="header">
        <HeaderSidebar />
      </div>
      <div class="content">
        <!-- Your blank content goes here -->
      </div>
    </div>
  </template>
  
  <script>
  import HeaderSidebar from '../../components/shared/header.vue';
  
  export default {
    name: 'BlankPage',
    components: {
      HeaderSidebar
    }
  };
  </script>
  
  <style scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .content {
    padding-top: 60px; /* adjust this based on your header height */
  }
  </style>
  