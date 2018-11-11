<template>
  <div v-if="modalShow">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div 
            class="modal-dialog" 
            role="document">
            <div class="modal-content">
              <div class="modal-header">
                <slot name="title">
                  Default header
                </slot>
                <button 
                  type="button" 
                  class="close" 
                  data-dismiss="modal" 
                  aria-label="Close">
                  <span 
                    aria-hidden="true" 
                    @click="onAgree(false)">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <slot name="body">
                  Body
                </slot>
              </div>
              <div class="modal-footer">
                <slot 
                  :onAgree="onAgree" 
                  name="footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    @click="onAgree(false)">
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="onAgree(true)">
                    Save
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    modalShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onAgree(answer) {
      this.$emit('onAgree', answer)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
