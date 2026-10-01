<template>
  <main class="content-container">
    <section id="gallery" class="section">
      <h2 class="section-title">My Gallery</h2>
      <div class="gallery-grid">
        <div class="gallery-card">
          <img src="/Code.jpg" alt="Developer code workspace" />
          <div class="gallery-overlay">
            <div class="code-animation-wrapper">
              <span class="bracket-left">&lt;</span>
              <span class="slash">/</span>
              <span class="bracket-right">&gt;</span>
            </div>
            <h3>Development</h3>
            <p>Building responsive web applications and solving logical problems.</p>
          </div>
        </div>

        <div class="gallery-card">
          <img src="/Running.jpg" alt="Running and physical fitness setup" />
          <div class="gallery-overlay">
            <i class="fa-solid fa-person-running gallery-icon"></i>
            <h3>Running & Fitness</h3>
            <p>Staying active and disciplined to keep the mind sharp for complex engineering challenges.</p>
          </div>
        </div>

        <div class="gallery-card">
          <img src="/Music.jpg" alt="Headphones representing workflow music" />
          <div class="gallery-overlay">
            <i class="fa-solid fa-headphones gallery-icon"></i>
            <h3>Music & Focus</h3>
            <p>Curating deep-focus ambient soundtracks that fuel long coding sessions.</p>
          </div>
        </div>

        <div class="gallery-card">
          <img src="/sunset.jpg" alt="Aesthetic landscape or street photograph" />
          <div class="gallery-overlay">
            <i class="fa-solid fa-camera gallery-icon"></i>
            <h3>Photography</h3>
            <p>Capturing frames, lighting, and perspectives to refine my eye for clean, balanced visual design.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
