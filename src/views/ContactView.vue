<template>
  <main class="mt-10 flex flex-col items-center justify-center min-h-[65vh] px-6">
    <div class="flex flex-col md:flex-row gap-8 p-8 rounded-2xl shadow-xl max-w-4xl w-full bg-[#1e1e1f] border border-[#383838]  fadein-up">
      <!-- Left: Photo & Description -->
      <div class="flex flex-col items-center justify-center md:w-2/5 px-4">
        <img
          src="../assets/hitam.jpg"
          alt="Profile Photo"
          class="w-32 h-32 rounded-full mb-4 border-4 border-purple-300 pict"
        />
        <p class="text-white px-2 text-center">
          Hi, Saya <span class="font-semibold text-white">Fadhly Achmad</span>, jika anda ingin menghubungi saya, ini contact saya.
        </p>
      </div>

      <!-- Right: Contact Form -->
      <div class="md:w-3/5 px-4">
        <form @submit.prevent="submitForm" class="space-y-5">
          <div>
            <label class="block text-sm font-medium text-purple-600 mb-1">Email</label>
            <input
              type="email"
              v-model="email"
              placeholder="example@gmail.com"
              required
              class="w-full px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-purple-600 mb-1">Password</label>
            <input
              type="password"
              v-model="password"
              placeholder="Your password"
              required
              class="w-full px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <button
            type="submit"
            class="w-full py-2 px-4 bg-white hover:bg-gray-100 text-purple-600 font-semibold rounded-md transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>

    <!-- Additional Contact Info -->
    <div class="mt-8 flex justify-center w-full px-6">
      <div class="flex flex-col gap-4 p-6 rounded-2xl shadow-xl max-w-4xl w-full bg-[#1e1e1f] border border-[#383838] fadein-up">
        <h2 class="text-2xl font-bold text-center text-purple-600 mb-4">Contact</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="flex items-center gap-3 border border-purple-600 rounded-lg p-4 bg-white">
            <i class="fas fa-envelope text-purple-600 text-xl"></i>
            <span class="text-gray-700 break-words">fadhlyach2007@gmail.com</span>
          </div>
          <div class="flex items-center gap-3 border border-purple-600 rounded-lg p-4 bg-white">
            <i class="fas fa-phone text-purple-600 text-xl"></i>
            <span class="text-gray-700">+62 857-7290-0719</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.pict {
  box-shadow: 0px 0px 73px -9px rgba(128, 0, 128, 0.44);
  -webkit-box-shadow: 0px 0px 73px -9px rgba(128, 0, 128, 0.44);
  -moz-box-shadow: 0px 0px 73px -9px rgba(128, 0, 128, 0.44);
}


.fadein-up {
  opacity: 0;
  animation-name: fadeInUp;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 300ms;
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

/* Hover effect untuk icon */
.fab, .fas {
  transition: color 0.3s ease;
}
.fab:hover, .fas:hover {
  color: #9b4f96;
}

/* Mengatur lebar dan padding */
.max-w-4xl {
  max-width: 50rem;
}

.p-8 {
  padding: 2rem;
}

.p-6 {
  padding: 1.5rem;
}

.mt-8 {
  margin-top: 2rem;
}

.gap-6 {
  gap: 1.5rem;
}

.gap-4 {
  gap: 1rem;
}
</style>
