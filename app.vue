<script setup>
import { useStyleStore } from '@/stores/style.js'
const styleStore = useStyleStore()
</script>

<template>
  <div class="font-body" :class="{ dark: styleStore.darkMode }">
    <NavBarMain />
    <NuxtPage />
    <Footer />
  </div>
</template>

