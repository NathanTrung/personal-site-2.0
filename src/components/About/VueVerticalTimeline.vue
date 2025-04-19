<template>
  <div class="timeline">
    <div v-for="(entry, index) in timeline" :key="index" 
         class="timeline-element mb-5" 
         :class="{
           'animate-left': index % 2 === 0, 
           'animate-right': index % 2 !== 0,
           'monash-container': entry.institution === 'monash',
           'swinburne-container': entry.institution === 'swinburne'
         }">
      <div class="d-flex flex-column flex-md-row align-items-start align-items-md-center">
        <div class="icon-container">
          <img :src="entry.icon" 
               class="mb-3 mb-md-0 me-md-3 timeline-icon" 
               :class="{'monash-logo': entry.institution === 'monash'}" />
        </div>
        <div class="timeline-content">
          <h4 class="fw-bold mb-1">{{ entry.title }}</h4>
          <h5 class="text-muted mb-2">{{ entry.subtitle }}</h5>
          <p class="mb-2">{{ entry.description }}</p>
          <small class="text-muted d-block">{{ entry.date }}</small>
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
      'Graduated with distinction in Legal Studies, Economics, Business Management, and Physical Education. Developed critical thinking skills and a foundation in business principles.',
    date: '2020',
    institution: 'stalbans'
  },
  {
    icon: Monash,
    title: 'Bachelor of Business/IT',
    subtitle: 'Monash University',
    description:
      'Completed fundamental courses in Financial Accounting, Microeconomics, and Object-Oriented Programming. This dual focus provided me with a unique perspective connecting business needs with technical solutions.',
    date: '2021',
    institution: 'monash'
  },
  {
    icon: Swinburne,
    title: 'Bachelor of Computer Science',
    subtitle: 'Swinburne University',
    description:
      'Shifted focus to pursue a deeper technical education in Computer Science. Core coursework included Data Structures & Algorithms, Software Engineering Principles, Database Systems, and Network Security.',
    date: '2022 - 2025',
    institution: 'swinburne'
  },
  {
    icon: Swinburne,
    title: 'Advanced Studies',
    subtitle: 'Swinburne University',
    description:
      'Currently focusing on Artificial Intelligence, Advanced Algorithms, Cloud Computing, and Full-Stack Development. Leading a team for my capstone project "WhizKidTrains" while expanding my web development portfolio with various personal projects.',
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
  left: 40px;
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
  margin-left: 70px;
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
  transform: translateX(0);
  z-index: 3;
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

.icon-container {
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  margin-left: 20px;
  position: relative;
}

.timeline-icon {
  transition: transform 0.5s ease;
  width: 70px !important;
  height: auto !important;
}

.timeline-element:hover .timeline-icon {
  transform: rotate(10deg) scale(1.1);
}

.timeline-content {
  flex: 1;
  padding-left: 10px;
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
    left: 25px;
  }
  
  .timeline-element {
    margin-left: 45px;
    padding: 15px 10px;
  }
  
  .timeline-element::before {
    left: -30px;
  }
  
  .icon-container {
    justify-content: flex-start;
    margin-left: 0;
    min-width: 90px;
  }
  
  .swinburne-container {
    padding-top: 20px;
    margin-top: 15px;
  }
  
  .swinburne-container::before {
    top: 45px;
  }
  
  .timeline-content {
    padding-left: 5px;
  }
  
  .d-flex {
    flex-direction: column;
    align-items: flex-start !important;
  }
  
  .timeline-icon {
    margin-bottom: 10px !important;
  }
  
  .monash-logo {
    width: 80px !important;
  }
}

@media (max-width: 576px) {
  .timeline::before {
    left: 20px;
  }
  
  .timeline-element {
    margin-left: 35px;
    padding: 12px 8px;
  }
  
  .timeline-element::before {
    left: -25px;
    width: 15px;
    height: 15px;
  }
  
  .timeline-content h4 {
    font-size: 1.1rem;
  }
  
  .timeline-content h5 {
    font-size: 0.9rem;
  }
  
  .timeline-content p {
    font-size: 0.85rem;
  }
}

/* Monash logo specific styling */
.monash-logo {
  width: 100px !important;
  height: auto !important;
  transform-origin: center;
  transition: transform 0.5s ease;
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

/* Special container for Swinburne timeline entry */
.swinburne-container {
  padding-top: 15px;
  margin-top: 10px;
}

.swinburne-container::before {
  top: 40px;
}
</style>
