<script setup>
import { ref, onMounted } from 'vue'

const categories = [
  {
    title: 'Languages',
    skills: ['C', 'C++', 'Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript',  'HTML' ,'CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'Supabase', 'APIs'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git & GitHub', 'Postman', 'Stripe', 'Vercel / Netlify', 'REST APIs'],
  },
]

const stats = ref([
  { target: 5, suffix: '+', label: 'Projects', val: 0 },
  { target: 8, suffix: '+', label: 'Tech Stack', val: 0 },
  { target: 5, suffix: '+', label: 'Certs', val: 0 },
  { target: 4, suffix: '', label: 'Hackathons', val: 0 }
])

const statsGridRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateNumbers()
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  if (statsGridRef.value) {
    observer.observe(statsGridRef.value)
  }
})

const animateNumbers = () => {
  stats.value.forEach((stat) => {
    let start = 0
    const end = stat.target
    const duration = 1000 // 1 second
    const stepTime = Math.max(Math.floor(duration / end), 40)
    
    const timer = setInterval(() => {
      start += 1
      stat.val = start
      if (start >= end) {
        clearInterval(timer)
      }
    }, stepTime)
  })
}
</script>

<template>
  <div class="skills-container">
    <div
      v-for="(cat, i) in categories"
      :key="cat.title"
      class="skills-category"
      v-reveal="i * 0.1"
    >
      <h2 class="category-title">{{ cat.title }}</h2>
      <div class="skill-tags">
        <span
          v-for="skill in cat.skills"
          :key="skill"
          class="skill-tag"
        >
          {{ skill }}
        </span>
      </div>
    </div>

    <div ref="statsGridRef" class="stats-grid" v-reveal="0.3">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="stat-card"
      >
        <div class="stat-number">{{ stat.val }}{{ stat.suffix }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
  </div>
</template>
