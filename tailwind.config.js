// tailwind.config.js
module.exports = {
  content: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'  // Add Vue files to purge unused styles
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
