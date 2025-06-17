<template>
  <div class="kasiconvocation-app">
    <div class="header">
      <HeaderSidebar />
    </div>

    <!-- Hero Section with Parallax -->
    <section class="hero" @mousemove="handleParallax">
      <div class="parallax-bg"></div>
      <div class="hero-content">
        <h1 data-aos="fade-down" data-aos-duration="800">{{ heroTitle }}</h1>
        <p data-aos="fade-down" data-aos-duration="800" data-aos-delay="100">{{ heroSubtitle }}</p>
        <div class="cta-buttons">
          <button 
            v-for="(button, index) in ctaButtons" 
            :key="button.id"
            :class="['btn', button.class]"
            @click="handleButtonClick(button.action)"
            data-aos="fade-up"
            :data-aos-delay="200 + (index * 100)"
          >
            {{ button.text }}
          </button>
        </div>
        <!-- Placeholder for app image -->
        <div class="app-image-container" data-aos="fade-up" data-aos-delay="400">
          <!-- Add your KasiConvocation app image here -->
        </div>
      </div>
    </section>

    <!-- How KasiConvocation Works Section -->
    <section class="features">
      <div class="features-container">
        <h2 class="features-title" data-aos="fade-up">{{ featuresTitle }}</h2>
        <div class="features-grid">
          <div 
            v-for="(feature, index) in features" 
            :key="feature.id"
            class="feature-card"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
            @mouseenter="hoverFeature(index)"
            @mouseleave="unhoverFeature(index)"
          >
            <div class="feature-icon" v-html="feature.icon"></div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="our-story">
      <div class="story-container">
        <h2 class="story-title" data-aos="fade-up">{{ storyTitle }}</h2>
        <div class="story-content">
          <p 
            v-for="(paragraph, index) in storyParagraphs" 
            :key="paragraph.id" 
            class="story-paragraph"
            data-aos="fade-up"
            :data-aos-delay="index * 150"
          >
            {{ paragraph.text }}
          </p>
        </div>
        <button 
          class="btn btn-story" 
          @click="handleButtonClick('learn-more')"
          data-aos="fade-up"
          data-aos-delay="450"
        >
          {{ learnMoreText }}
          <span class="btn-arrow">→</span>
        </button>
      </div>
      <div class="floating-shapes">
        <div class="shape shape-1" data-aos="fade-right" data-aos-delay="300"></div>
        <div class="shape shape-2" data-aos="fade-left" data-aos-delay="400"></div>
        <div class="shape shape-3" data-aos="fade-up" data-aos-delay="500"></div>
      </div>
    </section>

    <!-- Community Impact Section -->
    <section class="community-impact">
      <div class="impact-container">
        <h2 class="impact-title" data-aos="fade-up">Community Impact</h2>
        <div class="testimonials-grid">
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="testimonial.id"
            class="testimonial-card"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <p class="testimonial-author">{{ testimonial.author }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-grid">
          <div 
            v-for="(section, sectionName) in footerSections" 
            :key="sectionName"
            class="footer-column"
            data-aos="fade-up"
            :data-aos-delay="sectionName === 'company' ? 0 : sectionName === 'platform' ? 100 : sectionName === 'resources' ? 200 : 300"
          >
            <h4 class="footer-title">{{ section.title }}</h4>
            <ul class="footer-links">
              <li v-for="link in section.links" :key="link.id">
                <a href="#" @click.prevent="handleFooterLink(link.action)">
                  <span class="link-text">{{ link.text }}</span>
                  <span class="link-arrow">→</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="contact-section" data-aos="fade-up" data-aos-delay="400">
          <h4 class="footer-title">{{ contactInfo.title }}</h4>
          <div class="contact-details">
            <div 
              v-for="(item, key) in contactItems" 
              :key="key"
              class="contact-item"
              data-aos="fade-up"
              :data-aos-delay="400 + (key * 100)"
            >
              <span class="contact-icon">{{ contactIcons[key] }}</span>
              <a 
                v-if="key === 'email' || key === 'linkedin'" 
                :href="key === 'email' ? 'mailto:' + item : '#'" 
                class="contact-link"
                @click.prevent="key === 'linkedin' ? handleFooterLink('linkedin') : null"
              >
                {{ item }}
              </a>
              <span v-else class="contact-text">{{ item }}</span>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom" data-aos="fade-up" data-aos-delay="600">
          <p class="copyright">{{ copyrightText }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import HeaderSidebar from '../../components/shared/header.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'KasiConvocation',
  components: {
    HeaderSidebar
  },
  data() {
    return {
      heroTitle: 'Saving Together The Smart Way with KasiConvocation',
      heroSubtitle: 'Connect, Save and Grow Together with KasiConvocation. Your Gateway to Financial Freedom.',
      ctaButtons: [
        {
          id: 1,
          text: 'Download App',
          class: 'btn-primary',
          action: 'download'
        },
        {
          id: 2,
          text: 'Watch Demo',
          class: 'btn-secondary',
          action: 'demo'
        },
        {
          id: 3,
          text: 'Join Community',
          class: 'btn-secondary',
          action: 'join'
        }
      ],
      featuresTitle: 'How KasiConvocation Works',
      features: [
        {
          id: 1,
          title: 'Connect',
          description: 'Find and join stokvels aligned with your goals. Connect with like-minded individuals across South Africa and build meaningful financial relationships.',
          icon: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="#9E9E9E"/>
            <path d="M8 12L9 15L12 14L15 15L16 12L15 9L12 10L9 9L8 12Z" fill="#9E9E9E"/>
          </svg>`
        },
        {
          id: 2,
          title: 'Save Securely',
          description: 'Secure digital wallet with reward points system. Every deposit earns you points redeemable for airtime, data, and more.',
          icon: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="3" fill="#FFA726"/>
            <path d="m12 1-1.5 4.5L6 4l1.5 4.5L3 10l4.5 1.5L6 16l4.5-1.5L12 19l1.5-4.5L18 16l-1.5-4.5L21 10l-4.5-1.5L18 4l-4.5 1.5L12 1z" fill="#FFB74D" opacity="0.7"/>
            <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#FF9800"/>
          </svg>`
        },
        {
          id: 3,
          title: 'Learn & Grow',
          description: 'Find and join stokvels aligned with your goals. Connect with like-minded individuals across South Africa and build meaningful financial relationships.',
          icon: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="6" width="16" height="2" fill="#FF5722"/>
            <rect x="4" y="9" width="16" height="2" fill="#FF7043"/>
            <rect x="4" y="12" width="16" height="2" fill="#FF8A65"/>
            <path d="M3 3v18l3-3h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" fill="#FFAB91" opacity="0.3"/>
            <rect x="2" y="2" width="16" height="14" rx="1" fill="none" stroke="#FF8A65" stroke-width="2"/>
          </svg>`
        },
        {
          id: 4,
          title: 'Invest Wisely',
          description: 'Find and join stokvels aligned with your goals. Connect with like-minded individuals across South Africa and build meaningful financial relationships.',
          icon: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 20h16v-8l-8-6-8 6v8z" fill="#4CAF50" opacity="0.3"/>
            <rect x="6" y="14" width="3" height="6" fill="#4CAF50"/>
            <rect x="10.5" y="11" width="3" height="9" fill="#66BB6A"/>
            <rect x="15" y="8" width="3" height="12" fill="#81C784"/>
            <path d="M20 6l-2 2-2-2 2-2 2 2z" fill="#4CAF50"/>
            <line x1="18" y1="4" x2="22" y2="0" stroke="#4CAF50" stroke-width="2" marker-end="url(#arrowhead)"/>
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#4CAF50"/>
              </marker>
            </defs>
          </svg>`
        }
      ],
      storyTitle: 'Our Story',
      storyParagraphs: [
        {
          id: 1,
          text: 'We believe in restoring trust, dignity and access in how people save together. KasiConvocation exists to make group saving safer, easier and more transparent especially for those left behind by traditional finance.'
        },
        {
          id: 2,
          text: '“Growing up, I watched stokvels struggle with trust issues, lost records and broken promises not because people didn’t want to save, but because they lacked the tools. Our mission is to modernize group saving without erasing its human roots. We want to protect a system that millions rely on, by giving it structure, visibility and dignity.” – Joankie Makwakwa, co-founder'
        },
        {
          id: 3,
          text: 'When we help people save better together, we unlock financial power, social power and freedom. That’s why we built KasiConvocation. Every feature is designed to answer one question: “How do we make stokvels work better without making them feel foreign?”'
        }
      ],
      testimonials: [
        {
          id: 1,
          text: 'KasiConvocation made our stokvel so much easier to manage. No more chasing members for contributions or worrying about lost records!',
          author: 'Thandi M., Soweto'
        },
        {
          id: 2,
          text: 'The transparency and security features gave us confidence to grow our savings group. It’s a game-changer for our community.',
          author: 'Sipho N., Durban'
        },
        {
          id: 3,
          text: 'I love how we can track everything in real-time. It’s brought our group closer and made saving fun!',
          author: 'Lerato K., Pretoria'
        }
      ],
      learnMoreText: 'Learn More About Us',
      footerSections: {
        company: {
          title: 'Company',
          links: [
            { id: 1, text: 'About Us', action: 'about' },
            { id: 2, text: 'Our Team', action: 'team' },
            { id: 3, text: 'Careers', action: 'careers' },
            { id: 4, text: 'News', action: 'news' }
          ]
        },
        platform: {
          title: 'Platform',
          links: [
            { id: 1, text: 'Features', action: 'features' },
            { id: 2, text: 'Security', action: 'security' },
            { id: 3, text: 'Pricing', action: 'pricing' },
            { id: 4, text: 'Support', action: 'support' }
          ]
        },
        resources: {
          title: 'Resources',
          links: [
            { id: 1, text: 'Blog', action: 'blog' },
            { id: 2, text: 'Guides', action: 'guides' },
            { id: 3, text: 'Research', action: 'research' },
            { id: 4, text: 'FAQ', action: 'faq' }
          ]
        },
        legal: {
          title: 'Legal',
          links: [
            { id: 1, text: 'Privacy Policy', action: 'privacy' },
            { id: 2, text: 'Terms and Conditions', action: 'terms' },
            { id: 3, text: 'Refund Policy', action: 'refund' },
            { id: 4, text: 'User Security Policy', action: 'security-policy' }
          ]
        }
      },
      contactInfo: {
        title: 'Contact',
        email: 'joankiemakwakwa@gmail.com',
        phone: '+27 61 428 0018',
        location: 'Midrand, Gauteng',
        linkedin: 'LinkedIn'
      },
      copyrightText: '© 2024 KasiConvocation (Pty) Ltd. All rights reserved. | FSP License: 54859 | Reg: 2019/319045/07',
      contactIcons: {
        email: '✉',
        phone: '📞',
        location: '📍',
        linkedin: '🔗'
      }
    };
  },
  computed: {
    contactItems() {
      return {
        email: this.contactInfo.email,
        phone: this.contactInfo.phone,
        location: this.contactInfo.location,
        linkedin: this.contactInfo.linkedin
      };
    }
  },
  methods: {
    handleButtonClick(action) {
      switch (action) {
        case 'download':
          console.log('Download App clicked');
          // Add download logic here
          break;
        case 'demo':
          console.log('Watch Demo clicked');
          // Add demo logic here
          break;
        case 'join':
          console.log('Join Community clicked');
          // Add join logic here
          break;
        case 'support':
          console.log('Support clicked');
          // Add support logic here
          break;
        default:
          console.log('Button clicked:', action);
      }
    },
    handleFooterLink(action) {
      console.log('Footer link clicked:', action);
      // Add specific footer link logic here
    },
    handleParallax(e) {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      const parallaxBg = document.querySelector('.parallax-bg');
      if (parallaxBg) {
        parallaxBg.style.transform = `translate(-${x * 20}px, -${y * 20}px)`;
      }
    },
    hoverFeature(index) {
      const featureCards = document.querySelectorAll('.feature-card');
      if (featureCards[index]) {
        featureCards[index].style.transform = 'translateY(-15px)';
      }
    },
    unhoverFeature(index) {
      const featureCards = document.querySelectorAll('.feature-card');
      if (featureCards[index]) {
        featureCards[index].style.transform = 'translateY(0)';
      }
    }
  },
  mounted() {
    AOS.init({
      duration: 800,
      easing: 'ease-out-quart',
      once: false,
      offset: 100
    });
    
    console.log('KasiConvocation component mounted');
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.kasiconvocation-app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #f5f5f5;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
  color: white;
  text-align: center;
  padding: 60px 20px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
}

.hero h1 {
  font-size: 48px;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.hero p {
  font-size: 20px;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.4;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.app-image-container {
  margin-top: 40px;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.btn {
  padding: 15px 35px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  min-width: 180px;
}

.btn-primary {
  background: white;
  color: #4CAF50;
  border: none;
}

.btn-primary:hover {
  background: #f8f8f8;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #4CAF50;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* Features Section */
.features {
  background: #f8f9fa;
  padding: 80px 20px;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
}

.features-title {
  font-size: 40px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 60px;
  line-height: 1.2;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

.feature-card {
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
}

.feature-icon {
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}

.feature-title {
  font-size: 24px;
  font-weight: bold;
  color: #4CAF50;
  margin-bottom: 20px;
}

.feature-description {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  text-align: center;
}

/* Our Story Section */
.our-story {
  background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.story-container {
  max-width: 800px;
  margin: 0 auto;
}

.story-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 40px;
  line-height: 1.2;
}

.story-content {
  margin-bottom: 40px;
}

.story-paragraph {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  opacity: 0.95;
}

.btn-story {
  background: white;
  color: #4CAF50;
  border: none;
  padding: 15px 40px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-story:hover {
  background: #f8f8f8;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

/* Community Impact Section */
.community-impact {
  background: #f8f9fa;
  padding: 80px 20px;
}

.impact-container {
  max-width: 1200px;
  margin: 0 auto;
}

.impact-title {
  font-size: 40px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 60px;
  line-height: 1.2;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

.testimonial-card {
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border: 1px solid #f0f0f0;
}

.testimonial-text {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.testimonial-author {
  font-size: 16px;
  font-weight: bold;
  color: #4CAF50;
}

/* Footer */
.footer {
  background: #2c2c2c;
  color: white;
  padding: 60px 20px 20px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-column {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #4CAF50;
}

.company-title { color: #4CAF50; }
.platform-title { color: #4CAF50; }
.resources-title { color: #4CAF50; }
.legal-title { color: #4CAF50; }
.contact-title { color: #4CAF50; }

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #ccc;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: white;
}

.contact-section {
  margin-bottom: 40px;
  border-top: 1px solid #444;
  padding-top: 40px;
}

.contact-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-icon {
  font-size: 16px;
  width: 20px;
}

.contact-link {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: white;
}

.contact-text {
  color: #ccc;
  font-size: 16px;
}

.footer-bottom {
  border-top: 1px solid #444;
  padding-top: 20px;
  text-align: center;
}

.copyright {
  color: #999;
  font-size: 14px;
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 768px) {
  .floating-shapes {
    display: none;
  }
  .hero h1 {
    font-size: 36px;
  }
  
  .hero p {
    font-size: 18px;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .features-grid, .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .features-title, .impact-title {
    font-size: 32px;
  }

  .story-title {
    font-size: 36px;
  }

  .story-paragraph {
    font-size: 16px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .contact-details {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 28px;
  }
  
  .hero p {
    font-size: 16px;
  }
  
  .btn {
    padding: 12px 25px;
    font-size: 14px;
    min-width: 150px;
  }
  
  .story-title {
    font-size: 28px;
  }

  .btn-story {
    padding: 12px 30px;
    font-size: 16px;
  }
}
</style>