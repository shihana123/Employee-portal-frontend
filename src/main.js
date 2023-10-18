/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'
import '@styles/styles.scss'
import axios from 'axios'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

loadFonts()

axios.defaults.baseURL = 'http://localhost:8000/api/';
const token = localStorage.getItem('auth_token');
if(token)
{
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token; // token should come from your Vuex store or another source
}
// Create vue app
const app = createApp(App)


// Use plugins
app.use(vuetify)
app.use(createPinia())
app.use(router)

// Mount vue app
app.mount('#app')
