import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";
const router = useRouter();
const AuthStore = useAuthStore();

export default defineNuxtRouteMiddleware((to, from) => {
  try {
    if (!localStorage.getItem("authToken")) {
      return navigateTo("/");
    }
  } catch (error) {
    console.log(error)
  }
});
