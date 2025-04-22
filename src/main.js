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

// Optimize resource loading
document.addEventListener('DOMContentLoaded', () => {
  // Lazy load images that are below the fold
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
});
