import { createApp } from 'vue'
import App from './App.vue'

// ✅ Bootstrap CSS & JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// ✅ Font Awesome Setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'

library.add(faAt)

// ✅ Create Vue App
const app = createApp(App)

// ✅ Global Font Awesome Component
app.component('font-awesome-icon', FontAwesomeIcon)

// ✅ Mount App
app.mount('#app')
