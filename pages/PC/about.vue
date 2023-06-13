
import { HomeTestimonials } from '~~/.nuxt/components';

<template>
    <NavBarMain search="true" />
    <TopNav head="About Us" />
    <div class="dark:bg-[#111] dark:text-white transition duration-300">
        <TopSection />
        <FeatureSection />
        <CounterSection />
        <Testimonials />
        <TeamSection />
        <FaqSection />
    </div>
    <Footer />
</template>