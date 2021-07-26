<template>
  <button
    :style="{ width: width + 'px' }"
    class="painting-switch-wrapper"
    :class="{ 'painting-checked': currentValue }"
    :disabled="disabled"
    @click="toggle"
  >
    <span></span>
    <div class="painting-switch-inner">
      <slot name="open" v-if="currentValue"></slot>
      <slot name="close" v-if="!currentValue"></slot>
    </div>
  </button>
</template>

<script lang="ts">
import { ref, watch } from 'vue'
export default {
  name: 'Switch',
  props: {
    value: {
      type: [String, Number, Boolean],
    },
    width: {
      type: Number,
      default: 44,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    let currentValue = ref(props.value)
    const toggle = () => {
      if (!props.disabled) {
        currentValue.value = !currentValue.value
        context.emit('update:value', !props.value)
        context.emit('on-change', !props.value)
      }
    }
    watch(
      () => props.value,
      (newVal) => {
        currentValue.value = newVal
      }
    )
    return { toggle, currentValue }
  },
}
</script>
