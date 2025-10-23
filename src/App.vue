<template>
  <div class="max-w-7xl mx-auto flex flex-col relative">
    <!-- Navbar -->
    <nav class="max-w-7xl px-5 fixed top-0 z-[98] w-screen backdrop-blur-md bg-[#121212] bg-opacity-80">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <a href="#home" class="flex">
          <span class="self-center text-lg text-[#a855f7] font-semibold whitespace-nowrap fadein-bot hover:text-purple-300">Fadhly Achmad</span>
        </a>
        <div class="flex md:order-2 fadein-bot">
          <div class="flex md:order-2 fadein-bot">
  <a href="https://github.com/Padlyach" target="_blank" class="flex items-center justify-center w-9 h-9">
    <svg class="w-7 h-7 text-white hover:text-[#a855f7] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.73 1.02A9.18 9.18 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.9-1.29 2.73-1.02 2.73-1.02.54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
  </a>
</div>
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
              <div class="w-full flex justify-center items-center mt-20">
                <div class="animate-bounce">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
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
        <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-purple-400">
           A showcase of my selected works, projects, and creative solutions.
        </h4>
        </div>
        <PortfolioView />
      </section>
      <section id="sertifikat" class="min-h-screen pt-20 section designer-section">
        <div class="section-header">
          <h2 class="section-title">Certificates</h2>
        <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-purple-400">
          My certifications and achievements, demonstrating my commitment to learning and growth.
        </h4>
        </div>
        <div class="certificates-gallery flex flex-wrap justify-center gap-6 py-8">
          <img v-for="img in certificateImages" :key="img" :src="img" class="certificate-img shadow-xl rounded-2xl transition-transform duration-500 hover:scale-105" alt="Certificate" />
        </div>
        <SertifikatView />
      </section>
      <section id="contact" class="min-h-screen pt-10 section designer-section">
        <div class="section-header">
          <h2 class="section-title">Contact</h2>
        <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-purple-400">
         Let's connect! Reach out for collaborations, questions, or just to say hello.
        </h4>
        </div>
        <ContactView />
      </section>
    </div>

    <!-- Footer Mobile -->
    <footer class="block md:hidden fixed bottom-0 left-0 w-full right-0 pt-2 rounded-t-3xl border border-[#383838] bg-[#121212] bg-opacity-95 backdrop-blur-md backdrop-opacity-90 z-[999] pointer-events-auto">
      <nav class="flex justify-around py-4 text-xs">
        <a href="#home" class="nav-link text-gray-300 hover:text-white">Home</a>
        <a href="#about" class="nav-link text-gray-300 hover:text-white">About</a>
        <a href="#portfolio" class="nav-link text-gray-300 hover:text-white">Portfolio</a>
        <a href="#sertifikat" class="nav-link text-gray-300 hover:text-white">Sertifikat</a>
        <a href="#contact" class="nav-link text-gray-300 hover:text-white">Contact</a>
      </nav>
    </footer>
  </div>

 <footer class="relative z-50 bg-dark-gradient text-gray-300 mt-20 pt-10 pb-8 simple-footer w-full">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative px-6">
        <div class="md:col-span-1">
            <h3 class="footer-title">About Us</h3>
            <p class="footer-desc">Fadhly Achmad is a passionate designer & developer crafting digital experiences with soul. Let's build something unforgettable together.</p>
            <div class="flex space-x-3 mt-5">
                <a href="https://github.com/Padlyach" target="_blank" class="footer-social" aria-label="GitHub">
                    <svg class="footer-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.73 1.02A9.18 9.18 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.9-1.29 2.73-1.02 2.73-1.02.54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="currentColor"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/fadhly-achmad/" class="footer-social" aria-label="LinkedIn">
                    <svg class="footer-icon" viewBox="0 0 24 24"><path d="M7.5 9h2v6h-2V9zm1-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 2h2v.8c.28-.5.98-1.3 2.02-1.3C17.5 8.5 18 9.4 18 11.1V15h-2v-3c0-.7-.01-1.6-1-1.6s-1.1.8-1.1 1.6V15h-2V9zM2 4v16h20V4H2z" fill="currentColor"/></svg>
                </a>
            </div>
        </div>
        <div class="md:col-span-1">
            <h3 class="footer-title">Navigation</h3>
            <div class="footer-links-grid">
                <a href="#home" class="footer-nav-btn">Home</a>
                <a href="#about" class="footer-nav-btn">About</a>
                <a href="#portfolio" class="footer-nav-btn">Portfolio</a>
                <a href="#sertifikat" class="footer-nav-btn">Certificates</a>
                <a href="#contact" class="footer-nav-btn">Contact</a>
            </div>
        </div>
        <div class="md:col-span-1">
            <h3 class="footer-title">Get in Touch</h3>
            <p class="footer-desc">Let's collaborate on your next project. Reach out via email or connect on social media for a quick chat.</p>
            <div class="mt-4 space-y-2 text-sm text-gray-400">
                <div class="flex items-center space-x-2">
                    <svg class="w-5 h-5 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4z" fill="none"/><path d="M20 4H4v16h16V4zm-2 2v12H6V6h12z"/></svg>
                    <span>fadhlyach2007@gmail.com</span>
                </div>
                <div class="flex items-center space-x-2">
                    <svg class="w-5 h-5 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    <span>Fadhly Achmad</span>
                </div>
            </div>
            <div class="mt-6">
                <a href="#contact" class="footer-btn-contact">Contact Me</a>
            </div>
        </div>
    </div>
    <div class="mt-10 text-center text-xs text-gray-500 opacity-70 tracking-wide border-t border-gray-700/50 pt-4 max-w-6xl mx-auto px-6">
        &copy; 2024 Fadhly Achmad. All rights reserved.
    </div>
