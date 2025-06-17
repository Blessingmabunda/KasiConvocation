<template>
    <div class="how-it-works-page">
      <HeaderSidebar class="fixed-header" />
      <main class="container">
        <section class="hero-section">
          <h1 class="parallax-in">How It Works</h1>
          <p class="subtitle fade-in-up">Empowering stokvels with a seamless, secure, and innovative platform.</p>
        </section>
  
        <section class="problem-section">
          <h2 class="section-title reveal-in">The Problem We Solve</h2>
          <div class="problem-grid">
            <div class="problem-card scale-in" v-for="(problem, index) in problems" :key="index" :style="{ animationDelay: `${index * 0.2}s` }">
              <h3>{{ problem.title }}</h3>
              <p>{{ problem.description }}</p>
            </div>
          </div>
        </section>
  
        <section class="solution-section">
          <h2 class="section-title reveal-in">Our Solution: 4-Step Process</h2>
          <div class="solution-steps">
            <div class="step-card scale-in" v-for="(step, index) in steps" :key="index" :style="{ animationDelay: `${index * 0.2}s` }">
              <div class="step-number">{{ index + 1 }}</div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </section>
  
        <section class="features-section">
          <h2 class="section-title reveal-in">Platform Features</h2>
          <ul class="features-list">
            <li class="fade-in-up" v-for="(feature, index) in features" :key="index" :style="{ animationDelay: `${index * 0.15}s` }">
              {{ feature }}
            </li>
          </ul>
        </section>
  
        <section class="security-section">
          <h2 class="section-title reveal-in">Security Features</h2>
          <ul class="security-list">
            <li class="fade-in-up" v-for="(security, index) in securityFeatures" :key="index" :style="{ animationDelay: `${index * 0.15}s` }">
              {{ security }}
            </li>
          </ul>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  import HeaderSidebar from '../../components/shared/header.vue';
  
  export default {
    name: 'HowItWorks',
    components: {
      HeaderSidebar
    },
    data() {
      return {
        problems: [
          { title: 'Fragmentation', description: 'Stokvels operate in isolation' },
          { title: 'Limited Information', description: 'Lack of educational resources' },
          { title: 'Transactional Challenges', description: 'Paper-based inefficiencies' },
          { title: 'Investment Opportunities', description: 'Limited visibility into investment options' }
        ],
        steps: [
          { title: 'Sign Up & Verify', description: 'Create your profile with ID verification' },
          { title: 'Discover & Join', description: 'Find stokvels that match your goals' },
          { title: 'Save & Invest', description: 'Make secure contributions and earn rewards' },
          { title: 'Track & Grow', description: 'Monitor progress with advanced analytics' }
        ],
        features: [
          'Group Creation & Management',
          'Stokvel Discovery Engine',
          'Member Verification System',
          'Secure Digital Wallet',
          'Reward Points System',
          'Educational Resources',
          'Global Search Function',
          'Built-in Messaging System'
        ],
        securityFeatures: [
          'Bank-level encryption',
          'ID verification through Home Affairs API',
          'Secure transaction processing',
          'Data protection compliance'
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .how-it-works-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f9fafb;
    color: #333;
  }
  
  .fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .container {
    flex: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 100px 20px 40px 20px;
  }
  
  .hero-section {
    text-align: center;
    padding: 80px 20px;
    background: linear-gradient(135deg, #439E43 0%, #5cb85c 100%);
    color: white;
    border-radius: 12px;
    margin-bottom: 60px;
    position: relative;
    overflow: hidden;
  }
  
  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    transform: translateY(20px);
    transition: transform 0.5s ease;
  }
  
  .hero-section:hover::before {
    transform: translateY(0);
  }
  
  .hero-section h1 {
    font-size: 2.8rem;
    margin-bottom: 16px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  
  .subtitle {
    font-size: 1.3rem;
    opacity: 0.9;
    font-weight: 300;
  }
  
  .section-title {
    font-size: 2.2rem;
    color: #439E43;
    margin-bottom: 32px;
    text-align: center;
    font-weight: 600;
    letter-spacing: 0.3px;
  }
  
  .problem-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
    margin-bottom: 60px;
  }
  
  .problem-card {
    background: white;
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }
  
  .problem-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }
  
  .problem-card h3 {
    color: #439E43;
    margin-bottom: 16px;
    font-size: 1.5rem;
    font-weight: 500;
  }
  
  .solution-steps {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    justify-content: center;
    margin-bottom: 60px;
  }
  
  .step-card {
    background: white;
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
    width: 100%;
    max-width: 300px;
    text-align: center;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }
  
  .step-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }
  
  .step-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: #439E43;
    color: white;
    border-radius: 50%;
    font-size: 1.4rem;
    margin-bottom: 16px;
    transition: transform 0.4s ease;
  }
  
  .step-card:hover .step-number {
    transform: scale(1.1);
  }
  
  .features-list,
  .security-list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 24px;
    margin-bottom: 60px;
  }
  
  .features-list li,
  .security-list li {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    font-size: 1.1rem;
  }
  
  .features-list li:hover,
  .security-list li:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  
  .parallax-in {
    opacity: 0;
    animation: parallaxIn 1s ease-out forwards;
  }
  
  .fade-in-up {
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  .scale-in {
    opacity: 0;
    animation: scaleIn 0.8s ease-out forwards;
  }
  
  .reveal-in {
    opacity: 0;
    animation: revealIn 1s ease-out forwards;
  }
  
  @keyframes parallaxIn {
    0% {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes scaleIn {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes revealIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
      clip-path: inset(100% 0 0 0);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      clip-path: inset(0 0 0 0);
    }
  }
  
  @media (max-width: 768px) {
    .hero-section h1 {
      font-size: 2.2rem;
    }
  
    .section-title {
      font-size: 1.8rem;
    }
  
    .problem-grid,
    .solution-steps {
      grid-template-columns: 1fr;
    }
  
    .container {
      padding-top: 80px;
    }
  
    .hero-section {
      padding: 60px 20px;
    }
  }
  </style>