<template>
    <div class="lg:col-span-4 col-span-12">
        <div class="sidebarWrapper space-y-[30px]">
            <div class="wdiget widget_search">
                <div class="bg-[#F8F8F8] flex rounded-md shadow-e1 items-center py-[4px] pl-3 relative">
                    <div class="flex-1">
                        <input type="text" placeholder="Search keyword..."
                            class="border-none focus:ring-0 bg-transparent" />
                    </div>
                    <div class="flex-none">
                        <button class="btn btn-primary">
                            <img src="../../assets/images/icon/search.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <BlogCategories />
          <BlogRelatedCourses/>
            <div class="wdiget">
                <h4 class="widget-title">Popular Tags</h4>
                <ul class="flex flex-wrap">
                    <li class="mr-2 mb-2">
                        <a href="#"
                            class="bg-[#F8F8F8] px-3 py-1 rounded text-base transition-all duration-150 hover:bg-primary hover:text-white">
                            Business
                        </a>
                    </li>

                    <li class="mr-2 mb-2">
                        <a href="#"
                            class="bg-[#F8F8F8] px-3 py-1 rounded text-base transition-all duration-150 hover:bg-primary hover:text-white">
                            Education
                        </a>
                    </li>

                    <li class="mr-2 mb-2">
                        <a href="#"
                            class="bg-[#F8F8F8] px-3 py-1 rounded text-base transition-all duration-150 hover:bg-primary hover:text-white">
                            Design
                        </a>
                    </li>

                    <li class="mr-2 mb-2">
                        <a href="#"
                            class="bg-[#F8F8F8] px-3 py-1 rounded text-base transition-all duration-150 hover:bg-primary hover:text-white">
                            Students
                        </a>
                    </li>

                    <li class="mr-2 mb-2">
                        <a href="#"
                            class="bg-[#F8F8F8] px-3 py-1 rounded text-base transition-all duration-150 hover:bg-primary hover:text-white">
                            Teachers
                        </a>
                    </li>

                    <li class="mr-2 mb-2">
                        <a href="#"
                            class="bg-[#F8F8F8] px-3 py-1 rounded text-base transition-all duration-150 hover:bg-primary hover:text-white">
                            Classroom
                        </a>
                    </li>

                    <li class="mr-2 mb-2">
                        <a href="#"
                            class="bg-[#F8F8F8] px-3 py-1 rounded text-base transition-all duration-150 hover:bg-primary hover:text-white">
                            
                        </a>
                    </li>

                    <li class="mr-2 mb-2">
                        <a href="#"
                            class="bg-[#F8F8F8] px-3 py-1 rounded text-base transition-all duration-150 hover:bg-primary hover:text-white">
                            e-Learning
                        </a>
                    </li>

                    <li class="mr-2 mb-2">
                        <a href="#"
                            class="bg-[#F8F8F8] px-3 py-1 rounded text-base transition-all duration-150 hover:bg-primary hover:text-white">
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
                                class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40 text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100">
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
                                class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40 text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100">
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
                                class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40 text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100">
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
                                class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40 text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100">
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
                                class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40 text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100">
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
                                class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40 text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100">
                                <span class="scale-0 transition-all duration-150 group-hover:scale-100">
                                    <iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>