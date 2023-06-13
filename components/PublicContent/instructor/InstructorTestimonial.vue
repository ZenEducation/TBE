<template>
  <div

    class=" section-padding bg-[url('assets/images/all-img/section-bg-12.png')] dark:bg-[url('')] bg-no-repeat bg-cover">
    <div class="container">
      <div class="grid  lg:grid-cols-2 grid-cols-1  xl:gap-[60px] gap-6">
        <div>
          <div class="slider-nav slider">
            <div class="slide" :style="{ transform: 'translateX(' + xTransform + '%)' }">
              <div class="xl:h-[593px] lg:h-[400px] h-[150px] lg:w-full w-[150px] rounded-md">
                <img src="@/assets/images/all-img/t1.png" alt="" class=" object-cover w-full h-full rounded-md" />
              </div>
            </div>
            <div class="slide" :style="{ transform: 'translateX(' + xTransform + '%)' }">
              <div class="xl:h-[593px] lg:h-[400px] h-[150px] lg:w-full w-[150px]  rounded-md">
                <img src="@/assets/images/all-img/ux.png" alt="" class=" object-cover w-full h-full rounded-md" />
              </div>
            </div>
            <div class="slide" :style="{ transform: 'translateX(' + xTransform + '%)' }">
              <div class="xl:h-[593px] lg:h-[400px] h-[150px] lg:w-full w-[150px]  rounded-md">
                <img src="@/assets/images/all-img/team8.png" alt="" class=" object-cover w-full h-full rounded-md" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <div>
            <div class="mini-title">Testimonial</div>
            <h4 class="column-title dark:text-white">
              Our Talented Students Valuable
              <span class="shape-bg text-black text-primary">
                Feedback</span>
            </h4>
            <div class="relative slider-for mt-10 slick-initialized slick-slider">
              <div class="absolute fadeText" :class="[ slider === 1 ? 'fadeText active': 'fadeText' ]">
                <div>
                  <h3 class=" text-2xl font-bold text-black mb-8 dark:text-white">“It’s Truly The Best Solution For Me”
                  </h3>
                  <div class="mb-8">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered. There
                    are many
                    variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                  </div>
                  <div>
                    <span class=" block  font-semibold text-black mb-1 dark:text-white">Alfred Helmerich</span>
                    <span class=" block  font-semibold text-primary">Executive Training Manager</span>
                  </div>
                </div>
              </div>
              <div class="absolute fadeText" :class="[ slider === 2 ? 'fadeText active': 'fadeText' ]">
                <div>
                  <h3 class=" text-2xl font-bold text-black mb-8">“It’s Truly The Best Solution For Me”</h3>
                  <div class="mb-8">
                    There are many variations of passages of Lorem Ipsum available,
                  </div>
                  <div>
                    <span class=" block  font-semibold text-black mb-1 dark:text-white">Alfred Helmerich</span>
                    <span class=" block  font-semibold text-primary">Executive Training Manager</span>
                  </div>
                </div>
              </div>
              <div class="absolute fadeText" :class="[ slider === 3 ? 'fadeText active': 'fadeText' ]">
                <div>
                  <h3 class=" text-2xl font-bold text-black mb-8">“It’s Truly The Best Solution For Me”</h3>
                  <div class="mb-8">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                  </div>
                  <div>
                    <span class=" block  font-semibold text-black mb-1 dark:text-white">Alfred Helmerich</span>
                    <span class=" block  font-semibold text-primary">Executive Training Manager</span>
                  </div>
                </div>
              </div>
              <div class="fadeText opacity-0 z-[-1]">
                <div>
                  <h3 class=" text-2xl font-bold text-black mb-8 dark:text-white">“It’s Truly The Best Solution For Me”
                  </h3>
                  <div class="mb-8">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered. There
                    are many
                    variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                  </div>
                  <div>
                    <span class=" block  font-semibold text-black mb-1 dark:text-white">Alfred Helmerich</span>
                    <span class=" block  font-semibold text-primary">Executive Training Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="space-x-5 flex mt-8 xl:mt-20">
            <button @click="leftSlider" class="lg:h-[64px] lg:w-[64px] h-12 w-12 flex flex-col items-center justify-center rounded-md bg-white hover:bg-primary
                    hover:text-white shadow-box slickprev text-3xl text-primary">
              <iconify-icon icon="heroicons:arrow-left-20-solid"></iconify-icon>
            </button>
            <button @click="rightSlider" class="lg:h-[64px] lg:w-[64px] h-12 w-12 flex flex-col items-center justify-center rounded-md bg-white hover:bg-primary
                    hover:text-white shadow-box slickprev text-3xl text-primary">
              <iconify-icon icon="heroicons:arrow-right-20-solid"></iconify-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const slider = ref(1);

const xTransform = ref(0);
const xValueCalculator = () => {
  if(slider.value === 1) xTransform.value = 0;
  else if(slider.value === 2) xTransform.value = -100;
  else xTransform.value = -200;
};

const leftSlider = () => {
  slider.value = slider.value - 1 > 0 ? slider.value - 1 : 3;
  xValueCalculator();
};
const rightSlider = () => {
  slider.value = slider.value + 1 < 4 ? slider.value + 1 : 1;
  xValueCalculator();
};

</script>

<style scoped>

.fadeText {
  opacity: 0;
  animation: fadeOut 0.3s ease-in;
}

.fadeText.active {
  opacity: 1;
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes fadeOut {
  0% { opacity: 1; }
  100% { opacity: 0; }
}

.slider {
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  flex-wrap: nowrap;
}

.slide {
  transition: all 0.3s ease-out;
  min-width: 100%;
}

</style>