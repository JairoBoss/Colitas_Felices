import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import publicRouter from "./router/publicRoutes"


loadFonts()

const app = createApp(App)

app.use(publicRouter)

app.use(vuetify)

app.mount('#app')
