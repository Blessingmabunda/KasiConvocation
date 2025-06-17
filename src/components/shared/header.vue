<template>
  <div>
    <!-- Sidebar Overlay -->
    <div 
      class="sidebar-overlay" 
      :class="{ active: menuOpen }" 
      @click="closeSidebar"
      aria-hidden="true"
    ></div>

    <!-- Sidebar -->
    <nav class="sidebar" :class="{ active: menuOpen }" aria-label="Main navigation">
      <div class="sidebar-header">
        <div class="sidebar-logo">
          <div class="logo-icon">K</div>
          <div class="sidebar-logo-text">
            <span class="kasi">Kasi</span><span class="convocation">Convocation</span>
          </div>
        </div>
        <button class="close-btn" @click="closeSidebar" aria-label="Close sidebar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      
      <div class="sidebar-content">
        <ul class="sidebar-menu">
          <li class="menu-item">
            <a href="#" @click.prevent="handleSidebarClick('home')" class="menu-link" title="Go to homepage">
              <svg class="menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" stroke-width="2"/>
                <path d="M9 22V12H15V22" stroke="currentColor" stroke-width="2"/>
              </svg>
              Home
            </a>
          </li>
          <li class="menu-item">
            <a href="#" @click.prevent="handleSidebarClick('about')" class="menu-link" title="Learn about us">
              <svg class="menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                <path d="M12 16V12" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="8" r="1" fill="currentColor"/>
              </svg>
              About
            </a>
          </li>
          <li class="menu-item">
            <a href="#" @click.prevent="handleSidebarClick('product')" class="menu-link" title="Our products">
              <svg class="menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 9H21V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9Z" stroke="currentColor" stroke-width="2"/>
                <path d="M3 9L4.10579 3.21115C4.27438 2.426 4.95531 1.83636 5.75293 1.83636H18.2471C19.0447 1.83636 19.7256 2.426 19.8942 3.21115L21 9" stroke="currentColor" stroke-width="2"/>
                <path d="M16 13C16 14.6569 14.6569 16 13 16C11.3431 16 10 14.6569 10 13" stroke="currentColor" stroke-width="2"/>
              </svg>
              Product
            </a>
          </li>
          <li class="menu-item">
            <a href="#" @click.prevent="handleSidebarClick('howItWorks')" class="menu-link" title="How it works">
              <svg class="menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 18H15M10 22H14M12 2C7.58 2 4 5.58 4 10C4 13.31 6.69 16 10 16H14C17.31 16 20 13.31 20 10C20 5.58 16.42 2 12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              How it works
            </a>
          </li>

          <li class="menu-item">
            <a href="#" @click.prevent="handleSidebarClick('pricing')" class="menu-link" title="Our Pricing">
              <svg class="menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20.59 13.41L11 3.83C10.78 3.61 10.47 3.5 10.15 3.5H4C3.45 3.5 3 3.95 3 4.5V10.15C3 10.47 3.11 10.78 3.33 11L13 20.67C13.78 21.45 15.05 21.45 15.83 20.67L20.67 15.83C21.45 15.05 21.45 13.78 20.59 13.41ZM7.5 8.5C6.67 8.5 6 7.83 6 7C6 6.17 6.67 5.5 7.5 5.5C8.33 5.5 9 6.17 9 7C9 7.83 8.33 8.5 7.5 8.5Z" stroke="currentColor" stroke-width="2" fill="none"/>
              </svg>
              Pricing
            </a>
          </li>

          <li class="menu-item">
          <a href="#" @click.prevent="handleSidebarClick('kasiconvacationhub')" class="menu-link" title="KasiConvocation Hub">
            <svg class="menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            KasiConvocation Hub
          </a>
        </li>

        </ul>

        <div class="sidebar-footer">
          <div class="sidebar-cta">
            <button class="sidebar-btn primary" @click="handleSidebarClick('download')" aria-label="Download the KasiConvocation app">
              Download App
            </button>
            <button class="sidebar-btn secondary" @click="handleSidebarClick('support')" aria-label="Get support">
              Get Support
            </button>
          </div>
          <!-- Ad Placeholder -->
          <div class="sidebar-ad" v-if="adContent">
            <a href="#" @click.prevent="handleSidebarClick('ad')" class="ad-link" aria-label="View partner advertisement">
              <div class="ad-placeholder">Partner Ad Placeholder</div>
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Header -->
    <header class="header" role="banner">
      <div class="logo">
        <div class="logo-icon" aria-label="KasiConvocation logo">K</div>
        <div>
          <div class="logo-text">
            <span class="kasi">Kasi</span><span class="convocation">Convocation</span>
            <sup class="registered">®</sup>
          </div>
          <div class="tagline">Community of Stokvel Members</div>
        </div>
      </div>
      <button class="menu-btn" @click="toggleMenu" aria-label="Toggle navigation menu" :aria-expanded="menuOpen">
        <div class="menu-line" :class="{ active: menuOpen }"></div>
        <div class="menu-line" :class="{ active: menuOpen }"></div>
        <div class="menu-line" :class="{ active: menuOpen }"></div>
      </button>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderSidebar',
  data() {
    return {
      menuOpen: false,
      currentSection: null,
      adContent: false, // Toggle for ad visibility; set to true when ad content is available
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      document.body.style.overflow = this.menuOpen ? 'hidden' : 'unset';
    },
    closeSidebar() {
      this.menuOpen = false;
      document.body.style.overflow = 'unset';
    },
    handleSidebarClick(action) {
      // Track user interaction for analytics
      if (this.$analytics) {
        this.$analytics.track('Sidebar_Click', { action, timestamp: new Date().toISOString() });
      }
      console.log('Sidebar menu clicked:', action);
      this.currentSection = action;

      // Define valid routes
      const routes = {
        home: '/',
        about: '/about',
        product: '/product',
        howItWorks: '/howItWorks',
        pricing: '/pricing',
        kasiconvacationhub: '/kasiconvacationhub',
      };

      // Handle navigation
      if (routes[action]) {
        try {
          this.$router.push(routes[action]).catch((err) => {
            if (err.name !== 'NavigationDuplicated') {
              console.error('Navigation error:', err);
            }
          });
        } catch (error) {
          console.error('Router not available:', error);
        }
      } else {
        switch (action) {
          case 'download':
            window.location.href = 'https://www.kasiconvocation.com/download';
            break;
          case 'support':
            window.location.href = 'https://www.kasiconvocation.com/support';
            break;
          case 'ad':
            console.log('Ad clicked');
            // Redirect to ad URL or track click
            window.location.href = 'https://www.kasiconvocation.com/ad'; // Placeholder URL
            break;
          default:
            console.warn('Action not defined:', action);
        }
      }
      this.closeSidebar();
    },
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.menuOpen) {
        this.closeSidebar();
      }
    });
  },
  beforeUnmount() {
    document.body.style.overflow = 'unset';
    document.removeEventListener('keydown', this.closeSidebar);
  },
};
</script>

