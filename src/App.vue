<template>
  <div class="max-w-7xl mx-auto flex flex-col relative">
    <!-- Navbar -->
    <nav class="max-w-7xl px-5 fixed top-0 z-[98] w-screen backdrop-blur-md bg-[#121212] bg-opacity-80">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <a href="#home" class="flex">
          <span class="self-center text-lg text-[#a855f7] font-semibold whitespace-nowrap fadein-bot hover:text-purple-300">Fadhly Achmad</span>
        </a>
        <div class="flex md:order-2 fadein-bot">
          <a href="https://github.com/Padlyach" target="_blank">
            <img class="w-9 rounded-full" src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png" alt="github">
          </a>
        </div>
        <div class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
          <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li><a href="#home" class="nav-link fadein-bot text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">Home</a></li>
            <li><a href="#about" class="nav-link fadein-bot fadein-1 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">About</a></li>
            <li><a href="#portfolio" class="nav-link fadein-bot fadein-2 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">Portfolio</a></li>
            <li><a href="#sertifikat" class="nav-link fadein-bot fadein-3 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">Sertifikat</a></li>
            <li><a href="#contact" class="nav-link fadein-bot fadein-3 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="scroll-container">
      <section id="home" class="min-h-screen pt-28 section designer-section">
        <HomeView />
      </section>
      <section id="about" class="min-h-screen pt-10 section designer-section">
        <div class="section-header">
          <h2 class="section-title">About Me</h2>
          <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-purple-400">
           A brief introduction, my skills, and the tools I use to build beautiful digital experiences.
        </h4>
        </div>
        <AboutView />
      </section>
      <section id="portfolio" class="min-h-screen pt-10 section designer-section">
        <div class="section-header">
          <h2 class="section-title">Portfolio</h2>
          <p class="section-desc">A showcase of my selected works, projects, and creative solutions.</p>
        </div>
        <PortfolioView />
      </section>
      <section id="sertifikat" class="min-h-screen pt-20 section designer-section">
        <div class="section-header">
          <h2 class="section-title">Certificates</h2>
          <p class="section-desc">My certifications and achievements, demonstrating my commitment to learning and growth.</p>
        </div>
        <div class="certificates-gallery flex flex-wrap justify-center gap-6 py-8">
          <img v-for="img in certificateImages" :key="img" :src="img" class="certificate-img shadow-xl rounded-2xl transition-transform duration-500 hover:scale-105" alt="Certificate" />
        </div>
        <SertifikatView />
      </section>
      <section id="contact" class="min-h-screen pt-10 section designer-section">
        <div class="section-header">
          <h2 class="section-title">Contact</h2>
          <p class="section-desc">Let's connect! Reach out for collaborations, questions, or just to say hello.</p>
        </div>
        <ContactView />
      </section>
    </div>

    <!-- Footer Mobile -->
    <footer class="block md:hidden fixed bottom-0 left-0 w-full right-0 pt-20 rounded-t-3xl border border-[#383838] bg-[#121212] bg-opacity-95 backdrop-blur-md backdrop-opacity-90 z-[999] pointer-events-auto">
      <nav class="flex justify-around py-4 text-xs">
        <a href="#home" class="nav-link text-gray-300 hover:text-white">Home</a>
        <a href="#about" class="nav-link text-gray-300 hover:text-white">About</a>
        <a href="#portfolio" class="nav-link text-gray-300 hover:text-white">Portfolio</a>
        <a href="#sertifikat" class="nav-link text-gray-300 hover:text-white">Sertifikat</a>
        <a href="#contact" class="nav-link text-gray-300 hover:text-white">Contact</a>
      </nav>
    </footer>

    <!-- Premium Modern Footer - Always Visible -->
    <footer class="relative z-50 bg-footer-gradient text-gray-200 pt-20 pb-10 px-8 overflow-hidden premium-footer">
      <!-- Organic Wave Background -->
      <div class="absolute left-0 top-0 w-full h-full pointer-events-none -z-10">
        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
          <path fill="#a855f7" fill-opacity="0.12" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        <!-- About Us -->
        <div>
          <h3 class="footer-title">About Us</h3>
          <p class="footer-desc">Fadhly Achmad is a passionate designer & developer crafting digital experiences with soul. Let's build something unforgettable together.</p>
          <div class="flex space-x-4 mt-6">
            <a href="https://github.com/Padlyach" target="_blank" class="footer-social group" aria-label="GitHub">
              <svg class="footer-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.73 1.02A9.18 9.18 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.9-1.29 2.73-1.02 2.73-1.02.54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="currentColor"/></svg>
            </a>
            <a href="#" class="footer-social group" aria-label="Instagram">
              <svg class="footer-icon" viewBox="0 0 24 24"><radialGradient id="ig" cx="50%" cy="50%" r="80%"><stop offset="0%" stop-color="#a855f7"/><stop offset="100%" stop-color="#38bdf8"/></radialGradient><rect width="24" height="24" rx="6" fill="url(#ig)"/><path d="M12 8.5A3.5 3.5 0 1 0 12 15.5A3.5 3.5 0 1 0 12 8.5Z" fill="#fff"/><circle cx="17.5" cy="6.5" r="1.2" fill="#fff"/></svg>
            </a>
            <a href="#" class="footer-social group" aria-label="LinkedIn">
              <svg class="footer-icon" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#38bdf8"/><path d="M7.5 9h2v6h-2V9zm1-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 2h2v.8c.28-.5.98-1.3 2.02-1.3C17.5 8.5 18 9.4 18 11.1V15h-2v-3c0-.7-.01-1.6-1-1.6s-1.1.8-1.1 1.6V15h-2V9z" fill="#fff"/></svg>
            </a>
          </div>
        </div>
        <!-- Links -->
        <div>
          <h3 class="footer-title">Links</h3>
          <ul class="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#sertifikat">Certificates</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
         <!-- Get in Touch Section -->
        <div>
          <h3 class="footer-title">Get in Touch</h3>
          <p class="footer-desc">Have a project in mind? Let's collaborate and make something extraordinary. Reach out via email or connect on social media.</p>
          <div class="mt-6 space-y-2 text-sm text-gray-400">
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4z" fill="none"/><path d="M20 4H4v16h16V4zm-2 2v12H6V6h12z"/></svg>
              <span>fadhlyach2007@gmail.com</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              <span>Fadhly Achmad</span>
            </div>
          </div>
          <div class="mt-8 text-center">
            <a href="#contact" class="footer-btn-contact">Contact Us</a>
          </div>
        </div>
      </div>
      <div class="mt-16 text-center text-xs text-gray-500 opacity-70 tracking-wide">
        Fadhly Achmad
      </div>
    </footer>
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import PortfolioView from './views/PortfolioView.vue'
import SertifikatView from './views/SertifikatView.vue'
import ContactView from './views/ContactView.vue'

