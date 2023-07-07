<script setup>
import { useStyleStore } from '@/stores/style.js'
import { Amplify, Auth } from "aws-amplify";
import awsconfig from '@/aws-exports'; 
const url = window.location.host
if(url.includes('localhost')){
  awsconfig.oauth.redirectSignIn = 'http://localhost:3000/auth/login/'
  awsconfig.oauth.redirectSignOut = 'http://localhost:3000/auth/login/'
}else{
  awsconfig.oauth.redirectSignIn = 'https://subproject-auth.d1r8hx20i7nf3d.amplifyapp.com/auth/login/'
  awsconfig.oauth.redirectSignOut = 'https://subproject-auth.d1r8hx20i7nf3d.amplifyapp.com/auth/login/'
}
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

