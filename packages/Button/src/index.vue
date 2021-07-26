<template>
  <button :disabled="disabled" :class="classes" v-bind="$attrs" class="painting-button">
    <span v-if="loading" class="painting-loadingIndicator"></span>
    <slot></slot>
  </button>
</template>

<script>
import { computed } from 'vue'
import { oneOf } from '../../../src/utils/assist'
export default {
  name: 'Button',
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: 'default',
      validator(value) {
        return oneOf(value, ['default', 'primary', 'success', 'info', 'warning', 'danger', 'text'])
      },
    },
    size: {
      type: String,
      default: 'default',
      validator(value) {
        return oneOf(value, ['default', 'large', 'small'])
      },
    },
    round: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, round, size } = props
    const classes = computed(() => {
      return {
        [`painting-theme-${theme}`]: theme,
        [`painting-size-${size}`]: size,
        ['is-round']: round,
      }
    })
    return {
      classes,
    }
  },
}
</script>
