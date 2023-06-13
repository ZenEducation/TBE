<template>
    <div class=" bg-white shadow-box12 rounded-[8px] transition duration-100 hover:shadow-box13 dark:text-black">
        <div class="course-thumb h-[260px] rounded-t-[8px]  relative">
            <img src="@/assets/images/all-img/blog-9.png" alt="" class=" w-full h-full object-cover rounded-t-[8px]">
            <span class="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">Education
            </span>
        </div>
        <div class="course-content p-8">
            <div class="flex   lg:space-x-10 space-x-5 mb-5">
                <NuxtLink class=" flex items-center space-x-2" to="blog-single">
                    <img src="@/assets/images/svg/admin.svg" alt="">
                    <span>Admin</span>
                </NuxtLink>
                <NuxtLink class=" flex items-center space-x-2" to="blog-single">
                    <img src="@/assets/images/svg/calender.svg" alt="">
                    <span>Jan 29, 2022</span>
                </NuxtLink>
            </div>
            <h4 class=" text-xl mb-5 font-bold">
                <NuxtLink to="blog-single" class=" hover:text-primary transition duration-150 dark:text-black">
                    Education Is About Create Leaders For Tomorrow
                </NuxtLink>
            </h4>
            <NuxtLink to="blog-single" class=" text-black font-semibold hover:underline transition duration-150">Read
                More
            </NuxtLink>
        </div>
    </div>
</template>