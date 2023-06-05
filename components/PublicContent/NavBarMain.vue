<template>
    <header class="site-header  home-one-header top-0 w-full z-[999] rt-sticky">
      <div class="main-header py-2">
        <div class="container">
          <div class=" flex items-center justify-between">
            <NuxtLink to="/" class="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px] ">
              <img src="@/assets/images/logo/logo.svg" alt="">
            </NuxtLink>
            <div class="flex items-center flex-1">
              <div class="flex-1 main-menu relative mr-[74px]">
                <ul class="menu-active-classes">
                  <li class=" menu-item-has-children">
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
                    <NuxtLink to="/contacts">Contacts</NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="flex-none flex space-x-[18px]">
                <div class=" hidden lg:block">
                  <NuxtLink to="#" class="btn btn-primary py-[15px] px-8">Start Free Trial</NuxtLink>
                </div>
                <div class=" block   lg:hidden">
                  <button type="button" class=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center
                                        menu-click">
                    <iconify-icon icon="cil:hamburger-menu" rotate="180deg"></iconify-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>