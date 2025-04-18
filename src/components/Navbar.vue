<template>
  <nav class="navbar fixed-top navbar-expand-lg shadow-sm custom-navbar">
    <div class="container d-flex justify-content-between align-items-center w-100">
      <!-- Logo -->
      <a href="#home" class="navbar-brand">
        <img src="@/assets/razor.png" alt="Logo" class="Logo button-press" width="200" />
      </a>

      <!-- Desktop Nav Items -->
      <ul class="navbar-nav d-none d-lg-flex flex-row gap-3 ms-auto">
        <li class="nav-item"><a href="#home" class="nav-link button-press">Home</a></li>
        <li class="nav-item"><a href="#about" class="nav-link button-press">About Me</a></li>
        <li class="nav-item"><a href="#projects" class="nav-link button-press">Projects</a></li>
        <li class="nav-item"><a href="#contact" class="nav-link button-press">Contact</a></li>
      </ul>

      <!-- Mobile Menu Icon -->
      <button class="navbar-toggler d-lg-none" @click="toggleMenu" ref="menuButtonRef" type="button">
        <i class="fas fa-bars menuicon"></i>
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div
      v-if="isOpen"
      class="dropdown-menu show position-absolute top-100 end-0 mt-2 p-3 shadow rounded custom-dropdown"
      ref="dropdownRef"
      style="z-index: 1000;"
      @mouseleave="handleMouseLeave"
    >
      <a href="#home" class="dropdown-item" @click="handleLinkClick">Home</a>
      <a href="#about" class="dropdown-item" @click="handleLinkClick">About</a>
      <a href="#contact" class="dropdown-item" @click="handleLinkClick">Contact</a>
      <a href="#projects" class="dropdown-item" @click="handleLinkClick">Projects</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)
const dropdownRef = ref(null)
const menuButtonRef = ref(null)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const handleLinkClick = () => {
  isOpen.value = false
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

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<style scoped>
/* Navbar custom background */
.custom-navbar {
  background-color: #1a1a1a !important;
}

/* Nav link styles for dark background */
.navbar-nav .nav-link {
  color: #cccccc !important;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: #a6e28c !important; /* softer green */
}

/* Dropdown nav item hover effect */
.dropdown-item {
  color: #dddddd;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dropdown-item:hover {
  background-color: #232323;
  color: #a6e28c; /* softer green */
}

/* Mobile menu button styles */
.navbar-toggler {
  padding: 10px 15px;
  border-radius: 5px;
  border: 2px solid transparent;
  background-color: transparent;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.navbar-toggler:hover {
  background-color: #333333;
  transform: scale(1.1);
}

.menuicon {
  color: #ffffff;
  font-size: 30px;
  transition: color 0.3s ease;
}

.navbar-toggler:hover .menuicon {
  color: #56d736;
}

.navbar-toggler:focus, 
.navbar-toggler:active {
  outline: none;
  border: none;
  box-shadow: none;
}

/* Dropdown for mobile menu */
.custom-dropdown {
  background-color: #1a1a1a;
  color: #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
}

.dropdown-item {
  color: #e0e0e0;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.Logo {
  height: auto;
  width: 200px; /* or match what you use in HTML */
  max-height: 60px; /* to constrain vertical growth */
}


a {
  color: #56d736 !important;
}
</style>
