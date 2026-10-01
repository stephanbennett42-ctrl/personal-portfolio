<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import BackgroundOrbs from './components/BackgroundOrbs.vue'

const route = useRoute()
const isThankYou = computed(() => route.name === 'thank-you')
</script>

<template>
  <BackgroundOrbs />
  <AppHeader v-if="!isThankYou" />
  <router-view />
  <AppFooter v-if="!isThankYou" />
</template>
