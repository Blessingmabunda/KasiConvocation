<template>
  <div class="about-page">
    <div class="header">
      <HeaderSidebar />
    </div>
    <div class="content">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <h1>Revolutionizing Stokvels Through Technology</h1>
          <p class="subtitle">Bridging traditional savings circles with modern FinTech solutions</p>
          <div class="cta-buttons">
            <button class="primary-btn" @click="scrollToFeatures">Explore Our Platform</button>
            <button class="secondary-btn" @click="scrollToTeam">Meet The Team</button>
          </div>
        </div>
        <div class="hero-image">
          <!-- <img src="@/assets/images/stokvel-community.png" alt="Stokvel community using KasiConvocation app"> -->
        </div>
      </section>

      <!-- Company Overview -->
      <section class="company-section">
        <div class="section-header">
          <h2>Our Story</h2>
          <div class="divider"></div>
        </div>
        <div class="company-details">
          <div class="foundation-card">
            <div class="icon-box">
              <i class="fas fa-calendar-alt"></i>
            </div>
            <h3>Founded</h3>
            <p>July 2019</p>
          </div>
          <div class="foundation-card">
            <div class="icon-box">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h3>Based In</h3>
            <p>Johannesburg, South Africa</p>
          </div>
          <div class="foundation-card">
            <div class="icon-box">
              <i class="fas fa-certificate"></i>
            </div>
            <h3>Certifications</h3>
            <p>FSP License: 54859</p>
            <p>Registration: 2019/319045/07</p>
          </div>
        </div>
        <div class="mission-statement">
          <p>KasiConvocation is a 100% black-owned FinTech company transforming the stokvel ecosystem through innovative digital solutions. We're committed to preserving the cultural significance of stokvels while enhancing their efficiency, security, and financial impact.</p>
        </div>
      </section>

      <!-- Founder's Story -->
      <section class="founder-section">
        <div class="founder-content">
          <h2>The Visionary Behind The Movement</h2>
          <div class="founder-bio">
            <div class="founder-image">
              <!-- <img src="@/assets/images/joankie-makwakwa.jpg" alt="Joankie Makwakwa, Founder of KasiConvocation"> -->
            </div>
            <div class="founder-text">
              <h3>Joankie Makwakwa</h3>
              <p>Inspired by personal experiences with stokvels and recognizing their untapped potential, Joankie founded KasiConvocation to modernize this centuries-old tradition. His deep understanding of both the cultural significance and financial mechanics of stokvels led to the creation of this innovative platform.</p>
              <p>Author of the influential book <em>"The Impact of Stokvel on Society"</em>, Joankie is recognized as a thought leader in community-based finance systems.</p>
              <div class="social-links">
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fas fa-book"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section" id="team">
        <div class="section-header">
          <h2>Our Dedicated Team</h2>
          <div class="divider"></div>
          <p>A passionate group of innovators driving financial inclusion</p>
        </div>
        <div class="team-grid">
          <div class="team-card">
            <div class="team-role">Software Development</div>
            <div class="team-count">3</div>
            <p>Intern Developers building our cutting-edge platform</p>
          </div>
          <div class="team-card">
            <div class="team-role">Project Management</div>
            <div class="team-count">1</div>
            <p>Contracted Project Manager ensuring seamless execution</p>
          </div>
          <div class="team-card">
            <div class="team-role">Financial Operations</div>
            <div class="team-count">1</div>
            <p>Accountant maintaining financial integrity</p>
          </div>
          <div class="team-card">
            <div class="team-role">User Experience</div>
            <div class="team-count">1</div>
            <p>UX/UI Designer crafting intuitive interfaces</p>
          </div>
        </div>
      </section>

      <!-- Funding Journey -->
      <section class="funding-section">
        <div class="funding-timeline">
          <h2>Our Growth Journey</h2>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-date">2019</div>
              <div class="timeline-content">
                <h3>Initial Bootstrapping</h3>
                <p>R50,000 raised from family and friends</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">2021</div>
              <div class="timeline-content">
                <h3>First Institutional Funding</h3>
                <p>R300,000 from TuksNovation NPC</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">Future</div>
              <div class="timeline-content">
                <h3>Growth Phase</h3>
                <p>Seeking R5,000,000 in grant funding</p>
                <button class="invest-btn">Investment Opportunities</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Platform Preview -->
      <section class="platform-section" id="features">
        <div class="section-header">
          <h2>Our Innovative Platform</h2>
          <div class="divider"></div>
        </div>
        <div class="platform-features">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-users"></i>
            </div>
            <h3>Stokvel Hub</h3>
            <p>Centralized platform for group creation, discovery, and management</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-gift"></i>
            </div>
            <h3>Rewards System</h3>
            <p>Earn points redeemable for airtime, data, and other benefits</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>Financial Tools</h3>
            <p>Comprehensive budgeting and investment tracking</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h3>Financial Education</h3>
            <p>Resources to enhance members' financial literacy</p>
          </div>
        </div>
        <div class="platform-demo">
          <h3>See It In Action</h3>
          <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/w1px3-FrnwI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="demo-cta">
            <button class="primary-btn">Try the App</button>
            <button class="secondary-btn">Watch Full Demo</button>
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="join-section">
        <div class="join-content">
          <h2>Join Our Mission</h2>
          <p>Be part of the movement transforming community finance in South Africa</p>
          <button class="join-btn">Get Involved</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import HeaderSidebar from '../../components/shared/header.vue';

