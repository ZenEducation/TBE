<template>
    <div class="breadcrumbs section-padding bg-[url('../images/all-img/bred.png')] bg-cover bg-center bg-no-repeat" v-if="head">
    <div class="container text-center">
      <h2>{{ this.head }}</h2>
      <nav>
        <ol class="flex items-center justify-center space-x-3">
          <li class="breadcrumb-item"><a href="index.html">Pages </a></li>
          <li class="breadcrumb-item">-</li>
          <li class="text-primary">{{ this.head }} </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
export default{
    props: ['head']
}
</script>