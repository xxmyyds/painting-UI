import { router } from './router'
import { store } from './store'
import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
