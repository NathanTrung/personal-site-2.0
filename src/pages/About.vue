<template>
  <div class="main">
    <!-- About Me Section -->
    <div class="wrapper bg-light-custom py-4 mb-0">
      <div class="container py-2">
        <div class="row align-items-center">
          <div class="col-md-6 mb-4 mb-md-0">
            <h1 class="text-uppercase fw-bold">About Me</h1>
            <p>Banking Consultant at Suncorp Bank / ANZ Bank in Melbourne, Australia, with a Computer Science background and a strong interest in the intersection of financial services and technology.</p>
            <p>
              In my current role, I manage high-volume inbound customer interactions across everyday banking and lending, maintaining strong quality, compliance, and customer outcomes in a contact centre environment.
            </p>
            <p>
              I am trained and authorised in Term Deposits, Account Opening, and Personal Secured Lending, and I support the personal account lifecycle end-to-end — including account opening, ongoing maintenance, and account closure — alongside transaction support, digital banking, and customer verification controls.
            </p>
            <p>
              My work applies responsible lending, RG206 compliance, fraud awareness, and risk-based decision-making while explaining products and processes clearly to customers. I also bring software development and systems thinking from my Computer Science background to structured problem-solving and continuous improvement.
            </p>
            <p>
              Outside of banking, I continue to explore digital systems, infrastructure, and automation through personal technology projects, reinforcing a practical understanding of how modern platforms and services operate end-to-end.
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

    <!-- Professional Career Section -->
    <div class="wrapper bg-light-custom py-4 mt-0 mb-0">
      <div class="container py-2">
        <div class="text-center mb-4">
          <h3 class="fs-2 fw-bold animated-heading">My Professional Career</h3>
        </div>
        <CareerTimeline />
      </div>
    </div>

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
import CareerTimeline from '@/components/About/CareerTimeline.vue'
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
