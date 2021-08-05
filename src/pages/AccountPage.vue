<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { blogsService } from '../services/BlogsService'
import Pop from '../utils/Notifier'

export default {
  name: 'Account',
  account: computed(() => AppState.account),
  setup() {
    const myAccount = AppState.account
    onMounted(async() => {
      try {
        await blogsService.getAll({ creatorId: myAccount.id })
      } catch (error) {
        Pop.toast('error', error)
      }
    })
    return {}
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
