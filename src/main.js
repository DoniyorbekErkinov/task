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

/* add icons to the library */
library.add(faUsers)
const pinia = createPinia()

// import VueI18n from 'vue-i18n'

const app = createApp(App)

app.use(router)
app.use(pinia)
// app.use(VueI18n)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')