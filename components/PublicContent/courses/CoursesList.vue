<template>
    <div class="nav-tab-wrapper tabs pt-10 section-padding-bottom">
      <div class="container">
            <div class="flex md:flex-row flex-col items-center mb-14 space-y-6 md:space-y-0">
              <div class="flex-1 flex sm:flex-row flex-col  space-x-6  items-center">
                <ul id="tabs-nav" class=" flex space-x-4 cata-Tbas">
                  <li @click="toggleTableView(true)" :class="[tableGridView ? 'active' : '']">
                    <a class=" h-[60px] w-[60px]  flex flex-col justify-center items-center cursor-pointer">
                      <iconify-icon icon="clarity:grid-view-line"></iconify-icon>
                    </a>
                  </li>
                  <li @click="toggleTableView(false)" :class="[tableGridView ? '' : 'active']">
                    <a class="h-[60px] w-[60px]  flex flex-col justify-center items-center cursor-pointer">
                      <iconify-icon icon="ant-design:unordered-list-outlined"></iconify-icon>
                    </a>
                  </li>
                </ul>
                <span class=" inline-block mt-4 md:mt-0">
                  Showing 12 courses of 52
                </span>
              </div>
              <div class="flex-0">
                <div class="min-w-[272px] dark:text-black">
                  <select class="nice-select">
                    <option data-display="Sort By: Popularity">Sort By: Popularity</option>
                    <option value="1">Popularity</option>
                    <option value="2">Another option</option>
                    <option value="4">Potato</option>
                  </select>
                </div>
              </div>
            </div>
            <div id="tabs-content">
  
              <div id="tab1" class="tab-content" :class="tableGridView ? 'show' : 'hidden'">
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] dark:text-black">
                  <a class=" bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm"
                    href="single-course.html">
                    <div class="course-thumb h-[248px] rounded-t-[8px]  relative">
                      <img src="@/assets/images/all-img/c1.png" alt="" class=" w-full h-full object-cover rounded-t-[8px]">
                      <span
                        class="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">Art
                        &amp; Design</span>
                    </div>
                    <div class="course-content p-8">
                      <div class="text-secondary font-bold text-2xl mb-3">$29.28</div>
                      <h4 class=" text-xl mb-3 font-bold dark:text-black">Basic Fundamentals of Interior &amp; Graphics
                        Design</h4>
                      <div class="flex justify-between  flex-wrap space-y-1 xl:space-y-0">
                        <span class=" flex items-center space-x-2 mr-3">
                          <img src="@/assets/images/svg/file.svg" alt="">
                          <span>2 Lessons</span>
                        </span>
                        <span class=" flex items-center space-x-2 mr-3">
                          <img src="@/assets/images/svg/clock.svg" alt="">
                          <span>4h 30m</span>
                        </span>
                        <span class=" flex items-center space-x-2 ">
                          <img src="@/assets/images/svg/star.svg" alt="">
                          <span>4.8</span>
                        </span>
                      </div>
                    </div>
                  </a>
  
                  <a class=" bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm"
                    href="single-course.html">
                    <div class="course-thumb h-[248px] rounded-t-[8px]  relative">
                      <img src="@/assets/images/all-img/c2.png" alt="" class=" w-full h-full object-cover rounded-t-[8px]">
                      <span
                        class="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">Developemet</span>
                    </div>
                    <div class="course-content p-8">
                      <div class="text-secondary font-bold text-2xl mb-3">Free</div>
                      <h4 class=" text-xl mb-3 font-bold dark:text-black">Increasing Engagement with Instagram &amp;
                        Facebook</h4>
                      <div class="flex justify-between  flex-wrap space-y-1 xl:space-y-0">
                        <span class=" flex items-center space-x-2 mr-3">
                          <img src="@/assets/images/svg/file.svg" alt="">
                          <span>2 Lessons</span>
                        </span>
                        <span class=" flex items-center space-x-2 mr-3">
                          <img src="@/assets/images/svg/clock.svg" alt="">
                          <span>4h 30m</span>
                        </span>
                        <span class=" flex items-center space-x-2 ">
                          <img src="@/assets/images/svg/star.svg" alt="">
                          <span>4.8</span>
                        </span>
                      </div>
                    </div>
                  </a>
  
                  <a class=" bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm"
                    href="single-course.html">
                    <div class="course-thumb h-[248px] rounded-t-[8px]  relative">
                      <img src="@/assets/images/all-img/c3.png" alt="" class=" w-full h-full object-cover rounded-t-[8px]">
                      <span
                        class="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">Drawing</span>
                    </div>
                    <div class="course-content p-8">
                      <div class="text-secondary font-bold text-2xl mb-3">$72.39</div>
                      <h4 class=" text-xl mb-3 font-bold dark:text-black">Introduction to Color Theory &amp;
                        Basic UI/UX</h4>
                      <div class="flex justify-between  flex-wrap space-y-1 xl:space-y-0">
                        <span class=" flex items-center space-x-2 mr-3">
                          <img src="@/assets/images/svg/file.svg" alt="">
                          <span>2 Lessons</span>
                        </span>
                        <span class=" flex items-center space-x-2 mr-3">
                          <img src="@/assets/images/svg/clock.svg" alt="">
                          <span>4h 30m</span>
                        </span>
                        <span class=" flex items-center space-x-2 ">
                          <img src="@/assets/images/svg/star.svg" alt="">
                          <span>4.8</span>
                        </span>
                      </div>
                    </div>
                  </a>
  
                  <a class=" bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm"
                    href="single-course.html">
                    <div class="course-thumb h-[248px] rounded-t-[8px]  relative">
                      <img src="@/assets/images/all-img/c4.png" alt="" class=" w-full h-full object-cover rounded-t-[8px]">
                      <span
                        class="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">Technology</span>
                    </div>
                    <div class="course-content p-8">
                      <div class="text-secondary font-bold text-2xl mb-3">$72.39</div>
                      <h4 class=" text-xl mb-3 font-bold dark:text-black">Financial Security Thinking and Principles Theory
                      </h4>
                      <div class="flex justify-between  flex-wrap space-y-1 xl:space-y-0">
                        <span class=" flex items-center space-x-2 mr-3">
                          <img src="@/assets/images/svg/file.svg" alt="">
                          <span>2 Lessons</span>
                        </span>
                        <span class=" flex items-center space-x-2 mr-3">
                          <img src="@/assets/images/svg/clock.svg" alt="">
                          <span>4h 30m</span>
                        </span>
                        <span class=" flex items-center space-x-2 ">
                          <img src="@/assets/images/svg/star.svg" alt="">
                          <span>4.8</span>
                        </span>
                      </div>
                    </div>
                  </a>
  
                  <a class=" bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm"
                    href="single-course.html">
                    <div class="course-thumb h-[248px] rounded-t-[8px]  relative">
                      <img src="@/assets/images/all-img/c5.png" alt="" class=" w-full h-full object-cover rounded-t-[8px]">
                      <span
                        class="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">Data
                        Science</span>
                    </div>
                    <div class="course-content p-8">
                      <div class="text-secondary font-bold text-2xl mb-3">Free</div>
                      <h4 class=" text-xl mb-3 font-bold dark:text-black">Logo Design: From Concept to Presentation</h4>
                      <div class="flex justify-between  flex-wrap space-y-1 xl:space-y-0">
                        <span class=" flex items-center space-x-2 mr-3">
                          <img src="@/assets/images/svg/file.svg" alt="">
                          <span>2 Lessons</span>
                        </span>
                        <span class=" flex items-center space-x-2 mr-3">
                          <img src="@/assets/images/svg/clock.svg" alt="">
                          <span>4h 30m</span>
                        </span>
                        <span class=" flex items-center space-x-2 ">
                          <img src="@/assets/images/svg/star.svg" alt="">
                          <span>4.8</span>
                        </span>
                      </div>
                    </div>
                  </a>
  
                  <a class=" bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm"
                    href="single-course.html">
                    <div class="course-thumb h-[248px] rounded-t-[8px]  relative">
                      <img src="@/assets/images/all-img/c6.png" alt="" class=" w-full h-full object-cover rounded-t-[8px]">
                      <span
                        class="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">Developemet</span>
                    </div>
                    <div class="course-content p-8">
                      <div class="text-secondary font-bold text-2xl mb-3">$29.82</div>
                      <h4 class=" text-xl mb-3 font-bold dark:text-black">Professional Ceramic Moulding for Beginners</h4>
                      <div class="flex justify-between  flex-wrap space-y-1 xl:space-y-0">
                        <span class=" flex items-center space-x-2 mr-3">
                          <img src="@/assets/images/svg/file.svg" alt="">
                          <span>2 Lessons</span>
                        </span>
                        <span class=" flex items-center space-x-2 mr-3">
                          <img src="@/assets/images/svg/clock.svg" alt="">
                          <span>4h 30m</span>
                        </span>
                        <span class=" flex items-center space-x-2 ">
                          <img src="@/assets/images/svg/star.svg" alt="">
                          <span>4.8</span>
                        </span>
                      </div>
                    </div>
                  </a>
  
                </div>
                <div class="text-center pt-14">
                  <a href="#" class=" btn btn-primary inline-flex items-center  space-x-[10px]">
                    <span>Load More
                    </span>
                    <span class=" relative top-1">
                      <iconify-icon icon="ion:reload-outline"></iconify-icon>
                    </span>
                  </a>
                </div>
              </div>
  
              <div id="tab2" class="tab-content" :class="tableGridView ? 'hidden' : 'show'">
                <div class="grid  lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-[30px] dark:text-black">
                  <a class=" bg-white rounded-[8px] transition shadow-box7 duration-150 border-b-4 hover:border-primary border-transparent
              hover:shadow-box6 flex p-8 space-x-6" href="single-course.html">
                    <div class="flex-none">
                      <div class="w-[159px] h-[159px]  rounded  relative">
                        <img src="@/assets/images/all-img/c1.png" alt="" class=" w-full h-full object-cover rounded">
                      </div>
                    </div>
                    <div class="course-content flex-1">
                      <div class="text-primary font-bold text-2xl mb-2 flex justify-between">
                        <span class=" inline-block">$29.28</span>
                        <span class=" flex space-x-1">
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                        </span>
                      </div>
                      <h4 class=" text-2xl leading-[36px] mb-4 font-bold dark:text-black">Basic Fundamentals of Interior
                        &amp; Graphics
                        Design</h4>
                      <div class="flex   space-x-6">
                        <span class=" flex items-center space-x-2">
                          <img src="@/assets/images/svg/file2.svg" alt="">
                          <span>2 Lessons</span>
                        </span>
                        <span class=" flex items-center space-x-2">
                          <img src="@/assets/images/svg/user2.svg" alt="">
                          <span>4k Lesson</span>
                        </span>
                      </div>
                    </div>
                  </a>
  
                  <a class=" bg-white rounded-[8px] transition shadow-box7 duration-150 border-b-4 hover:border-primary border-transparent
              hover:shadow-box6 flex p-8 space-x-6" href="single-course.html">
                    <div class="flex-none">
                      <div class="w-[159px] h-[159px]  rounded  relative">
                        <img src="@/assets/images/all-img/c2.png" alt="" class=" w-full h-full object-cover rounded">
                      </div>
                    </div>
                    <div class="course-content flex-1">
                      <div class="text-primary font-bold text-2xl mb-2 flex justify-between">
                        <span class=" inline-block">Free</span>
                        <span class=" flex space-x-1">
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                        </span>
                      </div>
                      <h4 class=" text-2xl leading-[36px] mb-4 font-bold dark:text-black">Increasing Engagement with
                        Instagram &amp;
                        Facebook</h4>
                      <div class="flex   space-x-6">
                        <span class=" flex items-center space-x-2">
                          <img src="@/assets/images/svg/file2.svg" alt="">
                          <span>2 Lessons</span>
                        </span>
                        <span class=" flex items-center space-x-2">
                          <img src="@/assets/images/svg/user2.svg" alt="">
                          <span>4k Lesson</span>
                        </span>
                      </div>
                    </div>
                  </a>
  
                  <a class=" bg-white rounded-[8px] transition shadow-box7 duration-150 border-b-4 hover:border-primary border-transparent
              hover:shadow-box6 flex p-8 space-x-6" href="single-course.html">
                    <div class="flex-none">
                      <div class="w-[159px] h-[159px]  rounded  relative">
                        <img src="@/assets/images/all-img/c3.png" alt="" class=" w-full h-full object-cover rounded">
                      </div>
                    </div>
                    <div class="course-content flex-1">
                      <div class="text-primary font-bold text-2xl mb-2 flex justify-between">
                        <span class=" inline-block">$72.39</span>
                        <span class=" flex space-x-1">
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                        </span>
                      </div>
                      <h4 class=" text-2xl leading-[36px] mb-4 font-bold dark:text-black">Introduction to Color Theory &amp;
                        Basic UI/UX</h4>
                      <div class="flex   space-x-6">
                        <span class=" flex items-center space-x-2">
                          <img src="@/assets/images/svg/file2.svg" alt="">
                          <span>2 Lessons</span>
                        </span>
                        <span class=" flex items-center space-x-2">
                          <img src="@/assets/images/svg/user2.svg" alt="">
                          <span>4k Lesson</span>
                        </span>
                      </div>
                    </div>
                  </a>
  
                  <a class=" bg-white rounded-[8px] transition shadow-box7 duration-150 border-b-4 hover:border-primary border-transparent
              hover:shadow-box6 flex p-8 space-x-6" href="single-course.html">
                    <div class="flex-none">
                      <div class="w-[159px] h-[159px]  rounded  relative">
                        <img src="@/assets/images/all-img/c4.png" alt="" class=" w-full h-full object-cover rounded">
                      </div>
                    </div>
                    <div class="course-content flex-1">
                      <div class="text-primary font-bold text-2xl mb-2 flex justify-between">
                        <span class=" inline-block">$72.39</span>
                        <span class=" flex space-x-1">
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                        </span>
                      </div>
                      <h4 class=" text-2xl leading-[36px] mb-4 font-bold dark:text-black">Financial Security Thinking and
                        Principles Theory
                      </h4>
                      <div class="flex   space-x-6">
                        <span class=" flex items-center space-x-2">
                          <img src="@/assets/images/svg/file2.svg" alt="">
                          <span>2 Lessons</span>
                        </span>
                        <span class=" flex items-center space-x-2">
                          <img src="@/assets/images/svg/user2.svg" alt="">
                          <span>4k Lesson</span>
                        </span>
                      </div>
                    </div>
                  </a>
  
                  <a class=" bg-white rounded-[8px] transition shadow-box7 duration-150 border-b-4 hover:border-primary border-transparent
              hover:shadow-box6 flex p-8 space-x-6" href="single-course.html">
                    <div class="flex-none">
                      <div class="w-[159px] h-[159px]  rounded  relative">
                        <img src="@/assets/images/all-img/c5.png" alt="" class=" w-full h-full object-cover rounded">
                      </div>
                    </div>
                    <div class="course-content flex-1">
                      <div class="text-primary font-bold text-2xl mb-2 flex justify-between">
                        <span class=" inline-block">Free</span>
                        <span class=" flex space-x-1">
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                        </span>
                      </div>
                      <h4 class=" text-2xl leading-[36px] mb-4 font-bold dark:text-black">Logo Design: From Concept to
                        Presentation</h4>
                      <div class="flex   space-x-6">
                        <span class=" flex items-center space-x-2">
                          <img src="@/assets/images/svg/file2.svg" alt="">
                          <span>2 Lessons</span>
                        </span>
                        <span class=" flex items-center space-x-2">
                          <img src="@/assets/images/svg/user2.svg" alt="">
                          <span>4k Lesson</span>
                        </span>
                      </div>
                    </div>
                  </a>
  
                  <a class="bg-white rounded-[8px] transition shadow-box7 duration-150 border-b-4 hover:border-primary border-transparent hover:shadow-box6 flex p-8 space-x-6"
                    href="single-course.html">
                    <div class="flex-none">
                      <div class="w-[159px] h-[159px]  rounded  relative">
                        <img src="@/assets/images/all-img/c6.png" alt="" class=" w-full h-full object-cover rounded">
                      </div>
                    </div>
                    <div class="course-content flex-1">
                      <div class="text-primary font-bold text-2xl mb-2 flex justify-between">
                        <span class=" inline-block">$29.82</span>
                        <span class=" flex space-x-1">
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                          <span class="w-4 h-4 inline-block ">
                            <img src="@/assets/images/svg/review.svg" alt=""
                              class=" w-full h-full block object-cover"></span>
                        </span>
                      </div>
                      <h4 class=" text-2xl leading-[36px] mb-4 font-bold dark:text-black">Professional Ceramic Moulding for
                        Beginners</h4>
                      <div class="flex   space-x-6">
                        <span class=" flex items-center space-x-2">
                          <img src="@/assets/images/svg/file2.svg" alt="">
                          <span>2 Lessons</span>
                        </span>
                        <span class=" flex items-center space-x-2">
                          <img src="@/assets/images/svg/user2.svg" alt="">
                          <span>4k Lesson</span>
                        </span>
                      </div>
                    </div>
                  </a>
  
                </div>
                <div class="text-center pt-14">
                  <a href="#" class=" btn btn-primary inline-flex items-center  space-x-[10px]">
                    <span>Load More
                    </span>
                    <span class=" relative top-1">
                      <iconify-icon icon="ion:reload-outline"></iconify-icon>
                    </span>
                  </a>
                </div>
              </div>
            </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';

  const tableGridView = ref(true);
  const toggleTableView = (view) => {
    tableGridView.value = view;
  };
  
  </script>
  
  <style scoped>
  .show {
    display: block;
    animation: fadeIn 0.3s ease-out;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0.3;
    }
  
    100% {
      opacity: 1;
    }
  }
  </style>