<template>
  <div class="nav-tab-wrapper tabs pt-10 section-padding-bottom">
    <div class="container">
      <div class="grid grid-cols-12 gap-[30px]">
        <div class="lg:col-span-8 col-span-12">
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
              <div class="grid md:grid-cols-2 grid-cols-1 gap-[30px] dark:text-black">
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
              <div class="grid  grid-cols-1 gap-[30px] dark:text-black">
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
        <div class="lg:col-span-4 col-span-12">
          <div class="sidebarWrapper space-y-[30px]">
            <div class="wdiget widget_search">
              <div class="bg-[#F8F8F8] flex  rounded-md shadow-e1 items-center  py-[4px] pl-3  relative">
                <div class="flex-1">
                  <input type="text" placeholder="Search keyword..." class="border-none focus:ring-0 bg-transparent">
                </div>
                <div class="flex-none">
                  <button class="btn btn-primary">
                    <img src="@/assets/images/icon/search.svg" alt="">
                  </button>
                </div>
              </div>
            </div>
            <div class="wdiget widget_catagory">
              <h4 class="widget-title dark:text-black">Price Filter</h4>
              <div class="slider-container">
                <div class="double-range-slider">
                  <input id="inputLeft" type="range" class="range-slider" min="1500" max="10000" v-model="sliderMinValue"
                    step="100">
                  <input id="inputRight" type="range" class="range-slider" min="1500" max="10000" v-model="sliderMaxValue"
                    step="100">
                  <div class="slider">
                    <div class="track"></div>
                    <div class="range" :style="[{ left: leftThumbPercent + '%' }, { right: rightThumbPercent + '%' }]">
                    </div>
                    <div class="thumb left" :style="{ left: leftThumbPercent + '%' }">
                    </div>
                    <div class="thumb right" :style="{ right: rightThumbPercent + '%' }"></div>

                  </div>
                </div>
              </div>
              <div class="price_slider_amount mt-6 flex text-xl font-medium text-black">
                <span class=" flex-none">
                  Price: $</span>
                <input type="number" v-model="sliderMinValue" name="priceMin" placeholder="Min"
                  class="amount border-none focus:outline-none focus:ring-0 p-0 text-xl font-medium text-black">
                <span> - $</span>
                <input type="number" v-model="sliderMaxValue" name="priceMax" placeholder="Max"
                  class="amount border-none focus:outline-none focus:ring-0 p-0 text-xl font-medium text-black">
              </div>
            </div>
            <div class="wdiget widget_catagory dark:text-black">
              <h4 class="widget-title dark:text-black">Categories</h4>

              <ul class=" list-item space-y-4">

                <li class=" block">
                  <a href="#" class=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150">
                    <span>Development (23)</span>
                    <span class=" text-2xl">
                      <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                    </span>
                  </a>
                </li>

                <li class=" block">
                  <a href="#" class=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150">
                    <span>Art &amp; Design (45)</span>
                    <span class=" text-2xl">
                      <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                    </span>
                  </a>
                </li>

                <li class=" block">
                  <a href="#" class=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150">
                    <span>Data Science (14)</span>
                    <span class=" text-2xl">
                      <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                    </span>
                  </a>
                </li>

                <li class=" block">
                  <a href="#" class=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150">
                    <span>Data Science (14)</span>
                    <span class=" text-2xl">
                      <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                    </span>
                  </a>
                </li>

                <li class=" block">
                  <a href="#" class=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150">
                    <span>Technology (28)</span>
                    <span class=" text-2xl">
                      <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                    </span>
                  </a>
                </li>

                <li class=" block">
                  <a href="#" class=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150">
                    <span>It Management (34)</span>
                    <span class=" text-2xl">
                      <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                    </span>
                  </a>
                </li>

              </ul>
            </div>
            <div class="wdiget widget_catagory dark:text-black">
              <h4 class="widget-title dark:text-black">Skill Level</h4>

              <ul class=" list-item space-y-5">

                <li class=" block">
                  <label class=" flex space-x-3 form-check cursor-pointer">
                    <input type="checkbox" class=" hidden form-check-input">
                    <span class="ck-box flex flex-col items-center justify-center">
                      <img src="@/assets/images/icon/white-check.svg" alt="" class="object-contain"></span>
                    <span class="form-check-label">All Levels (82)</span>
                  </label>
                </li>

                <li class=" block">
                  <label class=" flex space-x-3 form-check cursor-pointer">
                    <input type="checkbox" class=" hidden form-check-input">
                    <span class="ck-box flex flex-col items-center justify-center">
                      <img src="@/assets/images/icon/white-check.svg" alt="" class="object-contain"></span>
                    <span class="form-check-label">Beginner Levels (82)</span>
                  </label>
                </li>

                <li class=" block">
                  <label class=" flex space-x-3 form-check cursor-pointer">
                    <input type="checkbox" class=" hidden form-check-input">
                    <span class="ck-box flex flex-col items-center justify-center">
                      <img src="@/assets/images/icon/white-check.svg" alt="" class="object-contain"></span>
                    <span class="form-check-label">Intermediate Level (82)</span>
                  </label>
                </li>

                <li class=" block">
                  <label class=" flex space-x-3 form-check cursor-pointer">
                    <input type="checkbox" class=" hidden form-check-input">
                    <span class="ck-box flex flex-col items-center justify-center">
                      <img src="@/assets/images/icon/white-check.svg" alt="" class="object-contain"></span>
                    <span class="form-check-label">Expert Level (82)</span>
                  </label>
                </li>

              </ul>
            </div>
            <div class="wdiget widget_catagory dark:text-black">
              <h4 class="widget-title dark:text-black">Language</h4>

              <ul class=" list-item space-y-5">

                <li class=" block">
                  <label class=" flex space-x-3 form-check cursor-pointer">
                    <input type="checkbox" class=" hidden form-check-input">
                    <span class="ck-box flex flex-col items-center justify-center">
                      <img src="@/assets/images/icon/white-check.svg" alt="" class="object-contain"></span>
                    <span class="form-check-label">Spanish Language</span>
                  </label>
                </li>

                <li class=" block">
                  <label class=" flex space-x-3 form-check cursor-pointer">
                    <input type="checkbox" class=" hidden form-check-input">
                    <span class="ck-box flex flex-col items-center justify-center">
                      <img src="@/assets/images/icon/white-check.svg" alt="" class="object-contain"></span>
                    <span class="form-check-label">Arabic Language</span>
                  </label>
                </li>

                <li class=" block">
                  <label class=" flex space-x-3 form-check cursor-pointer">
                    <input type="checkbox" class=" hidden form-check-input">
                    <span class="ck-box flex flex-col items-center justify-center">
                      <img src="@/assets/images/icon/white-check.svg" alt="" class="object-contain"></span>
                    <span class="form-check-label">United States (US)</span>
                  </label>
                </li>

                <li class=" block">
                  <label class=" flex space-x-3 form-check cursor-pointer">
                    <input type="checkbox" class=" hidden form-check-input">
                    <span class="ck-box flex flex-col items-center justify-center">
                      <img src="@/assets/images/icon/white-check.svg" alt="" class="object-contain"></span>
                    <span class="form-check-label">United Kingdom (UK)</span>
                  </label>
                </li>

              </ul>
            </div>
            <div class="wdiget widget_catagory dark:text-black">
              <h4 class="widget-title dark:text-black">Rating By</h4>

              <ul class=" list-item space-y-5">

                <li class=" block">
                  <label class=" flex space-x-3 form-check cursor-pointer">
                    <input type="checkbox" class=" hidden form-check-input">
                    <span class="ck-box flex flex-col items-center justify-center">
                      <img src="@/assets/images/icon/white-check.svg" alt="" class="object-contain"></span>
                    <span class="form-check-label">
                      <img src="@/assets/images/svg/rating-1.svg" alt=""></span>
                  </label>
                </li>

                <li class=" block">
                  <label class=" flex space-x-3 form-check cursor-pointer">
                    <input type="checkbox" class=" hidden form-check-input">
                    <span class="ck-box flex flex-col items-center justify-center">
                      <img src="@/assets/images/icon/white-check.svg" alt="" class="object-contain"></span>
                    <span class="form-check-label">
                      <img src="@/assets/images/svg/rating-2.svg" alt=""></span>
                  </label>
                </li>

                <li class=" block">
                  <label class=" flex space-x-3 form-check cursor-pointer">
                    <input type="checkbox" class=" hidden form-check-input">
                    <span class="ck-box flex flex-col items-center justify-center">
                      <img src="@/assets/images/icon/white-check.svg" alt="" class="object-contain"></span>
                    <span class="form-check-label">
                      <img src="@/assets/images/svg/rating-3.svg" alt=""></span>
                  </label>
                </li>

                <li class=" block">
                  <label class=" flex space-x-3 form-check cursor-pointer">
                    <input type="checkbox" class=" hidden form-check-input">
                    <span class="ck-box flex flex-col items-center justify-center">
                      <img src="@/assets/images/icon/white-check.svg" alt="" class="object-contain"></span>
                    <span class="form-check-label">
                      <img src="@/assets/images/svg/rating-4.svg" alt=""></span>
                  </label>
                </li>

                <li class=" block">
                  <label class=" flex space-x-3 form-check cursor-pointer">
                    <input type="checkbox" class=" hidden form-check-input">
                    <span class="ck-box flex flex-col items-center justify-center">
                      <img src="@/assets/images/icon/white-check.svg" alt="" class="object-contain"></span>
                    <span class="form-check-label">
                      <img src="@/assets/images/svg/rating-5.svg" alt=""></span>
                  </label>
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
import { ref } from 'vue';

