<template>
  <div class="select-of-quantity">
    <h5 align="left">Choose how many users to show on one screen.</h5>
    <select
      v-model="currentRange"
      class="browser-default custom-select"
      @change="onCurrentRange(currentRange)">
      <option
        v-for="item in range"
        :key="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectOfQuantity',
  props: {
    range: {
      type: Array,
      default: () => [5, 10, 20],
      required: false
    },
    currentStep: {
      type: Number,
      required: true
    },
    usersList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentRange: this.range[0],
      filteredUsersListByRange: []
    }
  },
  watch: {
    usersList: 'onCurrentUsersListByRange',
    currentStep: 'onCurrentUsersListByRange'
  },
  mounted() {
    this.onCurrentRange(this.range[0])
  },
  methods: {
    onCurrentRange(range) {
      this.currentRange = Number(range)
      this.$emit('currentRange', range)
      this.onCurrentUsersListByRange()
    },
    onCurrentUsersListByRange() {
      const start = this.currentStep > 1 ? this.currentRange * (this.currentStep - 1) : 0
      const end = this.currentStep > 1 ? this.currentRange * this.currentStep : this.currentRange
      this.currentUsersListByRange = this.usersList.slice(start, end)
      this.$emit('currentUsersListByRange', this.currentUsersListByRange)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.select-of-quantity {
  margin-bottom: 20px;
}
</style>
