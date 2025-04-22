<template>
  <div class="main">
    <!-- About Me Section -->
    <div class="wrapper bg-light-custom py-4 mb-0">
      <div class="container py-2">
        <div class="row align-items-center">
          <div class="col-md-6 mb-4 mb-md-0">
            <h1 class="text-uppercase fw-bold">About Me</h1>
            <p>I'm a Software Developer based in Melbourne, Australia.</p>
            <p>
              Since 2021, I've been passionate about transforming complex challenges into elegant software solutions...
            </p>
            <p>
              Before I discovered my passion for developing software, I was immersed in the study of Business...
            </p>
            <p class="resume-prompt d-flex flex-wrap align-items-center">
              <span>Click</span> <span class="ms-1">My</span> <span class="ms-1">Photo</span>
              <span class="ms-1">to</span> <span class="ms-1">Discover</span>
              <span class="ms-1">My</span> <span class="ms-1">Resume</span>
              <span class="ms-2"><i class="fas fa-arrow-right"></i></span>
            </p>
          </div>
          <div class="col-md-6 text-center">
            <a href="#" @click.prevent="openModal">
              <img :src="MeImage" alt="Me" class="img-fluid resume-image button-press" width="300" height="400" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <ResumeModal :is-open="isModalOpen" @close="closeModal" :pdf-url="pdfURL" />

    <!-- Academic Journey Section -->
    <div class="wrapper bg-light-custom py-4 mt-0 mb-0">
      <div class="container py-2">
        <div class="text-center mb-4">
          <h3 class="fs-2 fw-bold animated-heading">My Academic Journey</h3>
        </div>
        <VueVerticalTimeline />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MeImage from '@/assets/About/Me.png'
import pdfURL from '@/assets/About/Resume.pdf'
import VueVerticalTimeline from '@/components/About/VueVerticalTimeline.vue'
import ResumeModal from '@/components/About/ResumeModal.vue'

const isModalOpen = ref(false)
function openModal() {
  isModalOpen.value = true
}
function closeModal() {
  isModalOpen.value = false
}
</script>

<style scoped>
.main {
  padding-top: 0;
  margin-top: 0;
  background-color: var(--bg-color);
  color: var(--text-color);
}

.bg-light-custom {
  background-color: var(--nav-bg);
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

h1, h3, h4 {
  color: var(--text-color) !important;
}

.resume-image {
  cursor: pointer;
  border-radius: 8px;
  box-shadow: var(--card-shadow);
}

.resume-prompt span {
  margin-right: 5px;
  white-space: nowrap;
  color: var(--text-color);
}

.resume-prompt {
  color: var(--text-color);
}

/* Styling for resume prompt hover effect */
.resume-prompt span:hover {
  color: var(--primary-color);
}

.button-press:hover {
  transform: scale(1.05);
  transition: 0.3s;
  box-shadow: var(--card-shadow);
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

.animated-heading {
  display: inline-block;
  position: relative;
  color: var(--primary-color);
  animation: fadeIn 0.8s ease-out forwards;
}

.animated-heading::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 0;
  height: 3px;
  background-color: var(--primary-color);
  animation: growWidth 1.5s ease-out forwards;
  animation-delay: 0.8s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes growWidth {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