const sliderMinValue = ref(1500);
const sliderMaxValue = ref(6000);
const leftThumbPercent = ref(15);
const rightThumbPercent = ref(60);

const setLeftVal = () => {
  sliderMinValue.value = Math.min(sliderMinValue.value, sliderMaxValue.value);
  var percent = ((sliderMinValue.value - 1000) / (10000 - 1000)) * 100;
  if (percent >= 0) leftThumbPercent.value = percent;
  else leftThumbPercent.value = 0;
};

const setRightVal = () => {
  sliderMaxValue.value = Math.max(sliderMaxValue.value, sliderMinValue.value);
  var percent = 100 - ((sliderMaxValue.value - 1000) / (10000 - 1000)) * 100;
  if (100 >= percent) rightThumbPercent.value = percent;
  else rightThumbPercent.value = 100;
};
setLeftVal();
setRightVal();

watch([sliderMinValue, sliderMaxValue], ([newMinValue, newMaxValue], [oldMinValue, oldMaxValue]) => {
  if (newMinValue !== oldMinValue) {
    setLeftVal();
  }

  if (newMaxValue !== oldMaxValue) {
    setRightVal();
  }
});

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

.slider-container {
  position: relative;
}

.slider {
  position: relative;
  z-index: 1;
  height: 5px;
}

.slider>.track {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #e1e9f6;
}

.slider>.range {
  position: absolute;
  z-index: 2;
  left: 25%;
  right: 25%;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: rgb(48 190 173)
}

.slider>.thumb {
  position: absolute;
  z-index: 3;
  width: 20px;
  height: 20px;
  border-radius: 5%;
  background-color: rgb(48 190 173);
}

.slider>.thumb.left {
  transform: translate(-17px, -7.5px);
}

.slider>.thumb.right {
  transform: translate(2px, -7.5px);
}

.range-slider {
  position: absolute;
  pointer-events: none;
  -webkit-appearance: none;
  z-index: 2;
  height: 5px;
  width: 100%;
  opacity: 0;
}

.range-slider::-webkit-slider-thumb {
  pointer-events: all;
  height: 20px;
  width: 20px;
  border-radius: 0;
  border: 0 none;
  cursor: pointer;
  background-color: greenyellow;
  -webkit-appearance: none;
}

@keyframes fadeIn {
  0% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
}

.amount {
  width: 25%;
}
</style>