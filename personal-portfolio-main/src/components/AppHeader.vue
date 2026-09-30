<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <header>
    <nav>
      <router-link to="/#home" class="logo" active-class="" exact-active-class="">SB</router-link>
      <router-link to="/#home" :class="{ active: route.hash === '#home' || !route.hash }">Home</router-link>
      <router-link to="/#about" :class="{ active: route.hash === '#about' }">About</router-link>
      <router-link to="/#skills" :class="{ active: route.hash === '#skills' }">Skills</router-link>
      <router-link to="/#projects" :class="{ active: route.hash === '#projects' }">Projects</router-link>
      <router-link to="/#experience" :class="{ active: route.hash === '#experience' }">Experience</router-link>
      <router-link to="/#contact" :class="{ active: route.hash === '#contact' }">Contact</router-link>
    </nav>
  </header>
</template>
