<template>
    <div class="sidebarWrapper space-y-[30px]">
        <div class="wdiget widget_search">
            <div class="bg-[#F8F8F8] flex  rounded-md shadow-e1 items-center  py-[4px] pl-3  relative">
                <div class="flex-1">
                    <input type="text" placeholder="Search keyword..." class="border-none focus:ring-0 bg-transparent">
                </div>
                <div class="flex-none">
                    <button class="btn btn-primary">
                        <img src="../../assets/images/icon/search.svg" alt=""></button>
                </div>
            </div>
        </div>
        <div class="wdiget widget_catagory">
            <h4 class="widget-title">Categories</h4>

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
        <div class="wdiget widget-recent-post">
            <h4 class=" widget-title">Related Courses</h4>
            <ul class="list">
                <li class=" flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                    <div class="flex-none ">
                        <div class="h-20 w-20  rounded">
                            <img src="../../assets/images/all-img/rc-1.png" alt=""
                                class=" w-full h-full object-cover rounded">
                        </div>
                    </div>
                    <div class="flex-1 ">
                        <div class="mb-1 font-semibold text-black">
                            How to Manage Ads For Clients The Right Way
                        </div>
                        <a class=" text-secondary font-semibold" href="#">Read More</a>
                    </div>
                </li>
                <li class=" flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                    <div class="flex-none ">
                        <div class="h-20 w-20  rounded">
                            <img src="../../assets/images/all-img/rc-2.png" alt=""
                                class=" w-full h-full object-cover rounded">
                        </div>
                    </div>
                    <div class="flex-1 ">
                        <div class="mb-1 font-semibold text-black">
                            How to Manage Ads For Clients The Right Way
                        </div>
                        <a class=" text-secondary font-semibold" href="#">Read More</a>
                    </div>
                </li>
                <li class=" flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                    <div class="flex-none ">
                        <div class="h-20 w-20  rounded">
                            <img src="../../assets/images/all-img/rc-3.png" alt=""
                                class=" w-full h-full object-cover rounded">
                        </div>
                    </div>
                    <div class="flex-1 ">
                        <div class="mb-1 font-semibold text-black">
                            How to Manage Ads For Clients The Right Way
                        </div>
                        <a class=" text-secondary font-semibold" href="#">Read More</a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="wdiget">
            <h4 class="widget-title">Popular Tags</h4>
            <ul class="flex flex-wrap">

                <li class="mr-2 mb-2">
                    <a href="#"
                        class="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white">
                        Business
                    </a>
                </li>

                <li class="mr-2 mb-2">
                    <a href="#"
                        class="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white">
                        Education
                    </a>
                </li>

                <li class="mr-2 mb-2">
                    <a href="#"
                        class="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white">
                        Design
                    </a>
                </li>

                <li class="mr-2 mb-2">
                    <a href="#"
                        class="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white">
                        Students
                    </a>
                </li>

                <li class="mr-2 mb-2">
                    <a href="#"
                        class="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white">
                        Teachers
                    </a>
                </li>

                <li class="mr-2 mb-2">
                    <a href="#"
                        class="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white">
                        Classroom
                    </a>
                </li>

                <li class="mr-2 mb-2">
                    <a href="#"
                        class="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white">
                        Online
                    </a>
                </li>

                <li class="mr-2 mb-2">
                    <a href="#"
                        class="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white">
                        e-Learning
                    </a>
                </li>

                <li class="mr-2 mb-2">
                    <a href="#"
                        class="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white">
                        Book
                    </a>
                </li>

            </ul>
        </div>
        <div class="wdiget">
            <h4 class="widget-title">Instagram Feed</h4>
            <div class="grid grid-cols-3 gap-4">

                <div>
                    <a href="#" class="group relative block h-20 w-full rounded">
                        <img src="../../assets/images/all-img/ins-1.png" alt=""
                            class="block h-full w-full rounded object-cover" />
                        <div
                            class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40
                                                    text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100">
                            <span class="scale-0 transition-all duration-150 group-hover:scale-100">
                                <iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
                            </span>
                        </div>
                    </a>
                </div>

                <div>
                    <a href="#" class="group relative block h-20 w-full rounded">
                        <img src="../../assets/images/all-img/ins-2.png" alt=""
                            class="block h-full w-full rounded object-cover" />
                        <div
                            class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40
                                                    text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100">
                            <span class="scale-0 transition-all duration-150 group-hover:scale-100">
                                <iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
                            </span>
                        </div>
                    </a>
                </div>

                <div>
                    <a href="#" class="group relative block h-20 w-full rounded">
                        <img src="../../assets/images/all-img/ins-3.png" alt=""
                            class="block h-full w-full rounded object-cover" />
                        <div
                            class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40
                                                    text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100">
                            <span class="scale-0 transition-all duration-150 group-hover:scale-100">
                                <iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
                            </span>
                        </div>
                    </a>
                </div>

                <div>
                    <a href="#" class="group relative block h-20 w-full rounded">
                        <img src="../../assets/images/all-img/ins-4.png" alt=""
                            class="block h-full w-full rounded object-cover" />
                        <div
                            class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40
                                                    text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100">
                            <span class="scale-0 transition-all duration-150 group-hover:scale-100">
                                <iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
                            </span>
                        </div>
                    </a>
                </div>

                <div>
                    <a href="#" class="group relative block h-20 w-full rounded">
                        <img src="../../assets/images/all-img/ins-5.png" alt=""
                            class="block h-full w-full rounded object-cover" />
                        <div
                            class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40
                                                    text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100">
                            <span class="scale-0 transition-all duration-150 group-hover:scale-100">
                                <iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
                            </span>
                        </div>
                    </a>
                </div>

                <div>
                    <a href="#" class="group relative block h-20 w-full rounded">
                        <img src="../../assets/images/all-img/ins-6.png" alt=""
                            class="block h-full w-full rounded object-cover" />
                        <div
                            class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40
                                                    text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100">
                            <span class="scale-0 transition-all duration-150 group-hover:scale-100">
                                <iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
                            </span>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    </div>
</template>