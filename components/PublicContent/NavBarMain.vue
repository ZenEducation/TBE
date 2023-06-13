<template>
  <header class="site-header plain-text text-gray home-one-header top-0 w-full z-[9999] rt-sticky"
    :class="[{ 'scrolledLight': isScrolled && !darkMode }, { 'scrolledDark': isScrolled && darkMode }]"
    :style="navBarStyles">
    <div class="main-header">
      <div class="container pb-2.5 pt-10">
        <div class=" flex items-center justify-between">
          <NuxtLink to="/" class="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px] ">
            <img src="@/assets/images/logo/logo.svg" alt="">
          </NuxtLink>
          <div class="flex items-center flex-1">
            <div class="flex-1 main-menu relative mr-[14px] h-auto">
              <ul class="menu-active-classes">
                <li class=" menu-item-has-children">
                  <NuxtLink :class="{'dark:text-white':opaque}" to="/">Home</NuxtLink>
                  <ul class="sub-menu">
                    <li>
                      <NuxtLink to="/">Home One</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="index2">Home Two</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="index3">Home Three</NuxtLink>
                    </li>
                  </ul>
                </li>
                <li class="menu-item-has-children">
                  <NuxtLink :class="{'dark:text-white':opaque}" to="#">Pages</NuxtLink>
                  <ul class="sub-menu">
                    <li>
                      <NuxtLink to="about">About 1</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="about2">About 2</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="instructor">instructor 1</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="instructor2">instructor 2</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="instructor-details">instructor Single</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="event">Event</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="event-single">Event single</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="404">404</NuxtLink>
                    </li>
                  </ul>
                </li>
                <li class="menu-item-has-children">
                  <NuxtLink :class="{'dark:text-white':opaque}" to="#">Courses</NuxtLink>
                  <ul class="sub-menu">
                    <li>
                      <NuxtLink to="courses">courses</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="courses-sidebar">courses Sidebar</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="single-course">Single-course</NuxtLink>
                    </li>
                  </ul>
                </li>
                <li class="menu-item-has-children">
                  <NuxtLink :class="{'dark:text-white':opaque}" to="#">Blog</NuxtLink>
                  <ul class="sub-menu">
                    <li>
                      <NuxtLink to="blog">Blog</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="blog-full">Full Width</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="blog-standard">Blog Standard</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="blog-single">Single Blog</NuxtLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NuxtLink :class="{'dark:text-white':opaque}" to="contacts">Contacts</NuxtLink>
                </li>
              </ul>
                <div class="lg:block hidden">
                  <div class="border border-gray rounded-md  h-[46px] modal-search" :class="isSearchOpen ? 'modal-open' : ''">
                    <input type="text"
                      class=" block w-full rounded-md  h-full border-none ring-0 focus:outline-none  focus:ring-0"
                      placeholder="Search..">
                  </div>
                </div>
            </div>

            <div class="flex-none flex space-x-[18px]">
              <button v-if="search" @click="toggleSearchBar" type="button"
                class=" md:w-[56px] md:h-[56px] h-10 w-10 rounded bg-[#F8F8F8] flex flex-col items-center justify-center modal-trigger">
                <img src="@/assets/images/svg/search.svg" alt="">
              </button>
              <div class="flex items-center dark-mode-switch">
                <button
                  class="flex items-center bg-slate-300 dark:bg-slate-600 justify-center w-12 h-12 rounded-full dark:border-gray-600 cursor-pointer focus:outline-none"
                  @click="toggleDarkMode">
                  <img v-if="darkMode" class="w-8 h-8 transition duration-1000 ease-in-out transform rotate-180"
                    src="@/assets/images/svg/sun.svg" alt="Sun Icon" />
                  <img v-else class="w-10 h-10 transition duration-1000 ease-in-out transform rotate-45"
                    src="@/assets/images/svg/moon.svg" alt="Moon Icon" />
                </button>
              </div>

              <div class="hidden lg:block">
                <NuxtLink to="#" class="btn btn-primary py-[15px] px-8">Start Free Trial</NuxtLink>
              </div>

              <div class="block lg:hidden">
                <button @click="handleSidebarToggle" type="button"
                  class=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center menu-click">
                  <iconify-icon icon="cil:hamburger-menu" rotate="180deg"></iconify-icon>
                </button>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>


    <div @click="handleSidebarToggle" class="rt-mobile-menu-overlay fixed top-0 h-screen"
      :class="{ active: showSidebar }">
    </div>
    <div
      class="openmobile-menu fixed top-0 h-screen pt-10 pb-6 bg-white shadow-box2 w-[320px] overflow-y-auto flex flex-col z-[999] dark:bg-black dark:text-white"
      :class="{ 'active-mobile-menu': showSidebar }">
      <div class="flex justify-between px-6 flex-none">
        <NuxtLink to="/" class="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px] ">
          <img src="@/assets/images/logo/logo.svg" alt="">
        </NuxtLink>
        <span @click="handleSidebarToggle" class="my-element text-3xl cursor-pointer rt-mobile-menu-close">
          <!-- <iconify-icon icon="fe:close"></iconify-icon> -->
        </span>

      </div>
      <div class="mobile-menu mt-6 flex-1 ">
        <ul class="menu-active-classes">
          <li class=" menu-item-has-children" :class="{ 'open': spinner === 1 }">
            <NuxtLink to="/" @click="toggleDropdown(1)">Home</NuxtLink>
            <ul @click="handleSidebarToggle" class="sub-menu" :style="{ display: spinner === 1 ? 'block' : 'none' }">
              <li>
                <NuxtLink to="/">Home One</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/PC/index2">Home Two</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/PC/index3">Home Three</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="menu-item-has-children" :class="{ 'open': spinner === 2 }">
            <NuxtLink to="#" @click="toggleDropdown(2)">Pages</NuxtLink>
            <ul @click="handleSidebarToggle" class="sub-menu" :style="{ display: spinner === 2 ? 'block' : 'none' }">
              <li>
                <NuxtLink to="/PC/about">About 1</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/PC/about2">About 2</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/PC/instructor">instructor 1</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/PC/instructor2">instructor 2</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/PC/instructor-details">instructor Single</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/PC/event">Event</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/PC/event-single">Event single</NuxtLink>
              </li>
              <li>
                <NuxtLink to="404">404</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="menu-item-has-children" :class="{ 'open': spinner === 3 }">
            <NuxtLink to="#" @click="toggleDropdown(3)">Courses</NuxtLink>
            <ul @click="handleSidebarToggle" class="sub-menu" :style="{ display: spinner === 3 ? 'block' : 'none' }">
              <li>
                <NuxtLink to="/PC/courses">courses</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/PC/courses-sidebar">courses Sidebar</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/PC/single-course">Single-course</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="menu-item-has-children" :class="{ 'open': spinner === 4 }">
            <NuxtLink to="#" @click="toggleDropdown(4)">Blog</NuxtLink>
            <ul @click="handleSidebarToggle" class="sub-menu" :style="{ display: spinner === 4 ? 'block' : 'none' }">
              <li>
                <NuxtLink to="/PC/blog">Blog</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/PC/blog-full">Full Width</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/PC/blog-standard">Blog Standard</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/PC/blog-single">Single Blog</NuxtLink>
              </li>
            </ul>
          </li>
          <li>
            <NuxtLink to="contacts">Contacts</NuxtLink>
          </li>
        </ul>

        <div class=" flex-none pb-4">
          <div class=" text-center text-black font-semibold mb-2 dark:text-white">Follow Us</div>
          <ul class="flex justify-center ">
            <li>
              <NuxtLink to="">
                <img src="@/assets/images/icon/fb.svg" alt="" class="cursor-pointer">
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="">
                <img src="@/assets/images/icon/tw.svg" alt="" class="cursor-pointer">
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="">
                <img src="@/assets/images/icon/pn.svg" alt="" class="cursor-pointer">
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="">
                <img src="@/assets/images/icon/ins.svg" alt="" class="cursor-pointer">
              </NuxtLink>
            </li>
          </ul>
        </div>

      </div>
    </div>


  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useStyleStore } from "@/stores/style";
