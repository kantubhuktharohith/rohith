<script setup>
import { ref } from 'vue'
import CertModal from '../components/CertModal.vue'

const modalOpen = ref(false)
const selectedCert = ref('')

const hackathons = [
  {
    college: 'PSCMR College — Mind Sprint 2K25',
    badge: 'Participated',
    isWin: false,
    problem: 'Smallholder farmers and agricultural experts need a unified digital tool for weather-aware crop management, market pricing insight, and timely advisory support. Without this, farmers face decisions based on partial information, leading to irrigation mistakes, poor crop timing, and missed market opportunities.',
    solution: 'An end-to-end prototype action platform that combines weather forecasts, market pricing insights (with web scraper fallback logic), and AI-generated crop recommendations.',
    features: [
      'Farmer and Expert/Admin authentication views',
      'Real-time weather recommendations & forecast widget',
      'Market price trends with offline fallback data support',
      'AI-driven advisories for customized crop activities',
      'Add new farm grids and track historical logs',
      'English / Hindi dual language accessibility support',
    ],
    cert: 'certs/cert1.jpg',
  },
  {
    college: 'BVC Engineering College — HackMelaa 2026',
    badge: 'Won 8th Position',
    isWin: true,
    problem: 'A prototype web application for surfacing misinformation risk signals rather than claiming absolute truth. The goal is to help users quickly understand whether content is likely risky, biased, or misleading by presenting risk scores.',
    solution: 'Misinformation Risk Signal Analyzer — a centralized interface allowing text/URL input that breaks down reputation signals, language patterns, and fact-checking database hits.',
    features: [
      'Unified text search bar accepts both raw text or URLs',
      'Risk Meter visual indicator with color-coded safety margins',
      'Fact-Check Match cards matching source trust ratings',
      'Plain-language explanation of risk factors',
      'Clean trust-tech dashboard styling',
    ],
    cert: 'certs/cert2.jpg',
  },
  {
    college: 'Lendi Institute — Hacktriad 2.0 (LNIT 2k26)',
    badge: 'Participated',
    isWin: false,
    problem: 'Rural tourism lacks discovery and booking tools. Local village hosts struggle to list and manage stays, food experiences, and bookings, while travelers want sustainable travel choices.',
    solution: 'Village Vibrance Hub — booking and discovery portal for rural destinations, home stays, local tours, budget planners, and local impact metrics.',
    features: [
      'Destination guides with tourist spot details',
      'Experience bookings for rooms, native food dishes, and local tours',
      'Secure checkout process with visual confirmation checks',
      'Traveler profiles tracking support points and local trust levels',
      'Admin portal for village representatives to list listings',
    ],
    cert: 'certs/cert3.jpg',
  },
  {
    college: 'NRI Institute of Technology — Tech Arena 2026',
    badge: 'Participated',
    isWin: false,
    problem: 'Securing online exams is challenging. Remote test candidates bypass basic page checks to view other tabs or utilize other devices, necessitating tamper-resistant proctoring.',
    solution: 'Exam Guard Pro — secure exam interface that locks the exam screen, uses webcam face verification, and checks audio status to flag suspicious activity.',
    features: [
      'Candidate identity verification via photo capture check-in',
      'Strict browser lockdown (full-screen forces, disable copy-paste)',
      'Continuous webcam/audio stream check for proctor visibility',
      'Tab-switching and multi-face cheating alert trigger metrics',
      'Admin dashboard to manage tests and audit tamper logs',
    ],
    cert: 'certs/cert4.jpg',
  },
]

const handleOpenCert = (certPath) => {
  selectedCert.value = certPath
  modalOpen.value = true
}
</script>

<template>
  <div class="hackathons-list">
    <div
      v-for="(h, i) in hackathons"
      :key="h.college"
      class="hackathon-card"
      v-reveal="i * 0.1"
    >
      <div class="hackathon-header">
        <h3 class="hackathon-college">
          <i class="fas fa-university" style="margin-right: 8px; color: var(--accent);"></i>
          {{ h.college }}
        </h3>
        <span v-if="h.isWin" class="hackathon-win">
          <i class="fas fa-trophy"></i> {{ h.badge }}
        </span>
        <span v-else class="hackathon-badge">{{ h.badge }}</span>
      </div>

      <div class="hackathon-detail">
        <h4 class="detail-label">
          <i class="fas fa-exclamation-circle"></i> Problem Statement
        </h4>
        <p>{{ h.problem }}</p>
      </div>

      <div class="hackathon-detail">
        <h4 class="detail-label">
          <i class="fas fa-lightbulb"></i> Solution
        </h4>
        <p>{{ h.solution }}</p>
      </div>

      <div class="hackathon-detail">
        <h4 class="detail-label">
          <i class="fas fa-star"></i> Key Features
        </h4>
        <ul class="hackathon-features">
          <li v-for="(f, idx) in h.features" :key="idx">{{ f }}</li>
        </ul>
      </div>

      <div class="hackathon-cert-btn" @click="handleOpenCert(h.cert)">
        <i class="fas fa-certificate"></i>
        <span>View Certificate of Participation</span>
      </div>
    </div>

    <CertModal
      :is-open="modalOpen"
      :image-src="selectedCert"
      @close="modalOpen = false"
    />
  </div>
</template>
