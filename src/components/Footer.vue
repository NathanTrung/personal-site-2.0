<template>
    <footer class="footer-background">
      <!-- Top row -->
      <div class="footer-top">
        <div class="footer-logo">
            <a href="#home" @click.prevent="scrollToSection('home')">
              <img v-if="isDark !== undefined" :src="isDark ? RazorWhite : Razor" alt="Logo" class="logo-image button-press" loading="eager" />
              <img v-else :src="Razor" alt="Logo" class="logo-image button-press" loading="eager" />
            </a>
        </div>
  
        <div class="footer-links">
          <h2 class="footer-title">Quick Links</h2>
          <nav>
            <ul>
              <li><a href="#home" @click.prevent="scrollToSection('home')" class="button-press">Home</a></li>
              <li><a href="#about" @click.prevent="scrollToSection('about')" class="button-press">About Me</a></li>
              <li><a href="#projects" @click.prevent="scrollToSection('projects')" class="button-press">Projects</a></li>
              <li><a href="#contact" @click.prevent="scrollToSection('contact')" class="button-press">Contact</a></li>
            </ul>
          </nav>
        </div>
  
        <div class="footer-contact">
          <h2 class="footer-title">Contact Me</h2>
          <nav>
            <ul>
              <li><a href="https://www.facebook.com/NaifanTrung" class="button-press" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://github.com/NathanTrung" class="button-press" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.instagram.com/nathantrung/" class="button-press" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/nathan-trung/" class="button-press" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://x.com/NaifTrung" class="button-press" target="_blank" rel="noopener noreferrer">X</a></li>
              <li><a href="https://linktr.ee/nathantrung" class="button-press" target="_blank" rel="noopener noreferrer">Linktree</a></li>
            </ul>
          </nav>
        </div>
      </div>
  
      <!-- Bottom row: social icons -->
      <div class="footer-social">
        <nav>
          <ul>
            <li><a href="https://www.facebook.com/NaifanTrung" class="button-press social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FontAwesomeIcon :icon="faFacebook" /></a></li>
            <li><a href="https://github.com/NathanTrung" class="button-press social-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FontAwesomeIcon :icon="faGithub" /></a></li>
            <li><a href="https://www.instagram.com/nathantrung/" class="button-press social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FontAwesomeIcon :icon="faInstagram" /></a></li>
            <li><a href="https://www.linkedin.com/in/nathan-trung/" class="button-press social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FontAwesomeIcon :icon="faLinkedin" /></a></li>
            <li><a href="https://x.com/NaifTrung" class="button-press social-icon" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><FontAwesomeIcon :icon="faXTwitter" /></a></li>
            <li><a href="https://linktr.ee/nathantrung" class="button-press social-icon" target="_blank" rel="noopener noreferrer" aria-label="Linktree"><img :src="isDark ? LinktreeDark : LinktreeLight" alt="Linktree" class="social-icon-img" /></a></li>
          </ul>
        </nav>
      </div>
  
      <!-- Footer note -->
      <div class="footer-copyright">
        <p v-if="currentDate">
          Site Accessed At: 
          {{ formatTime(currentDate) }}
          {{ formatDate(currentDate) }}
        </p>
        <p v-else>Loading...</p>
        <br />
        &copy; {{ currentYear }} Nathan Trung
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref, onMounted, computed, onBeforeUnmount } from 'vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faFacebook, faLinkedin, faInstagram, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
  import Razor from '@/assets/razor.png'
  import RazorWhite from '@/assets/razor-white.png'
  import LinktreeLight from '@/assets/Home/Linktree.png'
  import LinktreeDark from '@/assets/Home/Linktree-white.png'
  import { useThemeStore } from '@/stores/theme'
  import { storeToRefs } from 'pinia'
  
  const themeStore = useThemeStore()
  const { isDark } = storeToRefs(themeStore)
  
  const currentDate = ref(null)
  const currentYear = computed(() => new Date().getFullYear())
  let intervalId = null

  // Preload images to prevent flash of missing logo
  const preloadImages = () => {
    const lightImg = new Image();
    const darkImg = new Image();
    lightImg.src = Razor;
    darkImg.src = RazorWhite;
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }
  
  // Add smooth scrolling functionality
  const scrollToSection = (sectionId) => {
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
  
  onMounted(() => {
    // Initialize the theme store
    themeStore.initTheme()
    
    // Preload images
    preloadImages()
    
    currentDate.value = new Date()
    intervalId = setInterval(() => {
      currentDate.value = new Date()
    }, 1000)
  })

  onBeforeUnmount(() => {
    if (intervalId) {
      clearInterval(intervalId)
    }
  })
  </script>
  
  <style scoped>
  .footer-background {
    background-color: var(--bg-color);
    color: var(--text-color);
    padding: clamp(20px, 3vw, 40px) clamp(10px, 2vw, 15px);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-top: 1px solid var(--border-color);
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  }

  .footer-top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-logo, .footer-links, .footer-contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }

  .footer-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }

  .footer-logo img,
  .logo-image {
    max-width: min(200px, 100%);
    height: auto;
    transition: transform 0.3s ease;
    display: block;
    margin: 0 auto;
  }

  .footer-logo img:hover,
  .logo-image:hover {
    transform: scale(1.05);
  }

  .footer-title {
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    font-weight: 600;
    position: relative;
    color: var(--text-color);
    margin-bottom: 0.5rem;
    text-align: center;
  }

  .footer-title::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background-color: var(--primary-color);
  }

  nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    width: 100%;
    align-items: center;
  }

  .footer-links a,
  .footer-contact a {
    text-decoration: none;
    color: var(--text-color);
    transition: all 0.3s ease;
    padding: 6px 10px;
    border-radius: 4px;
    display: inline-block;
    position: relative;
    font-size: clamp(0.9rem, 1.2vw, 1rem);
    text-align: center;
  }

  .footer-links a::after,
  .footer-contact a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: var(--primary-color);
    transition: all 0.3s ease;
  }

  .footer-links a:hover::after,
  .footer-contact a:hover::after {
    width: 100%;
    left: 0;
  }

  .footer-links a:hover,
  .footer-contact a:hover {
    color: var(--primary-color);
    transform: translateY(-2px);
  }

  .footer-social {
    display: flex;
    justify-content: center;
    padding: 0.5rem 0;
  }

  .footer-social ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: clamp(12px, 2vw, 20px);
    flex-wrap: wrap;
  }

  .social-icon {
    color: var(--text-color);
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    transition: all 0.3s ease;
    padding: 8px;
    border-radius: 50%;
    background-color: var(--nav-bg);
  }

  .social-icon:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
    background-color: var(--card-bg);
  }

  .social-icon-img {
    width: clamp(2rem, 3.5vw, 2.5rem);
    height: clamp(2rem, 3.5vw, 2.5rem);
    object-fit: contain;
    transition: all 0.3s ease;
    padding: 6px;
    border-radius: 50%;
    background-color: var(--nav-bg);
  }

  .social-icon:hover .social-icon-img,
  a:hover .social-icon-img {
    transform: translateY(-3px);
    background-color: var(--card-bg);
  }

  .footer-copyright {
    text-align: center;
    font-size: clamp(0.75rem, 1.2vw, 0.85rem);
    color: var(--text-muted);
    padding-top: 0.75rem;
    border-top: 1px solid var(--border-color);
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .footer-top {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }

    .footer-logo, .footer-links, .footer-contact {
      flex: 1;
      max-width: 300px;
    }
  }

  @media (max-width: 480px) {
    .footer-background {
      padding: 15px 10px;
      gap: 1rem;
    }

    .footer-top {
      gap: 1.5rem;
    }

    .footer-logo img {
      max-width: 150px;
    }

    .footer-title {
      font-size: 1rem;
    }

    .footer-links a,
    .footer-contact a {
      font-size: 0.9rem;
      padding: 4px 8px;
    }

    .social-icon {
      font-size: 1.5rem;
      padding: 6px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .footer-logo img,
    .footer-links a,
    .footer-contact a,
    .social-icon {
      transition: none;
    }
  }
  </style>