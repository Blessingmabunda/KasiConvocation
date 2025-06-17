<template>
  <div class="page-container">
    <!-- Header Section -->
    <div class="header">
      <HeaderSidebar />
    </div>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Hero Banner -->
      <section class="hero-banner">
        <div class="container">
          <h1>Unite. Save. Thrive.</h1>
          <p class="subtitle">Empowering stokvels with a digital platform to connect, save, and achieve life-changing goals together.</p>
          <router-link to="/join" class="cta-button hero-cta">Join KasiConvocation</router-link>
        </div>
      </section>

      <!-- Vision Section -->
      <section class="vision-section">
        <div class="container">
          <div class="section-content">
            <div class="text-content">
              <h2>Our Vision</h2>
              <blockquote class="vision-quote">We envision a future where township communities and everyday people can pool their resources, transparently manage group finances, and unlock life-changing goals from buying homes to starting businesses through a tech-driven platform that builds trust, automates accountability and rewards commitment.</blockquote>
            </div>
            <div class="image-content">
              <!-- <img src="@/assets/images/empowered-community.jpg" alt="Community celebrating financial success" class="vision-image"> -->
            </div>
          </div>
        </div>
      </section>

      <!-- Mission Section -->
      <section class="mission-section">
        <div class="container">
          <h2>Our Mission</h2>
          <p class="mission-statement">At KasiConvocation, we believe that financial power should not be reserved for the wealthy - it begins with trust, community, and shared goals. We exist to empower everyday people to build wealth together, by turning saving groups (stokvels) into powerful tools for financial freedom in the digital age.</p>
          
          <div class="core-values">
            <h3>Our Core Values</h3>
            <div class="values-grid">
              <div class="value-card">
                <div class="value-icon">🔍</div>
                <h4>Transparency</h4>
                <p>Open and secure financial management for all stokvel members.</p>
              </div>
              <div class="value-card">
                <div class="value-icon">👥</div>
                <h4>Community</h4>
                <p>Building stronger connections through shared goals.</p>
              </div>
              <div class="value-card">
                <div class="value-icon">💡</div>
                <h4>Innovation</h4>
                <p>Using cutting-edge technology to redefine stokvels.</p>
              </div>
              <div class="value-card">
                <div class="value-icon">💰</div>
                <h4>Empowerment</h4>
                <p>Equipping members with tools for financial success.</p>
              </div>
            </div>
          </div>

          <div class="cta-section">
            <router-link to="/contact" class="cta-button">Join Our Mission</router-link>
          </div>
        </div>
      </section>

      <!-- Why KasiConvocation Section -->
      <section class="why-kasi-section">
        <div class="container">
          <h2>Why KasiConvocation?</h2>
          <p class="section-intro">Discover how our platform transforms the stokvel experience with innovative features and community-driven solutions.</p>
          
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">🌐</div>
              <h4>Centralized Stokvel Hub</h4>
              <p>Connect with stokvels across South Africa through a single, user-friendly platform.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🎁</div>
              <h4>Reward Points System</h4>
              <p>Earn points with every deposit, redeemable for airtime, data, and more.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🔒</div>
              <h4>Secure Transactions</h4>
              <p>Enjoy peace of mind with robust security and digital wallet features.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📚</div>
              <h4>Educational Resources</h4>
              <p>Access curated content to boost financial literacy and investment knowledge.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🤝</div>
              <h4>Community Building</h4>
              <p>Join groups, share experiences, and connect with like-minded members.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📊</div>
              <h4>Advanced Analytics</h4>
              <p>Track contributions and financial progress with powerful tools.</p>
            </div>
          </div>

          <div class="cta-section">
            <router-link to="/product" class="cta-button secondary">Explore Our Features</router-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import HeaderSidebar from '../../components/shared/header.vue';

export default {
  name: 'VisionMissionPage',
  components: {
    HeaderSidebar
  }
}
</script>

<style scoped>
/* General Styles */
.page-container {
  padding-top: 80px;
  font-family: 'Inter', sans-serif;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Banner Styles */
.hero-banner {
  background:  rgba(67, 158, 67, 0.9);
  background-size: cover;
  background-position: center;
  color: #fff;
  padding: 100px 0;
  text-align: center;
  animation: fadeIn 1s ease-in;
}

.hero-banner h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.subtitle {
  font-size: 1.4rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.95;
}

.hero-cta {
  margin-top: 20px;
}

/* Vision Section Styles */
.vision-section {
  padding: 80px 0;
  background-color: #fff5e6;
}

.section-content {
  display: flex;
  align-items: center;
  gap: 40px;
}

.text-content {
  flex: 1;
}

.image-content {
  flex: 1;
}

.vision-image {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.vision-image:hover {
  transform: scale(1.02);
}

.vision-quote {
  font-size: 1.6rem;
  font-style: italic;
  color: #2e2e2e;
  border-left: 5px solid #439e43;
  padding-left: 25px;
  margin: 20px 0;
  animation: slideInLeft 1s ease-out;
}

/* Mission Section Styles */
.mission-section {
  padding: 80px 0;
  text-align: center;
  background-color: #fff;
}

.mission-statement {
  font-size: 1.4rem;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
  line-height: 1.6;
}

.core-values {
  margin-top: 60px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.value-card {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
  background-image: linear-gradient(white, white), linear-gradient(135deg, #439e43);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.value-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(67, 158, 67, 0.2);
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #439e43;
}

/* Why KasiConvocation Section Styles */
.why-kasi-section {
  padding: 80px 0;
  background-color: #fff5e6;
}

.section-intro {
  max-width: 700px;
  margin: 0 auto 40px;
  text-align: center;
  color: #555;
  font-size: 1.2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.feature-card {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
  background-image: linear-gradient(white, white), linear-gradient(135deg, #ff9933, #439e43);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.feature-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(67, 158, 67, 0.2);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #439e43;
}

/* CTA Styles */
.cta-section {
  text-align: center;
  margin-top: 50px;
}

.cta-button {
  display: inline-block;
  background: linear-gradient(135deg, #ff9933, #ff6600);
  color: #fff;
  padding: 15px 35px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.cta-button:hover {
  background: linear-gradient(135deg, #ff6600, #e65c00);
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(255, 102, 0, 0.3);
}

.cta-button.secondary {
  background: transparent;
  color: #439e43;
  border: 2px solid #439e43;
}

.cta-button.secondary:hover {
  background: #e6f5e6;
  border-color: #3a8a3a;
  color: #3a8a3a;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInLeft {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

/* Responsive Styles */
@media (max-width: 768px) {
  .section-content {
    flex-direction: column;
    gap: 20px;
  }

  .hero-banner {
    padding: 80px 0;
  }

  .hero-banner h1 {
    font-size: 2.2rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .vision-quote {
    font-size: 1.3rem;
  }

  .value-card,
  .feature-card {
    padding: 20px;
  }

  .cta-button {
    padding: 12px 25px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-banner h1 {
    font-size: 1.8rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .vision-section,
  .mission-section,
  .why-kasi-section {
    padding: 40px 0;
  }
}
</style>