export default {
  name: 'AboutPage',
  components: {
    HeaderSidebar
  },
  methods: {
    scrollToFeatures() {
      const element = document.getElementById('features');
      element.scrollIntoView({ behavior: 'smooth' });
    },
    scrollToTeam() {
      const element = document.getElementById('team');
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
  padding-top: 80px;
}

/* Hero Section Styles */
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 8%;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero-content h1 {
  font-size: 2.8rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.primary-btn, .secondary-btn, .invest-btn, .join-btn {
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-btn {
  background-color: #439e43;
  color: white;
  border: none;
}

.primary-btn:hover {
  background-color: #368736;
  transform: translateY(-2px);
}

.secondary-btn {
  background-color: transparent;
  color: #439e43;
  border: 2px solid #439e43;
}

.secondary-btn:hover {
  background-color: rgba(67, 158, 67, 0.1);
  transform: translateY(-2px);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.hero-image img {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

/* Section Header Styles */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.2rem;
  color: #2c3e50;
}

.divider {
  width: 80px;
  height: 4px;
  background: #439e43;
  margin: 1rem auto;
  border-radius: 2px;
}

/* Company Section Styles */
.company-section {
  padding: 5rem 8%;
  background-color: white;
}

.company-details {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.foundation-card {
  background: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  width: 200px;
  transition: transform 0.3s ease;
}

.foundation-card:hover {
  transform: translateY(-10px);
}

.icon-box {
  width: 60px;
  height: 60px;
  background: #439e43;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
  font-size: 1.5rem;
}

.foundation-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.foundation-card p {
  color: #7f8c8d;
  font-size: 0.9rem;
}

.mission-statement {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #34495e;
}

/* Founder Section Styles */
.founder-section {
  padding: 5rem 8%;
  background-color: #f8f9fa;
}

.founder-content h2 {
  text-align: center;
  margin-bottom: 3rem;
}

.founder-bio {
  display: flex;
  align-items: center;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

.founder-image {
  flex: 1;
}

.founder-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.founder-text {
  flex: 1;
}

.founder-text h3 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.founder-text p {
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-links a {
  color: #439e43;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #368736;
}

/* Team Section Styles */
.team-section {
  padding: 5rem 8%;
  background-color: white;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.team-card {
  background: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-5px);
}

.team-role {
  font-weight: 600;
  color: #439e43;
  margin-bottom: 0.5rem;
}

.team-count {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.team-card p {
  color: #7f8c8d;
  font-size: 0.9rem;
}

/* Funding Section Styles */
.funding-section {
  padding: 5rem 8%;
  background-color: #f8f9fa;
}

.funding-timeline {
  max-width: 800px;
  margin: 0 auto;
}

.funding-timeline h2 {
  text-align: center;
  margin-bottom: 3rem;
}

.timeline {
  position: relative;
  padding-left: 50px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #439e43;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-date {
  position: absolute;
  left: -50px;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #439e43;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.timeline-content {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
}

.timeline-content h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.timeline-content p {
  color: #7f8c8d;
  margin-bottom: 1rem;
}

.invest-btn {
  background-color: #439e43;
  color: white;
  border: none;
}

.invest-btn:hover {
  background-color: #368736;
  transform: translateY(-2px);
}

/* Platform Section Styles */
.platform-section {
  padding: 5rem 8%;
  background-color: white;
}

.platform-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature-card {
  text-align: center;
  padding: 2rem 1.5rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  background: #f8f9fa;
  transform: translateY(-5px);
}

.feature-icon {
  width: 70px;
  height: 70px;
  background: #439e43;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.8rem;
}

.feature-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #7f8c8d;
  font-size: 0.95rem;
  line-height: 1.5;
}

.platform-demo {
  text-align: center;
  margin-top: 4rem;
}

.platform-demo h3 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.demo-cta {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

/* Join Section Styles */
.join-section {
  padding: 6rem 8%;
  background: linear-gradient(135deg, #439e43 0%, #2c5e2c 100%);
  text-align: center;
  color: white;
}

.join-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.join-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.join-btn {
  background-color: white;
  color: #439e43;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.join-btn:hover {
  background-color: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
}

/* Responsive Styles */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    padding: 3rem 5%;
  }
  
  .hero-content {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .cta-buttons {
    justify-content: center;
  }
  
  .founder-bio {
    flex-direction: column;
  }
  
  .timeline {
    padding-left: 30px;
  }
  
  .timeline::before {
    left: 15px;
  }
  
  .timeline-date {
    left: -30px;
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .content {
    padding-top: 70px;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .section-header h2 {
    font-size: 1.8rem;
  }
  
  .cta-buttons, .demo-cta {
    flex-direction: column;
    align-items: center;
  }
  
  .primary-btn, .secondary-btn {
    width: 100%;
    max-width: 250px;
  }
}
</style>