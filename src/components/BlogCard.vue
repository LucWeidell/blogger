<template>
  <div class="BlogCard col-md-11">
    {{ blog.title }}
  </div>
  <!-- NOTE this may throw an error -->
  <div class="col-md-11">
    <img :src="blog.imgUrl" alt="">
  </div>
  <div class="col-md-11">
    <!-- TODO AUTHOR HERE -->
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  name: 'BlogCard',
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
