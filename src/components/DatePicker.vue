<template>
  <div class="datepicker">
    <input
      ref="datepicker"
      :value="value"
      class="form-control"
      type="text">
  </div>
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

export default {
  name: 'Datepicker',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: () => ({
    fp: null
  }),
  watch: {
    value: 'updateDatepicker'
  },
  mounted() {
    this.fp = flatpickr(this.$refs.datepicker, {
      dateFormat: 'd.m.Y',
      onChange: (selectedDates, dateStr) => {
        this.$emit('input', dateStr)
      }
    })
  },
  beforeDestroy() {
    this.fp.destroy()
  },
  methods: {
    updateDatepicker() {
      this.fp.setDate(this.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.datepicker input {
  width: 100%;
  background: #ffffff;
}
</style>
