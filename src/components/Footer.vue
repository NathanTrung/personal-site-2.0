<template>
    <footer class="footer-background">
      <!-- Top row -->
      <div class="footer-top">
        <div class="footer-logo">
            <a href="#home">
  <img src="@/assets/razor.png" alt="Logo" class="Logo2 button-press" />
</a>
        </div>
  
        <div class="footer-links">
          <h2 class="footer-title">Quick Links</h2>
          <ul>
            <li><a href="#home" class="button-press">Home</a></li>
            <li><a href="#about" class="button-press">About Me</a></li>
            <li><a href="#projects" class="button-press">Projects</a></li>
            <li><a href="#contact" class="button-press">Contact</a></li>
          </ul>
        </div>
  
        <div class="footer-contact">
          <h2 class="footer-title">Contact Me</h2>
          <ul>
            <li><a href="https://www.facebook.com/NaifanTrung" class="button-press">Facebook</a></li>
            <li><a href="https://github.com/NathanTrung" class="button-press">GitHub</a></li>
            <li><a href="https://www.instagram.com/nathantrung/" class="button-press">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/nathan-trung/" class="button-press">LinkedIn</a></li>
            <li><a href="https://x.com/NaifTrung" class="button-press">X</a></li>
          </ul>
        </div>
      </div>
  
      <!-- Bottom row: social icons -->
      <div class="footer-social">
        <ul>
          <li><a href="https://www.facebook.com/NaifanTrung" class="button-press"><FontAwesomeIcon :icon="faFacebook" /></a></li>
          <li><a href="https://github.com/NathanTrung" class="button-press"><FontAwesomeIcon :icon="faGithub" /></a></li>
          <li><a href="https://www.instagram.com/nathantrung/" class="button-press"><FontAwesomeIcon :icon="faInstagram" /></a></li>
          <li><a href="https://www.linkedin.com/in/nathan-trung/" class="button-press"><FontAwesomeIcon :icon="faLinkedin" /></a></li>
          <li><a href="https://x.com/NaifTrung" class="button-press"><FontAwesomeIcon :icon="faXTwitter" /></a></li>
        </ul>
      </div>
  
      <!-- Footer note -->
      <div class="footer-copyright">
        <p v-if="currentDate">
          Site Accessed At: 
          {{ currentDate.getHours() }}:{{ currentDate.getMinutes() }}:{{ currentDate.getSeconds() }} 
          {{ `${currentDate.getUTCDate()}/${currentDate.getUTCMonth() + 1}/${currentDate.getUTCFullYear()}` }}
        </p>
        <p v-else>Loading...</p>
        <br />
        &copy; Nathan Trung
      </div>
    </footer>
  </template>
  
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faFacebook, faLinkedin, faInstagram, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
  
  const currentDate = ref(null)
  
  onMounted(() => {
    currentDate.value = new Date();  // Initialize with current date
    setInterval(() => {
      currentDate.value = new Date();  // Update every second
    }, 1000);
  })
  </script>
  
  <style scoped>
  .footer-background {
  background-color: #222;
  color: white;
  padding: 60px 20px;
  display: flex;
  flex-direction: column; /* stack children vertically */
  flex-wrap: wrap;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}

.footer-logo, .footer-links, .footer-contact {
  flex: 1 1 25%;
  min-height: 80px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  text-align: center;
}

.footer-logo img {
  max-width: 180px;
  margin-bottom: 20px;
}

.footer-title {
  font-size: 1.3em;
  font-weight: 600;
  margin-bottom: 20px;
  margin-top: 20px;
}

.footer-links ul,
.footer-contact ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.footer-links li,
.footer-contact li {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-align: center;
}

.footer-links a,
.footer-contact a {
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;
  padding: 12px 0;
  display: block;
  width: 100%;
  height: 100%;
}

.footer-links a:hover,
.footer-contact a:hover {
  color: #56d736;
}

/* Social icons now always at the bottom */
.footer-social {
  display: flex;
  justify-content: center;
  margin-top: auto; /* Push to bottom */
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 30px;
}

.footer-social ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.footer-social a {
  color: white;
  font-size: 2.5em;
  transition: color 0.3s ease;
  padding: 15px;
}

.footer-social a:hover {
  color: #56d736;
}

.footer-copyright {
  text-align: center;
  margin-top: 20px;
  font-size: 0.9em;
  margin-bottom: 10px;
}

/* Responsive for smaller screens */
@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    align-items: center;
  }

  .footer-logo, .footer-links, .footer-contact, .footer-social {
    width: 100%;
    text-align: center;
    padding-left: 0;
    padding-right: 0;
    margin-bottom: 40px;
  }

  .footer-social {
    justify-content: center;
    gap: 20px;
  }

  .footer-social ul {
    flex-direction: row;
    gap: 20px;
  }
}

  </style>
  