<template>
  <div class="max-w-7xl mx-auto flex flex-col relative">
    <!-- Navbar -->
    <nav class="max-w-7xl px-5 fixed top-0 z-[98] w-screen backdrop-blur-md bg-[#121212] bg-opacity-80">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <a href="#home" class="flex brand-link">
          <span class="brand-typing self-center text-lg text-zinc-200 font-semibold fadein-bot hover:text-white">
            <span class="brand-typing-placeholder" aria-hidden="true">Fadhly Achmad</span>
            <span class="brand-typing-text">Fadhly Achmad</span>
          </span>
        </a>
        <div class="flex md:order-2 fadein-bot items-center gap-2">
          <div class="flex md:order-2 fadein-bot">
  <a href="https://github.com/Padlyach" target="_blank" class="flex items-center justify-center w-9 h-9">
    <svg class="w-7 h-7 text-white hover:text-zinc-300 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.73 1.02A9.18 9.18 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.9-1.29 2.73-1.02 2.73-1.02.54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
  </a>
</div>
          <button
            type="button"
            class="burger-btn md:hidden"
            :class="{ 'burger-btn-open': mobileMenuOpen }"
            @click="mobileMenuOpen = !mobileMenuOpen"
            aria-controls="mobile-menu-3"
            :aria-expanded="mobileMenuOpen"
            aria-label="Toggle navigation menu"
          >
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
          </button>
        </div>
        <div
          class="md:flex justify-between items-center w-full md:w-auto md:order-1 mobile-dropdown"
          :class="{ 'mobile-dropdown-open': mobileMenuOpen }"
          id="mobile-menu-3"
        >
          <ul class="mobile-dropdown-list flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li><a href="#home" class="nav-link mobile-nav-link fadein-bot md:border-0 md:hover:bg-transparent md:hover:text-gray-500 md:p-0" @click="mobileMenuOpen = false">Home</a></li>
            <li><a href="#about" class="nav-link mobile-nav-link fadein-bot fadein-1 md:border-0 md:hover:bg-transparent md:hover:text-gray-500 md:p-0" @click="mobileMenuOpen = false">About</a></li>
            <li><a href="#portfolio" class="nav-link mobile-nav-link fadein-bot fadein-2 md:border-0 md:hover:bg-transparent md:hover:text-gray-500 md:p-0" @click="mobileMenuOpen = false">Portfolio</a></li>
            <li><a href="#sertifikat" class="nav-link mobile-nav-link fadein-bot fadein-3 md:border-0 md:hover:bg-transparent md:hover:text-gray-500 md:p-0" @click="mobileMenuOpen = false">Sertifikat</a></li>
            <li><a href="#contact" class="nav-link mobile-nav-link fadein-bot fadein-3 md:border-0 md:hover:bg-transparent md:hover:text-gray-500 md:p-0" @click="mobileMenuOpen = false">Contact</a></li>
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
          <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-zinc-400">
           Sebuah pengenalan singkat, keterampilan saya, dan alat yang saya gunakan untuk membangun pengalaman digital yang indah.
        </h4>
        </div>
        <AboutView />
      </section>
      <section id="portfolio" class="min-h-screen pt-10 section designer-section">
        <div class="section-header">
          <h2 class="section-title">Portfolio</h2>
        <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-zinc-400">
           Sebuah pameran karya terpilih, proyek, dan solusi kreatif saya.
        </h4>
        </div>
        <PortfolioView />
      </section>
      <section id="sertifikat" class="min-h-screen pt-20 section designer-section">
        <div class="section-header">
          <h2 class="section-title">Certificates</h2>
        <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-zinc-400">
          Sertifikat dan pencapaian saya, yang menunjukkan komitmen saya terhadap pembelajaran dan pertumbuhan.
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
        <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-zinc-400">
         Mari terhubung! Hubungi kami untuk berkolaborasi, bertanya, atau sekadar menyapa.
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

  <footer class="relative z-50 bg-dark-gradient text-gray-300 mt-20 pt-14 pb-8 simple-footer w-full overflow-hidden">
    <!-- Decorative glow accents -->
    <div class="footer-glow footer-glow-1"></div>
    <div class="footer-glow footer-glow-2"></div>

    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative px-6">
        <div class="md:col-span-1">
            <h3 class="footer-title">About Us</h3>
            <p class="footer-desc">Fadhly Achmad is a passionate designer & developer crafting digital experiences with soul. Let's build something unforgettable together.</p>
            <div class="flex space-x-3 mt-5">
                <a href="https://github.com/Padlyach" target="_blank" class="footer-social" aria-label="GitHub">
                    <svg class="footer-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.73 1.02A9.18 9.18 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.9-1.29 2.73-1.02 2.73-1.02.54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="currentColor"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/fadhly-achmad/" target="_blank" class="footer-social" aria-label="LinkedIn">
                    <svg class="footer-icon" viewBox="0 0 24 24"><path d="M7.5 9h2v6h-2V9zm1-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 2h2v.8c.28-.5.98-1.3 2.02-1.3C17.5 8.5 18 9.4 18 11.1V15h-2v-3c0-.7-.01-1.6-1-1.6s-1.1.8-1.1 1.6V15h-2V9zM2 4v16h20V4H2z" fill="currentColor"/></svg>
                </a>
                <a href="https://instagram.com/jio" target="_blank" class="footer-social" aria-label="Instagram">
                    <svg class="footer-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0-2.16C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13C20.32 1.35 19.65.94 18.86.63c-.76-.3-1.64-.5-2.91-.56C14.67.01 14.26 0 12 0z"/>
                        <path d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.41-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z"/>
                    </svg>
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
                <a href="#contact" class="footer-nav-btn col-span-2 md:col-span-1">Contact</a>
            </div>
        </div>

        <div class="md:col-span-1">
            <h3 class="footer-title">Get in Touch</h3>
            <p class="footer-desc">Let's collaborate on your next project. Reach out on social media for a quick chat.</p>
            <div class="mt-4 space-y-3 text-sm text-gray-400">
                <div class="footer-contact-link footer-contact-static">
                    <span class="footer-contact-icon">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    </span>
                    <span>Fadhly Achmad</span>
                </div>
            </div>
            <div class="mt-6">
                <a href="#contact" class="footer-btn-contact">Contact Me</a>
            </div>
        </div>
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
  data() {
    return {
      mobileMenuOpen: false
    }
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
  background: #d4d4d8;
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
  background: #71717a;
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
  position: relative;
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
  background-color: #d4d4d8;
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
  color: #e4e4e7;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 16px rgba(255, 255, 255, 0.35), 0 1px 0 #fff;
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
  border: 3px solid #71717a;
  background: #18181b;
  object-fit: cover;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.25);
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
  --color-primary-accent: #d4d4d8; 
  --color-secondary-accent: #a1a1aa; 
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
  box-shadow: 0 -6px 20px 0 rgba(255, 255, 255, 0.12);
}

