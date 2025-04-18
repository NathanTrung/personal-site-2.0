<template>
  <div class="timeline">
    <div v-for="(entry, index) in timeline" :key="index" class="timeline-element mb-5">
      <div class="d-flex flex-column flex-md-row align-items-start align-items-md-center">
        <img :src="entry.icon" class="mb-3 mb-md-0 me-md-3" style="width: 60px; height: auto;" />
        <div>
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
    date: '2020'
  },
  {
    icon: Monash,
    title: 'Bachelor of Business/IT',
    subtitle: 'Monash University',
    description:
      'I gained skills in Financial Accounting, Microeconomics, and Programming, laying a strong foundation for my future in technology and business.',
    date: '2021'
  },
  {
    icon: Swinburne,
    title: 'Bachelor of Computer Science',
    subtitle: 'Swinburne University',
    description:
      'I deepened my knowledge of technology and software development, strengthening my coding skills and exploring network administration.',
    date: '2022 - 2025'
  },
  {
    icon: Swinburne,
    title: 'Penultimate Year',
    subtitle: 'Swinburne University',
    description:
      'Focused on AI, Data Structures & Algorithms, Game development as well as working on a year long capstone project, WhizKidTrains, while enhancing my web development skills.',
    date: '2024'
  }
]
</script>
<style scoped>
.h4, .h6, .fw-bold {
  color: #56d736;
}

.h5, .text-muted {
  color: white !important;
}
</style>
