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
      <section id="home" class="min-h-screen section designer-section">
        <div class="section-header">
          <h2 class="section-title">Home</h2>
          <p class="section-desc">Welcome! Explore my creative portfolio and journey as a developer and designer.</p>
        </div>
        <HomeView />
      </section>
      <section id="about" class="min-h-screen section designer-section">
        <div class="section-header">
          <h2 class="section-title">About Me</h2>
          <p class="section-desc">A brief introduction, my skills, and the tools I use to build beautiful digital experiences.</p>
        </div>
        <AboutView />
      </section>
      <section id="portfolio" class="min-h-screen section designer-section">
        <div class="section-header">
          <h2 class="section-title">Portfolio</h2>
          <p class="section-desc">A showcase of my selected works, projects, and creative solutions.</p>
        </div>
        <PortfolioView />
      </section>
      <section id="sertifikat" class="min-h-screen section designer-section">
        <div class="section-header">
          <h2 class="section-title">Certificates</h2>
          <p class="section-desc">My certifications and achievements, demonstrating my commitment to learning and growth.</p>
        </div>
        <div class="certificates-gallery flex flex-wrap justify-center gap-6 py-8">
          <img v-for="img in certificateImages" :key="img" :src="img" class="certificate-img shadow-xl rounded-2xl transition-transform duration-500 hover:scale-105" alt="Certificate" />
        </div>
        <SertifikatView />
      </section>
      <section id="contact" class="min-h-screen section designer-section">
        <div class="section-header">
          <h2 class="section-title">Contact</h2>
          <p class="section-desc">Let's connect! Reach out for collaborations, questions, or just to say hello.</p>
        </div>
        <ContactView />
      </section>
    </div>

    <!-- Footer Mobile -->
    <footer class="block md:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl border border-[#383838] bg-[#121212] bg-opacity-80 backdrop-blur-md backdrop-opacity-90">
      <nav class="flex justify-around py-4 text-xs">
        <a href="#home" class="nav-link text-gray-300 hover:text-white">Home</a>
        <a href="#about" class="nav-link text-gray-300 hover:text-white">About</a>
        <a href="#portfolio" class="nav-link text-gray-300 hover:text-white">Portfolio</a>
        <a href="#sertifikat" class="nav-link text-gray-300 hover:text-white">Sertifikat</a>
        <a href="#contact" class="nav-link text-gray-300 hover:text-white">Contact</a>
      </nav>
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
  data() {
    return {
      certificateImages: [
        '/img/certificate-ml.jpg',
        // Add more certificate images here if needed
      ]
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
</style>
