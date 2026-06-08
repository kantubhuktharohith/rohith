<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const timeStr = ref('')

const updateTime = () => {
  const options = {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }
  
  const timeFormatter = new Intl.DateTimeFormat('en-US', options)
  const parts = timeFormatter.formatToParts(new Date())
  const hour = parts.find(p => p.type === 'hour').value
  const minute = parts.find(p => p.type === 'minute').value
  const second = parts.find(p => p.type === 'second').value
  
  timeStr.value = `${hour}:${minute}:${second} IST`
}

let interval = null

onMounted(() => {
  updateTime()
  interval = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <footer class="footer" v-reveal>
    <div class="footer-top">
      <h2 class="footer-title">Find me here ~</h2>
      <div class="footer-clock">{{ timeStr }}</div>
    </div>
    <div class="footer-grid">
      <div class="footer-item">
        <h3>GitHub</h3>
        <a href="https://github.com/kantubhuktharohith" target="_blank" rel="noreferrer">
          @kantubhuktharohith
        </a>
      </div>
      <div class="footer-item">
        <h3>X (Twitter)</h3>
        <a href="https://x.com/Rohith_05_19" target="_blank" rel="noreferrer">
          @Rohith_05_19
        </a>
      </div>
      <div class="footer-item">
        <h3>LinkedIn</h3>
        <a href="https://www.linkedin.com/in/rohith-kantubhuktha-a3830b365" target="_blank" rel="noreferrer">
          @rohith
        </a>
      </div>
      <div class="footer-item">
        <h3>Email</h3>
        <a href="mailto:kantubhuktharohith@gmail.com">
          @rohith
        </a>
      </div>
      <div class="footer-item">
        <h3>Discord</h3>
        <a href="https://discord.com/rohith07956" target="_blank" rel="noreferrer">
          @rohith
        </a>
      </div>
    </div>
  </footer>
</template>
