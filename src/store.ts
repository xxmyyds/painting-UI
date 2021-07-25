import { createStore } from 'vuex'

interface Type {
  asideVisible: boolean
}

// 创建一个新的 store 实例
export const store = createStore<Type>({
  state: {
    asideVisible: false,
  },
  mutations: {
    setAsideVisible(state, newVal) {
      state.asideVisible = newVal
    },
  },
})

// // 创建一个新的 store 实例
// export const store = createStore({
//   state: {
//     asideVisible: false,
//   },
//   mutations: {
//     setAsideVisible(state, newVal) {
//       state.asideVisible = newVal
//     },
//   },
// })
