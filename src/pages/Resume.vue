<script setup>
const resumeURL = '/Rohith_Kantubhuktha_Resume.pdf#toolbar=0'
</script>

<template>
  <div class="resume-page-pdf">
    <!-- Embedded PDF Document -->
    <div class="pdf-wrapper" v-reveal>
      <iframe
        :src="resumeURL"
        class="pdf-iframe"
        title="Rohith Kantubhuktha Resume"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.resume-page-pdf {
  width: 100%;
}

.pdf-wrapper {
  width: 100%;
  height: 900px;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
  background-color: var(--bg-card);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: var(--transition);
}

.pdf-wrapper:hover {
  border-color: var(--border-hover);
}

.pdf-iframe {
  width: 100%;
  height: 100%;
  border: none;
  background-color: #ffffff;
}

@media print {
  .navbar,
  .footer,
  .no-print {
    display: none !important;
  }
  
  .pdf-wrapper {
    height: 100vh !important;
    border: none !important;
    box-shadow: none !important;
  }
}
</style>
