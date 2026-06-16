<script setup>
const socials = [
  {
    name: 'GitHub',
    icon: 'fab fa-github',
    url: 'https://github.com/kantubhuktharohith',
    cta: 'Explore my code & repositories',
  },
  {
    name: 'LinkedIn',
    icon: 'fab fa-linkedin-in',
    url: 'https://www.linkedin.com/in/rohith-kantubhuktha-a3830b365',
    cta: 'View my experience & credentials',
  },
  {
    name: 'X (Twitter)',
    icon: 'fab fa-x-twitter',
    url: 'https://x.com/Rohith_05_19',
    cta: 'Follow my technical insights',
  },
  {
    name: 'Email',
    icon: 'fas fa-envelope',
    url: 'mailto:kantubhuktharohith@gmail.com',
    cta: 'Inquire about opportunities',
  },
  {
    name: 'Discord',
    icon: 'fab fa-discord',
    url: 'https://discord.com/rohith07956',
    cta: 'Connect for dev collaboration',
  },
]
</script>

<template>
  <div class="contact-layout" v-reveal>
    <div class="contact-socials-section" v-reveal="0.15">
      <h2 class="contact-section-heading">Find me here</h2>
      <div class="contact-cards">
        <div
          v-for="(social, index) in socials"
          :key="social.name"
          class="contact-card-wrapper"
        >
          <!-- Small card: icon + name -->
          <a
            :href="social.url"
            target="_blank"
            rel="noreferrer"
            class="contact-card"
          >
            <div class="contact-card-icon">
              <i :class="social.icon"></i>
            </div>
            <span class="contact-card-name">{{ social.name }}</span>
          </a>

          <!-- Curvy arrow + CTA on the right -->
          <div class="contact-card-cta-area">
            <svg
              class="curvy-arrow"
              :class="'curvy-arrow--' + index"
              viewBox="0 0 100 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                :d="[
                  'M 5 30 C 20 5, 50 5, 70 25 C 80 35, 90 30, 95 30',
                  'M 5 25 C 15 50, 45 55, 65 35 C 78 22, 90 30, 95 30',
                  'M 5 35 C 25 10, 55 10, 70 30 C 80 42, 90 30, 95 30',
                  'M 5 28 C 20 55, 50 50, 68 32 C 78 22, 90 30, 95 30',
                  'M 5 32 C 18 8, 48 8, 68 28 C 80 40, 90 30, 95 30',
                ][index]"
                class="curvy-arrow-path"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                fill="none"
              />
              <polygon
                points="90,25 96,30 90,35"
                class="curvy-arrow-head"
                fill="currentColor"
              />
            </svg>
            <span class="contact-card-cta-text">{{ social.cta }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
