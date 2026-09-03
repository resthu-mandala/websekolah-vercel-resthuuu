import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js' // <-- pastiin ada ini

const app = createApp(App)
app.use(router) // <-- pastiin ada ini
app.mount('#app')