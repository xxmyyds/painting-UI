import { createApp, h } from 'vue'
import Dialog from './index.vue'
export const openDialog = (options: any) => {
  const { title, content, closeOnClickOverlay } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const close = () => {
    app.unmount()
    div.remove()
  }
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          modelValue: true,
          'onUpdate:modelValue': (newVisible: boolean) => {
            if (newVisible === false) close()
          },
          closeOnClickOverlay,
        },
        { title, content }
      )
    },
  })
  app.mount(div)
}