.bg-dark-gradient {
  background: linear-gradient(120deg, var(--color-dark-bg-start) 60%, var(--color-dark-bg-end) 100%);
}

.footer-title {
  font-size: 1.3rem; 
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--color-primary-accent);
  margin-bottom: 1rem;
  text-shadow: 0 1px 4px rgba(255, 255, 255, 0.3);
  position: relative;
}

.footer-title::after {
  content: '';
  display: block;
  width: 32px; 
  height: 2px; 
  border-radius: 1px;
  background: var(--color-primary-accent);
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
    border: 1px solid rgba(255, 255, 255, 0.15);
    transition: all 0.25s;
}

.footer-nav-btn:hover {
    color: #18181b;
    /* Hover berubah menjadi warna terang monokrom */
    background-color: var(--color-primary-accent); 
    border-color: var(--color-primary-accent);
    box-shadow: 0 2px 8px 0 rgba(255, 255, 255, 0.35);
    transform: translateY(-1px);
}
/* --- End Navigation Buttons --- */

.footer-btn-contact {
  display: inline-block;
  background: var(--color-primary-accent);
  color: #18181b;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem; 
  padding: 0.7rem 1.8rem;
  font-size: 1rem;
  letter-spacing: 0.03em;
  box-shadow: 0 2px 10px 0 rgba(255, 255, 255, 0.35);
  transition: all 0.3s;
  text-align: center;
}
.footer-btn-contact:hover {
  background: var(--color-secondary-accent);
  color: #18181b;
  transform: translateY(-1px);
  box-shadow: 0 4px 15px 0 rgba(255, 255, 255, 0.5);
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
  border: 1px solid var(--color-primary-accent);
  color: var(--color-primary-accent);
  transition: all 0.2s;
}

.footer-social .footer-icon {
  width: 20px;
  height: 20px;
}

.footer-social:hover {
  background-color: var(--color-primary-accent);
  color: #18181b;
  transform: translateY(-2px);
  box-shadow: 0 2px 10px 0 rgba(255, 255, 255, 0.5);
}

/* === Brand name typing animation (isolated, does not affect nav buttons/github) === */
.brand-link {
  flex-shrink: 0;
}

.brand-typing {
  position: relative;
  display: inline-block;
  vertical-align: bottom;
  line-height: 1.4;
}

