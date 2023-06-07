<script setup>
  import HomeTopSection from '@/components/PublicContent/Home/HomeTopSection.vue'
  import HomeAboutSection from '@/components/PublicContent/Home/HomeAboutSection.vue'
  import HomeBrandsSection from '@/components/PublicContent/Home/HomeBrandsSection.vue'
  import HomeFeatureSection from '@/components/PublicContent/Home/HomeFeatureSection.vue'
  import HomeCourseSection from '@/components/PublicContent/Home/HomeCourseSection.vue'
  import HomePlatformSection from '@/components/PublicContent/Home/HomePlatformSection.vue'
  import HomeCtaSection from '@/components/PublicContent/Home/HomeCtaSection.vue'
  import HomeTopicsSection from '@/components/PublicContent/Home/HomeTopicsSection.vue'
  import HomeTestimonials from '@/components/PublicContent/Home/HomeTestimonials.vue'
  import HomeTeamSection from '@/components/PublicContent/Home/HomeTeamSection.vue'
  import CreateBlog from '@/components/AfterAuth/Blog/CreateBlog.vue'
  
  import 'iconify-icon';
</script>

<template >
  <div class="dark:bg-[#111] dark:text-white">
    <HomeTopSection />
    <HomeAboutSection />
    <HomeBrandsSection />
    <HomeFeatureSection />
    <HomeCourseSection/>
    <HomePlatformSection/>
    <HomeCtaSection />
    <HomeTopicsSection />
    <HomeTestimonials/>
    <HomeTeamSection />
    <!-- <CreateBlog/> -->
  </div>
    
</template>

<style  src="@/assets/css/main.css">

</style>