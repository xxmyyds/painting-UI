<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { computed, provide, ref } from 'vue'
import { router } from './router'
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup() {
    const store = useStore()
    const visible = computed(() => store.state.asideVisible)
    const width = ref(document.documentElement.clientWidth)
    const asideVisible = ref(true)
    const onResize = () => {
      width.value = document.documentElement.clientWidth
      asideVisible.value = width.value <= 500 ? visible.value : true
    }
    window.addEventListener('resize', onResize)
    provide('asideVisible', asideVisible)
    router.afterEach(() => {
      if (width.value <= 500) {
        asideVisible.value = false
      }
    })
  },
}
</script>
