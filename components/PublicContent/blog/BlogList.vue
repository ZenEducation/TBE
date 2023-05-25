<template>
    <div class="nav-tab-wrapper tabs  section-padding">
        <div class="container">
            <div class="grid grid-cols-12 gap-[30px]">
                <div class="lg:col-span-8 col-span-12">
                    <div class="grid md:grid-cols-2 grid-cols-1 gap-[30px]">

                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />

                    </div>
                    <div class="pagination mt-14">
                        <ul class=" flex justify-center space-x-3">
                            <li class="inline-flex">
                                <a href="#"
                                    class="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold">
                                    <iconify-icon icon="heroicons:chevron-double-left-20-solid"
                                        class=" text-2xl"></iconify-icon>
                                </a>
                            </li>
                            <li class="inline-flex">
                                <a href="#"
                                    class="flex w-12 h-12 flex-col items-center justify-center bg-primary text-white rounded font-semibold">1</a>
                            </li>
                            <li class="inline-flex">
                                <a href="#"
                                    class="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold">2</a>
                            </li>
                            <li class="inline-flex">
                                <a href="#"
                                    class="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold">3</a>
                            </li>
                            <li class="inline-flex">
                                <a href="#"
                                    class="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold">4</a>
                            </li>
                            <li class="inline-flex">
                                <a href="#"
                                    class="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold">
                                    <iconify-icon icon="heroicons:chevron-double-right-20-solid"
                                        class=" text-2xl"></iconify-icon>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <BlogSidebar/>
            </div>
        </div>
    </div>

</template>