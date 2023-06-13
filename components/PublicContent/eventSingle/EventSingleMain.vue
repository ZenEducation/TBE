<template>
  <div class="nav-tab-wrapper tabs  section-padding">
    <div class="container">
      <img src="@/assets/images/all-img/main-event.png" alt="" class=" lg:mb-10 mb-6 block w-full">
      <div class="grid grid-cols-12 gap-[30px]">
        <div class="lg:col-span-8 col-span-12">
          <h3>
            Painting Contest 2022
          </h3>
          <div class="lg:my-6 my-4">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form,
            by injected humour, or randomised words which don't look even slightly believable. If you are going to use a
            passage of
            Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem
            Ipsum
            generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator
            on the
            Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
            to
            generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from
            repetition,
            injected humour.
          </div>
          <div v-if="countdownInterval" class="bg-secondary text-white p-6 rounded-md">
            <div id="timer" class="md:flex space-y-2 md:space-y-0 justify-between text-center ">
              <div class="text-[44px] font-bold">{{ days }}<div class=" text-lg font-medium capitalize">days</div>
              </div>
              <div class="text-[44px] font-bold">{{ hours }}<div class="text-lg font-medium capitalize">hours</div>
              </div>
              <div class="text-[44px] font-bold">{{ minutes }}<div class="text-lg font-medium capitalize">minutes</div>
              </div>
              <div class="text-[44px] font-bold">{{ seconds }}<div class="text-lg font-medium capitalize">seconds</div>
              </div>
            </div>
          </div>
          <div class=" py-6">
            Among the major reasons why Python is “slow”, it really boils down to 2 — Python is interpreted as opposed to
            compiled,
            ultimately leading to slower execution times; and the fact that it is dynamically typed. Take, for example,
            TensorFlow,
            a Machine Learning library available in Python. These libraries were actually written in C++ and made
            available in
            Python, sort of forming a Python implementation. The same goes for Numpy and, to an extent, even Caer.
          </div>
          <div class="flex justify-between border-y border-[#ECECEC] py-4 md:mt-12 mt-10">
            <div class=" text-black font-semibold dark:text-white">Previous</div>
            <ul class="flex space-x-3 lg:justify-end items-center  ">
              <li>
                <a href="#" class="flex h-8 w-8">
                  <img src="@/assets/images/icon/fb.svg" alt="">
                </a>
              </li>
              <li>
                <a href="#" class="flex h-8 w-8">
                  <img src="@/assets/images/icon/tw.svg" alt="">
                </a>
              </li>
              <li>
                <a href="#" class="flex h-8 w-8">
                  <img src="@/assets/images/icon/pn.svg" alt="">
                </a>
              </li>
              <li>
                <a href="#" class="flex h-8 w-8">
                  <img src="@/assets/images/icon/ins.svg" alt="">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="lg:col-span-4 col-span-12 relative lg:-mt-20">


          <div class="sidebarWrapper max-w-[90%] mx-auto space-y-[30px]">
            <div class="wdiget custom-text space-y-5 dark:text-black">
              <h4 class=" widget-title dark:text-black">Event Details</h4>
              <ul class="list space-y-6  ">

                <li class=" flex space-x-3 ">
                  <div class="flex-1 space-x-3 flex">
                    <img src="@/assets/images/svg/circle-clock.svg" alt="" />
                    <div>4:00 pm - 6:00 pm</div>
                  </div>
                </li>

                <li class=" flex space-x-3 ">
                  <div class="flex-1 space-x-3 flex">
                    <img src="@/assets/images/svg/circle-c.svg" alt="" />
                    <div>03 March, 2022</div>
                  </div>
                </li>

                <li class=" flex space-x-3 ">
                  <div class="flex-1 space-x-3 flex">
                    <img src="@/assets/images/svg/circle-clock.svg" alt="" />
                    <div>12/A, NewYork Sydney City</div>
                  </div>
                </li>

                <li class=" flex space-x-3 ">
                  <div class="flex-1 space-x-3 flex">
                    <img src="@/assets/images/svg/circle-clock.svg" alt="" />
                    <div>yourmail@gmail.com</div>
                  </div>
                </li>

                <li class=" flex space-x-3 ">
                  <div class="flex-1 space-x-3 flex">
                    <img src="@/assets/images/svg/circle-clock.svg" alt="" />
                    <div>+88018 2829 98267</div>
                  </div>
                </li>

              </ul>
              <a href="#" class=" btn btn-primary btn-md text-lg">Book A Seat</a>

            </div>

            <div class="wdiget">
              <h4 class=" widget-title dark:text-black">Special Guests</h4>
              <ul class="list space-y-6">
                <li class=" flex space-x-4 border-[#ECECEC] ">
                  <div class="flex-none ">
                    <div class="h-20 w-20   rounded-full">
                      <img src="@/assets/images/all-img/rc-1.png" alt="" class=" w-full h-full object-cover rounded-full">
                    </div>
                  </div>
                  <div class="flex-1 ">

                    <div class="mb-1 font-bold text-black capitalize">
                      Sofia d. Flora

                    </div>
                    <span class=" text-primary font-semibold">UI/UX Designer</span>
                  </div>
                </li>
                <li class=" flex space-x-4 border-[#ECECEC] ">
                  <div class="flex-none ">
                    <div class="h-20 w-20   rounded-full">
                      <img src="@/assets/images/all-img/rc-2.png" alt="" class=" w-full h-full object-cover rounded-full">
                    </div>
                  </div>
                  <div class="flex-1 ">

                    <div class="mb-1 font-bold text-black capitalize">
                      Jhonson Steven

                    </div>
                    <span class=" text-primary font-semibold">UI/UX Designer</span>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const countdownInterval = ref(null);

const days = ref(null);
const hours = ref(null);
const minutes = ref(null);
const seconds = ref(null);

const countdown = () => {
  const targetDate = new Date('January 6, 2024');
  const currentDate = new Date();
  const remainingTime = targetDate - currentDate;

  if (remainingTime <= 0) {
    clearInterval(countDownDisplay.value);
  }

  days.value = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((remainingTime % (1000 * 60)) / 1000);

};
onMounted(() => {
  countdownInterval.value = setInterval(() => {
    countdown();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(countdownInterval.value);
});

</script>