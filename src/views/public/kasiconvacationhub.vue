<template>
    <div class="page-wrapper">
      <!-- Header Component -->
      <HeaderSidebar class="fixed-header" />
    
      <!-- Partners Section -->
      <section id="partners" class="py-16 bg-gray-50" data-aos="fade-up">
        <div class="container mx-auto px-4">
          <h2 class="section-header text-4xl text-center mb-12">Our Partners</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="card bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-4">Strategic Partners</h3>
              <ul class="list-disc pl-5 text-gray-600">
                <li>Banks (Nedbank): Secure transaction processing</li>
                <li>Home Affairs: Identity verification services</li>
                <li>NASASA: Regulatory compliance</li>
              </ul>
            </div>
            <div class="card bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-4">Community Partners</h3>
              <ul class="list-disc pl-5 text-gray-600">
                <li>Local Stokvels: Community collaboration</li>
                <li>Stokvel Talk: Event partnerships</li>
                <li>Established Stokvels: Platform credibility</li>
              </ul>
            </div>
            <div class="card bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-4">Service Partners</h3>
              <ul class="list-disc pl-5 text-gray-600">
                <li>Retail Stores: Exclusive offers</li>
                <li>Cellular Providers: Free platform access</li>
                <li>Real Estate: Investment opportunities</li>
                <li>Financial Advisors: Expert guidance</li>
              </ul>
            </div>
            <div class="card bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-4">Educational Partners</h3>
              <ul class="list-disc pl-5 text-gray-600">
                <li>Tertiary Institutions: Student programs</li>
                <li>Taxi Associations: Industry outreach</li>
              </ul>
            </div>
          </div>
          <div class="mt-12 text-center">
            <h3 class="text-2xl font-semibold mb-4">Partnership Benefits</h3>
            <p class="text-gray-600">Enhanced user experience, increased credibility, expanded services, and community trust.</p>
          </div>
        </div>
      </section>
  
      <!-- Resources/Blog Section -->
      <section id="resources" class="py-16 bg-white" data-aos="fade-up">
        <div class="container mx-auto px-4">
          <h2 class="section-header text-4xl text-center mb-12">Resources & Blog</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="card bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-4">Educational Content</h3>
              <ul class="list-disc pl-5 text-gray-600">
                <li>Financial Literacy: Budgeting, saving, investing</li>
                <li>Stokvel Best Practices: Running successful stokvels</li>
                <li>Investment Opportunities: Property, shares, ventures</li>
                <li>Success Stories: Member testimonials</li>
                <li>Industry News: Stokvel market updates</li>
              </ul>
            </div>
            <div class="card bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-4">Featured Resources</h3>
              <ul class="list-disc pl-5 text-gray-600">
                <li>"The Impact of Stokvel on Society" - Book</li>
                <li>Video Tutorials: Platform usage guides</li>
                <li>Webinar Series: Financial education</li>
                <li>Downloadable Guides: Stokvel templates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Contact Us Section -->
      <section id="contact" class="py-16 bg-gray-50" data-aos="fade-up">
        <div class="container mx-auto px-4">
          <h2 class="section-header text-4xl text-center mb-12">Contact Us</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold mb-4">Get in Touch</h3>
              <p class="text-gray-600 mb-2"><strong>Email:</strong> joankiemakwakwa@gmail.com</p>
              <p class="text-gray-600 mb-2"><strong>Phone:</strong> +27 61 428 0018 / +27 71 971 6470</p>
              <p class="text-gray-600 mb-2"><strong>Address:</strong> 136 2nd Street, Randjespark, Midrand, Gauteng, 1685</p>
              <p class="text-gray-600 mb-2"><strong>Website:</strong> <a href="https://www.kasiconvocation.com" class="text-primary">www.kasiconvocation.com</a></p>
              <p class="text-gray-600"><strong>LinkedIn:</strong> <a href="#" class="text-primary">@kasiconvocation</a></p>
              <h3 class="text-xl font-semibold mt-6 mb-4">Office Hours</h3>
              <p class="text-gray-600">Mon-Fri: 8:00 AM - 5:00 PM<br>Sat: 9:00 AM - 1:00 PM<br>Sun: Closed</p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-4">Send a Message</h3>
              <form class="bg-white p-6 rounded-lg shadow-lg">
                <input v-model="form.name" type="text" placeholder="Name" class="w-full p-3 mb-4 border rounded-lg" />
                <input v-model="form.email" type="email" placeholder="Email" class="w-full p-3 mb-4 border rounded-lg" />
                <input v-model="form.phone" type="tel" placeholder="Phone" class="w-full p-3 mb-4 border rounded-lg" />
                <select v-model="form.inquiry" class="w-full p-3 mb-4 border rounded-lg">
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Partnership</option>
                  <option>Investment</option>
                </select>
                <textarea v-model="form.message" placeholder="Message" class="w-full p-3 mb-4 border rounded-lg h-32"></textarea>
                <button type="submit" class="btn-primary w-full py-3 rounded-lg font-semibold">Submit</button>
              </form>
            </div>
          </div>
    
        </div>
      </section>
  
      <!-- Competition/Comparison Section -->
      <section id="comparison" class="py-16 bg-white" data-aos="fade-up">
        <div class="container mx-auto px-4">
          <h2 class="section-header text-4xl text-center mb-12">Why Choose KasiConvocation</h2>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-gray-100">
                  <th class="p-4">Feature</th>
                  <th class="p-4">KasiConvocation</th>
                  <th class="p-4">Stokfella</th>
                  <th class="p-4">United African Stokvel</th>
                  <th class="p-4">Spoon Money</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="feature in comparison" :key="feature.name" class="border-t">
                  <td class="p-4">{{ feature.name }}</td>
                  <td class="p-4">{{ feature.kasi }}</td>
                  <td class="p-4">{{ feature.stokfella }}</td>
                  <td class="p-4">{{ feature.uas }}</td>
                  <td class="p-4">{{ feature.spoon }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mt-12">
            <h3 class="text-2xl font-semibold mb-4 text-center">Our Unique Advantages</h3>
            <ul class="list-disc pl-5 text-gray-600 mx-auto max-w-2xl">
              <li>Reward Points System: Earn with every deposit</li>
              <li>Comprehensive Education: Extensive financial literacy resources</li>
              <li>Advanced Analytics: Detailed financial reporting</li>
              <li>Community Building: Enhanced networking features</li>
              <li>Universal Data Access: Third-party integration capabilities</li>
            </ul>
          </div>
        </div>
      </section>
  
      <!-- Investor Relations Section -->
      <section id="investors" class="py-16 bg-gray-50" data-aos="fade-up">
        <div class="container mx-auto px-4">
          <h2 class="section-header text-4xl text-center mb-12">Investor Relations</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="card bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-4">Investment Opportunity</h3>
              <p class="text-gray-600">Funding Needed: R5,000,000<br>Previous Funding: R300,000 from TuksNovation NPC<br>Bootstrap Capital: R50,000 from family and friends<br>Target Market: 2% of R50 billion stokvel market</p>
            </div>
            <div class="card bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-4">Funding Allocation</h3>
              <ul class="list-disc pl-5 text-gray-600">
                <li>Product Development: R2,150,000 (43%)</li>
                <li>Marketing & User Acquisition: R1,650,000 (33%)</li>
                <li>Human Resources: R1,100,000 (22%)</li>
                <li>Infrastructure: R100,000 (2%)</li>
              </ul>
            </div>
          </div>
          <div class="mt-12 text-center">
            <h3 class="text-2xl font-semibold mb-4">Expected ROI</h3>
            <p class="text-gray-600">Target Users: 240,000 members<br>Projected Annual Profit: R20 million<br>Break-even: 26,350 premium members<br>Timeline: 24-month implementation</p>
            <a href="#" class="btn-primary px-6 py-3 mt-4 rounded-lg">Download Investor Documents</a>
          </div>
        </div>
      </section>
  
      <!-- Privacy Policy Section -->
      <section id="privacy" class="py-16 bg-white" data-aos="fade-up">
        <div class="container mx-auto px-4">
          <h2 class="section-header text-4xl text-center mb-12">Privacy Policy</h2>
          <div class="card bg-gray-50 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h3 class="text-xl font-semibold mb-4">Data Protection</h3>
            <p class="text-gray-600">User information security, transaction data encryption, third-party data sharing policies, POPIA compliance.</p>
            <h3 class="text-xl font-semibold mt-6 mb-4">User Rights</h3>
            <p class="text-gray-600">Data access, portability, account deletion, privacy settings, consent management.</p>
          </div>
        </div>
      </section>
  
      <!-- Terms of Service Section -->
      <section id="terms" class="py-16 bg-gray-50" data-aos="fade-up">
        <div class="container mx-auto px-4">
          <h2 class="section-header text-4xl text-center mb-12">Terms of Service</h2>
          <div class="card bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h3 class="text-xl font-semibold mb-4">Platform Usage Terms</h3>
            <p class="text-gray-600">User responsibilities, prohibited activities, account suspension, dispute resolution.</p>
            <h3 class="text-xl font-semibold mt-6 mb-4">Financial Terms</h3>
            <p class="text-gray-600">Transaction fees, subscription billing, refund policies, liability limitations.</p>
          </div>
        </div>
      </section>
  
      <!-- Support/FAQ Section -->
      <section id="support" class="py-16 bg-white" data-aos="fade-up">
        <div class="container mx-auto px-4">
          <h2 class="section-header text-4xl text-center mb-12">Support & FAQ</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="card bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-4">Common Questions</h3>
              <ul class="list-disc pl-5 text-gray-600">
                <li>How to create a stokvel</li>
                <li>Payment and transaction issues</li>
                <li>Account verification process</li>
                <li>Reward points redemption</li>
              </ul>
            </div>
            <div class="card bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-4">Support Channels</h3>
              <ul class="list-disc pl-5 text-gray-600">
                <li>Live chat integration</li>
                <li>Email support</li>
                <li>Phone support hours</li>
                <li>Help documentation</li>
              </ul>
            </div>
          </div>
          <div class="mt-12 text-center">
            <a href="#" class="btn-primary px-6 py-3 rounded-lg">View Troubleshooting Guides</a>
          </div>
        </div>
      </section>
  
      <!-- Careers Section -->
      <section id="careers" class="py-16 bg-gray-50" data-aos="fade-up">
        <div class="container mx-auto px-4">
          <h2 class="section-header text-4xl text-center mb-12">Careers</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="card bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-4">Current Openings</h3>
              <ul class="list-disc pl-5 text-gray-600">
                <li>Software Developers</li>
                <li>Customer Support Representatives</li>
                <li>Marketing Specialists</li>
                <li>Financial Analysts</li>
              </ul>
            </div>
            <div class="card bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-4">Company Culture</h3>
              <ul class="list-disc pl-5 text-gray-600">
                <li>100% black-owned company</li>
                <li>Community-focused mission</li>
                <li>Innovation-driven environment</li>
                <li>Professional development opportunities</li>
              </ul>
            </div>
          </div>
          <div class="mt-12 text-center">
            <a href="#" class="btn-primary px-6 py-3 rounded-lg">Apply Now</a>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-[#439E43] text-white py-12">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-gray-300">About Us</a></li>
          <li><a href="#" class="hover:text-gray-300">How It Works</a></li>
          <li><a href="#" class="hover:text-gray-300">Pricing</a></li>
          <li><a href="#contact" class="hover:text-gray-300">Contact</a></li>
          <li><a href="#privacy" class="hover:text-gray-300">Privacy Policy</a></li>
          <li><a href="#terms" class="hover:text-gray-300">Terms of Service</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-xl font-semibold mb-4">Social Media</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-gray-300">LinkedIn: @kasiconvocation</a></li>
          <li><a href="#" class="hover:text-gray-300">Facebook</a></li>
          <li><a href="#" class="hover:text-gray-300">Twitter</a></li>
          <li><a href="#" class="hover:text-gray-300">Instagram</a></li>
          <li><a href="#" class="hover:text-gray-300">YouTube (Demo Video)</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-xl font-semibold mb-4">App Download</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-gray-300">iOS App Store</a></li>
          <li><a href="#" class="hover:text-gray-300">Google Play Store</a></li>
          <li><a href="#" class="hover:text-gray-300">Direct APK Download</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-xl font-semibold mb-4">Contact Info</h3>
        <p class="text-gray-200">Email: joankiemakwakwa@gmail.com<br>Phone: +27 61 428 0018<br>Address: Midrand, Gauteng</p>
      </div>
    </div>
    <div class="mt-12 text-center text-gray-200">
      <p>Company Registration: 2019/319045/07<br>FSP License: 54859<br>Copyright © 2024 KasiConvocation (Pty) Ltd</p>
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
    name: 'KasiConvocationPage',
    components: {
      HeaderSidebar,
    },
    data() {
      return {
        form: {
          name: '',
          email: '',
          phone: '',
          inquiry: '',
          message: '',
        },
        comparison: [
          { name: 'Reward Points', kasi: '✓', stokfella: '✗', uas: '✗', spoon: '✗' },
          { name: 'Educational Resources', kasi: '✓', stokfella: 'Limited', uas: '✗', spoon: '✗' },
          { name: 'Community Features', kasi: '✓', stokfella: '✗', uas: 'Limited', spoon: '✗' },
          { name: 'Financial Tools', kasi: 'Advanced', stokfella: 'Basic', uas: 'Limited', spoon: 'Basic' },
          { name: 'Geographic Reach', kasi: 'National', stokfella: 'Limited', uas: 'Regional', spoon: 'Limited' },
        ],
      };
    },
    mounted() {
      AOS.init({ duration: 800 });
    },
  };
  </script>
  
  <style scoped>
  :root {
    --primary-color: #439E43;
    --primary-hover: #378437;
  }
  
  .page-wrapper {
    font-family: 'Inter', sans-serif;
    scroll-behavior: smooth;
    padding-top: 80px; /* Add padding to prevent content from being hidden behind fixed header */
  }

  /* Fixed Header Styles */
  .fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  /* Ensure smooth scrolling to sections with fixed header offset */
  section {
    scroll-margin-top: 80px;
  }
  
  .btn-primary {
    background-color: var(--primary-color);
    color: white;
    transition: background-color 0.3s ease;
  }
  
  .btn-primary:hover {
    background-color: var(--primary-hover);
  }
  
  .section-header {
    color: var(--primary-color);
    font-weight: 700;
  }
  
  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 8px rgba(67, 158, 67, 0.3); /* Green shadow */
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border: 2px solid #439E43;
  }
  
  .text-primary {
    color: var(--primary-color);
  }
  
  .hover\:text-primary:hover {
    color: var(--primary-color);
  }
  
  /* Mobile-first responsive adjustments */
  @media (max-width: 768px) {
    .page-wrapper {
      padding-top: 70px; /* Smaller padding on mobile */
    }
    
    section {
      scroll-margin-top: 70px;
    }
    
    .hero-section h1 {
      font-size: 2.5rem;
    }
    .hero-section p {
      font-size: 1rem;
    }
    .section-header {
      font-size: 2rem;
    }
  }
  </style>