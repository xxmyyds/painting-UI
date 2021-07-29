<template>
  <div>
    <h1>Dialog 对话框</h1>
    <h5>可以在保留当前页面的情况下告知用户进行相关操作</h5>

    <br /><br /><br />
    <h1>基本用法</h1>
    <h5>点击一个按钮弹出一个对话框</h5>
    <div class="dialogDoc">
      <Button theme="primary" @click="onClick">点击打开Dialog</Button>
      <Dialog :closeOnClickOverlay="false" v-model="visible1" @ok="ok" @cancel="cancel">
        <template #title>
          <strong>标题</strong>
        </template>
        <template #content>
          <Button>hello</Button>
          <Button>hello</Button>
        </template>
      </Dialog>
    </div>

    <br /><br /><br />
    <h1>一句话打开Dialog</h1>
    <h5>可以减少代码量一句话直接打开对话框</h5>
    <div class="dialogDoc">
      <Button theme="text" @click="showDialog1">一句话打开Dialog</Button>
    </div>

    <br /><br /><br />
    <h1>异步关闭</h1>
    <h5>在添加loading属性后点击对话框确定按钮会延迟关闭</h5>
    <div class="dialogDoc">
      <Button theme="primary" @click="visible2 = true">显示对话框</Button>
      <Dialog loading v-model="visible2" @ok="asyncOk" @cancel="cancel">
        <template #title>
          <span>标题</span>
        </template>
        <template #content>
          <p>点击确定后，对话框将在 2秒 后关闭。</p>
        </template>
      </Dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { openDialog } from '../../../packages/Dialog/src/openDialog'

export default {
  setup() {
    const visible1 = ref(false)
    const visible2 = ref(false)

    const onClick = () => {
      visible1.value = !visible1.value
    }
    const ok = () => {
      console.log('ok')
    }
    const cancel = () => {
      console.log('cancel')
    }
    const showDialog1 = () => {
      openDialog({
        title: '标题',
        content: '你好',
        closeOnClickOverlay: false,
      })
    }

    const asyncOk = () => {
      setTimeout(() => {
        visible2.value = !visible2.value
      }, 2000)
      console.log('111')
    }
    return {
      visible1,
      visible2,
      onClick,
      ok,
      cancel,
      showDialog1,
      asyncOk,
    }
  },
}
</script>

<style lang="scss" scoped>
.dialogDoc {
  padding: 20px 0;
}
</style>
