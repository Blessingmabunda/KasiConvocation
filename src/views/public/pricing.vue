<template>
    <div class="pricing-page">
      <HeaderSidebar class="fixed-header" />
      <div class="content">
        <h1 class="text-primary">Pricing Plans</h1>
        <p class="subtitle">Choose the membership that best suits your financial goals.</p>
        
        <div class="membership-tiers">
          <div class="tier-card">
            <h2>Basic Membership</h2>
            <h3>R0/month</h3>
            <p class="tier-label">FREE</p>
            <ul>
              <li>Join up to 2 stokvels</li>
              <li>Basic features access</li>
              <li>Community support</li>
              <li>Educational resources</li>
            </ul>
            <button class="btn btn-primary">Sign Up</button>
          </div>
          <div class="tier-card premium">
            <h2>Premium Membership</h2>
            <h3>R70/month</h3>
            <p class="tier-label">Most Popular</p>
            <ul>
              <li>Join unlimited stokvels</li>
              <li>Advanced financial tools</li>
              <li>Priority customer support</li>
              <li>Detailed analytics & reports</li>
              <li>Exclusive partnership benefits</li>
            </ul>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
  
        <div class="additional-services">
          <h2>Additional Services</h2>
          <ul>
            <li><strong>Transaction Fees:</strong> 2% on financial transactions</li>
            <li><strong>Business Advertising:</strong> Tiered pricing for businesses</li>
            <li><strong>Data Analytics:</strong> Custom market research solutions</li>
          </ul>
        </div>
  
        <div class="roi-calculator">
          <h2>ROI Calculator</h2>
          <p>Explore potential savings and returns with our interactive tool.</p>
          <button class="btn btn-primary">Try the ROI Calculator</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import HeaderSidebar from '../../components/shared/header.vue';
  
  export default {
    name: 'PricingPage',
    components: {
      HeaderSidebar
    }
  };
  </script>
  
  <style scoped>
  .pricing-page {
    background-color: #fff;
    min-height: 100vh;
    color: #439E43;
    font-family: 'Arial', sans-serif;
  }
  
  .fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .content {
    padding: 100px 40px 40px 40px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .text-primary {
    color: #439E43;
  }
  
  .subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 40px;
  }
  
  .membership-tiers {
    display: flex;
    gap: 30px;
    margin-bottom: 60px;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .tier-card {
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 30px;
    width: 100%;
    max-width: 400px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .tier-card:hover {
    transform: translateY(-5px);
  }
  
  .tier-card.premium {
    border: 2px solid #439E43;
  }
  
  .tier-card h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
  
  .tier-card h3 {
    font-size: 2rem;
    color: #439E43;
    margin-bottom: 10px;
  }
  
  .tier-label {
    font-size: 1rem;
    color: #fff;
    background-color: #439E43;
    display: inline-block;
    padding: 5px 15px;
    border-radius: 20px;
    margin-bottom: 20px;
  }
  
  .tier-card ul {
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
  }
  
  .tier-card li {
    margin: 10px 0;
    font-size: 1rem;
  }
  
  .btn-primary {
    background-color: #439E43;
    color: #fff;
    border: none;
    padding: 12px 24px;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn-primary:hover {
    background-color: #357a35;
  }
  
  .additional-services {
    margin-bottom: 60px;
  }
  
  .additional-services h2 {
    font-size: 1.8rem;
    color: #439E43;
    margin-bottom: 20px;
  }
  
  .additional-services ul {
    list-style: none;
    padding: 0;
  }
  
  .additional-services li {
    font-size: 1.1rem;
    margin: 15px 0;
  }
  
  .roi-calculator {
    text-align: center;
  }
  
  .roi-calculator h2 {
    font-size: 1.8rem;
    color: #439E43;
    margin-bottom: 10px;
  }
  
  .roi-calculator p {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 20px;
  }
  </style>