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
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import HomeSection from './pages/Home.vue'
import AboutSection from './pages/About.vue'
import ProjectsSection from './pages/Projects.vue'
import ContactSection from './pages/Contact.vue'
</script>

<style>
/* Reset margins and padding for all elements */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* General body styles for dark mode */
body {
  background-color: #121212 /* Very dark background */ !important;
  color: #e0e0e0; /* Light gray text for readability */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Modern font */
  line-height: 1.6;
  font-size: 16px;
}

/* Style for links */
a {
  color: #00b7ff; /* Light blue for links */
  text-decoration: none;
}

a:hover {
  color: #56d736; /* Green on hover */
  text-decoration: underline;
}

/* Button and interactive elements */
button, .button-press {
  background-color: #333333; /* Dark button background */
  color: #e0e0e0; /* Light text */
  border: 1px solid #444444; /* Slightly lighter border */
  padding: 10px 15px;
  font-size: 1em;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover, .button-press:hover {
  background-color: #56d736; /* Green on hover */
  border-color: #56d736;
}

/* Footer styles */
footer {
  background-color: #121212; /* Same dark background for footer */
  color: #e0e0e0;
  padding: 20px;
  text-align: center;
  font-size: 0.9em;
  border-top: 1px solid #444444;
}

footer a {
  color: #00b7ff;
  text-decoration: none;
}

footer a:hover {
  color: #56d736;
}

/* Styling for header and sections */
h1, h2, h3 {
  color: #56d736; /* Use green for headings */
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
  background-color: #333333; /* Dark background for inputs */
  color: #e0e0e0; /* Light text */
  border: 1px solid #444444; /* Slightly lighter border */
  padding: 10px;
  margin-bottom: 15px;
  font-size: 1em;
}

input:focus, textarea:focus {
  border-color: #56d736; /* Green border on focus */
}

/* Card elements */
.card {
  background-color: #333333; /* Dark background for cards */
  color: #e0e0e0; /* Light text */
  border: 1px solid #444444; /* Slightly lighter border */
  padding: 20px;
  margin: 20px 0;
  transition: background-color 0.3s ease;
}

.card:hover {
  background-color: #444444; /* Slightly lighter card on hover */
}

/* Navigation bar */
.navbar {
  background-color: #222222; /* Dark navbar */
  color: #e0e0e0;
}

.navbar a {
  color: #e0e0e0;
}

.navbar a:hover {
  color: #56d736; /* Green on hover */
}

/* Container */
.container {
  width: 90%;
  margin: 0 auto;
  padding: 20px;
}

/* Dark background for all sections */
section {
  background-color: #1c1c1c; /* Dark sections */
  color: #e0e0e0;
  padding: 20px;
  margin: 10px 0;
}

/* Table styles */
table {
  width: 100%;
  background-color: #333333;
  color: #e0e0e0;
  border-collapse: collapse;
}

table th, table td {
  padding: 10px;
  border: 1px solid #444444;
}

table th {
  background-color: #444444;
}

/* Modal styles */
.modal {
  background-color: #2b2b2b;
  color: #e0e0e0;
  border: 1px solid #444444;
}

.modal-header {
  background-color: #333333;
  color: #e0e0e0;
}

.modal-footer {
  background-color: #444444;
}

@media (max-width: 768px) {
  body {
    padding: 10px;
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

html {
  scroll-behavior: smooth;
}
</style>
