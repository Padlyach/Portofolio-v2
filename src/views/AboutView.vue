<script>
export default {
  data() {
    return {
      activeTab: 1,
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
  }
}
</script>

<template>
  <!-- ABOUT ME -->
  <div class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-purple-100 mx-3 mb-5">
    <article data-page="about">
      <header>
        <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
          About Me &nbsp;
          <div class="h-[1px] w-32 bg-purple-300 md:w-96 aos-init aos-animate" data-aos="zoom-in-left" data-aos-duration="600"></div>
        </div>
      </header>

      <section class="text-sm text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:items-center py-4">
  <div class="flex justify-center">
    <img class="w-32 md:w-40 rounded-full fadein-up border-2 border-purple-300 pict" src="../assets/hitam.jpg" alt="Foto">
  </div>
  <div class="md:w-8/12 space-y-4 fadein-left">
    <p class="text-gray-300 leading-relaxed fadeins-1">
      Nama saya <span class="font-semibold text-purple-300">Fadhly Achmad</span>, seorang siswa di 
      <span class="font-semibold text-purple-300">SMK Informatika Pesat</span> jurusan 
      <span class="font-semibold text-purple-300">Rekayasa Perangkat Lunak (RPL)</span>. 
      Saya antusias dengan dunia teknologi dan pengembangan perangkat lunak.
    </p>

    <p class="text-gray-300 leading-relaxed fadeins-2">
      Saya menikmati tantangan memecahkan masalah melalui teknologi, dan terus belajar 
      meningkatkan keterampilan pemrograman. Saya percaya teknologi mampu membawa perubahan positif, 
      dan saya senang ikut berkontribusi melalui proyek web dan perangkat lunak yang saya kembangkan.
    </p>
  </div>
</section>

    </article>
  </div>

  <!-- SKILLS -->
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-purple-100 mx-3">
    <article data-page="about">
      <header>
        <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
          <div class="h-[1px] w-10 bg-purple-300 md:w-20 aos-init aos-animate" data-aos="zoom-in-left" data-aos-duration="600"></div>
          &nbsp; Skills
        </div>
      </header>

      <section>
        <div>
          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-5">
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{ 'text-purple-300 bg-purple-300 bg-opacity-10': activeTab === 1 }"
                @click="activeTab = 1">Tech Stack</button>
            </li>
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{ 'text-purple-300 bg-purple-300 bg-opacity-10': activeTab === 2 }"
                @click="activeTab = 2">Tools</button>
            </li>
          </ul>
        </div>

        <div v-show="activeTab === 1">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in tech" :key="item.id">
              <div class="item-tech flex cursor-pointer items-center gap-2 rounded border border-purple-300 px-2 py-2 hover:bg-purple-300 hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img :src="item.imageUrl" :alt="item.name" loading="lazy" width="32" height="32" decoding="async"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0">{{ item.name }}</div>
                  <div class="status-tech opacity-0 absolute mt-5 text-[10px] text-purple-300 transition-all duration-300 md:text-xs lg:text-sm">{{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-show="activeTab === 2">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in tools" :key="item.id">
              <div class="item-tech flex cursor-pointer items-center gap-2 rounded border border-purple-300 px-2 py-2 hover:bg-purple-300 hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img :src="item.imageUrl" :alt="item.name" loading="lazy" width="32" height="32" decoding="async"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0">{{ item.name }}</div>
                  <div class="status-tech opacity-0 absolute mt-5 text-[10px] text-purple-300 transition-all duration-300 md:text-xs lg:text-sm">{{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </article>
  </div>
</template>

<style>
.pict {
  box-shadow: 0px 0px 73px -9px rgba(128, 0, 128, 0.44);
  -webkit-box-shadow: 0px 0px 73px -9px rgba(128, 0, 128, 0.44);
  -moz-box-shadow: 0px 0px 73px -9px rgba(128, 0, 128, 0.44);
}

.fadein-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
}
@keyframes fadeInLeft {
  0% { opacity: 0; transform: translateX(100%); }
  100% { opacity: 1; transform: translateX(0); }
}
.fadeins-1 { animation-delay: 500ms; }
.fadeins-2 { animation-delay: 800ms; }
.img-tech, .tech { transition: transform 0.3s ease; }
.item-tech:hover .img-tech { transform: scale(1.3); }
.item-tech:hover .tech { transform: translateY(-12px); }
.item-tech:hover .status-tech { opacity: 1; }
</style>
