<template>
  <nav class="navbar fixed-top navbar-expand-lg shadow-sm custom-navbar">
    <div class="container d-flex justify-content-between align-items-center w-100">
      <!-- Logo -->
      <a @click.prevent="scrollToSection('home')" href="#home" class="navbar-brand">
        <img :src="isDark ? RazorWhite : Razor" alt="Logo" class="Logo button-press" width="200" />
      </a>

      <!-- Desktop Nav Items with Theme Toggle -->
      <div class="d-flex align-items-center gap-3">
        <button class="theme-toggle d-none d-lg-flex" @click="toggleTheme" aria-label="Toggle theme">
          <FontAwesomeIcon :icon="isDark ? faSun : faMoon" />
        </button>
        <ul class="navbar-nav d-none d-lg-flex flex-row gap-3">
          <li class="nav-item"><a @click.prevent="scrollToSection('home')" href="#home" class="nav-link button-press">Home</a></li>
          <li class="nav-item"><a @click.prevent="scrollToSection('about')" href="#about" class="nav-link button-press">About Me</a></li>
          <li class="nav-item"><a @click.prevent="scrollToSection('projects')" href="#projects" class="nav-link button-press">Projects</a></li>
          <li class="nav-item"><a @click.prevent="scrollToSection('contact')" href="#contact" class="nav-link button-press">Contact</a></li>
        </ul>
      </div>

      <!-- Mobile Menu Icon and Theme Toggle -->
      <div class="d-flex align-items-center gap-2 d-lg-none">
        <button class="theme-toggle" @click="toggleTheme" aria-label="Toggle theme">
          <FontAwesomeIcon :icon="isDark ? faSun : faMoon" />
        </button>
        <button class="navbar-toggler" @click="toggleMenu" ref="menuButtonRef" type="button">
          <i class="fas fa-bars menuicon"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div
      v-if="isOpen"
      class="dropdown-menu show position-absolute top-100 end-0 mt-2 p-3 shadow rounded custom-dropdown"
      ref="dropdownRef"
      style="z-index: 1000;"
      @mouseleave="handleMouseLeave"
    >
      <a @click="handleSectionClick('home')" href="#home" class="dropdown-item">Home</a>
      <a @click="handleSectionClick('about')" href="#about" class="dropdown-item">About</a>
      <a @click="handleSectionClick('projects')" href="#projects" class="dropdown-item">Projects</a>
      <a @click="handleSectionClick('contact')" href="#contact" class="dropdown-item">Contact</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'
import Razor from '@/assets/razor.png'
import RazorWhite from '@/assets/razor-white.png'

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)

const isOpen = ref(false)
const dropdownRef = ref(null)
const menuButtonRef = ref(null)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const handleLinkClick = () => {
  isOpen.value = false
}

const scrollToSection = (sectionId) => {
  // Close the menu if open
  isOpen.value = false
  
  // Scroll to the section
  const element = document.getElementById(sectionId)
  if (element) {
    // Get appropriate offset based on screen size
    let yOffset = -130; // Default
    
    if (window.innerWidth <= 768) {
      yOffset = -100; // Medium screens
    }
    
    if (window.innerWidth <= 480) {
      yOffset = -95; // Small screens
    }
    
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
    
    // Clean URL by removing hash after scrolling
    setTimeout(() => {
      history.pushState('', document.title, window.location.pathname + window.location.search)
    }, 10)
  }
}

const handleSectionClick = (sectionId) => {
  isOpen.value = false
  scrollToSection(sectionId)
}

const handleMouseLeave = () => {
  isOpen.value = false
}

const handleClickOutside = (event) => {
  const clickedOutside =
    dropdownRef.value &&
    !dropdownRef.value.contains(event.target) &&
    menuButtonRef.value &&
    !menuButtonRef.value.contains(event.target)
  if (clickedOutside) {
    isOpen.value = false
  }
}

const toggleTheme = () => {
  themeStore.toggleTheme()
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
  themeStore.initTheme()
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<style scoped>
/* Navbar custom background */
.custom-navbar {
  background-color: var(--nav-bg) !important;
  box-shadow: var(--card-shadow);
  padding: 0.5rem 0;
}

/* Nav link styles */
.navbar-nav .nav-link {
  color: var(--text-color) !important;
  transition: color 0.3s ease;
  font-size: clamp(0.9rem, 1.1vw, 1rem);
  padding: 0.5rem 0.75rem;
}

.navbar-nav .nav-link:hover {
  color: var(--primary-color) !important;
}

/* Dropdown nav item hover effect */
.dropdown-item {
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: var(--nav-bg);
  color: var(--primary-color);
}

/* Mobile menu button styles */
.navbar-toggler {
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  background-color: transparent;
  transition: all 0.3s ease;
}

.navbar-toggler:hover {
  background-color: var(--nav-bg);
  transform: scale(1.05);
}

.menuicon {
  color: var(--text-color);
  font-size: 24px;
  transition: color 0.3s ease;
}

.navbar-toggler:hover .menuicon {
  color: var(--primary-color);
}

.navbar-toggler:focus, 
.navbar-toggler:active {
  outline: none;
  border: 1px solid var(--border-color);
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
}

/* Dropdown for mobile menu */
.custom-dropdown {
  background-color: var(--card-bg);
  color: var(--text-color);
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  border: 1px solid var(--border-color);
  min-width: 200px;
}

.Logo {
  height: auto;
  width: clamp(150px, 20vw, 250px);
  max-height: 60px;
}

a {
  color: var(--primary-color) !important;
}

.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-color);
  font-size: 1.1rem;
  padding: 0.4rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle:hover {
  background-color: var(--nav-bg);
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .custom-navbar {
    padding: 0.4rem 0;
  }

  .Logo {
    width: clamp(140px, 20vw, 200px);
    max-height: 55px;
  }

  .navbar-toggler {
    padding: 6px 10px;
  }

  .menuicon {
    font-size: 20px;
  }

  .theme-toggle {
    font-size: 1rem;
    padding: 0.3rem;
  }

  .custom-dropdown {
    min-width: 180px;
    padding: 0.5rem;
  }

  .dropdown-item {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .custom-navbar {
    padding: 0.4rem 0;
  }

  .Logo {
    width: clamp(120px, 18vw, 180px);
    max-height: 50px;
  }

  .navbar-toggler {
    padding: 5px 8px;
  }

  .menuicon {
    font-size: 18px;
  }

  .theme-toggle {
    font-size: 0.9rem;
    padding: 0.25rem;
  }
}
</style>
