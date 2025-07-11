<template>
  <div class="container mx-auto p-3 md:p-8">

    <div class="flex flex-col relative">
      <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 fade-zoom-up">
          <!-- Card List -->
          <div
            v-for="certificate in certificates"
            :key="certificate.id"
            class="bg-[#1e1e1f] border border-[#383838] rounded-xl text-center text-white p-5 hover:bg-[#282828] transition-all transform hover:-translate-y-2 hover:shadow-2xl duration-300 ease-in-out cursor-pointer"
            @click="openModal(certificate)"
          >
            <div class="w-full mb-4">
              <img
                :src="certificate.image"
                :alt="certificate.title"
                class="rounded-lg w-full h-80 object-cover"
              />
            </div>
            <h2 class="text-purple-300 font-bold text-lg mb-2">{{ certificate.title }}</h2>
            <p class="text-sm text-slate-400">{{ certificate.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Pop Up -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    >
      <div class="bg-[#1e1e1f] rounded-xl p-6 max-w-md w-full relative animate-fadeIn">
        <button
          @click="closeModal"
          class="absolute top-2 right-2 text-white text-2xl hover:text-purple-300 transition"
        >
          &times;
        </button>
        <img
          :src="selectedCertificate.image"
          :alt="selectedCertificate.title"
          class="rounded-lg w-full h-64 object-cover mb-4"
        />
        <h2 class="text-purple-300 font-bold text-xl mb-2">{{ selectedCertificate.title }}</h2>
        <p class="text-slate-400 text-sm">{{ selectedCertificate.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      certificates: [
        {
          id: 1,
          image: '/img/certificate-ml.jpg',
          title: 'Sertifikat Juara 1 Lomba Coding',
          description: 'Juara 1 Lomba Coding Machine Learning Nasional.'
        },
        {
          id: 2,
          image: '/img/portfolio-sistekdes.png',
          title: 'Sertifikat Sistekdes',
          description: 'Penghargaan atas kontribusi pada proyek Sistekdes.'
        },
        {
          id: 3,
          image: '/img/portfolio-bumdesma.png',
          title: 'Sertifikat Bumdesma',
          description: 'Penghargaan atas kontribusi pada proyek Bumdesma.'
        },
        {
          id: 4,
          image: '/img/portfolio-portfolio_v2.png',
          title: 'Sertifikat Portfolio V2',
          description: 'Penghargaan atas pembuatan portfolio versi 2.'
        }
      ],
      showModal: false,
      selectedCertificate: {}
    }
  },
  methods: {
    openModal(certificate) {
      this.selectedCertificate = certificate
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
      this.selectedCertificate = {}
    }
  }
}
</script>

<style scoped>
@keyframes fadeZoomUp {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.fade-zoom-up {
  animation: fadeZoomUp 1s ease-in-out;
}

/* Animasi Modal */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}
</style>