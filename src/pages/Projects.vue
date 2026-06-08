<script setup>
const projects = [
  {
    title: 'Amrita Study Hub',
    tags: ['React', 'Supabase', 'TypeScript'],
    desc: 'A collaborative study platform for students with authentication, resource sharing, and real-time features powered by Supabase backend services.',
    live: 'https://amritasai-study-hub.vercel.app/',
    code: 'https://github.com/kantubhuktharohith/amrita-study-hub',
  },
  {
    title: 'GreenCart E-Commerce',
    tags: ['React', 'Node.js', 'Stripe'],
    desc: 'Full-stack e-commerce platform with Stripe payment integration, user authentication, and a responsive shopping cart checkout experience.',
    live: 'https://greencart-4y4c.vercel.app/',
    code: 'https://github.com/kantubhuktharohith/greencart',
  },
  {
    title: 'Cryptocurrency Tracker',
    tags: ['React', 'API', 'JavaScript'],
    desc: 'A real-time cryptocurrency tracking dashboard with live price updates, market reports, and interactive charts for popular coins.',
    live: 'https://cryptocurrencytrackerreport.netlify.app/',
    code: 'https://github.com/kantubhuktharohith/crypto',
  },
  {
    title: 'Travel Planner',
    tags: ['React', 'Node.js', 'API'],
    desc: 'A smart travel planning application to organize trips, explore destinations, manage itineraries, and discover local travel experiences.',
    live: 'https://travel-planner-kb7x.onrender.com/',
    code: 'https://github.com/kantubhuktharohith/Travel-planner',
  },
]
</script>

<template>
  <div>
    <div class="projects-grid">
      <div
        v-for="(p, i) in projects"
        :key="p.title"
        class="project-card"
        v-reveal="i * 0.1"
      >
        <div class="project-header">
          <h3 class="project-title">{{ p.title }}</h3>
          <div class="project-links">
            <a
              :href="p.live"
              target="_blank"
              rel="noreferrer"
              class="project-icon-link"
              aria-label="View Live Site"
            >
              <i class="fas fa-external-link-alt"></i>
            </a>
            <a
              :href="p.code"
              target="_blank"
              rel="noreferrer"
              class="project-icon-link"
              aria-label="View Code on GitHub"
              style="margin-left: 10px;"
            >
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        
        <p class="project-desc">{{ p.desc }}</p>
        
        <div class="project-tags">
          <span
            v-for="tag in p.tags"
            :key="tag"
            class="project-tag"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
    
    <a
      href="https://github.com/kantubhuktharohith"
      target="_blank"
      rel="noreferrer"
      class="projects-more-link"
      v-reveal="0.4"
    >
      view all on github ~
    </a>
  </div>
</template>
