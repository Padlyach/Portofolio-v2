<template>
  <div>
    <!-- Particle background (added) -->
    <canvas ref="particleCanvas" class="particle-bg"></canvas>

    <main
      class="mt-0 md:mt-1 flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[60vh]">
    <div class="space-y-2 text-center md:text-left px-10">
      <p class="text-zinc-300">Hello, I'm</p>
      <h1 class="text-4xl font-bold md:text-5xl text-white fadein-up">Fadhly Achmad</h1>
      <div class="py-2">
        <h1
          class="typewrite text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-zinc-400 md:text-2xl fadein-up"
          ref="typewriter">
          <span class="wrap">{{ txt }}</span>
        </h1>
      </div>
      <p class="text-white pr-4 fade-in-from-left">
        Selamat datang di situs web portofolio saya<span class="wave">👋🏼</span>
      </p>
      <br>
      <!-- Optional Resume Button -->
      <!--
      <button
        class="fadein-bot fade-500 flex items-center py-2 px-4 mx-auto text-sm font-medium rounded-lg border transition duration-300 md:py-2.5 md:px-5 md:mx-0 text-zinc-300 border-zinc-300 hover:bg-zinc-300 hover:bg-opacity-10 bg-transparent focus:outline-none w-fit">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-2 w-4 h-4">
          <path fill-rule="evenodd"
            d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm5.845 17.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V12a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
            clip-rule="evenodd"></path>
          <path
            d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z">
          </path>
        </svg>
        Download Resume
      </button>
      -->
    </div>
    <div class="flex justify-center md:justify-start fadein-right">
      <img alt="avatar" fetchpriority="high" width="300" height="300" decoding="async" data-nimg="1"
        class="w-70 md:h-auto rounded-full border-4 border-zinc-300 pict"
        src="../assets/hitam.jpg">
    </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      toRotate: ["Web Developer", "Full-stack Engineer", "Web Desgin", "UI / UX"],
      period: 2000,
      txt: '',
      loopNum: 0,
      isDeleting: false,

      // particle background state (added)
      particleCtx: null,
      particlesList: [],
      particleAnimId: null,
      particleResizeHandler: null,
      particlePointerMoveHandler: null,
      particlePointerLeaveHandler: null,
      pointerX: null,
      pointerY: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.tick();
      this.initParticles();
    });
  },
  beforeUnmount() {
    // cleanup particle background (added)
    if (this.particleAnimId) cancelAnimationFrame(this.particleAnimId);
    if (this.particleResizeHandler) window.removeEventListener('resize', this.particleResizeHandler);
    if (this.particlePointerMoveHandler) {
      window.removeEventListener('mousemove', this.particlePointerMoveHandler);
      window.removeEventListener('touchmove', this.particlePointerMoveHandler);
    }
    if (this.particlePointerLeaveHandler) {
      window.removeEventListener('mouseleave', this.particlePointerLeaveHandler);
      window.removeEventListener('touchend', this.particlePointerLeaveHandler);
    }
  },
  methods: {
    tick() {
      let typewriter = this.$refs.typewriter;

      if (!typewriter) return;

      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];

      this.txt = this.isDeleting
        ? fullTxt.substring(0, this.txt.length - 1)
        : fullTxt.substring(0, this.txt.length + 1);
      typewriter.innerHTML = `<span class="wrap">${this.txt}</span>`;

      let that = this;
      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) delta /= 2;

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => {
        that.tick();
      }, delta);
    },

    // ---- Particle background (added, does not touch page structure) ----
    initParticles() {
      const canvas = this.$refs.particleCanvas;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      this.particleCtx = ctx;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      const resize = () => {
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };
      resize();
      this.particleResizeHandler = () => {
        resize();
        this.createParticles();
      };
      window.addEventListener('resize', this.particleResizeHandler);

      // pointer / touch tracking so particles can react (added)
      this.particlePointerMoveHandler = (e) => {
        if (e.touches && e.touches.length) {
          this.pointerX = e.touches[0].clientX;
          this.pointerY = e.touches[0].clientY;
        } else {
          this.pointerX = e.clientX;
          this.pointerY = e.clientY;
        }
      };
      this.particlePointerLeaveHandler = () => {
        this.pointerX = null;
        this.pointerY = null;
      };
      window.addEventListener('mousemove', this.particlePointerMoveHandler, { passive: true });
      window.addEventListener('touchmove', this.particlePointerMoveHandler, { passive: true });
      window.addEventListener('mouseleave', this.particlePointerLeaveHandler);
      window.addEventListener('touchend', this.particlePointerLeaveHandler);

      this.createParticles();
      this.animateParticles();
    },

    createParticles() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // density kept low for an elegant, uncluttered look
      const area = w * h;
      const count = Math.max(30, Math.min(70, Math.round(area / 22000)));

      this.particlesList = Array.from({ length: count }, () => {
        const x = Math.random() * w;
        const y = Math.random() * h;
        return {
          x,
          y,
          baseVx: (Math.random() - 0.5) * 0.15,
          baseVy: (Math.random() - 0.5) * 0.15,
          r: Math.random() * 1.6 + 0.6,
          alpha: Math.random() * 0.5 + 0.2,
        };
      });
    },

    animateParticles() {
      const ctx = this.particleCtx;
      const canvas = this.$refs.particleCanvas;
      if (!ctx || !canvas) return;

      const w = window.innerWidth;
      const h = window.innerHeight;
      const linkDist = 130;

      ctx.clearRect(0, 0, w, h);

      const particles = this.particlesList;
      const px = this.pointerX;
      const py = this.pointerY;
      const avoidRadius = 110; // how close before particles start dodging
      const avoidStrength = 1.8; // how hard they push away

      // draw subtle connecting lines first
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            const lineAlpha = (1 - dist / linkDist) * 0.08;
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // draw and update particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();

        let vx = p.baseVx;
        let vy = p.baseVy;

        // dodge cursor / finger touch (added)
        if (px !== null && py !== null) {
          const dx = p.x - px;
          const dy = p.y - py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < avoidRadius && dist > 0.01) {
            const force = (1 - dist / avoidRadius) * avoidStrength;
            vx += (dx / dist) * force;
            vy += (dy / dist) * force;
          }
        }

        p.x += vx;
        p.y += vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      });

      this.particleAnimId = requestAnimationFrame(this.animateParticles);
    },
  },
}
</script>

<style>
body {
  overflow-y: scroll;
  overflow-x: hidden;
}

/* Particle background styling (added) */
.particle-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
  background: transparent;
}

.typewrite > .wrap {
  border-right: 0.08em solid #fff;
}

.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave-animation {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  to  { transform: rotate(0deg); }
}

.pict {
  box-shadow: 0px 0px 73px -9px rgba(255, 255, 255, 0.35);
  -webkit-box-shadow: 0px 0px 73px -9px rgba(255, 255, 255, 0.35);
  -moz-box-shadow: 0px 0px 73px -9px rgba(255, 255, 255, 0.35);
}

.fadein-up {
  opacity: 0;
  animation-name: fadeInUp;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 500ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fade-in-from-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
  animation-delay: 500ms;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-right {
  opacity: 0;
  animation: fadeInRight 0.5s ease-out forwards;
  animation-delay: 500ms;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-bot {
  opacity: 0;
  animation: fadeInBot 0.5s forwards;
}

@keyframes fadeInBot {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadein-1 { animation-delay: 200ms; }
.fadein-2 { animation-delay: 400ms; }
.fadein-3 { animation-delay: 600ms; }
.fade-500 { animation-delay: 500ms; }
</style>