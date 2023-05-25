<template>
    <div class="nav-tab-wrapper tabs pt-10 section-padding-bottom">
        <div class="container">
            <div class="flex  items-center mb-14">
                <div class="flex-1 flex space-x-6  items-center">
                    <ul id="tabs-nav" class=" flex space-x-4 cata-Tbas">
                        <li>
                            <a href="#tab1" class=" h-[60px] w-[60px]  flex flex-col justify-center items-center">
                                <iconify-icon icon="clarity:grid-view-line"></iconify-icon>
                            </a>
                        </li>
                        <li>
                            <a href="#tab2" class="h-[60px] w-[60px]  flex flex-col justify-center items-center">
                                <iconify-icon icon="ant-design:unordered-list-outlined"></iconify-icon>
                            </a>
                        </li>
                    </ul>
                    <span>
                        Showing 12 courses of 52
                    </span>
                </div>
                <div class="flex-0">
                    <div class="min-w-[272px]">
                        <select>
                            <option data-display="Sort By: Popularity">Sort By: Popularity</option>
                            <option value="1">Popularity</option>
                            <option value="2">Another option</option>
                            <option value="4">Potato</option>
                        </select>
                    </div>
                </div>
            </div>
            <div id="tabs-content">
                <div id="tab1" class="tab-content">
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">


                        <CoursesCourseCard />
                        <CoursesCourseCard />
                        <CoursesCourseCard />
                        <CoursesCourseCard />
                        <CoursesCourseCard />
                        <CoursesCourseCard />
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
                <div id="tab2" class="tab-content">
                    <div class="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-[30px]">


                    <CoursesCardSecond/>
                    <CoursesCardSecond/>
                    <CoursesCardSecond/>
                    <CoursesCardSecond/>
                    <CoursesCardSecond/>
                    <CoursesCardSecond/>
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