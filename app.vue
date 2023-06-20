<script setup>
import { useStyleStore } from '@/stores/style.js'
import { Amplify, Auth } from "aws-amplify";
import awsconfig from '@/src/aws-exports'; 
Amplify.configure(awsconfig);
Auth.configure(awsconfig)
import "@/assets/css/main.css";
import '@aws-amplify/ui-vue';

const styleStore = useStyleStore()
</script>

<template>
  <div class="font-body" :class="{ dark: styleStore.darkMode }">
    <NuxtPage />
    <!-- <Footer /> -->
  </div>
</template>

