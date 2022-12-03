import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/tailwind.css'
import { createPinia } from 'pinia'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUsers } from '@fortawesome/free-solid-svg-icons'

import i18 from "./locales/i18n"
/* add icons to the library */
library.add(faUsers)
const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(i18)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')