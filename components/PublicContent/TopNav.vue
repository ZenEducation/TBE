<template>
  <div class="breadcrumbs section-padding bg-custom-image bg-cover bg-center bg-no-repeat" v-if="head">
    <div class="container text-center">
      <h2 class="dark-text">{{ head }}</h2>
      <nav>
        <ol class="flex items-center justify-center space-x-3 text-black">
          <li class="breadcrumb-item"><a href="index.html">Pages </a></li>
          <li class="breadcrumb-item">-</li>
          <li class="text-primary">{{ title || head }} </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    head: {
      type: String,
    },
    title: {
      type: String,
    },
  }
}
</script>

<style scoped>
.bg-custom-image {
  background-image: url('@/assets/images/all-img/bred.png');
}
.dark-text {
  color: black;
}
</style>