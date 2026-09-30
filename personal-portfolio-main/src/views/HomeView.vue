<script setup>
import { onMounted, onUnmounted } from 'vue'

const skills = [
  { name: 'JavaScript', icon: 'fab fa-js-square js-icon', percent: 80 },
  { name: 'Python', icon: 'fab fa-python python-icon', percent: 75 },
  { name: 'HTML5', icon: 'fab fa-html5 html-icon', percent: 90 },
  { name: 'CSS3 / Flexbox', icon: 'fab fa-css3-alt css-icon', percent: 85 },
  { name: 'Vue.js', icon: 'fab fa-vuejs vue-icon', percent: 70 },
  { name: 'SQL', icon: 'fas fa-database sql-icon', percent: 70 },
  { name: 'Git & Bash', icon: 'fab fa-git-alt git-icon', percent: 80 },
]
const nameCharacters = Array.from('Stephan Bennett')

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
  <main class="content-container">
    <!-- 1. Home / Hero Section -->
    <section id="home" class="hero">
      <div class="hero-content">
        <h1>
          Hi, I'm
          <span class="highlight" role="text" aria-label="Stephan Bennett">
            <span
              v-for="(character, index) in nameCharacters"
              :key="index"
              aria-hidden="true"
              :style="{ '--character-index': index }"
            >{{ character === ' ' ? '\u00a0' : character }}</span>
          </span>
        </h1>
        <h2>Software Developer in Training</h2>
        <p>Building clean, responsive web applications and full-stack software solutions.</p>
      </div>
    </section>

    <!-- 2. About Section -->
    <section id="about" class="section">
      <h2 class="section-title">About Me</h2>
      <div class="about-container">
        <div class="about-image">
          <img src="/profile picture.jpeg" alt="Stephan Bennett" />
        </div>
        <div class="about-text">
          <p>
            I am a full-stack software developer passionate about solving complex logical problems
            and transforming them into smooth, responsive digital experiences. Building on a strong
            foundational programming background, I am currently sharpening my technical toolkit
            through intensive full-stack training at Life Choices Academy. I love bridging the gap
            between robust backend logic and user-friendly frontend design.
          </p>
        </div>
      </div>
    </section>

    <!-- 3. Skills Section -->
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

    <!-- 4. Projects Section -->
    <section id="projects" class="section">
      <h2 class="section-title">Featured Projects</h2>
      <div class="projects-grid">
        <div class="project-card">
          <div class="project-info">
            <h3>Neotech Hardware E-Commerce</h3>
            <p>
              A multi-page hardware product showcase site featuring responsive CSS layouts,
              interactive element transitions, and stylized components.
            </p>
            <div class="project-tech">
              <span>HTML5</span>
              <span>CSS Grid</span>
              <span>Bootstrap</span>
            </div>
            <div class="project-links">
              <a href="#" target="_blank"><i class="fab fa-github"></i> GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Education & Experience -->
    <section id="experience" class="section timeline-section">
      <h2 class="section-title">Education &amp; <span>Experience</span></h2>
      <p class="timeline-intro">My learning journey and hands-on development experience.</p>

      <div class="timeline">
        <article class="timeline-item timeline-left">
          <span class="timeline-marker" aria-hidden="true"></span>
          <div class="timeline-card">
            <p class="timeline-date"><i class="fas fa-graduation-cap" aria-hidden="true"></i> High School Education</p>
            <h3>Windsor High School</h3>
            <p class="timeline-place">Secondary Education</p>
            <p class="timeline-description">
              Built my academic foundation at Windsor High School.
            </p>
          </div>
        </article>

        <article class="timeline-item timeline-right">
          <span class="timeline-marker" aria-hidden="true"></span>
          <div class="timeline-card">
            <p class="timeline-date"><i class="fas fa-graduation-cap" aria-hidden="true"></i> Current</p>
            <h3>Full-Stack Software Development Training</h3>
            <p class="timeline-place">Life Choices Academy</p>
            <p class="timeline-description">
              Intensive full-stack training focused on strengthening my programming foundations
              and building responsive, user-friendly web applications.
            </p>
          </div>
        </article>
      </div>
    </section>

    <!-- 6. Contact Section -->
    <section id="contact" class="section bg-dark">
      <h2 class="section-title">Get In Touch</h2>
      <p class="contact-subtitle">
        I'm currently open to internship opportunities and freelance projects. Drop a message!
      </p>

      <div class="contact-wrapper">
        <form class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input id="name" type="text" placeholder="Enter your name" required />
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input id="email" type="email" placeholder="name@example.com" required />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" rows="6" placeholder="Type your message here..." required></textarea>
          </div>

          <button type="submit" class="btn primary-btn submit-btn">
            <i class="fas fa-paper-plane"></i> Send Message
          </button>
        </form>
      </div>
    </section>
  </main>
</template>
