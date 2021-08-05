<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <h3>Blogger</h3>
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link">
            Home
          </router-link>
        </li>
        <!-- TODO this is the profile page -->
        <li class="nav-item">
          <router-link :to="{ name: 'Account' }" class="nav-link">
            Account
          </router-link>
        </li>
      </ul>
      <button type="button" class="btn btn-primary mr-4 " data-toggle="modal" data-target="#create-modal">
        Create Blog
      </button>
      <span class="navbar-text">
        <button
          class="btn btn-outline-primary text-uppercase"
          @click="login"
          v-if="!user.isAuthenticated"
        >
          Login
        </button>

        <div class="dropdown" v-else>
          <div
            class="dropdown-toggle"
            @click="state.dropOpen = !state.dropOpen"
          >
            <img
              :src="user.picture"
              alt="user photo"
              height="40"
              class="rounded"
            />
            <span class="mx-3">{{ user.name }}</span>
          </div>
          <div
            class="dropdown-menu p-0 list-group w-100"
            :class="{ show: state.dropOpen }"
            @click="state.dropOpen = false"
          >
            <router-link :to="{ name: 'Account' }">
              <div class="list-group-item list-group-item-action hoverable">
                Account
              </div>
            </router-link>
            <div
              class="list-group-item list-group-item-action hoverable"
              @click="logout"
            >
              logout
            </div>
          </div>
        </div>
      </span>
    </div>
  </nav>

  <!-- Modal -->
  <div class="modal"
       id="create-modal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="modelTitleId"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <h5 class="modal-title">
            Create a Blog
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body bg-dark">
          <form @submit.prevent="createBlog">
            <div class="form-group">
              <label class="pr-2" for="title">Title</label>
              <input type="text"
                     required
                     id="title"
                     class="form-control"
                     placeholder="Title..."
                     v-model="state.newBlog.title"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="imgUrl">ImageUrl</label>
              <input type="text"
                     required
                     id="imgUrl"
                     class="form-control"
                     placeholder="ImgUrl..."
                     v-model="state.newBlog.imgUrl"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="body">Blog Text:</label>
              <input type="text"
                     required
                     id="body"
                     class="form-control"
                     placeholder="Title..."
                     v-model="state.newBlog.body"
              >
            </div>
            <!-- NOTE refactor later blogs take tage as Well in an array -->
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="submit" class="btn btn-primary">
              Create
            </button>
          </form>
        </div>
        <div class="modal-footer bg-dark">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
import Pop from '../utils/Notifier'
import { blogsService } from '../services/BlogsService'
export default {
  setup() {
    const state = reactive({
      newBlog: {},
      dropOpen: false
    })
    return {
      state,
      async createBlog() {
        try {
          await blogsService.createBlog(state.newBlog)
        } catch (error) {
          Pop.toast('error', error)
        }
      },
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--primary);
}

.modal-backdrop.show{
  opacity: 1!important;
  background:  var(--fade);
  backdrop-filter: blur(30px) brightness(.5) contrast(.85);
}
.modal-body{
  height: 50vh;
  overflow-y: auto;
}
</style>
