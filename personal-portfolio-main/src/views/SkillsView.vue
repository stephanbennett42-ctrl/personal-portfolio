<script setup>
const skills = [
  { name: 'JavaScript', icon: 'fab fa-js-square js-icon', percent: 80 },
  { name: 'Python', icon: 'fab fa-python python-icon', percent: 75 },
  { name: 'HTML5', icon: 'fab fa-html5 html-icon', percent: 90 },
  { name: 'CSS3 / Flexbox', icon: 'fab fa-css3-alt css-icon', percent: 85 },
  { name: 'Vue.js', icon: 'fab fa-vuejs vue-icon', percent: 70 },
  { name: 'SQL', icon: 'fas fa-database sql-icon', percent: 70 },
  { name: 'Git & Bash', icon: 'fab fa-git-alt git-icon', percent: 80 },
]
</script>

<template>
  <main class="content-container">
    <section id="skills" class="section bg-light">
      <h2 class="section-title">Technical Stack</h2>
      <div class="skills-grid">
        <div v-for="skill in skills" :key="skill.name" class="skill-card">
          <i :class="skill.icon" aria-hidden="true"></i>
          <h3>{{ skill.name }}</h3>
          <p class="skill-percent">{{ skill.percent }}%</p>
        </div>
      </div>
    </section>
  </main>
</template>
