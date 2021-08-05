<template>
  <div class="Thread row">
    <BlogCard v-for="b in blogs" :key="b.id" :blog="b" />
  </div>
</template>

<script>
export default {
  name: 'Thread',
  props: {
    blogs: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
