import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'

// ✅ Bootstrap CSS & JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// ✅ Font Awesome Setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAt, faAtom, faCubes, faKeyboard, faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

library.add(faAt, faAtom, faCubes, faKeyboard, faBars, faSun, faMoon)

// ✅ Create Vue App
const app = createApp(App)
const pinia = createPinia()

// ✅ Global Font Awesome Component
app.component('font-awesome-icon', FontAwesomeIcon)

// ✅ Use Pinia
app.use(pinia)

// ✅ Mount App
app.mount('#app')
