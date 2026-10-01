<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const submitting = ref(false)
const contactError = ref('')
const contactForm = reactive({ name: '', email: '', message: '' })

async function handleContactSubmit() {
  submitting.value = true
  contactError.value = ''

  try {
    const response = await fetch('https://formspree.io/f/xgobllkg', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactForm),
    })

    if (response.ok) {
      router.push('/thank-you')
      return
    }

    contactError.value = 'Something went wrong. Please try again.'
  } catch {
    contactError.value = 'Could not send your message. Please try again.'
  } finally {
    submitting.value = false
  }
}

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
const nameAnimationRun = ref(0)
const photoGlowRun = ref(0)
const aboutPhoto = ref(null)
const aboutPhotoVisible = ref(false)
const aboutPhotoAnimationRun = ref(0)

let aboutObserver

function replayRequestedAnimation(event) {
  if (event.detail?.section === 'home') {
    nameAnimationRun.value += 1
    photoGlowRun.value += 1
  }

  if (event.detail?.section === 'about') {
    aboutPhotoVisible.value = true
    aboutPhotoAnimationRun.value += 1
    aboutObserver?.disconnect()
  }
}

onMounted(() => {
  window.addEventListener('portfolio:replay-animation', replayRequestedAnimation)

  if (aboutPhoto.value) {
    aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutPhotoVisible.value = true
          aboutObserver.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    aboutObserver.observe(aboutPhoto.value)
  }
})

onUnmounted(() => {
  window.removeEventListener('portfolio:replay-animation', replayRequestedAnimation)
  aboutObserver?.disconnect()
})
</script>

<template>
  <main class="content-container">
    <!-- 1. Home / Hero Section -->
    <section id="home" class="hero">
      <div class="hero-content">
        <div class="hero-copy">
          <h1>
            Hi, I'm
            <span :key="nameAnimationRun" class="highlight" role="text" aria-label="Stephan Bennett">
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
          <div class="hero-buttons social-links">
            <a
              class="cta-button"
              href="https://github.com/stephanbennett42-ctrl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Stephan Bennett on GitHub"
            >
              <i class="fab fa-github" aria-hidden="true"></i>
              GitHub
            </a>
            <a
              class="cta-button"
              href="https://www.linkedin.com/in/stephan-bennett-a38351347/?isSelfProfile=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Stephan Bennett on LinkedIn"
            >
              <i class="fab fa-linkedin" aria-hidden="true"></i>
              LinkedIn
            </a>
          </div>
        </div>
        <div :key="photoGlowRun" class="hero-photo-frame">
          <img src="/home-profile.jpg" alt="Stephan Bennett standing in front of a window" />
        </div>
      </div>
    </section>

    <!-- 2. About Section -->
    <section id="about" class="section">
      <h2 class="section-title">About Me</h2>
      <div class="about-container">
        <div :key="aboutPhotoAnimationRun" ref="aboutPhoto" class="about-image" :class="{ 'is-visible': aboutPhotoVisible }">
          <img src="/profile-picture.jpg" alt="Stephan Bennett" />
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
            <h3>Pawtopia</h3>
            <p class="project-meta">Pet-care startup · 6 contributors</p>
            <p>
              Find trusted care for your pet—from daycare and boarding to grooming—all in one place,
              so you can travel or work with peace of mind.
            </p>
            <div class="project-tech">
              <span>HTML 44.4%</span>
              <span>CSS 35.8%</span>
              <span>JavaScript 19.8%</span>
            </div>
          </div>
        </div>
        <div class="project-card">
          <div class="project-info">
            <h3>ModernTech Solutions HR System</h3>
            <p class="project-meta">Healthcare software · 5 contributors</p>
            <p>
              One secure HR hub for employee records, payroll, leave, and attendance—replacing
              scattered spreadsheets and emails with a database-backed system.
            </p>
            <p class="project-context">
              Built as the Life Choices Academy Module 2 Core Project.
            </p>
            <div class="project-tech">
              <span>CSS 36.6%</span>
              <span>JavaScript 36.2%</span>
              <span>HTML 27.2%</span>
            </div>
          </div>
        </div>
        <div class="project-card">
          <div class="project-info">
            <h3>ApplyDirect-SA</h3>
            <p class="project-meta">South African tertiary applications</p>
            <p>
              Find the right South African university or college faster. Explore courses and entry
              requirements, then filter your options in one streamlined guide.
            </p>
            <p class="project-context">
              Vue.js and Bootstrap frontend, backed by a Node.js and Express API with MySQL.
            </p>
            <div class="project-tech">
              <span>Vue 60.7%</span>
              <span>JavaScript 34.4%</span>
              <span>CSS 4.1%</span>
              <span>HTML 0.4%</span>
              <span>Dockerfile 0.2%</span>
              <span>Batchfile 0.1%</span>
              <span>Other 0.1%</span>
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
        <form class="contact-form" @submit.prevent="handleContactSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input id="name" v-model="contactForm.name" name="name" type="text" placeholder="Enter your name" required />
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input id="email" v-model="contactForm.email" name="email" type="email" placeholder="name@example.com" required />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="contactForm.message" name="message" rows="6" placeholder="Type your message here..." required></textarea>
          </div>

          <p v-if="contactError" class="form-error" role="alert">{{ contactError }}</p>

          <button type="submit" class="btn primary-btn submit-btn" :disabled="submitting">
            <i class="fas fa-paper-plane" aria-hidden="true"></i>
            {{ submitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>
    </section>
  </main>
</template>

<style scoped>
.form-error {
  color: #f87171;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