import { storeToRefs } from "pinia";

defineProps({
  search: {
    type: Boolean,
    default: false
  },
  opaque: {
    type: Boolean,
    default: false
  },
})

const styleStore = useStyleStore();
const { darkMode } = storeToRefs(styleStore);
const { setDarkMode } = styleStore;

const spinner = ref(null);
const showSidebar = ref(false)
const handleSidebarToggle = () => {
  showSidebar.value = !showSidebar.value;
  spinner.value = null;
};

const toggleDropdown = (spinnerIndex) => {
  if (spinner.value === spinnerIndex) {
    spinner.value = null;
  } else {
    spinner.value = spinnerIndex;
  }
};

const isScrolled = ref(false);
const navBarStyles = ref({
  top: '0',
  position: 'fixed',
  width: '100%',
  transform: 'translateY(0)',
  zIndex: '1',
});

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  isScrolled.value = scrollTop > 110;
  navBarStyles.value.transform = scrollTop < 60 ? `translateY(${scrollTop * -0.5}px)` : `translateY(${-30}px)`;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  setDarkMode(darkMode);
};


const isSearchOpen = ref(false);
const toggleSearchBar = () => {
  isSearchOpen.value = !isSearchOpen.value;
};

</script>

<style scoped>
.scrolledLight {
  background-color: white;
  box-shadow: 0 18px 36px 0 rgba(0, 0, 0, .1);
  transition: all 0.5s;
}

.scrolledDark {
  background-color: black;
  box-shadow: 0 18px 36px 0 rgba(255, 255, 255, .1);
  transition: all 0.5s;
}

.my-element::before {
  content: "\2715";
  font-size: 25px;
}
</style>



