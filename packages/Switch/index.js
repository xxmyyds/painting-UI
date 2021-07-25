import Switch from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
Switch.install = function (Vue) {
  Vue.component(Switch.name, Switch)
}

// 导出组件
export default Switch
