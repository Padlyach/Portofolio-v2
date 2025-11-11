<template>
  <div class="max-w-7xl mx-auto px-5 md:px-12 py-8">
   

    <div class="flex flex-col gap-8">
      <div
        v-for="(certificate, index) in certificates"
        :key="certificate.id"
        class="group relative bg-zinc-800/90 border border-zinc-700 rounded-2xl overflow-hidden transition-all duration-500 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 animate-fade-in-up"
        :style="{ animationDelay: index * 0.15 + 's' }">
        
        <div class="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        <div class="absolute top-4 left-4 z-20 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/50">
          {{ certificate.id }}
        </div>

        

        <div class="p-6 md:p-8">
          <div v-if="certificate.image2" class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div class="relative group/img overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 aspect-[4/3]">
              <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent z-10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
              <img
                :src="certificate.image1"
                :alt="certificate.title + ' - Certificate 1'"
                class="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
              />
              <div class="absolute bottom-4 left-4 z-20 opacity-0 group-hover/img:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/img:translate-y-0">
                <span class="px-4 py-2 bg-zinc-900 text-white text-sm font-semibold rounded-lg border border-zinc-700 shadow-xl">
                  Certificate 1
                </span>
              </div>
            </div>

            <div class="relative group/img overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 aspect-[4/3]">
              <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent z-10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
              <img
                :src="certificate.image2"
                :alt="certificate.title + ' - Certificate 2'"
                class="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
              />
              <div class="absolute bottom-4 left-4 z-20 opacity-0 group-hover/img:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/img:translate-y-0">
                <span class="px-4 py-2 bg-zinc-900 text-white text-sm font-semibold rounded-lg border border-zinc-700 shadow-xl">
                  Certificate 2
                </span>
              </div>
            </div>
          </div>

          <div v-else class="mb-6">
            <div class="relative group/img overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 mx-auto max-w-4xl aspect-[16/10]">
              <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent z-10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
              <img
                :src="certificate.image1"
                :alt="certificate.title + ' - Certificate'"
                class="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
              />
              <div class="absolute bottom-4 left-4 z-20 opacity-0 group-hover/img:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/img:translate-y-0">
                <span class="px-4 py-2 bg-zinc-900 text-white text-sm font-semibold rounded-lg border border-zinc-700 shadow-xl">
                  Official Certificate
                </span>
              </div>
            </div>
          </div>

          <div class="relative z-10 border-t border-zinc-800 pt-6">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-1 h-8 bg-purple-500 rounded-full"></div>
                  <h2 class="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {{ certificate.title }}
                  </h2>
                </div>
                <p class="text-sm md:text-base text-zinc-400 leading-relaxed pl-3">
                  {{ certificate.description }}
                </p>
                
                <div class="flex flex-wrap gap-3 mt-4 pl-3">
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/50 border border-zinc-700 rounded-lg text-xs text-zinc-300">
                    <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Verified</span>
                  </div>
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/50 border border-zinc-700 rounded-lg text-xs text-zinc-300">
                    <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Completed</span>
                  </div>
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/50 border border-zinc-700 rounded-lg text-xs text-zinc-300">
                    <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>{{ certificate.year }}</span> </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // currentYear tidak lagi digunakan untuk per item, tapi masih bisa dipakai di header jika mau
      currentYear: new Date().getFullYear(),
      certificates: [
        {
          id: 1,
          year: 2023, // Tahun disesuaikan di sini
          image1: '/img/wanteknologi1.jpg',
          image2: '/img/wanteknologi2.jpg',
          title: 'Sertifikasi Kompetensi Membuat Landing Page Dengan HTML dan CSS',
          description: 'Penerapan teknik formatting, penerapan teknik layouting, dan penerapan hyperlink.',
        },  
        {
          id: 2,
          year: 2024,   
          image1: '/img/dimensikreyasi2.jpg',
          image2: '/img/dimensikreyasi.jpg',
          title: 'Sertifikasi Kompetensi Membangun Website Library Management dengan Framework Laravel',
          description: 'Penghargaan atas kontribusi dalam pengembangan sistem Bumdesma dari Kreasi Media. Membangun platform digital untuk mendukung ekonomi desa melalui teknologi informasi.'
        },
        {
          id: 3,
          year: 2024, // Tahun disesuaikan di sini
          image1: '/img/kreasimedia1.jpg',
          image2: '/img/kreasimedia2.jpg',
          title: 'Sertifikasi Kompetensi Membangun Website Library Management dengan Framework Laravel',
          description: 'Membuat Authentication dengan Library Breeze, Merancang Database dengan MySQL pada Pemrograman Framework Laravel, dan Membuat Interface Website dengan Tailwind CSS.'
        },
       
        {
          id: 4,
          year: 2025,// Tahun disesuaikan di sini
          image1: '/img/ginvo1.jpg',
          image2: '/img/ginvo2.jpg',
          title: 'Sertifikasi Kompetensi Membangun Fullstack Mobile App dengan Framework React Native dan Laravel',
          description: 'Frontend: Styling menggunakan TWRNC, Fetching API dari Backend Laravel, Fetching API NewsAPI, dan Fetching API Public. Backend: Membuat RESTful API dengan Laravel, Autentikasi menggunakan Sanctum, dan CRUD Resource API.',
        },
        {
          id: 5,
          year: 2023, // Tahun disesuaikan di sini
          image1: '/img/zeropelanggaran.jpg',
          title: 'Sertifikat Penghargaan Siswa/Siswi Kategori Zero Pelanggaran',
          description: 'Diberikan atas Pencapaiannya Menjadi Siswa/Siswi dengan Kategori Zero Pelanggaran pada Semester Ganjil Tahun Pelajaran 2024/2025.',
        }
      ]
    }
  },
  computed: {
    // Properti computed untuk mencari tahun terbaru, untuk stat di header
    latestYear() {
      if (this.certificates.length === 0) return this.currentYear;
      return Math.max(...this.certificates.map(c => c.year));
    }
  },
  methods: {
    viewCertificate(certificate) {
      alert(`Viewing: ${certificate.title}`);
      // Bisa ditambahkan modal atau redirect ke halaman detail
    },
    getWebDevCount() {
      return this.certificates.filter(c => 
        c.title.toLowerCase().includes('html') || 
        c.title.toLowerCase().includes('css') ||
        c.title.toLowerCase().includes('website')
      ).length;
    },
    getProjectCount() {
      return this.certificates.filter(c => 
        c.title.toLowerCase().includes('sistekdes') || 
        c.title.toLowerCase().includes('bumdesma')
      ).length;
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

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out both;
}

.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-stops));
}
</style>