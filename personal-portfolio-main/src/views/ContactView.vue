<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const submitting = ref(false)
const errorMessage = ref('')

const form = reactive({
  name: '',
  email: '',
  message: '',
})

async function handleSubmit() {
  submitting.value = true
  errorMessage.value = ''

  try {
    const response = await fetch('https://formspree.io/f/xgobllkg', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    if (response.ok) {
      router.push('/thank-you')
      return
    }

    errorMessage.value = 'Something went wrong. Please try again.'
  } catch {
    errorMessage.value = 'Could not send your message. Please try again.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <section class="section bg-dark">
    <h2 class="section-title">Get In Touch</h2>
    <p class="contact-subtitle">
      I'm currently open to internship opportunities and freelance projects. Drop a message!
    </p>

    <div class="contact-wrapper">
      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            name="email"
            placeholder="name@example.com"
            required
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            name="message"
            rows="6"
            placeholder="Type your message here..."
            required
          ></textarea>
        </div>

        <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>

        <button type="submit" class="btn primary-btn submit-btn" :disabled="submitting">
          <i class="fas fa-paper-plane"></i>
          {{ submitting ? 'Sending...' : 'Send Message' }}
        </button>
      </form>
    </div>
  </section>
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
