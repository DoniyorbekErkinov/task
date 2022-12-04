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
import { faUsers, faGraduationCap, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

import i18 from "./locales/i18n"
/* add icons to the library */
library.add(faUsers)
library.add(faGraduationCap)
library.add(faArrowDown)
library.add(faArrowUp)
const pinia = createPinia()
import VueMultiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'
import { TokenService } from './store/storage.service'


/**
 *  ADD DATA TO LOCALESTORAGE
 */


/**
 *  ADD DATA TO LOCALESTORAGE
 */

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(i18)
app.component('vue-multi-select', VueMultiselect)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')