</footer>
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
/* === Simple Dark Footer Styles (Clean Background & Button Navigation) === */

/* Color Palette: */
:root {
  --color-dark-bg-start: #1a1a1e; 
  --color-dark-bg-end: #232327; 
  --color-primary-purple: #a855f7; 
  --color-secondary-accent: #8b5cf6; 
  --color-text-base: #e0e0e0;
  --color-text-secondary: #bdbdbd;
}

.simple-footer {
  font-family: 'Poppins', 'Inter', sans-serif;
  /* Menggunakan gradien sederhana dark gray - TIDAK ADA GELOMBANG */
  background: linear-gradient(135deg, var(--color-dark-bg-start) 60%, var(--color-dark-bg-end) 100%);
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  /* Shadow dipertahankan untuk pemisahan */
  box-shadow: 0 -6px 20px 0 rgba(168, 85, 247, 0.2);
}

.bg-dark-gradient {
  background: linear-gradient(120deg, var(--color-dark-bg-start) 60%, var(--color-dark-bg-end) 100%);
}

.footer-title {
  font-size: 1.3rem; 
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--color-primary-purple);
  margin-bottom: 1rem;
  text-shadow: 0 1px 4px rgba(168, 85, 247, 0.5);
  position: relative;
}

.footer-title::after {
  content: '';
  display: block;
  width: 32px; 
  height: 2px; 
  border-radius: 1px;
  background: var(--color-primary-purple);
  margin-top: 0.3rem;
}

.footer-desc {
  color: var(--color-text-secondary);
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  opacity: 0.9;
}

/* --- Navigation Links as Buttons --- */
.footer-links-grid {
    display: grid;
    /* 2 kolom di desktop untuk tampilan rapi */
    grid-template-columns: repeat(2, 1fr); 
    gap: 0.6rem;
}

.footer-nav-btn {
    display: block;
    text-align: center;
    padding: 0.5rem 0.8rem;
    color: var(--color-text-base);
    font-weight: 500;
    font-size: 0.95rem;
    border-radius: 0.5rem;
    /* Background sedikit lebih terang dari footer */
    background-color: var(--color-dark-bg-end); 
    border: 1px solid rgba(168, 85, 247, 0.3);
    transition: all 0.25s;
}

.footer-nav-btn:hover {
    color: #fff;
    /* Hover berubah menjadi warna ungu utama */
    background-color: var(--color-primary-purple); 
    border-color: var(--color-primary-purple);
    box-shadow: 0 2px 8px 0 rgba(168, 85, 247, 0.6);
    transform: translateY(-1px);
}
/* --- End Navigation Buttons --- */

.footer-btn-contact {
  display: inline-block;
  background: var(--color-primary-purple);
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem; 
  padding: 0.7rem 1.8rem;
  font-size: 1rem;
  letter-spacing: 0.03em;
  box-shadow: 0 2px 10px 0 rgba(168, 85, 247, 0.6);
  transition: all 0.3s;
  text-align: center;
}
.footer-btn-contact:hover {
  background: var(--color-secondary-accent);
  transform: translateY(-1px);
  box-shadow: 0 4px 15px 0 rgba(168, 85, 247, 0.8);
}


/* Social Icons Styling */
.footer-social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px; 
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-dark-bg-end); 
  border: 1px solid var(--color-primary-purple);
  color: var(--color-primary-purple);
  transition: all 0.2s;
}

.footer-social .footer-icon {
  width: 20px;
  height: 20px;
}

.footer-social:hover {
  background-color: var(--color-primary-purple);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 2px 10px 0 rgba(168, 85, 247, 0.8);
}

/* --- Responsive Adjustments --- */
@media (max-width: 767px) {
  .simple-footer {
    padding-top: 2rem;
    padding-bottom: 1.5rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  
  .simple-footer .max-w-6xl {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  /* Navigation Button di mobile menjadi 3 kolom */
  .footer-links-grid {
      grid-template-columns: repeat(3, 1fr); 
      gap: 0.5rem;
  }
  
  .footer-nav-btn {
      font-size: 0.85rem;
      padding: 0.4rem 0.6rem;
  }

  .footer-btn-contact {
    display: block; 
    width: 100%;
    margin-top: 1rem;
  }
}

/* Penyesuaian untuk layar sangat kecil */
@media (max-width: 480px) {
    /* Navigation Button di layar sangat kecil menjadi 2 kolom */
    .footer-links-grid {
        grid-template-columns: repeat(2, 1fr); 
    }
}
</style>