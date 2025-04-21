import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'
import './assets/animated-backgrounds.css'

// ✅ Bootstrap CSS & JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// ✅ Font Awesome Setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAt, faAtom, faCubes, faKeyboard, faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

library.add(faAt, faAtom, faCubes, faKeyboard, faBars, faSun, faMoon)

// ✅ Create and mount app
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.mount('#app')
