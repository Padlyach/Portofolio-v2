<template>
  <div class="min-h-screen">
    <div
      class="bg-gradient-to-br from-zinc-900/95 to-zinc-800/95 p-5 md:p-12 mx-3 mb-5 border border-zinc-700 rounded-3xl backdrop-blur-lg relative overflow-hidden">
      <div
        class="absolute top-0 left-0 right-0 h-48 bg-gradient-radial from-white/10 to-transparent pointer-events-none">
      </div>

      <article class="relative">
        <header class="mb-8">
          <div class="flex items-center gap-4 mb-2 animate-fade-in-down">
            <h2
              class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent whitespace-nowrap">
              About Me</h2>
            <div class="h-0.5 flex-1 bg-gradient-to-r from-transparent via-zinc-300 to-transparent"></div>
          </div>
        </header>

        <section class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div class="flex flex-col items-center gap-6 animate-fade-in-up">
            <div class="relative w-56 h-56 md:w-60 md:h-60 lg:w-64 lg:h-64">
              <div
                class="absolute inset-[-15px] bg-gradient-radial from-white/25 to-transparent rounded-full blur-3xl animate-pulse-slow">
              </div>
              <div
                class="absolute inset-[-4px] rounded-full bg-gradient-to-r from-zinc-400 via-white to-zinc-400 bg-[length:200%_200%] animate-border-rotate">
              </div>
              <img
                class="relative w-full h-full object-cover rounded-full border-4 border-zinc-900 shadow-2xl shadow-white/20 hover:scale-105 transition-transform duration-300 z-10"
                src="../assets/hitam.jpg" alt="Fadhly Achmad" />
              <div
                class="absolute bottom-2 right-2 bg-zinc-200/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-zinc-900 border-2 border-zinc-300/40 z-20 animate-fade-in-scale">
                <span class="w-2 h-2 bg-zinc-900 rounded-full animate-blink"></span>
                Available
              </div>
              <!-- <div
                class="absolute bottom-2 right-2 bg-red-500/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-white border-2 border-red-500/30 z-20 animate-fade-in-scale">
                <span class="w-2 h-2 bg-white rounded-full animate-blink"></span>
                Unavailable
              </div> -->
            </div>

            <div class="flex gap-8 animate-fade-in-up-delay">
              <div class="text-center">
                <div
                  class="text-3xl font-bold bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
                  9+</div>
                <div class="text-sm text-zinc-400 mt-1">Technologies</div>
              </div>
              <div class="text-center">
                <div
                  class="text-3xl font-bold bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
                  5+</div>
                <div class="text-sm text-zinc-400 mt-1">Tools</div>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-6 w-full animate-fade-in-left">
            <div
              class="inline-flex items-center gap-2 bg-white/10 border border-zinc-400/30 px-4 py-2 rounded-full w-fit text-sm text-zinc-200 animate-fade-in-up">
              <span class="text-lg animate-wave inline-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
                  <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6" />
                  <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
                  <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-1-6-3l-3.5-5.5a1.5 1.5 0 0 1 2.5-1.7L7 15" />
                </svg>
              </span>
              <span>Hello, I'm</span>
            </div>

            <h3 class="text-4xl font-bold text-white animate-fade-in-up-delay">Fadhly Achmad</h3>

            <p class="text-zinc-300 leading-relaxed text-justify opacity-0 animate-fade-in-up-delay-2">
              Seorang siswa di <span
                class="text-zinc-100 font-semibold relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-zinc-300 after:to-transparent after:opacity-50">SMK
                Informatika Pesat</span> jurusan
              <span
                class="text-zinc-100 font-semibold relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-zinc-300 after:to-transparent after:opacity-50">Rekayasa
                Perangkat Lunak (RPL)</span>.
              Saya antusias dengan dunia teknologi dan pengembangan perangkat lunak.
            </p>

            <p class="text-zinc-300 leading-relaxed text-justify opacity-0 animate-fade-in-up-delay-3">
              Saya menikmati tantangan memecahkan masalah melalui teknologi, dan terus belajar
              meningkatkan keterampilan pemrograman. Saya percaya teknologi mampu membawa perubahan positif,
              dan saya senang ikut berkontribusi melalui proyek web dan perangkat lunak yang saya kembangkan.
            </p>

            <div class="grid grid-cols-2 gap-4 mt-4">
              <div v-for="(card, index) in infoCards" :key="index"
                class="relative flex items-center gap-3 bg-zinc-700/30 border border-zinc-600 rounded-xl p-4 transition-all duration-300 hover:bg-white/10 hover:border-zinc-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/10 overflow-hidden group">
                <div
                  class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-shine">
                </div>
                <div class="text-3xl drop-shadow-lg text-zinc-200" v-html="card.icon"></div>
                <div class="flex-1 z-10">
                  <div class="text-xs text-zinc-400 mb-1">{{ card.label }}</div>
                  <div class="text-sm text-white font-medium">{{ card.value }}</div>
                </div>
              </div>
            </div>

            <div class="flex gap-3 flex-wrap opacity-0 animate-fade-in-up-delay-4">
              <a v-for="social in socialLinks" :key="social.name" :href="social.link" target="_blank"
                class="flex items-center gap-2 px-5 py-3 bg-zinc-700/30 border border-zinc-600 rounded-xl text-zinc-300 text-sm transition-all duration-300 hover:bg-white/10 hover:border-zinc-400 hover:text-zinc-100 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/10">
                <span class="text-lg relative">
                  <span v-html="getSocialIcon(social.name)" class="w-5 h-5"></span>
                </span>
                <span>{{ social.name }}</span>
              </a>
            </div>
          </div>
        </section>
      </article>
    </div>

    <div class="p-5 md:p-12 mx-3">
      <article>
        <header class="mb-8">
          <div class="flex items-center gap-4 mb-2 flex-row-reverse animate-fade-in-down">
            <h2
              class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent whitespace-nowrap">
              Skills & Expertise</h2>
            <div class="h-0.5 flex-1 bg-gradient-to-l from-transparent via-zinc-300 to-transparent"></div>
          </div>
          <p class="text-zinc-400 text-sm md:text-base">Technologies dan Tools yang saya gunakan</p>
        </header>

        <section>
          <div class="mb-8">
            <ul class="flex flex-wrap gap-3 list-none">
              <li>
                <button @click="activeTab = 1"
                  :class="['flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 relative overflow-hidden',
                    activeTab === 1 ? 'text-zinc-100 bg-white/10 border border-zinc-400 shadow-lg shadow-white/10' : 'text-zinc-400 bg-zinc-800/50 border border-zinc-700 hover:text-white hover:bg-zinc-700/50 hover:-translate-y-1']">
                  <span
                    class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300"
                    :class="{ 'opacity-100': activeTab === 1 }"></span>
                  <span class="text-xl relative inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13 2 3 14h6l-1 8 11-14h-7l1-6z" />
                    </svg>
                  </span>
                  <span class="relative">Tech Stack</span>
                  <span class="bg-zinc-500/30 px-2 py-0.5 rounded-full text-xs font-bold relative">{{ tech.length
                    }}</span>
                </button>
              </li>
              <li>
                <button @click="activeTab = 2"
                  :class="['flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 relative overflow-hidden',
                    activeTab === 2 ? 'text-zinc-100 bg-white/10 border border-zinc-400 shadow-lg shadow-white/10' : 'text-zinc-400 bg-zinc-800/50 border border-zinc-700 hover:text-white hover:bg-zinc-700/50 hover:-translate-y-1']">
                  <span
                    class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300"
                    :class="{ 'opacity-100': activeTab === 2 }"></span>
                  <span class="text-xl relative inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </span>
                  <span class="relative">Tools</span>
                  <span class="bg-zinc-500/30 px-2 py-0.5 rounded-full text-xs font-bold relative">{{ tools.length
                    }}</span>
                </button>
              </li>
            </ul>
          </div>

          <div v-show="activeTab === 1" class="animate-fade-in">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 pb-8">
              <div v-for="(item, index) in tech" :key="item.id" class="animate-fade-in-scale"
                :style="{ animationDelay: index * 0.05 + 's' }">
                <div
                  class="relative flex flex-col gap-3 p-5 bg-zinc-900/60 border border-zinc-700 rounded-xl cursor-pointer transition-all duration-400 overflow-hidden h-full group hover:bg-zinc-800/80 hover:border-zinc-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-white/10">
                  <div
                    class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>

                  <div
                    class="relative flex items-center justify-center w-full h-16 bg-zinc-700/30 rounded-xl transition-all duration-400 group-hover:bg-white/10 group-hover:scale-105">
                    <img :src="item.imageUrl" :alt="item.name"
                      class="w-10 h-10 object-contain transition-transform duration-400 group-hover:scale-110 group-hover:rotate-6" />
                  </div>

                  <div class="flex-1 z-10">
                    <div
                      class="text-base font-semibold text-white transition-all duration-300 group-hover:text-zinc-100">
                      {{ item.name }}</div>
                    <div class="text-sm text-zinc-400 transition-all duration-300 group-hover:text-zinc-300">{{
                      item.status }}</div>
                  </div>


                </div>
              </div>
            </div>
          </div>

          <div v-show="activeTab === 2" class="animate-fade-in">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 pb-8">
              <div v-for="(item, index) in tools" :key="item.id" class="animate-fade-in-scale"
                :style="{ animationDelay: index * 0.05 + 's' }">
                <div
                  class="relative flex flex-col gap-3 p-5 bg-zinc-900/60 border border-zinc-700 rounded-xl cursor-pointer transition-all duration-400 overflow-hidden h-full group hover:bg-zinc-800/80 hover:border-zinc-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-white/10">
                  <div
                    class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>

                  <div
                    class="relative flex items-center justify-center w-full h-16 bg-zinc-700/30 rounded-xl transition-all duration-400 group-hover:bg-white/10 group-hover:scale-105">
                    <img :src="item.imageUrl" :alt="item.name"
                      class="w-10 h-10 object-contain transition-transform duration-400 group-hover:scale-110 group-hover:rotate-6" />
                  </div>

                  <div class="flex-1 z-10">
                    <div
                      class="text-base font-semibold text-white transition-all duration-300 group-hover:text-zinc-100">
                      {{ item.name }}</div>
                    <div class="text-sm text-zinc-400 transition-all duration-300 group-hover:text-zinc-300">{{
                      item.status }}</div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1,
      infoCards: [
        {
          label: 'Education', value: 'SMK Informatika Pesat',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>`
        },
        {
          label: 'Major', value: 'Software Engineering',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`
        },
        {
          label: 'Location', value: 'Jakarta, Indonesia',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`
        },
        {
          label: 'Focus', value: 'Web Development',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>`
        }
      ],
      socialLinks: [
        // Link ditambahkan di sini
        { name: 'GitHub', icon: '', link: 'https://github.com/Padlyach' },
        { name: 'LinkedIn', icon: '', link: 'https://www.linkedin.com/in/fadhly-achmad/' },
      ],
      tech: [
        { id: 1, name: 'HTML', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png', status: 'Advanced' },
        { id: 2, name: 'CSS', imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png', status: 'Advanced' },
        { id: 3, name: 'PHP', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png', status: 'Advanced' },
        { id: 5, name: 'Laravel', imageUrl: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg', status: 'Advance' },
        { id: 7, name: 'VueJS', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp', status: 'Intermediate' },
        { id: 10, name: 'Tailwind', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', status: 'Advance' },
        { id: 11, name: 'Bootstrap', imageUrl: 'https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png', status: 'Intermediate' },
        { id: 12, name: 'ReactJS', imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png', status: 'Beginner' },
        { id: 13, name: 'JavaScript', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-javascript-1-225993.png', status: 'Intermediate' },
      ],
      tools: [
        { id: 1, name: 'Git', imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png', status: 'Version Control' },
        { id: 2, name: 'GitHub', imageUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', status: 'Git Hosting' },
        { id: 4, name: 'MySQL', imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png', status: 'Database' },
        { id: 5, name: 'Discord', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2111/2111370.png', status: 'Communication' },
        { id: 6, name: 'LinkedIn', imageUrl: 'https://cdn-icons-png.flaticon.com/512/174/174857.png', status: 'Professional Network' },
      ]
    };
  },
  methods: {
    getLevel(status) {
      const levels = {
        'Advanced': '⭐⭐⭐',
        'Advance': '⭐⭐⭐',
        'Intermediate': '⭐⭐',
        'Beginner': '⭐'
      };
      return levels[status] || '⭐';
    },
    getProgress(status) {
      const progress = {
        'Advanced': '90%',
        'Advance': '85%',
        'Intermediate': '65%',
        'Beginner': '40%'
      };
      return progress[status] || '50%';
    },
    getSocialIcon(name) {
      // Menggunakan SVG untuk GitHub dan LinkedIn
      if (name === 'GitHub') {
        return `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="text-zinc-300 group-hover:text-zinc-100">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.731.084-.68.084-.68 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.304.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.118-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.293-1.552 3.301-1.23 3.301-1.23.653 1.653.242 2.874.118 3.176.769.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.79 24 17.29 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
        `;
      } else if (name === 'LinkedIn') {
        return `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="text-zinc-300 group-hover:text-zinc-100">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.559-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        `;
      }
      // Fallback ikon generik (link) untuk platform lain
      return `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-300 group-hover:text-zinc-100">
          <path d="M10 13a5 5 0 0 0 7.07 0l1.93-1.93a5 5 0 0 0-7.07-7.07L10.5 5.5" />
          <path d="M14 11a5 5 0 0 0-7.07 0L5 12.93a5 5 0 0 0 7.07 7.07L13.5 18.5" />
        </svg>
      `;
    }
  }
}
</script>

<style scoped>
/*
  =====================================
  COPY & PASTE SEMUA CSS DI BAWAH INI
  =====================================
*/
@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

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

@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-scale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes border-rotate {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 200% 50%;
  }
}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }
}

@keyframes wave {

  0%,
  100% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(20deg);
  }

  75% {
    transform: rotate(-20deg);
  }
}

@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }

  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

.animate-fade-in-down {
  animation: fade-in-down 0.6s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}

.animate-fade-in-up-delay {
  animation: fade-in-up 0.8s ease-out 0.3s both;
}

.animate-fade-in-up-delay-2 {
  animation: fade-in-up 0.6s ease-out 0.4s both;
}

.animate-fade-in-up-delay-3 {
  animation: fade-in-up 0.6s ease-out 0.6s both;
}

.animate-fade-in-up-delay-4 {
  animation: fade-in-up 0.6s ease-out 0.8s both;
}

.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out;
}

.animate-fade-in {
  animation: fade-in-up 0.5s ease-out;
}

.animate-fade-in-scale {
  animation: fade-in-scale 0.6s ease-out both;
}

.animate-pulse-slow {
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 0.6;
    transform: scale(1);
  }

  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.animate-border-rotate {
  animation: border-rotate 3s linear infinite;
}

.animate-blink {
  animation: blink 2s ease-in-out infinite;
}

.animate-wave {
  animation: wave 2s ease-in-out infinite;
  display: inline-block;
}

.animate-shine {
  animation: shine 1.5s ease-in-out;
}

.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-stops));
}
</style>