export default {
  components: {
    HomeView,
    AboutView,
    PortfolioView,
    SertifikatView,
    ContactView
  },
  mounted() {
    this.initScrollSpy();
    this.initSmoothScroll();
    this.initSectionAnimations();
  },
  methods: {
    initScrollSpy() {
      const sections = document.querySelectorAll('.section');
      const navLinks = document.querySelectorAll('.nav-link');
      
      window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
          }
        });

        navLinks.forEach(link => {
          link.classList.remove('router-link-exact-active');
          if (link.getAttribute('href').includes(current)) {
            link.classList.add('router-link-exact-active');
          }
        });
      });
    },
    initSmoothScroll() {
      document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    },
    initSectionAnimations() {
      // Creative intersection observer for designer-like transitions
      const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('designer-visible');
          } else {
            entry.target.classList.remove('designer-visible');
          }
        });
      }, { threshold: 0.2 });
      document.querySelectorAll('.designer-section').forEach(section => {
        observer.observe(section);
      });
    }
  }
}
</script>

<style>
/* ... existing styles ... */

.scroll-container {
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}

.section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.section.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-link {
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #a855f7;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Add intersection observer animations */
@media (prefers-reduced-motion: no-preference) {
  .section {
    animation: fadeIn 1s ease-out forwards;
    animation-play-state: paused;
  }
  
  .section.visible {
    animation-play-state: running;
  }
}
/* Styling original milikmu */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  background: hsl(240, 1%, 17%);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #a855f7;
  border-radius: 5px;
}

