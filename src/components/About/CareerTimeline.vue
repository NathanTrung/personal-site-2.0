<template>
  <div class="timeline">
    <div
      v-for="(entry, index) in timeline"
      :key="index"
      class="timeline-element mb-5"
      :class="{
        'animate-left': index % 2 === 0,
        'animate-right': index % 2 !== 0,
        'suncorp-container': entry.company === 'suncorp',
      }"
    >
      <div class="d-flex flex-column flex-md-row align-items-start align-items-md-center">
        <div class="icon-container">
          <FontAwesomeIcon :icon="entry.icon" class="timeline-icon career-icon" :aria-label="entry.subtitle" />
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faStore,
  faUserTie,
  faMugHot,
  faLaptopCode,
  faBuildingColumns,
} from '@fortawesome/free-solid-svg-icons'

const timeline = [
  {
    icon: faStore,
    title: 'Crew Member',
    subtitle: "McDonald's",
    description:
      'Prepared and assembled food to company standards in a fast-paced environment while maintaining strict food safety and hygiene practices. Managed kitchen stock levels and replenishment, building early experience in operational consistency, teamwork, and customer-focused service.',
    date: 'Jul 2019 - Jun 2022',
    company: 'mcdonalds',
  },
  {
    icon: faUserTie,
    title: 'Shift Manager',
    subtitle: "McDonald's",
    description:
      'Led shift operations for teams of 8+ crew members, overseeing cash management, task allocation, and service quality. Drove drive-thru performance to a #1 national ranking in Australia with 100% order accuracy, including peak periods of 70 cars per hour.',
    date: 'Jun 2022 - Mar 2023',
    company: 'mcdonalds',
  },
  {
    icon: faMugHot,
    title: 'Barista',
    subtitle: 'Fresh Vibes Cafe',
    description:
      'Part-time customer-facing role focused on coffee preparation, service quality, and cash handling. Supported daily operations through stock counting, inventory replenishment, and consistent delivery of a positive in-store customer experience.',
    date: 'Mar 2023 - Feb 2026',
    company: 'freshvibes',
  },
  {
    icon: faLaptopCode,
    title: 'Full-Stack Developer',
    subtitle: 'Alyy',
    description:
      'Built backend infrastructure on Firebase with Firestore schemas, real-time messaging, and connection management workflows. Delivered a cross-platform React Native/Expo application in TypeScript with onboarding flows, profile management, and responsive UI patterns across iOS and Android.',
    date: 'Jul 2025 - Dec 2025',
    company: 'alyy',
  },
  {
    icon: faBuildingColumns,
    title: 'Banking Consultant',
    subtitle: 'Suncorp Bank',
    description:
      'Handles inbound customer enquiries across everyday banking, including account servicing, transactions, and account openings. Explains banking products clearly, resolves issues efficiently, and maintains strong compliance and risk awareness while building trust through empathy and active listening.',
    date: 'Feb 2026 - Present',
    company: 'suncorp',
  },
]
</script>

<style scoped>
.h4, .h6, .fw-bold {
  color: var(--primary-color);
}

.h5, .text-muted {
  color: var(--text-muted) !important;
}

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
  width: 70px;
  height: 70px;
}

.career-icon {
  color: var(--primary-color);
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

.timeline-element:nth-child(1) { --i: 1; }
.timeline-element:nth-child(2) { --i: 2; }
.timeline-element:nth-child(3) { --i: 3; }
.timeline-element:nth-child(4) { --i: 4; }
.timeline-element:nth-child(5) { --i: 5; }

.suncorp-container {
  padding-top: 15px;
  margin-top: 10px;
}

.suncorp-container::before {
  top: 40px;
}

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

  .suncorp-container {
    padding-top: 20px;
    margin-top: 15px;
  }

  .suncorp-container::before {
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
    margin-bottom: 10px;
    width: 56px;
    height: 56px;
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
</style>