<style scoped>
/* Sidebar Overlay */
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.sidebar-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  right: -320px;
  width: 320px;
  height: 100vh;
  background: white;
  z-index: 999;
  transition: right 0.3s ease;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.sidebar.active {
  right: 0;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
  background: #4CAF50;
  color: white;
}

.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.sidebar-logo .logo-icon {
  width: 35px;
  height: 35px;
  background: white;
  color: #4CAF50;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  position: relative;
}

.sidebar-logo .logo-icon::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  background: #4CAF50;
  border-radius: 50%;
  bottom: 4px;
  right: 4px;
}

.sidebar-logo-text {
  font-size: 20px;
  font-weight: bold;
}

.sidebar-logo-text .kasi {
  color: white;
}

.sidebar-logo-text .convocation {
  color: white;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.3s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.sidebar-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
}

.menu-item {
  border-bottom: 1px solid #f0f0f0;
}

.menu-link {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 18px 20px;
  color: #333;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.menu-link:hover {
  background: #f8f9fa;
  color: #4CAF50;
  padding-left: 25px;
}

.menu-icon {
  color: #666;
  transition: color 0.3s ease;
}

.menu-link:hover .menu-icon {
  color: #4CAF50;
}

.sidebar-footer {
  padding: 20px;
  border-top: 1px solid #eee;
  background: #f8f9fa;
}

.sidebar-cta {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sidebar-btn {
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  text-align: center;
}

.sidebar-btn.primary {
  background: #4CAF50;
  color: white;
}

.sidebar-btn.primary:hover {
  background: #45a049;
  transform: translateY(-1px);
}

.sidebar-btn.secondary {
  background: white;
  color: #4CAF50;
  border: 2px solid #4CAF50;
}

.sidebar-btn.secondary:hover {
  background: #4CAF50;
  color: white;
  transform: translateY(-1px);
}

/* Ad Placeholder */
.sidebar-ad {
  padding: 15px;
  text-align: center;
}

.ad-placeholder {
  background: #e0e0e0;
  padding: 20px;
  border-radius: 8px;
  font-size: 14px;
  color: #666;
}

.ad-link:hover .ad-placeholder {
  background: #d0d0d0;
}

/* Header */
.header {
  background: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: relative;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: #4CAF50;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
  position: relative;
}

.logo-icon::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
  bottom: 4px;
  right: 4px;
}

.logo-text {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.kasi {
  color: #4CAF50;
}

.convocation {
  color: #333;
}

.registered {
  font-size: 12px;
  color: #999;
}

.tagline {
  font-size: 11px;
  color: #4CAF50;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: -2px;
}

.menu-btn {
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background 0.3s ease;
}

.menu-btn:hover {
  background: #f0f0f0;
}

.menu-line {
  width: 25px;
  height: 3px;
  background: #4CAF50;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.menu-line.active:nth-child(1) {
  transform: rotate(45deg) translateY(7px);
}

.menu-line.active:nth-child(2) {
  opacity: 0;
}

.menu-line.active:nth-child(3) {
  transform: rotate(-45deg) translateY(-7px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .sidebar {
    width: 280px;
    right: -280px;
  }
}

@media (max-width: 480px) {
  .sidebar {
    width: 260px;
    right: -260px;
  }
  
  .sidebar-header {
    padding: 15px;
  }

  .sidebar-logo-text {
    font-size: 18px;
  }

  .menu-link {
    padding: 16px 15px;
    font-size: 15px;
  }

  .sidebar-footer {
    padding: 15px;
  }
}
</style>