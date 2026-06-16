<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const emit = defineEmits(['open-resume'])

const isPlaying = ref(false)
let audio = null
const audioURL = 'https://raw.githubusercontent.com/jigardave8/pro_contentfiles/main/piano-and-beat-120539.mp3'

const toggleMusic = () => {
  if (!audio) {
    audio = new Audio(audioURL)
    audio.loop = true
    audio.volume = 0.25
  }

  if (isPlaying.value) {
    audio.pause()
    isPlaying.value = false
    removeInteractionListeners()
  } else {
    removeInteractionListeners()
    audio.play().then(() => {
      isPlaying.value = true
    }).catch(err => {
      console.log("Play failed: ", err)
    })
  }
}

const handleKeyDown = (e) => {
  // Don't trigger shortcuts if user is typing in form fields
  if (
    document.activeElement.tagName === 'INPUT' ||
    document.activeElement.tagName === 'TEXTAREA'
  ) {
    return
  }

  switch (e.key.toLowerCase()) {
    case 'h':
      router.push('/')
      break
    case 's':
      router.push('/skills')
      break
    case 'k':
      router.push('/hackathons')
      break
    case 'p':
      router.push('/projects')
      break
    case 'c':
      router.push('/contact')
      break
    case 'r':
      emit('open-resume')
      break
    case 'm':
      toggleMusic()
      break
  }
}

const startAutoplay = () => {
  if (!audio) {
    audio = new Audio(audioURL)
    audio.loop = true
    audio.volume = 0.25
  }
  
  if (!isPlaying.value) {
    audio.play().then(() => {
      isPlaying.value = true
      removeInteractionListeners()
    }).catch(err => {
      console.log("Autoplay failed: ", err)
    })
  }
}

const removeInteractionListeners = () => {
  document.removeEventListener('click', startAutoplay, true)
  document.removeEventListener('keydown', startAutoplay, true)
  document.removeEventListener('touchstart', startAutoplay, true)
  window.removeEventListener('scroll', startAutoplay, true)
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
  
  // Try immediate autoplay first
  if (!audio) {
    audio = new Audio(audioURL)
    audio.loop = true
    audio.volume = 0.25
  }

  audio.play().then(() => {
    isPlaying.value = true
  }).catch(err => {
    console.log("Immediate autoplay blocked, fallback to interaction listeners:", err)
    // Fallback to human interaction listeners if blocked
    document.addEventListener('click', startAutoplay, true)
    document.addEventListener('keydown', startAutoplay, true)
    document.addEventListener('touchstart', startAutoplay, true)
    window.addEventListener('scroll', startAutoplay, true)
  })
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  removeInteractionListeners()
  if (audio) {
    audio.pause()
    audio = null
  }
})
</script>

<template>
  <nav class="navbar">
    <ul class="nav-list">
      <li>
        <router-link to="/" class="nav-link" exact-active-class="active">
          <span class="nav-key">[h]</span> home
        </router-link>
      </li>
      <li>
        <router-link to="/skills" class="nav-link" active-class="active">
          <span class="nav-key">[s]</span> skills
        </router-link>
      </li>
      <li>
        <router-link to="/hackathons" class="nav-link" active-class="active">
          <span class="nav-key">[k]</span> hackathons
        </router-link>
      </li>
      <li>
        <router-link to="/projects" class="nav-link" active-class="active">
          <span class="nav-key">[p]</span> projects
        </router-link>
      </li>
      <li>
        <router-link to="/contact" class="nav-link" active-class="active">
          <span class="nav-key">[c]</span> contact
        </router-link>
      </li>
      <li>
        <a href="#" @click.prevent="emit('open-resume')" class="nav-link">
          <span class="nav-key">[r]</span> resume
        </a>
      </li>
    </ul>
  </nav>

  <!-- Floating Music Toggle in Bottom-Right Corner -->
  <button 
    class="floating-music-btn" 
    :class="{ 'is-playing': isPlaying }" 
    @click="toggleMusic"
    aria-label="Toggle Background Music"
  >
    <span class="music-btn-key">[m]</span>
    <div class="music-icon-container">
      <i class="fas fa-music" :class="{ 'pulse-icon': isPlaying }"></i>
      <div v-if="!isPlaying" class="music-slash"></div>
    </div>
  </button>
</template>
