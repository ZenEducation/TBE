<template>
    <div class="breadcrumbs section-padding bg-custom-image bg-cover bg-center bg-no-repeat" v-if="head">
    <div class="container text-center">
      <h2>{{ head }}</h2>
      <nav>
        <ol class="flex items-center justify-center space-x-3">
          <li class="breadcrumb-item"><a href="index.html">Pages </a></li>
          <li class="breadcrumb-item">-</li>
          <li class="text-primary">{{ head }} </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
export default{
    props: {
      head: {
      type: String,
    },
    }
}
</script>

<style scoped>
  .bg-custom-image {
  background-image: url('@/assets/images/all-img/bred.png');
}
</style>