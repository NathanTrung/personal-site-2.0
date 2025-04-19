<template>
  <div class="timeline">
    <div v-for="(entry, index) in timeline" :key="index" 
         class="timeline-element mb-5" 
         :class="{
           'animate-left': index % 2 === 0, 
           'animate-right': index % 2 !== 0,
           'monash-container': entry.institution === 'monash'
         }">
      <div class="d-flex flex-column flex-md-row align-items-start align-items-md-center">
        <img :src="entry.icon" 
             class="mb-3 mb-md-0 me-md-3 timeline-icon" 
             :class="{'monash-logo': entry.institution === 'monash'}" 
             style="width: 60px; height: auto;" />
        <div class="timeline-content">
          <h4 class="fw-bold">{{ entry.title }}</h4>
          <h5 class="text-muted">{{ entry.subtitle }}</h5>
          <p class="mb-1">{{ entry.description }}</p>
          <small class="text-muted">{{ entry.date }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import StAlbans from '@/assets/About/St-Albans.png'
import Monash from '@/assets/About/Monash.png'
import Swinburne from '@/assets/About/Swinburne.png'

const timeline = [
  {
    icon: StAlbans,
    title: 'VCE Completed',
    subtitle: 'St Albans Secondary College',
    description:
      'Focused on Legal Studies, Economics, Business, and Physical Education. These subjects enhanced my analytical skills and fostered strategic thinking.',
    date: '2020',
    institution: 'stalbans'
  },
  {
    icon: Monash,
    title: 'Bachelor of Business/IT',
    subtitle: 'Monash University',
    description:
      'I gained skills in Financial Accounting, Microeconomics, and Programming, laying a strong foundation for my future in technology and business.',
    date: '2021',
    institution: 'monash'
  },
  {
    icon: Swinburne,
    title: 'Bachelor of Computer Science',
    subtitle: 'Swinburne University',
    description:
      'I deepened my knowledge of technology and software development, strengthening my coding skills and exploring network administration.',
    date: '2022 - 2025',
    institution: 'swinburne'
  },
  {
    icon: Swinburne,
    title: 'Penultimate Year',
    subtitle: 'Swinburne University',
    description:
      'Focused on AI, Data Structures & Algorithms, Game development as well as working on a year long capstone project, WhizKidTrains, while enhancing my web development skills.',
    date: '2024',
    institution: 'swinburne'
  }
]
</script>
<style scoped>
.h4, .h6, .fw-bold {
  color: var(--primary-color);
}

.h5, .text-muted {
  color: var(--text-muted) !important;
}

/* Timeline animations */
.timeline {
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 30px;
  width: 3px;
  background: var(--primary-color);
  transform: translateX(-50%);
  animation: growLine 1.5s ease-out forwards;
  transform-origin: top;
}

@keyframes growLine {
  0% {
    transform: translateX(-50%) scaleY(0);
  }
  100% {
    transform: translateX(-50%) scaleY(1);
  }
}

.timeline-element {
  position: relative;
  margin-left: 60px;
  padding: 15px;
  border-radius: 8px;
  background-color: var(--card-bg);
  box-shadow: var(--card-shadow);
  border: 2px solid var(--border-color);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateX(-30px);
}

.timeline-element::before {
  content: '';
  position: absolute;
  top: 25px;
  left: -40px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--primary-color);
  box-shadow: 0 0 0 4px var(--bg-color);
  animation: pulseCircle 2s infinite;
}

@keyframes pulseCircle {
  0% {
    box-shadow: 0 0 0 0 rgba(52, 152, 219, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(52, 152, 219, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(52, 152, 219, 0);
  }
}

.timeline-element:hover {
  transform: translateY(-5px);
  box-shadow: var(--card-shadow-hover);
}

.timeline-icon {
  transition: transform 0.5s ease;
}

.timeline-element:hover .timeline-icon {
  transform: rotate(10deg) scale(1.1);
}

.timeline-content h4 {
  transition: color 0.3s ease;
}

.timeline-element:hover .timeline-content h4 {
  color: var(--primary-color);
  text-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
}

/* Timeline alternating animations */
.animate-left {
  animation: slideInLeft 0.8s ease forwards;
  animation-delay: calc(0.2s * var(--i, 1));
}

.animate-right {
  animation: slideInRight 0.8s ease forwards;
  animation-delay: calc(0.2s * var(--i, 1));
}

@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Apply staggered animation delay */
.timeline-element:nth-child(1) { --i: 1; }
.timeline-element:nth-child(2) { --i: 2; }
.timeline-element:nth-child(3) { --i: 3; }
.timeline-element:nth-child(4) { --i: 4; }

@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }
  
  .timeline-element {
    margin-left: 40px;
  }
  
  .timeline-element::before {
    left: -30px;
  }
}

/* Monash logo specific styling */
.monash-logo {
  width: 100px !important;
  height: auto !important;
  transform-origin: center;
  transition: transform 0.5s ease;
  margin-right: 1rem !important;
  position: relative;
  z-index: 2;
}

.timeline-element:hover .monash-logo {
  transform: rotate(7deg) scale(1.1);
  filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.1));
}

/* Special container for Monash timeline entry */
.monash-container::before {
  top: 35px; /* Adjust the vertical position of the timeline dot */
}

.monash-container {
  padding-left: 5px; /* Slightly adjust padding to account for larger logo */
}
</style>
