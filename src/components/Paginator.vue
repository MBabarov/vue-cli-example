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
            @click.prevent.stop="onCurrentStep(currentStep-1)">Previous</a>
        </li>
        <li
          v-for="step in countSteps"
          :key="step"
          :class="{active: currentStep == step}"
          class="page-item">
          <a
            href="#"
            class="page-link"
            @click.prevent.stop="onCurrentStep(step)">{{ step }}</a>
        </li>
        <li
          :class="{disabled: lastStep}"
          class="page-item">
          <a
            href="#"
            class="page-link"
            @click.prevent.stop="onCurrentStep(currentStep+1)">Next</a>
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
    'current-range': {
      type: Number,
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
      return this.amount && this.currentRange ? Math.ceil(this.amount / this.currentRange) : 1
    },
    fistStep() {
      return this.currentStep == 1
    },
    lastStep() {
      return this.currentStep == this.countSteps
    }
  },
  watch: {
    currentRange() {
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
    onCurrentStep(step) {
      this.currentStep = step
      this.$emit('currentStep', step)
    }
  }
}
</script>