/* Invisible placeholder reserves the final width so the flex layout
   (nav buttons, github icon) never shifts while the text types/deletes */
.brand-typing-placeholder {
  visibility: hidden;
  white-space: nowrap;
  pointer-events: none;
}

.brand-typing-text {
  position: absolute;
  left: 0;
  top: 0;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  max-width: 13ch;
  border-right: 2px solid #d4d4d8;
  animation:
    brandTypingLoop 6s steps(13, jump-none) infinite,
    brandCaretBlink 0.8s step-end infinite;
}

@keyframes brandTypingLoop {
  0%   { width: 0; }
  5%   { width: 0; }
  45%  { width: 13ch; }
  65%  { width: 13ch; }
  95%  { width: 0; }
  100% { width: 0; }
}

@keyframes brandCaretBlink {
  0%, 100% { border-color: transparent; }
  50% { border-color: #d4d4d8; }
}

@media (prefers-reduced-motion: reduce) {
  .brand-typing-text {
    animation: none;
    width: 13ch;
    border-right: none;
    position: static;
  }
  .brand-typing-placeholder {
    display: none;
  }
}

/* === Mobile burger button & dropdown === */
.burger-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
}

.burger-line {
  display: block;
  width: 22px;
  height: 2px;
  background-color: #e4e4e7;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.burger-btn-open .burger-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.burger-btn-open .burger-line:nth-child(2) {
  opacity: 0;
}
.burger-btn-open .burger-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 767px) {
  .mobile-dropdown {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgba(18, 18, 18, 0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 0.75rem 1.25rem 1.25rem;
  }
  .mobile-dropdown.mobile-dropdown-open {
    display: block;
    animation: dropdownFadeIn 0.25s ease-out both;
  }
  .mobile-dropdown ul {
    width: 100%;
  }
  .mobile-dropdown-list {
    gap: 0.4rem;
  }
}

@keyframes dropdownFadeIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

.mobile-nav-link {
  display: block;
  text-align: center;
  color: #d4d4d8;
  font-weight: 500;
  padding: 0.7rem 1rem;
  border-radius: 0.9rem;
  background-color: transparent;
  border: 1px solid transparent;
  transition: background-color 0.25s ease, border-color 0.25s ease, backdrop-filter 0.25s ease, color 0.25s ease, transform 0.2s ease;
}

.mobile-nav-link::after {
  display: none !important;
}

.mobile-nav-link:hover,
.mobile-nav-link:focus-visible {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-color: rgba(255, 255, 255, 0.18);
  box-shadow: 0 4px 18px 0 rgba(255, 255, 255, 0.08);
  transform: translateY(-1px);
}

.mobile-nav-link.router-link-exact-active {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-color: rgba(255, 255, 255, 0.2);
}

@media (min-width: 768px) {
  .burger-btn {
    display: none;
  }
  .mobile-nav-link {
    padding: 0;
    border-radius: 0;
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
    backdrop-filter: none !important;
    transform: none !important;
  }
  .mobile-nav-link::after {
    display: block !important;
  }
}

/* Decorative glow blobs */
.footer-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
}
.footer-glow-1 {
  width: 280px;
  height: 280px;
  top: -80px;
  left: -60px;
  background: rgba(212, 212, 216, 0.12);
}
.footer-glow-2 {
  width: 320px;
  height: 320px;
  bottom: -100px;
  right: -80px;
  background: rgba(161, 161, 170, 0.1);
}

.simple-footer .max-w-6xl,
.footer-bottom {
  position: relative;
  z-index: 1;
}

/* Contact links (Instagram / name) */
.footer-contact-link {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  width: fit-content;
  color: var(--color-text-secondary);
  transition: color 0.25s ease, transform 0.25s ease;
}
.footer-contact-link:not(.footer-contact-static):hover {
  color: var(--color-primary-accent);
  transform: translateX(3px);
}
.footer-contact-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: var(--color-dark-bg-end);
  border: 1px solid rgba(255, 255, 255, 0.12);
  flex-shrink: 0;
}

/* Footer bottom bar with back-to-top */
.footer-bottom {
  margin-top: 2.5rem;
  padding-top: 1.25rem;
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  color: #6b6b70;
}

.footer-top-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--color-primary-accent);
  transition: all 0.25s ease;
}
.footer-top-btn:hover {
  background-color: var(--color-primary-accent);
  color: #18181b;
  transform: translateY(-3px);
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

  .footer-bottom {
    flex-direction: column-reverse;
    gap: 0.75rem;
    text-align: center;
    padding-bottom: 4.5rem; /* clears mobile bottom nav */
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