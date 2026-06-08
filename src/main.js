import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

// Global custom directive for scroll reveals with optional staggering/delays
app.directive('reveal', {
  mounted(el, binding) {
    el.classList.add('reveal-hidden')
    
    // Check if there's a delay value passed (e.g. v-reveal="0.2" -> 0.2s delay)
    if (binding.value !== undefined) {
      const delay = typeof binding.value === 'number' ? `${binding.value}s` : binding.value
      el.style.setProperty('--reveal-delay', delay)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.remove('reveal-hidden')
          el.classList.add('reveal-visible')
          observer.unobserve(el)
        }
      })
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px'
    })
    
    // In case the browser does not support IntersectionObserver
    if (window.IntersectionObserver) {
      observer.observe(el)
    } else {
      el.classList.remove('reveal-hidden')
      el.classList.add('reveal-visible')
    }
  }
})

app.use(router)
app.mount('#root')
