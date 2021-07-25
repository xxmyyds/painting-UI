// import rough from 'roughjs/bundled/rough.cjs'

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentoptions: ComponentOptions
  export default componentoptions
}
// declare module 'roughjs/bundled/rough.esm'
