<template>
    <footer class="bg-black bg-[url('assets/images/all-img/footer-bg-1.png')] bg-cover bg-center bg-no-repeat text-white">
    <div class="section-padding container">
      <div class="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        <div class="single-footer">
          <div class="lg:max-w-[270px]">
            <NuxtLink to="#" class="mb-10 block">
              <img src="@/assets/images/logo/footer-logo.svg" alt="">
            </NuxtLink>
            <p>
              Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim eros elementum tristique. Duis
              cursus.
            </p>
            <ul class="flex space-x-4 pt-8">
              <li>
                <NuxtLink to="#" class="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white">
                  <iconify-icon icon="bxl:facebook"></iconify-icon>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white">
                  <iconify-icon icon="bxl:twitter"></iconify-icon>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white">
                  <iconify-icon icon="bxl:linkedin"></iconify-icon>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white">
                  <iconify-icon icon="bxl:instagram"></iconify-icon>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="single-footer">
          <div class="flex space-x-[80px]">
            <div class="flex-1 lg:flex-none">
              <h4 class="mb-8 text-2xl font-bold text-white">Links</h4>
              <ul class="list-item space-y-5">
                <li>
                  <NuxtLink to="#">Home</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">About Us</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">Pricing</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">Courses</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">Contact Us</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">Blog</NuxtLink>
                </li>
              </ul>
            </div>
            <div class="flex-1 lg:flex-none">
              <h4 class="mb-8 text-2xl font-bold text-white">Legal</h4>
              <ul class="list-item space-y-5">
                <li>
                  <NuxtLink to="#">Legal</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">Tearms of Use</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">Tearm & Condition</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">Payment Method</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">Privacy Policy</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">Privacy Policy</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="single-footer">
          <h4 class="mb-8 text-2xl font-bold text-white">Newsletter</h4>
          <div class="mb-8">
            Join over
            <span class="text-primary underline">68,000</span>
            people getting our emails Lorem ipsum dolor sit amet consectet
          </div>
          <div class="mb-4 flex items-center rounded-md bg-white py-[10px] pr-[10px] pl-6 shadow-e1">
            <div class="flex-none">
              <span class=" ">
                <img src="@/assets/images/icon/mail.svg" alt="">
              </span>
            </div>
            <div class="flex-1">
              <input type="text" placeholder="Enter your mail" class="border-none focus:ring-0">
            </div>
          </div>
          <button class="btn btn-primary block w-full text-center">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
    <div class="container border-t border-white border-opacity-[0.1] py-8 text-center text-base">
      &copy; Copyright 2022 | Edumim Template | All Rights Reserved
    </div>
  </footer>
</template>