<template> 
  <div 
    class="section-padding bg-[url('assets/images/all-img/section-bg-15.png')] dark:bg-[url('')] bg-bottom  bg-cover bg-no-repeat">
    <div class="container">
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
        <div>
          <div class="mini-title">Frequently Asked Question</div>
          <div class="column-title dark:text-white">
            General
            <span class="shape-bg">Questions</span>
          </div>
          <ul class="list accrodains space-y-[30px] lg:max-w-[470px]">
            <li @click="toggleTab(1)" :class="{ 'open': tabIndex === 1 }">
              <button type="button" class="accrodain-button">
                <span>What does it take excellent author?</span>
                <span class="icon-pm"></span>
              </button>
              <div class="dropdown-menu dark:text-black" :class="[ tabIndex === 1 ? 'dropdown-menu active': 'dropdown-menu' ]">
                Learn at your own pace, move between multiple courses, or switch to a different course. Earn a certificate for every learning program that you complete at no additional cost.
              </div>
            </li>
            <li @click="toggleTab(2)" :class="{ 'open': tabIndex === 2 }">
              <button type="button" class="accrodain-button">
                <span>Who will view my content?
                </span>
                <span class="icon-pm"></span>
              </button>
              <div class="dropdown-menu dark:text-black" :class="[ tabIndex === 2 ? 'dropdown-menu active': 'dropdown-menu' ]">
                Learn at your own pace, move between multiple courses, or switch to a different course. Earn a certificate
                for every
                learning program that you complete at no additional cost.
              </div>
            </li>
            <li @click="toggleTab(3)" :class="{ 'open': tabIndex === 3 }">
              <button type="button" class="accrodain-button">
                <span>What does it take become an author?
                </span>
                <span class="icon-pm"></span>
              </button>
              <div class="dropdown-menu dark:text-black" :class="[ tabIndex === 3 ? 'dropdown-menu active': 'dropdown-menu' ]">
                Learn at your own pace, move between multiple courses, or switch to a different course. Earn a certificate
                for every
                learning program that you complete at no additional cost.
              </div>
            </li>
            <li @click="toggleTab(4)" :class="{ 'open': tabIndex === 4 }">
              <button type="button" class="accrodain-button">
                <span>How to Change my Password easily?</span>
                <span class="icon-pm"></span>
              </button>
              <div class="dropdown-menu dark:text-black" :class="[ tabIndex === 4 ? 'dropdown-menu active': 'dropdown-menu' ]">
                Learn at your own pace, move between multiple courses, or switch to a different course. Earn a certificate
                for every
                learning program that you complete at no additional cost.
              </div>
            </li>
          </ul>
        </div>
        <div>
          <img src="@/assets/images/all-img/faq.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const tabIndex = ref(null);

const toggleTab = (index) => {
  if (index === tabIndex.value) tabIndex.value = null;
  else tabIndex.value = index;
};

</script>

<style scoped>
.dropdown-menu {
  max-height: 0px;
  opacity: 0;
  overflow: hidden;
  padding: 0rem 1.5rem;
  /* transition: all 0.5s cubic-bezier(0,1,0,1); */
  transition: all 0.3s ease-out;
}

.dropdown-menu.active {
  max-height: fit-content;
  opacity: 1;
  padding: 1.5rem;
  /* transition: all 0.5s cubic-bezier(0,1,0,1); */
  transition: all 0.3s ease-out;
}
</style>