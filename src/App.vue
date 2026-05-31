<!-- App.vue -->
<template>
  <div>
    <Navbar />
    <main>
      <HomeSection id="home" />
      <AboutSection id="about" />
      <ProjectsSection id="projects" />
      <ContactSection id="contact" />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import HomeSection from './pages/Home.vue'
import AboutSection from './pages/About.vue'
import ProjectsSection from './pages/Projects.vue'
import ContactSection from './pages/Contact.vue'

// Clean URL on page load if it contains a hash
onMounted(() => {
  // If URL has a hash, scroll to the section and then clean the URL
  if (window.location.hash) {
    const sectionId = window.location.hash.substring(1) // Remove the # symbol
    const element = document.getElementById(sectionId)
    
    if (element) {
      // Small delay to ensure the page has fully loaded
      setTimeout(() => {
        // Scroll with offset for navbar
        const yOffset = -130
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
        
        // Clean URL
        setTimeout(() => {
          history.pushState('', document.title, window.location.pathname + window.location.search)
        }, 100)
      }, 300)
    }
  }
})
</script>

<style>
/* Reset margins and padding for all elements */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

/* General body styles */
body {
  padding-top: 80px; /* Adjusted to match navbar height */
  background-color: var(--bg-color) !important;
  color: var(--text-color);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

/* Main content area */
main {
  background-color: var(--bg-color) !important;
  color: var(--text-color);
  width: 100%;
  min-height: 100vh;
}

/* Style for links */
a {
  color: var(--primary-color);
  text-decoration: none;
}

a:hover {
  color: var(--primary-color);
  text-decoration: underline;
}

/* Button and interactive elements */
button, .button-press {
  background-color: var(--card-bg);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  padding: 10px 15px;
  font-size: 1em;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
}

button:hover, .button-press:hover {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: var(--bg-color);
}

/* Footer styles */
footer {
  background-color: var(--card-bg);
  color: var(--text-color);
  padding: 20px;
  text-align: center;
  font-size: 0.9em;
  border-top: 1px solid var(--border-color);
}

footer a {
  color: var(--primary-color);
  text-decoration: none;
}

footer a:hover {
  color: var(--primary-color);
}

/* Styling for header and sections */
h1, h2, h3 {
  color: var(--text-color);
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.6em;
}

h3 {
  font-size: 1.4em;
}

/* Form elements */
input, textarea {
  background-color: var(--card-bg);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  padding: 10px;
  margin-bottom: 15px;
  font-size: 1em;
  border-radius: 4px;
}

input:focus, textarea:focus {
  border-color: var(--primary-color);
  outline: none;
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
}

/* Card elements */
.card {
  background-color: var(--card-bg);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  padding: 20px;
  margin: 20px 0;
  transition: all 0.3s ease;
  border-radius: 8px;
  box-shadow: var(--card-shadow);
}

.card:hover {
  box-shadow: var(--card-shadow-hover);
}

/* Navigation bar */
.navbar {
  background-color: var(--nav-bg);
  color: var(--text-color);
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--card-shadow);
}

.navbar a {
  color: var(--text-color);
}

.navbar a:hover {
  color: var(--primary-color);
}

/* Container */
.container {
  width: 90%;
  margin: 0 auto;
  padding: 20px;
}

/* Light background for all sections */
section {
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
}

/* Table styles */
table {
  width: 100%;
  background-color: var(--card-bg);
  color: var(--text-color);
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
}

table th, table td {
  padding: 10px;
  border: 1px solid var(--border-color);
}

table th {
  background-color: var(--nav-bg);
}

/* Modal styles */
.modal {
  background-color: var(--card-bg);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.modal-header {
  background-color: var(--nav-bg);
  color: var(--text-color);
}

.modal-footer {
  background-color: var(--nav-bg);
}

@media (max-width: 768px) {
  body {
    padding-top: 100px; /* Increased padding for medium screens */
  }

  .container {
    width: 100%;
  }

  .card {
    margin: 10px 0;
  }

  .navbar {
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  body {
    padding-top: 95px; /* Adjusted for small screens */
  }
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* This adjusts the scroll-to position to account for fixed navbar */
}

@media (max-width: 768px) {
  html {
    scroll-padding-top: 100px; /* Adjusted for medium screens */
  }
}

@media (max-width: 480px) {
  html {
    scroll-padding-top: 95px; /* Adjusted for small screens */
  }
}
</style>
