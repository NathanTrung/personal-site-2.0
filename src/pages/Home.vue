<template>
  <div class="main">
    <!-- Intro Section (Grey) -->
    <div class="wrapper bg-dark-custom py-5">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h1 class="text-uppercase pt-4"><b>Nathan Trung</b></h1>
            <h2 class="fw-normal">
              Computer Science Student
              <font-awesome-icon :icon="['fas', 'at']" />
              <br />
              Swinburne University of Technology
              <a href="https://www.swinburne.edu.au/" class="swinburne-logo-container button-press ms-2">
  <span class="visually-hidden">Swinburne University Logo</span>
</a>

            </h2>
            <AnimatedHeading text="Hi There! " :imageSrc="Waving" :delay="0.5" class="AnimatedHeading" />
            <p>
              Welcome to my personal website! I am currently pursuing a degree in Computer Science at Swinburne University. With strong proficiencies in Software & Web Development, Network administration, DevOps, and Game Development using Unity, I am dedicated to enhancing the Software Development Lifecycle.
            </p>
            <p>
              My focus is on Object-Oriented Programming (OOP) principles, emphasizing encapsulation, inheritance, and polymorphism to create modular, maintainable, and efficient software solutions.
            </p>
            <p>
              <a class="btn btn-outline button-press" href="#projects">Explore My Projects &raquo;</a>
            </p>
          </div>

          <div class="col-md-6 text-center">
            <a href="#about">
              <img :src="Nathan" alt="Chibi Nathan" class="img-fluid button-press chibi" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Proficiencies Section (Black) -->
    <div class="wrapper overlay py-5">
      <div class="container">
        <div class="text-center mb-4">
          <h3 class="display-6 font-x2"><b>Proficiencies</b></h3>
          <p class="text-muted">Expertise in Modern Software Development & Technologies</p>
        </div>

        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100 text-center text-light bg-dark border-secondary">
              <div class="card-body">
                <i class="fa fa-atom fa-2x mb-3"></i>
                <h6 class="fw-bold">Frontend Development (React)</h6>
                <p>Proficient in building dynamic, responsive web applications using React. Skilled in component-based architecture, state management (Redux), and integrating modern UI/UX practices.</p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card h-100 text-center text-light bg-dark border-secondary">
              <div class="card-body">
                <i class="fa fa-cubes fa-2x mb-3"></i>
                <h6 class="fw-bold">OOP (Java/C#/C++)</h6>
                <p>Designing modular and maintainable systems with strong OOP principles across C#, Java, C++, and Python. Experience with APIs and microservices.</p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card h-100 text-center text-light bg-dark border-secondary">
              <div class="card-body">
                <i class="fa fa-keyboard fa-2x mb-3"></i>
                <h6 class="fw-bold">Software Development (C#)</h6>
                <p>Skilled in C# and .NET for web, desktop, and Unity-based games. Focused on writing efficient, high-performance code.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Connect Section (Grey) -->
    <div class="wrapper bg-dark-custom py-5">
      <div class="hoc container clear">
        <div class="text-center mb-5">
          <h3 class="font-x2 mb-3"><b>Connect With Me</b></h3>
          <p class="lead">Collaborate with a Tech Enthusiast</p>
        </div>

        <div class="row justify-content-center">
          <div class="col-md-4 mb-4 d-flex flex-column align-items-center">
            <div class="logo-box mb-3">
              <img :src="Partner1" alt="LinkedIn" class="logo-img" />
            </div>
            <a class="btn btn-outline-primary button-press" href="https://www.linkedin.com/in/nathan-trung/" target="_blank">LinkedIn</a>
          </div>
          <div class="col-md-4 mb-4 d-flex flex-column align-items-center">
            <div class="logo-box mb-3">
              <img :src="Partner2" alt="GitHub" class="logo-img" />
            </div>
            <a class="btn btn-outline-primary button-press" href="https://github.com/NathanTrung" target="_blank">GitHub</a>
          </div>
          <div class="col-md-4 mb-4 d-flex flex-column align-items-center">
            <div class="logo-box mb-3">
              <img :src="Partner3" alt="Facebook" class="logo-img" />
            </div>
            <a class="btn btn-outline-primary button-press" href="https://www.facebook.com/NaifanTrung" target="_blank">Facebook</a>
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
import Partner1 from '@/assets/Home/Linkedin.png'
import Partner2 from '@/assets/Home/Github.png'
import Partner3 from '@/assets/Home/Facebook.png'
import SwinburneLogo from '@/assets/Home/Swinburne.ico'
import Waving from '@/assets/Home/hello.png'
import AnimatedHeading from '@/components/Home/AnimatedHeading.vue'
</script>

<style scoped>
.main {
  padding-top: 80px;
  background-color: #1a1a1a;
  color: #e0e0e0;
}

/* Light Grey Background Section */
.bg-light-custom {
  background-color: #f0f0f0;
  color: #1a1a1a;
}

/* Dark Background Section */
.bg-dark-custom {
  background-color: #121212;
  color: #e0e0e0;
}

.card {
  background-color: #1e1e1e !important;
  border: 1px solid #333;
  color: #e0e0e0;
}

.card-body i {
  color: #56d736;
}

h1, h3, h6, .AnimatedHeading {
  color: #56d736;
}

a, .btn-outline {
  color: #56d736;
  border-color: #56d736;
}

a:hover, .btn-outline:hover {
  background-color: #00b7ff;
  color: #121212;
  border-color: #00b7ff;
}

.text-muted {
  color: #aaa !important;
}

.btn-outline-dark {
  color: #e0e0e0;
  border-color: #777;
}

.btn-outline-dark:hover {
  background-color: #56d736;
  color: #121212;
  border-color: #56d736;
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
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.logo-img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.7);
}

/* Container for the logo */
.swinburne-logo-container {
  display: inline-block;
  width: 80px; /* Adjust width to fit the size you want */
  height: 50px; /* Adjust height to fit the size you want */
  background-image: url('@/assets/Home/Swinburne.ico'); /* Add the logo path */
  background-size: contain; /* Ensures the logo fits within the container */
  background-repeat: no-repeat;
  background-position: center; 
  position: relative; /* Or 'absolute' depending on your layout */
  top: 10px; /* Adjust to move it lower */
}

/* Optional: Style for hover or focus */
.swinburne-logo-container:focus, .swinburne-logo-container:hover {
  transform: scale(1.05);
  transition: 0.3s;
}


</style>
