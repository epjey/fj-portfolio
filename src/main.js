import { createApp } from 'vue'

import '@fontsource-variable/archivo/wght.css'
import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource-variable/manrope/wght.css'
import './style.css'

import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
