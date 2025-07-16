<template>
  <div class="container mx-auto px-4 py-6 md:px-8 md:py-10">
    <div class="flex flex-col gap-6">
      <div
        v-for="certificate in certificates"
        :key="certificate.id"
        class="bg-[#1e1e1f] border border-[#383838] rounded-xl text-white p-6 hover:bg-[#282828] transition-all transform hover:-translate-y-2 hover:shadow-2xl duration-300 ease-in-out"
      >
        <!-- Jika ada 2 gambar -->
        <div v-if="certificate.image2" class="flex flex-col lg:flex-row gap-4 items-center">
          <img
            :src="certificate.image1"
            :alt="certificate.title + ' - Image 1'"
            class="rounded-lg w-full lg:w-1/2 max-h-96 object-contain"
          />
          <img
            :src="certificate.image2"
            :alt="certificate.title + ' - Image 2'"
            class="rounded-lg w-full lg:w-1/2 max-h-96 object-contain"
          />
        </div>

        <!-- Jika hanya ada 1 gambar -->
        <div v-else class="flex justify-center">
          <img
            :src="certificate.image1"
            :alt="certificate.title + ' - Image'"
            class="rounded-lg w-full md:w-2/3 max-h-[500px] object-contain"
          />
        </div>

        <!-- Text Section -->
        <div class="mt-5 text-center lg:text-left">
          <h2 class="text-purple-300 font-bold text-xl mb-2">{{ certificate.title }}</h2>
          <p class="text-sm text-slate-400">{{ certificate.description }}</p>
        </div>
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
          image1: '/img/wanteknologi1.jpg',
          image2: '/img/wanteknologi2.jpg',
          title: 'Sertifikat Membuat Landing Page HTML & CSS',
          description: 'Sertifikat pembuatan website menggunakan HTML & CSS.',  
        },
        {
          id: 2,
          image1: '/img/ginvo1.jpg',
          image2: '/img/ginvo2.jpg',
          title: 'Sertifikat Sistekdes',
          description: 'Penghargaan atas kontribusi pada proyek Sistekdes.'
        },
        {
          id: 3,
          image1: '/img/kreasimedia1.jpg',
          image2: '/img/kreasimedia2.jpg',
          title: 'Sertifikat Bumdesma',
          description: 'Penghargaan atas kontribusi pada proyek Bumdesma.'
        },
        {
          id: 4,
          image1: '/img/zeropelanggaran.jpg',
          title: 'Sertifikat Zero Pelanggaran',
          description: 'Penghargaan atas pembuatan portfolio versi 2.'
        }
      ]
    }
  }
}
</script>
