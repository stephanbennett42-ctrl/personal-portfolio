<template>
  <main class="thank-you-page">
    <section class="section bg-dark thank-you-card">
      <i class="fas fa-check-circle thank-you-icon"></i>
      <h2 class="section-title">Message Sent!</h2>
      <p class="thank-you-text">
        Thank you for reaching out. Your message has been routed successfully, and I will get back
        to you as soon as possible.
      </p>
      <router-link to="/" class="btn primary-btn">
        <i class="fas fa-arrow-left"></i> Back to Home
      </router-link>
    </section>
  </main>
</template>

<style scoped>
.thank-you-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.thank-you-card {
  padding-top: 4rem !important;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 4rem 2rem;
}

.thank-you-icon {
  font-size: 4rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 10px var(--primary-color));
}

.section-title {
  margin-bottom: 1rem;
}

.thank-you-text {
  margin-bottom: 2.5rem;
  color: var(--text-color);
}

.primary-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--primary-color);
  color: #0f172a;
  padding: 0.85rem 1.8rem;
  text-decoration: none;
  font-weight: 700;
  border-radius: 30px;
}
</style>
