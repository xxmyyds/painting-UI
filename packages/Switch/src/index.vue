<template>
  <button class="painting-switch-wrapper" :class="{ checked: value }" @click="toggle">
    <span></span>
    <div class="painting-switch-inner">
      <slot name="open" v-if="value === true"></slot>
      <slot name="close" v-if="value === false"></slot>
    </div>
  </button>
</template>

<script lang="ts">
export default {
  name: 'Switch',
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
      console.log(props.value)
    }

    return { toggle }
  },
}
</script>
