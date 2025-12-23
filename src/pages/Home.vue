<template>
  <div class="main">
    <!-- Intro Section -->
    <div id="intro" class="wrapper bg-light-custom py-4 mb-0">
      <div class="container py-2">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h1 class="text-uppercase pt-4 fw-bold name-heading">Nathan Trung</h1>
            <h2 class="fw-normal h4-style">
              Computer Science Graduate
              <font-awesome-icon :icon="['fas', 'at']" />
              <br />
              <div class="d-flex align-items-center mt-2">
                Swinburne University of Technology
                <a href="https://www.swinburne.edu.au/" class="swinburne-logo-container button-press ms-2">
                  <span class="visually-hidden">Swinburne University Logo</span>
                </a>
              </div>
            </h2>
            <AnimatedHeading :text="'Hi There! '" :imageSrc="isDark ? WavingDark : WavingLight" :delay="0.5" class="AnimatedHeading" />
            <p>
              Welcome to my personal website. I am a Computer Science graduate from Swinburne University, with strong expertise in software and web development, network administration, DevOps, and game development using Unity. I am committed to building robust, scalable solutions and continuously improving the software development lifecycle through thoughtful design, automation, and best practices.
            </p>
            <p>
              My focus is on Object-Oriented Programming (OOP) principles, emphasizing encapsulation, inheritance, and polymorphism to create modular, maintainable, and efficient software solutions. I have a strong foundation in Data Structures and Design Patterns, enabling me to build scalable and robust applications.
            </p>
            <p>
              <a href="#projects" class="btn btn-outline button-press">Explore My Projects &raquo;</a>
            </p>
          </div>

          <div class="col-md-6 text-center image-container">
            <a href="#about">
              <img :src="Nathan" alt="Chibi Nathan" class="img-fluid button-press chibi" width="300" height="450" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper bg-light-custom py-4 mt-0">
      <div class="container py-2">
        <div class="text-center mb-4">
          <h3 class="fs-2 fw-bold">Connect With Me</h3>
          <p class="text-muted">Let's Collaborate!</p>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-3 col-sm-6 mb-4 d-flex flex-column align-items-center">
            <div class="logo-box mb-3">
              <img :src="isDark ? Partner1Dark : Partner1Light" alt="LinkedIn" class="logo-img linkedin-logo" width="80" height="80" />
            </div>
            <a class="btn btn-outline-primary button-press" href="https://www.linkedin.com/in/nathan-trung/" target="_blank">LinkedIn</a>
          </div>
          <div class="col-md-3 col-sm-6 mb-4 d-flex flex-column align-items-center">
            <div class="logo-box mb-3">
              <img :src="isDark ? Partner2Dark : Partner2Light" alt="GitHub" class="logo-img" width="80" height="80" />
            </div>
            <a class="btn btn-outline-primary button-press" href="https://github.com/NathanTrung" target="_blank">GitHub</a>
          </div>
          <div class="col-md-3 col-sm-6 mb-4 d-flex flex-column align-items-center">
            <div class="logo-box mb-3">
              <img :src="isDark ? Partner3Dark : Partner3Light" alt="Facebook" class="logo-img" width="80" height="80" />
            </div>
            <a class="btn btn-outline-primary button-press" href="https://www.facebook.com/NaifanTrung" target="_blank">Facebook</a>
          </div>
          <div class="col-md-3 col-sm-6 mb-4 d-flex flex-column align-items-center">
            <div class="logo-box mb-3">
              <img :src="isDark ? Partner4Dark : Partner4Light" alt="Linktree" class="logo-img" width="80" height="80" />
            </div>
            <a class="btn btn-outline-primary button-press" href="https://linktr.ee/nathantrung" target="_blank">Linktree</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Proficiencies Section -->
    <div class="wrapper bg-light-custom py-4 mt-0 mb-0">
      <div class="container py-2">
        <div class="text-center mb-4">
          <h3 class="fs-2 fw-bold">Proficiencies</h3>
          <p class="text-muted">Web Development & Software Development Expertise</p>
        </div>

        <div class="row justify-content-center">
          <!-- Web Development -->
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div class="language-card">
              <i class="devicon-react-original colored"></i>
              <span>React</span>
            </div>
          </div>
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div class="language-card">
              <i class="devicon-javascript-plain colored"></i>
              <span>JavaScript</span>
            </div>
          </div>
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div class="language-card">
              <i class="devicon-typescript-plain colored"></i>
              <span>TypeScript</span>
            </div>
          </div>
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div class="language-card">
              <i class="devicon-html5-plain colored"></i>
              <span>HTML5</span>
            </div>
          </div>
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div class="language-card">
              <i class="devicon-css3-plain colored"></i>
              <span>CSS3</span>
            </div>
          </div>
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div class="language-card">
              <i class="devicon-firebase-plain colored"></i>
              <span>Firebase</span>
            </div>
          </div>

          <!-- Software Development -->
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div class="language-card">
              <i class="devicon-java-plain colored"></i>
              <span>Java</span>
            </div>
          </div>
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div class="language-card">
              <i class="devicon-csharp-plain colored"></i>
              <span>C#</span>
            </div>
          </div>
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div class="language-card">
              <i class="devicon-cplusplus-plain colored"></i>
              <span>C++</span>
            </div>
          </div>
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div class="language-card">
              <i class="devicon-docker-plain colored"></i>
              <span>Docker</span>
            </div>
          </div>
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div class="language-card">
              <i class="devicon-git-plain colored"></i>
              <span>Git</span>
            </div>
          </div>
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div class="language-card">
              <i class="devicon-amazonwebservices-original colored"></i>
              <span>AWS</span>
            </div>
          </div>

          <!-- Additional Technologies -->
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div class="language-card">
              <i class="devicon-vuejs-plain colored"></i>
              <span>Vue.js</span>
            </div>
          </div>
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div class="language-card">
              <i class="devicon-nodejs-plain colored"></i>
              <span>Node.js</span>
            </div>
          </div>
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div class="language-card">
              <i class="devicon-mysql-plain colored"></i>
              <span>MySQL</span>
            </div>
          </div>
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div class="language-card">
              <i class="devicon-php-plain colored"></i>
              <span>PHP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import Nathan from '@/assets/Home/Nathan.png'
