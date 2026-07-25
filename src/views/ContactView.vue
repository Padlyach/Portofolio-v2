<template>
  <div>
    <!-- Particle background (added) -->
    <canvas ref="particleCanvas" class="particle-bg"></canvas>

    <main class="min-h-[70vh] flex items-center justify-center px-5 md:px-12 py-10">
    <div
      class="relative w-full max-w-5xl grid grid-cols-1 md:grid-cols-[38%_1fr] bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden animate-fade-in-up shadow-2xl shadow-black/50">

      <!-- Kiri: Foto -->
      <div class="relative min-h-[300px] md:min-h-full">
        <img src="../assets/hitam.jpg" alt="Fadhly Achmad"
          class="absolute inset-0 w-full h-full object-cover grayscale-[15%]" />
        <!-- Gradient overlays: monokrom zinc, menyatu ke arah panel kanan -->
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-950/90 md:to-zinc-950/60"></div>
        <div class="absolute inset-0 ring-1 ring-inset ring-white/5"></div>

        <!-- Availability badge -->
        <div
          class="absolute top-5 left-5 flex items-center gap-2 bg-zinc-950/70 backdrop-blur-md border border-zinc-800 px-3 py-1.5 rounded-full shadow-lg shadow-black/30">
          <span class="relative flex w-1.5 h-1.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-300 opacity-60"></span>
            <span class="relative inline-flex rounded-full w-1.5 h-1.5 bg-zinc-300"></span>
          </span>
          <span class="text-xs font-medium text-zinc-200">Tersedia untuk proyek baru</span>
        </div>

        <!-- Name / role overlay -->
        <div class="absolute bottom-0 left-0 right-0 p-6">
          <h2 class="text-2xl font-bold text-white m-0 tracking-tight">Fadhly Achmad</h2>
          <span
            class="inline-block mt-2 text-xs font-medium text-zinc-200 bg-white/10 border border-zinc-600/50 px-2.5 py-1 rounded-full backdrop-blur-sm">
            Frontend Developer
          </span>
        </div>
      </div>

      <!-- Kanan: Kontak -->
      <div class="relative z-10 p-7 md:p-10 flex flex-col gap-6 bg-zinc-900/40">
        <!-- Ambient glow: dibatasi hanya di panel kanan, tidak menimpa foto -->
        <div class="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none z-0"></div>

        <div class="relative z-10">
          <p class="text-[10px] tracking-wider uppercase text-zinc-500 font-medium m-0">Kontak</p>
          <h3 class="text-2xl md:text-3xl font-bold text-white mt-1 mb-2 tracking-tight">Mari Terhubung</h3>
          <p class="text-sm text-zinc-400 leading-relaxed m-0 max-w-md">
            Terbuka untuk kolaborasi, proyek freelance, maupun diskusi seputar teknologi web dan antarmuka pengguna.
          </p>
        </div>

        <div class="relative z-10 flex flex-col gap-2.5">
          <!-- Instagram -->
          <a href="https://instagram.com/Jio" target="_blank" rel="noreferrer"
            class="group flex items-center gap-3 p-3.5 bg-zinc-950/50 border border-zinc-800 rounded-xl no-underline transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900/70">
            <div
              class="w-10 h-10 rounded-lg bg-white/10 border border-zinc-700 flex items-center justify-center text-zinc-200 flex-shrink-0">
              <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </div>
            <div class="flex flex-col gap-0.5 flex-1 min-w-0">
              <span class="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">Instagram</span>
              <span class="text-sm font-medium text-zinc-200 truncate">IG: Jio</span>
            </div>
            <button
              class="flex items-center justify-center gap-1.5 px-3 py-1.5 min-w-[92px] bg-transparent border rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-300"
              :class="copiedKey === 'ig'
                ? 'text-zinc-100 border-zinc-500 bg-zinc-800/60'
                : 'text-zinc-500 border-zinc-700 hover:bg-white/10 hover:border-zinc-500 hover:text-zinc-200'"
              @click.prevent="copyText('Jio', 'ig')" title="Salin username">
              <svg v-if="copiedKey === 'ig'" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <svg v-else class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8 7V5a2 2 0 012-2h6a2 2 0 012 2v10a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2M8 7h6a2 2 0 012 2v2" />
              </svg>
              {{ copiedKey === 'ig' ? 'Tersalin' : 'Salin' }}
            </button>
          </a>

          <!-- Bekerjasama: ArkanaWeb -->
          <a href="https://arkanaweb.vercel.app/" target="_blank" rel="noreferrer"
            class="group flex items-center gap-3 p-3.5 bg-zinc-950/50 border border-zinc-800 rounded-xl no-underline transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900/70">
            <div
              class="relative w-10 h-10 rounded-lg bg-white/10 border border-zinc-700 flex items-center justify-center text-zinc-200 flex-shrink-0 overflow-hidden">
              <span class="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-zinc-300">AW</span>
              <img src="/img/arkana.png" alt="ArkanaWeb" width="40" height="40"
                class="relative w-full h-full object-cover" onerror="this.style.display='none'" />
            </div>
            <div class="flex flex-col gap-0.5 flex-1 min-w-0">
              <span class="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">Bekerjasama</span>
              <span class="text-sm font-medium text-zinc-200 truncate">ArkanaWeb</span>
            </div>
            <span
              class="flex items-center justify-center gap-1.5 px-3 py-1.5 min-w-[92px] bg-transparent border border-zinc-700 rounded-lg text-xs font-medium whitespace-nowrap text-zinc-500 transition-all duration-300 group-hover:bg-white/10 group-hover:border-zinc-500 group-hover:text-zinc-200">
              <svg class="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H8m9 0v9" />
              </svg>
              Kunjungi
            </span>
          </a>

          <!-- WhatsApp -->
          <a href="https://wa.me/6285772900719" target="_blank" rel="noreferrer"
            class="group flex items-center gap-3 p-3.5 bg-zinc-950/50 border border-zinc-800 rounded-xl no-underline transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900/70">
            <div
              class="w-10 h-10 rounded-lg bg-white/10 border border-zinc-700 flex items-center justify-center text-zinc-200 flex-shrink-0">
              <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path
                  d="M12.004 2c-5.523 0-10 4.477-10 10 0 1.771.462 3.437 1.267 4.885L2 22l5.243-1.238A9.955 9.955 0 0 0 12.004 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.09c-1.596 0-3.081-.44-4.352-1.203l-.312-.185-3.114.735.749-3.019-.203-.312A8.076 8.076 0 0 1 3.916 12c0-4.465 3.633-8.09 8.088-8.09 4.455 0 8.088 3.625 8.088 8.09s-3.633 8.09-8.088 8.09z" />
              </svg>
            </div>
            <div class="flex flex-col gap-0.5 flex-1 min-w-0">
              <span class="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">WhatsApp / Telpon</span>
              <span class="text-sm font-medium text-zinc-200 truncate">+62 857-7290-0719</span>
            </div>
            <button
              class="flex items-center justify-center gap-1.5 px-3 py-1.5 min-w-[92px] bg-transparent border rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-300"
              :class="copiedKey === 'phone'
                ? 'text-zinc-100 border-zinc-500 bg-zinc-800/60'
                : 'text-zinc-500 border-zinc-700 hover:bg-white/10 hover:border-zinc-500 hover:text-zinc-200'"
              @click.prevent="copyText('+6285772900719', 'phone')" title="Salin nomor">
              <svg v-if="copiedKey === 'phone'" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <svg v-else class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8 7V5a2 2 0 012-2h6a2 2 0 012 2v10a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2M8 7h6a2 2 0 012 2v2" />
              </svg>
              {{ copiedKey === 'phone' ? 'Tersalin' : 'Salin' }}
            </button>
          </a>
        </div>

        <div class="relative z-10 flex flex-col sm:flex-row gap-3">
          <a href="https://wa.me/6285772900719" target="_blank" rel="noreferrer"
            class="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-white text-zinc-900 rounded-xl text-sm font-semibold no-underline shadow-lg shadow-black/30 transition-all duration-300 hover:bg-zinc-200 hover:-translate-y-0.5">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
            Kirim Pesan
          </a>
          <div class="flex gap-2">
            <a href="https://github.com/Padlyach" target="_blank" rel="noreferrer" aria-label="GitHub"
              class="w-12 sm:w-11 flex items-center justify-center rounded-xl bg-zinc-950/50 border border-zinc-800 text-zinc-400 transition-all duration-300 hover:bg-white/10 hover:border-zinc-500 hover:text-white">
              <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.73 1.02A9.18 9.18 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.9-1.29 2.73-1.02 2.73-1.02.54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/fadhly-achmad/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
              class="w-12 sm:w-11 flex items-center justify-center rounded-xl bg-zinc-950/50 border border-zinc-800 text-zinc-400 transition-all duration-300 hover:bg-white/10 hover:border-zinc-500 hover:text-white">
              <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.559-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        <div class="relative z-10 flex items-center gap-2 pt-4 mt-auto border-t border-zinc-800">
          <svg class="w-[14px] h-[14px] text-zinc-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="9" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 3" />
          </svg>
          <span class="text-xs text-zinc-500">Biasanya membalas dalam 24 jam &middot; Waktu Indonesia Barat</span>
        </div>
      </div>
    </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "ContactSection",
  data() {
    return {
      copiedKey: null,

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
    copyText(text, key) {
      navigator.clipboard.writeText(text).then(() => {
        this.copiedKey = key;
        setTimeout(() => {
          this.copiedKey = null;
        }, 1800);
      });
    },

    // ---- Particle background (added, does not touch page structure/components) ----
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
          vx: 0,
          vy: 0,
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
      const avoidRadius = 160;
      const avoidStrength = 3.2;
      const easing = 0.18;

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

        let targetVx = p.baseVx;
        let targetVy = p.baseVy;

        // dodge cursor / finger touch (added)
        if (px !== null && py !== null) {
          const dx = p.x - px;
          const dy = p.y - py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < avoidRadius && dist > 0.01) {
            const force = Math.pow(1 - dist / avoidRadius, 2) * avoidStrength;
            targetVx += (dx / dist) * force;
            targetVy += (dy / dist) * force;
          }
        }

        p.vx += (targetVx - p.vx) * easing;
        p.vy += (targetVy - p.vy) * easing;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      });

      this.particleAnimId = requestAnimationFrame(this.animateParticles);
    },
  },
};
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}
</style>

<style>
/* Particle background styling (added, global so it can sit behind the whole viewport) */
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
</style>