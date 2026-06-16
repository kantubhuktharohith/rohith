<script setup>
import { ref, onMounted } from "vue";

const heroTitle = "full stack developer";
const typedText = ref("");
const isTypingComplete = ref(false);

onMounted(() => {
  let index = 0;
  const type = () => {
    if (index < heroTitle.length) {
      typedText.value += heroTitle.charAt(index);
      index++;
      setTimeout(type, 100);
    } else {
      isTypingComplete.value = true;
    }
  };
  setTimeout(type, 600);
});
</script>

<template>
  <div>
    <div class="hero-intro" v-reveal>
      <div class="avatar-wrapper">
        <svg class="avatar-ring" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="#10b981"
            stroke-width="0.8"
            stroke-dasharray="6 8"
            stroke-linecap="round"
          />
        </svg>
        <img src="/avatar1.png" alt="Rohith Kantubhuktha" class="avatar-img" />
      </div>
      <div class="hero-meta">
        <h1 class="hero-name">Rohith</h1>
        <span class="hero-title">
          <span>{{ typedText }}</span>
          <span class="typing-cursor" v-if="!isTypingComplete"></span>
        </span>
      </div>
    </div>

    <div class="hero-bio" v-reveal="0.2">
      <div class="badge-available">
        <span class="badge-dot"></span>
        Available for opportunities
      </div>

      <p>
        I am <strong>Rohith Kantubhuktha</strong>, pursuing my 3rd year in
        Computer Science and Engineering (Big Data Analytics) at
        <strong
          >Amrita Sai Institute of Science and Technology (Autonomous)</strong
        >.
      </p>

      <p>
        I am a passionate <strong>Full Stack Developer</strong> specializing in
        the <strong>MERN stack</strong> and modern web architectures. I enjoy
        working with technologies like React, Node.js, Python, FastAPI, and
        PostgreSQL.
      </p>

      <p>
        With experience in both frontend interfaces and backend infrastructure,
        I love building applications that solve real-world problems with clean,
        efficient code and intuitive designs. Let's create something great!
      </p>
    </div>
  </div>
</template>
