import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/doc',
      component: () => import('./views/Doc.vue'),
      children: [
        {
          path: '',
          component: () => import('./components/demo/DocDemo.vue'),
        },
        {
          path: 'switch',
          component: () => import('./components/demo/SwitchDemo.vue'),
        },
        {
          path: 'button',
          component: () => import('./components/demo/ButtonDemo.vue'),
        },
        {
          path: 'dialog',
          component: () => import('./components/demo/DialogDemo.vue'),
        },
        {
          path: 'tabs',
          component: () => import('./components/demo/TabsDemo.vue'),
        },
      ],
    },
  ],
})
