<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import Tab from './Tab.vue'
export default {
  name: 'Tabs',
  setup(props, ctx) {
    const defaults = ctx.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
  },
}
</script>
