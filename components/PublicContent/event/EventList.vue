<template>
    <div class="nav-tab-wrapper tabs  section-padding">
        <div class="container">
            <div class="flex  items-center mb-14">
                <div class="flex-1 flex space-x-6  items-center">
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
            <div class="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">

<EventCard/>
<EventCard/>
<EventCard/>
<EventCard/>
<EventCard/>
<EventCard/>
<EventCard/>
<EventCard/>
<EventCard/>
<EventCard/>
<EventCard/>
<EventCard/>
                

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
    </div>
</template>