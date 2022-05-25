import App from './App.vue'
import {createApp} from 'vue';
import publicRouter from "./router/publicRoutes"

const app = createApp(App)

app.use(publicRouter)


app.mount('#app')
