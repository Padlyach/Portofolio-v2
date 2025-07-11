import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

const app = createApp(App)

// Add Intersection Observer for smooth section animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, observerOptions)

app.mount('#app')

// Observe all sections for animation
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section')
  sections.forEach(section => observer.observe(section))
})