::-webkit-scrollbar-button {
  width: 20px;
}

body {
  font-family: 'Poppins', sans-serif;
  background: hsl(0, 0%, 7%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  transition: color 0.3s;
}

nav a.router-link-exact-active {
  display: inline-flex;
  flex-direction: column;
  color: white;
  transition: color 0.3s;
}

nav a.router-link-exact-active::after {
  display: inline-block;
  content: "";
  margin-top: 0.08em;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #a855f7;
}

nav a.router-link-exact-active:hover {
  color: white;
}

.section-header {
  text-align: center;
  margin-bottom: 2.5rem;
  padding-top: 5rem;
  opacity: 0.85;
}
.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  color: #a855f7;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 16px #a855f7aa, 0 1px 0 #fff;
  animation: titlePop 1.2s cubic-bezier(.68,-0.55,.27,1.55) both;
}
.section-desc {
  font-size: 1.15rem;
  color: #e0e0e0;
  margin-bottom: 1.5rem;
  font-style: italic;
  animation: fadeInUp 1.5s 0.2s both;
}
.certificate-img {
  width: 320px;
  max-width: 90vw;
  height: auto;
  border: 3px solid #a855f7;
  background: #18181b;
  object-fit: cover;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 32px 0 #a855f7aa;
}

/* Designer-like section transitions */
.designer-section {
  opacity: 0;
  transform: translateY(60px) scale(0.98) rotateX(10deg);
  filter: blur(8px) brightness(0.8);
  transition: all 1.1s cubic-bezier(.68,-0.55,.27,1.55);
  will-change: opacity, transform, filter;
}
.designer-section.designer-visible {
  opacity: 1;
  transform: translateY(0) scale(1) rotateX(0);
  filter: blur(0) brightness(1);
}
@keyframes titlePop {
  0% { transform: scale(0.7) rotate(-8deg); opacity: 0; }
  60% { transform: scale(1.15) rotate(2deg); opacity: 1; }
  100% { transform: scale(1) rotate(0); opacity: 1; }
}
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}

.certificates-gallery {
  margin-bottom: 2rem;
}

