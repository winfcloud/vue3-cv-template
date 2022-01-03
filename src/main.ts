import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// svg 注册脚本
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
