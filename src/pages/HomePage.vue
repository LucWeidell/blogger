<template>
  <div class="Home container">
    <div class="row">
      <div class="col-md-12">
        <Thread :blogs="blogs" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import Pop from '../utils/Notifier'
import { blogsService } from '../services/BlogsService.js'

export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await blogsService.getAll()
      } catch (error) {
        Pop.toast('error', error)
      }
    })

    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
}
</style>