/* === Premium Modern Footer Styles === */
.premium-footer {
  font-family: 'Poppins', 'Inter', sans-serif;
  background: linear-gradient(135deg, #18181b 60%, #23272f 100%);
  border-top-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
  box-shadow: 0 -8px 32px 0 #a855f7aa;
  /* Footer is now always visible - removed the display: none on mobile */
}
.bg-footer-gradient {
  background: linear-gradient(120deg, #18181b 60%, #23272f 100%);
}
.footer-title {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #a855f7;
  margin-bottom: 1.1rem;
  text-shadow: 0 2px 16px #a855f7aa, 0 1px 0 #fff1;
  position: relative;
}
.footer-title::after {
  content: '';
  display: block;
  width: 36px;
  height: 3px;
  border-radius: 2px;
  background: linear-gradient(90deg, #a855f7, #38bdf8);
  margin-top: 0.4rem;
}
.footer-desc {
  color: #bdbdbd;
  font-size: 1.05rem;
  margin-bottom: 1.2rem;
  line-height: 1.7;
  opacity: 0.85;
}
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.7rem;
}
.footer-links a {
  color: #e0e0e0;
  font-weight: 500;
  letter-spacing: 0.01em;
  transition: color 0.25s, text-shadow 0.25s;
  position: relative;
}
.footer-links a::before {
  content: '';
  position: absolute;
  left: -18px;
  top: 50%;
  transform: translateY(-50%) scale(0.7);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #a855f7, #38bdf8);
  opacity: 0.7;
  transition: opacity 0.2s;
}
.footer-links a:hover {
  color: #a855f7;
  text-shadow: 0 2px 16px #a855f7aa;
}
.footer-links a:hover::before {
  opacity: 1;
}
.footer-newsletter {
  display: flex;
  gap: 0.7rem;
  margin-top: 0.7rem;
}
.footer-input {
  flex: 1;
  padding: 0.7rem 1rem;
  border-radius: 1.5rem;
  border: none;
  background: #23272f;
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: box-shadow 0.2s;
  box-shadow: 0 2px 8px 0 #a855f733;
}
.footer-input:focus {
  box-shadow: 0 2px 16px 0 #a855f7aa;
}
.footer-btn-cta {
  background: linear-gradient(90deg, #a855f7, #38bdf8);
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 1.5rem;
  padding: 0.7rem 1.5rem;
  cursor: pointer;
  box-shadow: 0 2px 16px 0 #a855f7aa;
  transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
  position: relative;
  overflow: hidden;
}
.footer-btn-cta:hover {
  background: linear-gradient(90deg, #38bdf8, #a855f7);
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 4px 24px 0 #38bdf8aa;
}
.footer-btn-contact {
  display: inline-block;
  margin-top: 1.2rem;
  background: linear-gradient(90deg, #a855f7, #38bdf8);
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 2rem;
  padding: 0.8rem 2.2rem;
  font-size: 1.1rem;
  letter-spacing: 0.03em;
  box-shadow: 0 2px 16px 0 #a855f7aa;
  transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
  position: relative;
  overflow: hidden;
  text-shadow: 0 2px 16px #a855f7aa;
}
.footer-btn-contact:hover {
  background: linear-gradient(90deg, #38bdf8, #a855f7);
  transform: translateY(-2px) scale(1.05) rotate(-1deg);
  box-shadow: 0 4px 24px 0 #38bdf8aa;
}
.footer-social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #23272f 60%, #18181b 100%);
  box-shadow: 0 2px 12px 0 #a855f7aa;
  color: #a855f7;
  transition: background 0.3s, color 0.3s, transform 0.2s, box-shadow 0.2s;
  font-size: 1.5rem;
  position: relative;
  overflow: hidden;
}
.footer-social .footer-icon {
  width: 24px;
  height: 24px;
  transition: transform 0.2s, filter 0.2s;
  filter: drop-shadow(0 2px 8px #a855f7aa);
}
.footer-social:hover {
  background: linear-gradient(135deg, #a855f7 60%, #38bdf8 100%);
  color: #fff;
  transform: scale(1.08) rotate(-3deg);
  box-shadow: 0 4px 24px 0 #38bdf8aa;
}
.footer-social:hover .footer-icon {
  filter: drop-shadow(0 2px 16px #38bdf8cc);
  transform: scale(1.15) rotate(6deg);
}

/* Responsive adjustments for mobile */
@media (max-width: 767px) {
  .scroll-container {
    padding-bottom: 80px; /* Agar konten tidak tertutup footer mobile */
  }
  
  /* Adjust footer for mobile - make it stack vertically */
  .premium-footer .max-w-7xl {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-title {
    font-size: 1.2rem;
  }
  
  .footer-desc {
    font-size: 0.95rem;
  }
  
  .footer-btn-contact {
    padding: 0.6rem 1.8rem;
    font-size: 1rem;
  }
  
  .premium-footer {
    padding: 3rem 1rem 2rem;
  }
}

/* Small mobile adjustments */
@media (max-width: 480px) {
  .premium-footer {
    padding: 2rem 1rem 1.5rem;
  }
  
  .footer-social {
    width: 40px;
    height: 40px;
  }
  
  .footer-social .footer-icon {
    width: 20px;
    height: 20px;
  }
}
</style>