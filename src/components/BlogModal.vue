<template>
  <!-- Modal -->
  <div class="modal fade"
       :id="'blog-'+blog.id"
       tabindex="-1"
       role="dialog"
       aria-labelledby="modelTitleId"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ blog.title }}
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          {{ blog.body }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <!-- NOTE could add delete here too
              <button type="button" class="btn btn-primary">
              Delete
            </button> -->
        </div>
      </div>
    </div>
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
  name: 'Modal',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
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
