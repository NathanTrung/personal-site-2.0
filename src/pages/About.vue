<template>
  <div class="main">
    <div class="wrapper overlay py-5">
      <div id="pageintro2" class="container">
        <div class="row align-items-center">
          <div class="col-md-6 mb-4 mb-md-0">
            <h1 class="text-uppercase fw-bold text-light">About Me</h1>
            <p class="text-light">I'm a Software Developer based in Melbourne, Australia.</p>
            <p class="text-light">
              Since 2021, I've been passionate about transforming complex challenges into elegant software solutions...
            </p>
            <p class="text-light">
              Before I discovered my passion for developing software, I was immersed in the study of Business...
            </p>
            <p class="resume-prompt d-flex flex-wrap align-items-center text-light">
              <span>Click</span> <span class="ms-1">My</span> <span class="ms-1">Photo</span>
              <span class="ms-1">to</span> <span class="ms-1">Discover</span>
              <span class="ms-1">My</span> <span class="ms-1">Resume</span>
              <span class="ms-2"><i class="fas fa-arrow-right"></i></span>
            </p>
          </div>
          <div class="col-md-6 text-center">
            <a href="#" @click.prevent="openModal">
              <img :src="MeImage" alt="Me" class="img-fluid resume-image button-press" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <ResumeModal :is-open="isModalOpen" @close="closeModal" :pdf-url="pdfURL" />

    <!-- Reverted Academic Journey Section Background -->
    <div class="wrapper row3 py-5 bg-dark-custom">
      <main class="container">
        <div class="text-center mb-5">
          <h3 class="fs-2 fw-bold text-light">My Academic Journey</h3>
        </div>
        <VueVerticalTimeline />
      </main>
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
  padding-top: 80px;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.7) !important; /* Apply semi-transparent black background */
  color: #e0e0e0;
}

.text-light {
  color: #e0e0e0;
}

h1, h3, h4 {
  color: #56d736 !important;
}

.resume-image {
  cursor: pointer;
}

.resume-prompt span {
  margin-right: 5px;
  white-space: nowrap;
}

.resume-prompt {
  color: #e0e0e0;
}

.bg-dark-custom {
  background-color: #121212 !important;  /* Reverted back to solid black */
  color: #e0e0e0;
}

/* Styling for resume prompt hover effect */
.resume-prompt span:hover {
  color: #56d736;
}

.button-press:hover {
  transform: scale(1.05);
  transition: 0.3s;
}
</style>
