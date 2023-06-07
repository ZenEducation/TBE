<template>
    <div class="z-[999] bg-black fixed inset-0 opacity-50">
        <div class=" flex items-center justify-between">
          <NuxtLink to="/" class="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px] ">
            <img src="@/assets/images/logo/logo.svg" alt="">
          </NuxtLink>
          <div class="flex items-center flex-1 flex-col">
            <div class="flex-1 main-menu relative">
              <ul class="">
                <li class="">
                  <NuxtLink to="/">Home</NuxtLink>
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
                  <NuxtLink to="#">Pages</NuxtLink>
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
                  <NuxtLink to="#">Courses</NuxtLink>
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
                  <NuxtLink to="#">Blog</NuxtLink>
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
                  <NuxtLink to="contacts">Contacts</NuxtLink>
                </li>
              </ul>
            </div>

            <div class="flex-none flex space-x-[18px]">
              <div class="hidden lg:block">
                <NuxtLink to="#" class="btn btn-primary py-[15px] px-8">Start Free Trial</NuxtLink>
              </div>
              <div class="block lg:hidden">
                <button @click="$emit('sidebar-toggle')" type="button"
                  class=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center menu-click">
                  <iconify-icon icon="cil:hamburger-menu" rotate="180deg"></iconify-icon>
                </button>
              </div>
            </div>

            <div class="dark-mode-switch">
              <button
                class="flex items-center justify-center w-12 h-12 rounded-full dark:border-gray-600 cursor-pointer focus:outline-none"
                @click="toggleDarkMode">
                <img v-if="darkMode" class="w-8 h-8 transition duration-300 ease-in-out transform rotate-0"
                  src="@/assets/images/svg/sun.svg" alt="Sun Icon" />
                <img v-else class="w-10 h-10 transition duration-300 ease-in-out transform rotate-45"
                  src="@/assets/images/svg/moon.svg" alt="Moon Icon" />
              </button>
            </div>

          </div>
        </div>
    </div>
</template>