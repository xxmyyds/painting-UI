import { router } from './router'
import { store } from './store'
import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import painting from '../packages'

const app = createApp(App)

app.use(painting)
app.use(router)
app.use(store)
app.mount('#app')
