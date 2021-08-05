<template>
  <div class="BlogCard col">
    <div class="row" data-toggle="modal" :data-target="'#blog-'+blog.id">
      <div class=" col-md-11">
        <h3>{{ blog.title }}</h3>
      </div>
      <!-- NOTE this may throw an error -->
      <div class="col-md-11">
        <img :src="blog.imgUrl" alt="" class="image-fluid">
      </div>
      <div class="col-md-11 d-flex flex-row text-center">
        <!-- TODO AUTHOR HERE -->
        <img :src="blog.creator.picture" alt="" class="image-small">
        <p><i>{{ blog.creator.name }}</i></p>
      </div>
    </div>
  </div>
  <BlogModal :blog="blog" />
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
.image-fluid{
  height: 200px;
}
.image-small{
  height:40px;
  border-radius: 50%;
}
</style>
