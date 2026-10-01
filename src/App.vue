<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const route = useRoute()
const isThankYou = computed(() => route.name === 'thank-you')
</script>

<template>
  <AppHeader v-if="!isThankYou" />
  <router-view />
  <AppFooter v-if="!isThankYou" />
</template>
