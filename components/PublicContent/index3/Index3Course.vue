<template> 
  <div
    class=" section-padding bg-[url('assets/images/all-img/section-bg-11.png')] dark:bg-[url('')] bg-cover bg-no-repeat">
    <div class="container">
      <div class="flex items-center flex-wrap flex-y-4">
        <div class="flex-1">
          <div class="mini-title">Popular Courses</div>
          <div class="column-title dark:text-white">
            Choose Our Top
            <span class="shape-bg">Courses</span>
          </div>
        </div>
        <div class="flex-none">
          <ul class="filter-list flex xl:space-x-[39px] space-x-4">
            <li @click="changeFilter(1)" class="dark:text-white" :class="{ 'active': filterIndex === 1 }">
              See All
            </li>
            <li @click="changeFilter(2)" class="dark:text-white" :class="{ 'active': filterIndex === 2 }">
              Marketing
            </li>
            <li @click="changeFilter(3)" class="dark:text-white" :class="{ 'active': filterIndex === 3 }">
              Design
            </li>
            <li @click="changeFilter(4)" class="dark:text-white" :class="{ 'active': filterIndex === 4 }">
              Finance
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-wrap pt-10 grids dark:text-black">


        <div v-for="card in filteredCards" :key="card.id"
          class="cat-2 cat-3 grid-item xl:w-1/3 lg:w-1/2 w-full px-[15px] mb-[15px] show">
          <a class=" bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm block   mb-5 " href="#">
            <div class="course-thumb h-[248px] rounded-t-[8px]  relative">
              <nuxt-img :src="card.image" alt="" class=" w-full h-full object-cover rounded-t-[8px]"></nuxt-img>
              <span class="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6"
                v-html="card.category"></span>
            </div>
            <div class="course-content p-8">
              <div class="text-secondary font-bold text-2xl mb-3">{{ card.price }}</div>
              <h4 class=" text-xl mb-3 font-bold dark:text-black" v-html="card.title"></h4>
              <div class="flex justify-between  space-x-3">
                <span class=" flex items-center space-x-2">
                  <img src="@/assets/images/svg/file.svg" alt="">
                  <span>{{ card.lessonCount }} Lessons</span>
                </span>
                <span class=" flex items-center space-x-2">
                  <img src="@/assets/images/svg/clock.svg" alt="">
                  <span>{{ card.duration }}</span>
                </span>
                <span class=" flex items-center space-x-2">
                  <img src="@/assets/images/svg/star.svg" alt="">
                  <span>{{ card.rating }}</span>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="text-center lg:pt-16 pt-10">
        <a href="#" class=" btn btn-primary">View All Courses</a>
      </div>
    </div>
  </div>
</template>

<script setup>

const cards = [
  {
    id: 1,
    category: "Art &amp; Design",
    filters: [2, 3],
    image: "@/assets/images/all-img/c6.png",
    price: "$29.28",
    title: "Basic Fundamentals of Interior &amp; Graphics Design",
    lessonCount: 2,
    duration: "4h 30m",
    rating: "4.8",
  },
  {
    id: 2,
    category: "Development",
    filters: [2, 3],
    image: "@/assets/images/all-img/c7.png",
    price: "Free",
    title: "Increasing Engagement with Instagram &amp; Facebook",
    lessonCount: 2,
    duration: "4h 30m",
    rating: "4.8",
  },
  {
    id: 3,
    category: "Drawing",
    filters: [3, 4],
    image: "@/assets/images/all-img/c8.png",
    price: "$72.39",
    title: "Introduction to Color Theory &amp; Basic UI/UX",
    lessonCount: 2,
    duration: "4h 30m",
    rating: "4.8",
  },
  {
    id: 4,
    category: "Technology",
    filters: [2, 4],
    image: "@/assets/images/all-img/c9.png",
    price: "$72.39",
    title: "Financial Security Thinking and Principles Theory",
    lessonCount: 2,
    duration: "4h 30m",
    rating: "4.8",
  },
  {
    id: 5,
    category: "Data Science",
    filters: [2, 3],
    image: "@/assets/images/all-img/c10.png",
    price: "Free",
    title: "Logo Design: From Concept to Presentation",
    lessonCount: 2,
    duration: "4h 30m",
    rating: "4.8",
  },
  {
    id: 6,
    category: "Developemet",
    filters: [2, 4],
    image: "@/assets/images/all-img/c11.png",
    price: "$29.82",
    title: "Professional Ceramic Moulding for Beginners",
    lessonCount: 2,
    duration: "4h 30m",
    rating: "4.8",
  },
];

const filterIndex = ref(1);
const filteredCards = ref(cards);

const filterCards = () => {
  if (filterIndex.value === 1) {
    filteredCards.value = cards;
    return;
  }
  filteredCards.value = cards.filter(card => card.filters.includes(filterIndex.value));
}

const changeFilter = (index) => {
  filterIndex.value = index;
}

watch(filterIndex, (newFilterIndex, oldFilterIndex) => {
  if (newFilterIndex !== oldFilterIndex) {
    filterCards();
  }
});

onMounted(() => {
});

</script>

<style scoped>
.grid-item {
  display: none;
  animation: zoom-out 0.3s ease-in-out;
}

.grid-item.show {
  display: block;
  animation: zoom-in 0.3s ease-in-out;
}

@keyframes zoom-in {
  from {
    transform: scale(0.5);
  }

  to {
    transform: scale(1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0.5);
  }
}
</style>