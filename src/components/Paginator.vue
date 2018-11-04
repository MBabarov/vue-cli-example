<template>
  <div class="paginator">
    <nav>
      <ul class="pagination justify-content-center">
        <li
          :class="{disabled: fistStep}"
          class="page-item">
          <a
            href="#"
            class="page-link"
            @click="onCurrentStep(currentStep-1, $event)">Previous</a>
        </li>
        <li
          v-for="step in countSteps"
          :key="step"
          :class="{active: currentStep == step}"
          class="page-item">
          <a
            href="#"
            class="page-link"
            @click="onCurrentStep(step, $event)">{{ step }}</a>
        </li>
        <li
          :class="{disabled: lastStep}"
          class="page-item">
          <a
            href="#"
            class="page-link"
            @click="onCurrentStep(currentStep+1, $event)">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Paginator',
  props: {
    amount: {
      type: Number,
      required: true
    },
    'show-at-once': {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      currentStep: 1
    }
  },
  computed: {
    countSteps() {
      if (this.amount && this.showAtOnce) {
        return Math.ceil(this.amount / this.showAtOnce)
      }
      return 1
    },
    fistStep() {
      return this.currentStep == 1 ? true : false
    },
    lastStep() {
      return this.currentStep == this.countSteps ? true : false
    }
  },
  watch: {
    showAtOnce() {
      this.onCurrentStep(1)
    },
    amount() {
      this.onCurrentStep(1)
    }
  },
  mounted() {
    this.onCurrentStep(this.currentStep)
  },
  methods: {
    onCurrentStep(step, event) {
      event && event.preventDefault()
      this.currentStep = step
      this.$emit('currentStep', step)
    }
  }
}
</script>
