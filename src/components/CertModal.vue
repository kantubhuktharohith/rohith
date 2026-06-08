<script setup>
import { watch, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  imageSrc: String
})

const emit = defineEmits(['close'])

const handleKeyDown = (e) => {
  if (e.key === 'Escape') {
    emit('close')
  }
}

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden' // Prevent page scrolling under modal
  } else {
    window.removeEventListener('keydown', handleKeyDown)
    document.body.style.overflow = ''
  }
}, { immediate: true })

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <transition name="modal-fade">
      <div v-if="isOpen" class="cert-modal-overlay" @click="emit('close')">
        <div class="cert-modal-content" @click.stop>
          <button class="cert-modal-close" @click="emit('close')" aria-label="Close certificate">
            ✕
          </button>
          <img :src="imageSrc" alt="Certificate Lightbox" class="cert-modal-img" />
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .cert-modal-content {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-fade-leave-active .cert-modal-content {
  transition: transform 0.2s ease-in;
}

.modal-fade-enter-from .cert-modal-content,
.modal-fade-leave-to .cert-modal-content {
  transform: scale(0.92);
}
</style>
