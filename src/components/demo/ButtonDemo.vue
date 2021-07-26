<template>
  <div>
    <h1>Button 按钮</h1>
    <h5>常用的操作按钮。</h5>
    <br /><br /><br />
    <h1>基础用法</h1>
    <h5>基础的按钮用法</h5>
    <div class="btnDoc">
      <Button>默认按钮</Button>
      <Button theme="primary">主要按钮</Button>
      <Button theme="success">成功按钮</Button>
      <Button theme="info">信息按钮</Button>
      <Button theme="warning">警告按钮</Button>
      <Button theme="danger">危险按钮</Button>
    </div>
    <div class="btnDoc">
      <Button round>圆角按钮</Button>
      <Button round theme="primary">主要按钮</Button>
      <Button round theme="success">成功按钮</Button>
      <Button round theme="info">信息按钮</Button>
      <Button round theme="warning">警告按钮</Button>
      <Button round theme="danger">危险按钮</Button>
    </div>
    <br /><br /><br />
    <h1>禁用状态</h1>
    <h5>按钮处于禁用状态</h5>
    <div class="btnDoc">
      <Button disabled>圆角按钮</Button>
      <Button disabled theme="primary">主要按钮</Button>
      <Button disabled theme="success">成功按钮</Button>
      <Button disabled theme="info">信息按钮</Button>
      <Button disabled theme="warning">警告按钮</Button>
      <Button disabled theme="danger">危险按钮</Button>
    </div>
    <div class="btnDoc">
      <Button disabled round>默认按钮</Button>
      <Button disabled round theme="primary">主要按钮</Button>
      <Button disabled round theme="success">成功按钮</Button>
      <Button disabled round theme="info">信息按钮</Button>
      <Button disabled round theme="warning">警告按钮</Button>
      <Button disabled round theme="danger">危险按钮</Button>
    </div>
    <br /><br /><br />
    <h1>文本按钮</h1>
    <h5>没有边框和背景色的按钮</h5>
    <div class="btnDoc">
      <Button theme="text">文本按钮</Button>
      <Button disabled theme="text">文本按钮</Button>
    </div>

    <br /><br /><br />
    <h1>不同大小</h1>
    <h5>Button提供除了默认值以外的俩种大小尺寸</h5>
    <div class="btnDoc">
      <Button size="large">大型按钮</Button>
      <Button>默认按钮</Button>
      <Button size="small">小型按钮</Button>
    </div>
    <div class="btnDoc">
      <Button size="large" round>大型按钮</Button>
      <Button round>默认按钮</Button>
      <Button size="small" round>小型按钮</Button>
    </div>

    <br /><br /><br />
    <h1>加载中</h1>
    <h5>按钮加载状态</h5>
    <div class="btnDoc">
      <Button loading>默认按钮</Button>
      <Button loading theme="primary">主要按钮</Button>
      <Button loading theme="success">成功按钮</Button>
      <Button loading theme="info">信息按钮</Button>
      <Button loading theme="warning">警告按钮</Button>
      <Button loading theme="danger">危险按钮</Button>
      <Button loading theme="text">文本按钮</Button>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
}
</script>

<style lang="scss" scoped>
.btnDoc {
  padding: 20px 0;
}
</style>
