<template>
  <div class="min-h-screen">
    <!-- About Section -->
    <div class="bg-gradient-to-br from-zinc-900/95 to-zinc-800/95 p-5 md:p-12 mx-3 mb-5 border border-zinc-700 rounded-3xl backdrop-blur-lg relative overflow-hidden">
      <div class="absolute top-0 left-0 right-0 h-48 bg-gradient-radial from-purple-500/15 to-transparent pointer-events-none"></div>
      
      <article class="relative">
        <header class="mb-8">
          <div class="flex items-center gap-4 mb-2 animate-fade-in-down">
            <h2 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent whitespace-nowrap">About Me</h2>
            <div class="h-0.5 flex-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          </div>
        </header>

        <section class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <!-- Profile Section -->
          <div class="flex flex-col items-center gap-6 animate-fade-in-up">
            <div class="relative w-56 h-56 md:w-60 md:h-60 lg:w-64 lg:h-64">
              <div class="absolute inset-[-15px] bg-gradient-radial from-purple-500/40 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
              <div class="absolute inset-[-4px] rounded-full bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500 bg-[length:200%_200%] animate-border-rotate"></div>
              <img class="relative w-full h-full object-cover rounded-full border-4 border-zinc-900 shadow-2xl shadow-purple-500/30 hover:scale-105 transition-transform duration-300 z-10" 
                   src="../assets/dloy.jpg" 
                   alt="Fadhly Achmad" />
              <div class="absolute bottom-2 right-2 bg-green-500/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-white border-2 border-green-500/30 z-20 animate-fade-in-scale">
                <span class="w-2 h-2 bg-white rounded-full animate-blink"></span>
                Available
              </div>
            </div>
            
            <div class="flex gap-8 animate-fade-in-up-delay">
              <div class="text-center">
                <div class="text-3xl font-bold bg-gradient-to-br from-purple-300 to-purple-500 bg-clip-text text-transparent">8+</div>
                <div class="text-sm text-zinc-400 mt-1">Technologies</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold bg-gradient-to-br from-purple-300 to-purple-500 bg-clip-text text-transparent">3+</div>
                <div class="text-sm text-zinc-400 mt-1">Tools</div>
              </div>
            </div>
          </div>
          
          <!-- About Text -->
          <div class="flex flex-col gap-6 w-full animate-fade-in-left">
            <div class="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 px-4 py-2 rounded-full w-fit text-sm text-purple-300 animate-fade-in-up">
              <span class="text-lg animate-wave">👋</span>
              <span>Hello, I'm</span>
            </div>
            
            <h3 class="text-4xl font-bold text-white animate-fade-in-up-delay">Fadhly Achmad</h3>
            
            <p class="text-zinc-300 leading-relaxed text-justify opacity-0 animate-fade-in-up-delay-2">
              Seorang siswa di <span class="text-purple-300 font-semibold relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-purple-300 after:to-transparent after:opacity-50">SMK Informatika Pesat</span> jurusan 
              <span class="text-purple-300 font-semibold relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-purple-300 after:to-transparent after:opacity-50">Rekayasa Perangkat Lunak (RPL)</span>. 
              Saya antusias dengan dunia teknologi dan pengembangan perangkat lunak.
            </p>

            <p class="text-zinc-300 leading-relaxed text-justify opacity-0 animate-fade-in-up-delay-3">
              Saya menikmati tantangan memecahkan masalah melalui teknologi, dan terus belajar 
              meningkatkan keterampilan pemrograman. Saya percaya teknologi mampu membawa perubahan positif, 
              dan saya senang ikut berkontribusi melalui proyek web dan perangkat lunak yang saya kembangkan.
            </p>

            <div class="grid grid-cols-2 gap-4 mt-4">
              <div v-for="(card, index) in infoCards" :key="index" 
                   class="relative flex items-center gap-3 bg-zinc-700/30 border border-zinc-600 rounded-xl p-4 transition-all duration-300 hover:bg-purple-500/10 hover:border-purple-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30 overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-shine"></div>
                <div class="text-3xl drop-shadow-lg">{{ card.icon }}</div>
                <div class="flex-1 z-10">
                  <div class="text-xs text-zinc-400 mb-1">{{ card.label }}</div>
                  <div class="text-sm text-white font-medium">{{ card.value }}</div>
                </div>
              </div>
            </div>

            <div class="flex gap-3 flex-wrap opacity-0 animate-fade-in-up-delay-4">
              <a v-for="social in socialLinks" :key="social.name" href="#" 
                 class="flex items-center gap-2 px-5 py-3 bg-zinc-700/30 border border-zinc-600 rounded-xl text-zinc-300 text-sm transition-all duration-300 hover:bg-purple-500/15 hover:border-purple-500 hover:text-purple-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30">
                <span class="text-lg">{{ social.icon }}</span>
                <span>{{ social.name }}</span>
              </a>
            </div>
          </div>
        </section>
      </article>
    </div>

    <!-- Skills Section -->
    <div class="p-5 md:p-12 mx-3">
      <article>
        <header class="mb-8">
          <div class="flex items-center gap-4 mb-2 flex-row-reverse animate-fade-in-down">
            <h2 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent whitespace-nowrap">Skills & Expertise</h2>
            <div class="h-0.5 flex-1 bg-gradient-to-l from-transparent via-purple-300 to-transparent"></div>
          </div>
          <p class="text-zinc-400 text-sm md:text-base">Technologies and tools I work with</p>
        </header>

        <section>
          <div class="mb-8">
            <ul class="flex flex-wrap gap-3 list-none">
              <li>
                <button 
                  @click="activeTab = 1"
                  :class="['flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 relative overflow-hidden',
                          activeTab === 1 ? 'text-purple-300 bg-purple-500/15 border border-purple-500 shadow-lg shadow-purple-500/25' : 'text-zinc-400 bg-zinc-800/50 border border-zinc-700 hover:text-white hover:bg-zinc-700/50 hover:-translate-y-1']">
                  <span class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 transition-opacity duration-300" :class="{'opacity-100': activeTab === 1}"></span>
                  <span class="text-xl relative">⚡</span>
                  <span class="relative">Tech Stack</span>
                  <span class="bg-purple-500/30 px-2 py-0.5 rounded-full text-xs font-bold relative">{{ tech.length }}</span>
                </button>
              </li>
              <li>
                <button 
                  @click="activeTab = 2"
                  :class="['flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 relative overflow-hidden',
                          activeTab === 2 ? 'text-purple-300 bg-purple-500/15 border border-purple-500 shadow-lg shadow-purple-500/25' : 'text-zinc-400 bg-zinc-800/50 border border-zinc-700 hover:text-white hover:bg-zinc-700/50 hover:-translate-y-1']">
                  <span class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 transition-opacity duration-300" :class="{'opacity-100': activeTab === 2}"></span>
                  <span class="text-xl relative">🛠️</span>
                  <span class="relative">Tools</span>
                  <span class="bg-purple-500/30 px-2 py-0.5 rounded-full text-xs font-bold relative">{{ tools.length }}</span>
                </button>
              </li>
            </ul>
          </div>

          <!-- Tech Stack Tab -->
          <div v-show="activeTab === 1" class="animate-fade-in">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 pb-8">
              <div v-for="(item, index) in tech" :key="item.id" 
                   class="animate-fade-in-scale"
                   :style="{ animationDelay: index * 0.05 + 's' }">
                <div class="relative flex flex-col gap-3 p-5 bg-zinc-900/60 border border-zinc-700 rounded-xl cursor-pointer transition-all duration-400 overflow-hidden h-full group hover:bg-zinc-800/80 hover:border-purple-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20">
                  <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div class="relative flex items-center justify-center w-full h-16 bg-zinc-700/30 rounded-xl transition-all duration-400 group-hover:bg-purple-500/15 group-hover:scale-105">
                    <img :src="item.imageUrl" :alt="item.name" class="w-10 h-10 object-contain transition-transform duration-400 group-hover:scale-110 group-hover:rotate-6" />
                  </div>
                  
                  <div class="flex-1 z-10">
                    <div class="text-base font-semibold text-white transition-all duration-300 group-hover:text-purple-300">{{ item.name }}</div>
                    <div class="text-sm text-zinc-400 transition-all duration-300 group-hover:text-purple-400">{{ item.status }}</div>
                  </div>
                  
               
                </div>
              </div>
            </div>
          </div>

          <!-- Tools Tab -->
          <div v-show="activeTab === 2" class="animate-fade-in">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 pb-8">
              <div v-for="(item, index) in tools" :key="item.id" 
                   class="animate-fade-in-scale"
                   :style="{ animationDelay: index * 0.05 + 's' }">
                <div class="relative flex flex-col gap-3 p-5 bg-zinc-900/60 border border-zinc-700 rounded-xl cursor-pointer transition-all duration-400 overflow-hidden h-full group hover:bg-zinc-800/80 hover:border-purple-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20">
                  <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div class="relative flex items-center justify-center w-full h-16 bg-zinc-700/30 rounded-xl transition-all duration-400 group-hover:bg-purple-500/15 group-hover:scale-105">
                    <img :src="item.imageUrl" :alt="item.name" class="w-10 h-10 object-contain transition-transform duration-400 group-hover:scale-110 group-hover:rotate-6" />
                  </div>
                  
                  <div class="flex-1 z-10">
                    <div class="text-base font-semibold text-white transition-all duration-300 group-hover:text-purple-300">{{ item.name }}</div>
                    <div class="text-sm text-zinc-400 transition-all duration-300 group-hover:text-purple-400">{{ item.status }}</div>
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
        { icon: '🎓', label: 'Education', value: 'SMK Informatika Pesat' },
        { icon: '💻', label: 'Major', value: 'Software Engineering' },
        { icon: '📍', label: 'Location', value: 'Jakarta, Indonesia' },
        { icon: '🎯', label: 'Focus', value: 'Web Development' }
      ],
      socialLinks: [
        { name: 'GitHub', icon: '💻' },
        { name: 'LinkedIn', icon: '💼' },
        { name: 'Email', icon: '✉️' }
      ],
      tech: [
        { id: 1, name: 'HTML', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png', status: 'Advanced' },
        { id: 2, name: 'CSS', imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png', status: 'Advanced' },
        { id: 3, name: 'PHP', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png', status: 'Advanced' },
        { id: 5, name: 'Laravel', imageUrl: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg', status: 'Advance' },
        { id: 7, name: 'VueJS', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp', status: 'Intermediate' },
        { id: 10, name: 'Tailwind', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', status: 'Advance' },
        { id: 11, name: 'Bootstrap', imageUrl: 'https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png', status: 'Intermediate' },
        { id: 12, name: 'ReactJS', imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png', status: 'Beginner' }
      ],
      tools: [
        { id: 1, name: 'Git', imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png', status: 'Version Control' },
        { id: 2, name: 'GitHub', imageUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', status: 'Git Hosting' },
        { id: 4, name: 'MySQL', imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png', status: 'Database' }
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
    }
  }
}
</script>

<style scoped>
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
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

@keyframes wave {
  0%, 100% {
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
  0%, 100% {
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