import Partner1Light from '@/assets/Home/Linkedin.png'
import Partner2Light from '@/assets/Home/Github.png'
import Partner3Light from '@/assets/Home/Facebook.png'
import Partner4Light from '@/assets/Home/Linktree.png'
import Partner1Dark from '@/assets/Home/Linkedin-white.png'
import Partner2Dark from '@/assets/Home/Github-white.png'
import Partner3Dark from '@/assets/Home/Facebook-white.png'
import Partner4Dark from '@/assets/Home/Linktree-white.png'
import WavingDark from '@/assets/Home/hello-white.png'
import WavingLight from '@/assets/Home/hello-black.png'
import SwinburneLogo from '@/assets/Home/Swinburne.ico'
import AnimatedHeading from '@/components/Home/AnimatedHeading.vue'
import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)
</script>

<style scoped>
.main {
  padding-top: 0;
  margin-top: 0;
  background-color: var(--bg-color);
  color: var(--text-color);
}

/* Light Background Section */
.wrapper {
  margin: 0;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  border: 3px solid var(--border-color);
  overflow: visible;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.bg-light-custom {
  background-color: var(--nav-bg);
  color: var(--text-color);
}

/* White Background Section */
.bg-white {
  background-color: var(--bg-color);
  color: var(--text-color);
}

.card {
  background-color: var(--card-bg) !important;
  border: 1px solid var(--border-color);
  color: var(--text-color);
  transition: all 0.3s ease;
  border-radius: 8px;
  box-shadow: var(--card-shadow);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: var(--card-shadow);
}

.card-body {
  padding: 1.5rem;
}

.card-body i {
  color: var(--primary-color);
}

.card-body p {
  color: var(--text-color);
}

h1, h2, h3, h6, .AnimatedHeading {
  color: var(--text-color);
}

a, .btn-outline {
  color: var(--primary-color);
  border-color: var(--primary-color);
}

a:hover, .btn-outline:hover {
  background-color: var(--primary-color);
  color: var(--bg-color);
  border-color: var(--primary-color);
}

.text-muted {
  color: var(--text-muted) !important;
}

.btn-outline-dark {
  color: var(--text-color);
  border-color: var(--border-color);
}

.btn-outline-dark:hover {
  background-color: var(--primary-color);
  color: var(--bg-color);
  border-color: var(--primary-color);
}

.btn-outline-primary {
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-outline-primary:hover {
  background-color: var(--primary-color);
  color: var(--bg-color);
  border-color: var(--primary-color);
}

.chibi {
  max-width: 100%;
  height: auto;
}

.logo {
  width: 40px;
  height: auto;
}

.button-press:hover {
  transform: scale(1.05);
  transition: 0.3s;
}

.logo-box {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: var(--card-bg);
  border-radius: 8px;
  border: 2px solid var(--border-color);
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease;
}

.logo-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.logo-img {
  max-height: 50px;
  width: auto;
  object-fit: contain;
  transition: transform 0.4s ease;
}

.logo-box:hover .logo-img {
  transform: scale(1.1);
}

/* Container for the logo */
.swinburne-logo-container {
  display: inline-block;
  width: 70px;
  height: 50px;
  background-image: url('@/assets/Home/Swinburne.ico');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  margin-left: 15px;
}

.swinburne-logo-container:focus, .swinburne-logo-container:hover {
  transform: scale(1.05);
  transition: 0.3s;
}

.lead {
  color: var(--text-muted);
}

.language-card {
  background-color: var(--card-bg);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease backwards;
}

.language-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: var(--card-shadow);
}

.language-card i {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  transition: transform 0.4s ease;
}

.language-card:hover i {
  transform: scale(1.15) rotate(5deg);
}

.language-card span {
  color: var(--text-color);
  font-weight: 500;
  font-size: 0.9rem;
}

h4 {
  color: var(--text-color);
  font-weight: 600;
  margin-bottom: 1.5rem;
}

/* Make borders more definitive in light mode */
:root:not(.dark-theme) .language-card,
:root:not(.dark-theme) .logo-box {
  border-width: 2px;
  border-color: #d1d5db;
  box-shadow: 0 3px 6px rgba(0,0,0,0.12);
}

.fs-2 {
  font-size: 1.75rem;
}

.mt-0 {
  margin-top: 0 !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

/* Connect section specific styles */
.wrapper:last-child {
  margin: 0 !important;
  margin-bottom: 0 !important;
}

/* Staggered animation for proficiency cards */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply staggered delay to each card */
.col-6:nth-child(1) .language-card { animation-delay: 0.1s; }
.col-6:nth-child(2) .language-card { animation-delay: 0.2s; }
.col-6:nth-child(3) .language-card { animation-delay: 0.3s; }
.col-6:nth-child(4) .language-card { animation-delay: 0.4s; }
.col-6:nth-child(5) .language-card { animation-delay: 0.5s; }
.col-6:nth-child(6) .language-card { animation-delay: 0.6s; }
.col-6:nth-child(7) .language-card { animation-delay: 0.7s; }
.col-6:nth-child(8) .language-card { animation-delay: 0.8s; }
.col-6:nth-child(9) .language-card { animation-delay: 0.9s; }
.col-6:nth-child(10) .language-card { animation-delay: 1.0s; }
.col-6:nth-child(11) .language-card { animation-delay: 1.1s; }
.col-6:nth-child(12) .language-card { animation-delay: 1.2s; }

/* Smooth hover effect for social links */
.logo-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.logo-box:hover .logo-img {
  transform: scale(1.1);
}

.linkedin-logo {
  max-height: 30px !important;
}

/* Add responsive adjustments */
@media (max-width: 768px) {
  #intro {
    padding-top: 6.5rem; /* Increased padding for medium screens */
  }
  
  .pt-4 {
    padding-top: 6.5rem !important; /* Increase padding for headings */
  }
  
  .name-heading {
    margin-top: 6.5rem;
    padding-top: 1rem;
  }

  .swinburne-logo-container {
    margin-top: 5px;
  }
  
  h4 .d-flex {
    margin-top: 8px !important;
  }
}

@media (max-width: 480px) {
  #intro {
    padding-top: 7rem; /* More padding for small screens */
  }
  
  .pt-4 {
    padding-top: 7rem !important; /* Increase padding for headings */
  }
  
  .name-heading {
    margin-top: 5rem;
    padding-top: 1.5rem;
  }
}

/* Specific adjustments for 546px width and above */

  .image-container {
    margin-top: 3rem; /* Push image down at specific breakpoint */
    padding-top: 1.5rem;
  }
  
  .chibi {
    max-width: 90%; /* Slightly reduce image size */
    margin-top: 1.5rem;
  }


/* Additional adjustment for tablet-sized screens */
@media (min-width: 546px) and (max-width: 991px) {
  .image-container {
    margin-top: 4rem; /* More spacing for tablet screens */
  }
}

.name-heading {
  margin-top: 1rem;
}

.h4-style {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
}
</style>
