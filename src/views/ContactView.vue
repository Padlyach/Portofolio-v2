<template>
  <main class="mt-10 flex flex-col items-center justify-center min-h-[65vh] px-6">
    <div class="flex flex-col md:flex-row gap-8 p-8 rounded-2xl shadow-xl max-w-4xl w-full bg-[#1e1e1f] border border-[#383838] fadein-up">
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
         <div class="flex items-center gap-3 border border-purple-600 rounded-lg p-4 bg-white mt-10">
            <i class="fas fa-envelope text-purple-600 text-xl"></i>
            <span class="text-gray-700 break-words">fadhlyach2007@gmail.com</span>
          </div>
           <div class="flex items-center gap-3 border border-purple-600 rounded-lg p-4 bg-white">
            <i class="fas fa-phone text-purple-600 text-xl"></i>
            <span class="text-gray-700">+62 857-7290-0719</span>
          </div>
         
        </form>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  name: "ContactSection",
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      alert("Form berhasil dikirim!");
      // Reset form jika perlu
      this.email = '';
      this.password = '';
    }
  }
}
</script>

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

.fab, .fas {
  transition: color 0.3s ease;
}
.fab:hover, .fas:hover {
  color: #9b4f96;
}
</style>
