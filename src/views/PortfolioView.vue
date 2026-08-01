<template>
  <div class="max-w-7xl mx-auto px-5 md:px-12 py-8">
    <article>
      <!-- Header Section -->
      <header class="text-center mb-12 animate-fade-in">

        <!-- Stats Cards -->
        <div class="flex flex-wrap justify-center gap-4">
          <div class="bg-zinc-900/60 border border-zinc-700 rounded-xl px-6 py-4 backdrop-blur-lg hover:border-zinc-400 hover:shadow-lg hover:shadow-white/10 transition-all duration-300">
            <div class="text-3xl font-bold bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">{{ items.length }}</div>
            <div class="text-xs text-zinc-400 mt-1">Total Projects</div>
          </div>
          <div class="bg-blue-500/10 border border-blue-400/30 rounded-xl px-6 py-4 backdrop-blur-lg hover:border-blue-400/60 hover:bg-blue-500/15 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            <div class="text-3xl font-bold bg-gradient-to-br from-blue-300 to-blue-500 bg-clip-text text-transparent">{{ frontendCount }}</div>
            <div class="text-xs text-zinc-400 mt-1">Frontend</div>
          </div>
          <div class="bg-green-500/10 border border-green-400/30 rounded-xl px-6 py-4 backdrop-blur-lg hover:border-green-400/60 hover:bg-green-500/15 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
            <div class="text-3xl font-bold bg-gradient-to-br from-green-300 to-green-500 bg-clip-text text-transparent">{{ fullstackCount }}</div>
            <div class="text-xs text-zinc-400 mt-1">Full Stack</div>
          </div>
        </div>
      </header>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap justify-center gap-3 mb-10">
        <button 
          @click="activeFilter = 'all'" 
          :class="[
            'flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300',
            activeFilter === 'all' 
              ? 'bg-white text-zinc-900 shadow-lg shadow-white/30 scale-105' 
              : 'bg-zinc-800/50 text-zinc-400 border border-zinc-700 hover:bg-zinc-700/50 hover:text-white hover:border-zinc-600'
          ]">
          <span class="text-lg inline-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8Z" />
              <circle cx="6.5" cy="11.5" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="9.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="14.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="17.5" cy="11.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </span>
          <span>All Projects</span>
          <span class="bg-black/10 px-2 py-0.5 rounded-full text-xs">{{ items.length }}</span>
        </button>
        
        <button 
          @click="activeFilter = 'frontend'" 
          :class="[
            'flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 backdrop-blur-md',
            activeFilter === 'frontend' 
              ? 'bg-blue-500/20 text-blue-100 border border-blue-400/50 shadow-lg shadow-blue-500/20 scale-105' 
              : 'bg-zinc-800/50 text-zinc-400 border border-zinc-700 hover:bg-blue-500/10 hover:text-blue-200 hover:border-blue-400/30'
          ]">
          <span class="text-lg inline-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
          </span>
          <span>Frontend</span>
          <span class="bg-white/10 px-2 py-0.5 rounded-full text-xs">{{ frontendCount }}</span>
        </button>
        
        <button 
          @click="activeFilter = 'fullstack'" 
          :class="[
            'flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 backdrop-blur-md',
            activeFilter === 'fullstack' 
              ? 'bg-green-500/20 text-green-100 border border-green-400/50 shadow-lg shadow-green-500/20 scale-105' 
              : 'bg-zinc-800/50 text-zinc-400 border border-zinc-700 hover:bg-green-500/10 hover:text-green-200 hover:border-green-400/30'
          ]">
          <span class="text-lg inline-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2 3 14h6l-1 8 11-14h-7l1-6z" />
            </svg>
          </span>
          <span>Full Stack</span>
          <span class="bg-white/10 px-2 py-0.5 rounded-full text-xs">{{ fullstackCount }}</span>
        </button>
      </div>

      <!-- Projects Grid -->
      <section>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
          <div 
            v-for="(item, index) in filteredItems" 
            :key="item.id" 
            class="animate-fade-in-scale"
            :style="{ animationDelay: index * 0.1 + 's' }">
            
            <div 
              @mouseenter="hoveredId = item.id" 
              @mouseleave="hoveredId = null"
              class="group relative bg-zinc-900/60 border border-zinc-700 rounded-2xl overflow-hidden transition-all duration-500 hover:border-zinc-400 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-2 h-full flex flex-col">
              
              <!-- Hover Glow Effect -->
              <div 
                :class="[
                  'absolute inset-0 bg-gradient-radial from-white/15 via-transparent to-transparent rounded-2xl opacity-0 transition-opacity duration-500 pointer-events-none',
                  hoveredId === item.id ? 'opacity-100' : ''
                ]">
              </div>

              <!-- Image Container -->
              <div class="relative h-52 overflow-hidden bg-zinc-950">
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10"></div>
                
                <img 
                  :src="'/img/portfolio-' + item.imageUrl + '.png'" 
                  :alt="item.name" 
                  loading="lazy"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                
                <!-- Category Badge -->
                <div class="absolute top-3 right-3 z-20">
                  <span :class="[
                    'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border shadow-lg',
                    item.category === 'frontend' 
                      ? 'bg-blue-500/20 text-blue-100 border-blue-400/40 shadow-blue-500/10' 
                      : 'bg-green-500/20 text-green-100 border-green-400/40 shadow-green-500/10'
                  ]">
                    <svg v-if="item.category === 'frontend'" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13 2 3 14h6l-1 8 11-14h-7l1-6z" />
                    </svg>
                    {{ item.category === 'frontend' ? 'Frontend' : 'Full Stack' }}
                  </span>
                </div>

                <!-- Project Number -->
                <div class="absolute top-3 left-3 z-20 w-10 h-10 bg-zinc-900/90 backdrop-blur-md border border-zinc-700 rounded-full flex items-center justify-center text-zinc-200 font-bold text-sm">
                  {{ item.id }}
                </div>
              </div>

              <!-- Card Content -->
              <div class="p-5 flex flex-col gap-3 flex-1 relative z-10">
                <h3 class="text-lg font-bold text-white group-hover:text-zinc-200 transition-colors duration-300 line-clamp-1">
                  {{ item.name }}
                </h3>
                
                <p class="text-sm text-zinc-400 leading-relaxed line-clamp-2 flex-1">
                  {{ item.status }}
                </p>

                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-2 pt-3 border-t border-zinc-800">
                  <span 
                    v-for="(tech, idx) in item.tech.split(',')" 
                    :key="idx" 
                    class="px-2.5 py-1 bg-zinc-800/50 border border-zinc-700 text-zinc-200 text-xs font-medium rounded-lg hover:bg-white/10 hover:border-zinc-400/50 transition-all duration-300">
                    {{ tech.trim() }}
                  </span>
                </div>

                <!-- Action Links -->
                <div class="flex gap-3 pt-4">
                  <a 
                    :href="getLink(item.github)" 
                    target="_blank" 
                    rel="noreferrer" 
                    :class="[
                      'flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300',
                      isValidLink(item.github)
                        ? 'bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600'
                        : 'bg-zinc-900 text-zinc-600 border border-zinc-800 cursor-not-allowed'
                    ]"
                    @click="handleLinkClick($event, item.github)">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Code</span>
                  </a>

                  <a 
                    :href="getLink(item.demo)" 
                    target="_blank" 
                    rel="noreferrer"
                    :class="[
                      'flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300',
                      isValidLink(item.demo)
                        ? 'bg-white text-zinc-900 shadow-lg shadow-white/30 hover:bg-zinc-200 hover:shadow-white/40'
                        : 'bg-zinc-900 text-zinc-600 border border-zinc-800 cursor-not-allowed'
                    ]"
                    @click="handleLinkClick($event, item.demo)">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredItems.length === 0" class="text-center py-20">
          <div class="flex justify-center mb-4 text-zinc-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 12h-6l-2 3h-4l-2-3H2" />
              <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z" />
            </svg>
          </div>
          <p class="text-zinc-400 text-lg">Tidak ada project dalam kategori ini</p>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeFilter: 'all',
      hoveredId: null,
      items: [
        {
          id: 1,
          name: 'Website Creative Design',
          imageUrl: 'creative',
          status: 'Project Awal Mulai Belajar HTML dan CSS, Di Pelajari Saat Semester 1 Kelas X Dengan Dampingan Guru.',
          tech: 'HTML, CSS',
          category: 'frontend',
          github: '',
          demo: ''
        },
        {
          id: 2,
          name: 'Website Fodie',
          imageUrl: 'fodie',
          status: 'Website Makanan Terbaik, Dengan Tampilan Desain Perpaduan Warna Orange Dan Putih Yang Cocok Untuk Resto.',
          tech: 'HTML, Tailwind CSS',
          category: 'frontend',
          github: '',
          demo: ''
        },
        {
          id: 3,
          name: 'Website Travel Indonesia',
          imageUrl: 'travelindo',
          status: 'Website Travel Sepulau Jawa Yang Menampilkan Tempat Wisata Atau Penginapan Terbaik, Dengan Deskripsi Jelas.',
          tech: 'Laravel 9, Bootstrap',
          category: 'fullstack',
          github: '',
          demo: ''
        },
        {
          id: 4,
          name: 'Website BNSP Hotel',
          imageUrl: 'bnsphotel',
          status: 'Website Hotel Yang di buat responsif menggunakan framwork Laravel serta database Mysql.',
          tech: 'Laravel 12 , Tailwind CSS, JS , PHP, MySQL ',
          category: 'fullstack',
          github: '',
          demo: ''
        },
        {
          id: 5,
          name: 'Website Perpustakaan Online',
          imageUrl: 'perpustakaan',
          status: 'Website Perpustakaan Online, Yang Dapat Menyimpan Data Meminjam Dan Mengembalikan Buku Dengan Sistem CRUD.',
          tech: 'Laravel , PHP, Tailwind, MySQL ',
          category: 'fullstack',
          github: '',
          demo: ''
        },
        {
          id: 6,
          name: 'Website Beasiswa',
          imageUrl: 'beasiswa',
          status: 'Website landing page untuk promosi kedai kopi lokal, desain minimalis dan modern dengan animasi smooth.',
          tech: 'Laravel 12 , Tailwind CSS , PHP, MySQL ',
          category: 'fullstack',
          github: 'https://github.com/Padlyach/JWD-BEASISWA',
          demo: ''
        },
        {
          id: 7,
          name: 'Website Hotel Palem',
          imageUrl: 'hotelpalem',
          status: 'Versi pertama portfolio pribadi dengan HTML dan CSS dasar. Project pembelajaran fundamental web development.',
          tech: 'Laravel 12 , Tailwind CSS, JS , PHP, MySQL ',
          category: 'fullstack',
          github: 'https://github.com/Padlyach/JWD-HOTELAN',
          demo: ''
        },
        {
          id: 8,
          name: 'Website Library',
          imageUrl: 'library',
          status: 'Website toko online sederhana dengan fitur cart, checkout, payment gateway, dan admin dashboard lengkap.',
          tech: 'Laravel 12 , Tailwind CSS, JS , PHP, MySQL ',
          category: 'fullstack',
          github: '',
          demo: ''
        },
        {
          id: 9,
          name: 'Website PPDB SMK Pesat',
          imageUrl: 'ppdbsmkpesat',
          status: 'Dashboard admin responsif untuk mengelola produk, user, dan transaksi dengan charts dan analytics.',
          tech: 'Laravel 12 , Tailwind CSS, JS , PHP, MySQL ',
          category: 'fullstack',
          github: 'https://github.com/Padlyach/PPDB_FE',
          demo: ''
        },
          {
          id: 10,
          name: 'LSP STP Bogor',
          imageUrl: 'stpbogor',
          status: 'Ini Adalah Website Sekolah Pariwisata Bogor.',
          tech: 'Laravel 12 , Tailwind CSS, JS , PHP, MySQL ',
          category: 'fullstack',
          github: '',
          demo: ''
        }, 
        {
          id: 11,
          name: 'Website Music',
          imageUrl: 'websitemusic',
          status: 'Ini Adalah Website Music Dummy .',
          tech: 'VUE , Tailwind CSS, JS',
          category: 'frontend',
          github: 'https://github.com/Padlyach/WebsiteMusic',
          demo: 'https://website-music-tau.vercel.app/'
        }, 
      ]
    };
  },
  computed: {
    filteredItems() {
      if (this.activeFilter === 'all') {
        return this.items;
      }
      return this.items.filter(item => item.category === this.activeFilter);
    },
    frontendCount() {
      return this.items.filter(item => item.category === 'frontend').length;
    },
    fullstackCount() {
      return this.items.filter(item => item.category === 'fullstack').length;
    }
  },
  methods: {
    isValidLink(link) {
      return link && link !== 'null' && link !== '';
    },
    getLink(link) {
      return this.isValidLink(link) ? link : '#';
    },
    handleLinkClick(event, link) {
      if (!this.isValidLink(link)) {
        event.preventDefault();
      }
    }
  }
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-scale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-fade-in-scale {
  animation: fade-in-scale 0.6s ease-out both;
}

.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-stops));
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>