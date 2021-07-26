<template>
  <Switch>
    <template v-slot:open>
      <span>开</span>
    </template>
    <template v-slot:close>
      <span>关</span>
    </template>
  </Switch>
  <br />---------------------------------------------------------<br />
  <Switch v-model:value="bool" :width="60">
    <template v-slot:open>
      <span>开启</span>
    </template>
    <template v-slot:close>
      <span>关闭</span>
    </template>
  </Switch>
  <br />---------------------------------------------------------<br />
  <Switch disabled></Switch>
  <br />---------------------------------------------------------<br />
  <Switch v-model:value="bool" @on-change="onChange"></Switch>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const bool = ref(1)
    const onChange = (status: boolean) => {
      console.log(status)
    }
    return {
      bool,
      onChange,
    }
  },
}
</script>

<style></style>
