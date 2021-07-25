<template>
  <Switch v-model:value="bool">
    <template v-slot:open>
      <span>开</span>
    </template>
    <template v-slot:close>
      <span>关</span>
    </template>
  </Switch>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const bool = ref(true)

    return {
      bool,
    }
  },
}
</script>

<style></style>
