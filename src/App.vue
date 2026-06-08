<script setup>
import { ref, watch } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import './App.css'

const showResume = ref(false)
const resumeURL = '/Rohith_Kantubhuktha_Resume.pdf#toolbar=0'

watch(showResume, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <div class="main-container">
    <Navbar @open-resume="showResume = true" />
    <main style="flex-grow: 1; margin-bottom: 200px;">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />

    <!-- Resume Modal Overlay -->
    <div v-if="showResume" class="resume-modal-overlay" @click.self="showResume = false">
      <div class="resume-modal-content">
        <div class="resume-modal-header">
          <a :href="resumeURL.split('#')[0]" download class="resume-modal-btn download-btn">
            <i class="fas fa-download"></i> Download PDF
          </a>
          <button @click="showResume = false" class="resume-modal-btn close-btn">
            <i class="fas fa-times"></i> Close
          </button>
        </div>
        <div class="resume-modal-body">
          <iframe :src="resumeURL" class="resume-modal-iframe" title="Rohith Kantubhuktha Resume"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
