<script setup>
import { onMounted, onUnmounted } from 'vue'

const skills = [
  { name: 'JavaScript', icon: 'fab fa-js-square js-icon', percent: 80 },
  { name: 'Python', icon: 'fab fa-python python-icon', percent: 75 },
  { name: 'HTML5', icon: 'fab fa-html5 html-icon', percent: 90 },
  { name: 'CSS3 / Flexbox', icon: 'fab fa-css3-alt css-icon', percent: 85 },
  { name: 'Git & Bash', icon: 'fab fa-git-alt git-icon', percent: 80 },
  { name: 'Linux / Core Programming', icon: 'fas fa-terminal linux-icon', percent: 70 },
]

let observer

onMounted(() => {
  const heroSection = document.querySelector('.hero')
  const orb1 = document.querySelector('.orb-1')
  const orb2 = document.querySelector('.orb-2')

  if (!heroSection || !orb1 || !orb2) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          orb1.style.animation = 'none'
          orb2.style.animation = 'none'
          void orb1.offsetHeight
          void orb2.offsetHeight
          orb1.style.animation = 'moveOrb1 1.5s ease-out forwards'
          orb2.style.animation = 'moveOrb2 1.5s ease-out forwards'
        }
      })
    },
    { threshold: 0.5 }
  )

  observer.observe(heroSection)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Hi, I'm <span class="highlight">Stephan Bennett</span></h1>
      <h2>Software Developer in Training</h2>
      <p>Building clean, responsive web applications and full-stack software solutions.</p>
    </div>
  </section>

  <section id="skills" class="section bg-light">
    <h2 class="section-title">Technical Stack</h2>
    <div class="skills-grid">
      <div v-for="skill in skills" :key="skill.name" class="skill-card">
        <i :class="skill.icon"></i>
        <h3>{{ skill.name }}</h3>
        <p class="skill-percent">{{ skill.percent }}%</p>
      </div>
    </div>
  </section>
</template>
