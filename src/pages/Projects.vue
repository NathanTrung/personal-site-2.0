<script setup>
import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)

const projects = [
  {
    title: "WhizKidTrains",
    description:
      "WhizKidTrains is an educational platform for autistic children, offering interactive learning and a foundation for future mini-games with neurodiverse-friendly design.",
    github: "https://github.com/NathanTrung/WhizKidTrains",
    linkedin:
      "https://www.linkedin.com/in/nathan-trung/overlay/projects/1011291046/multiple-media-viewer/?profileId=ACoAACPJEoUBovC5_011ORVOoAikFSu6079MQAk&treasuryMediaId=1729737992825",
    url: "https://whizkidtrains-proto.web.app/",
    image: new URL('@/assets/Projects/WhizKidTrains.png', import.meta.url).href
  },
  {
    title: "SwinBull",
    description:
      "Cryptocurrency platform developed with React.js and CoinGecko API to help users view and explore market assets.",
    github: "https://github.com/NathanTrung/SwinBull",
    linkedin:
      "https://www.linkedin.com/in/nathan-trung/details/projects/953206865/multiple-media-viewer/?profileId=ACoAACPJEoUBovC5_011ORVOoAikFSu6079MQAk&treasuryMediaId=1714645159244",
    image: new URL('@/assets/Projects/SwinBullLogo.png', import.meta.url).href
  },
  {
    title: "N/A Movies",
    description:
      "A PHP-based movie review web application with a focus on exploring and reviewing films.",
    github: "https://github.com/NathanTrung/N-A-Movies",
    linkedin:
      "https://www.linkedin.com/in/nathan-trung/details/projects/953474251/multiple-media-viewer/?profileId=ACoAACPJEoUBovC5_011ORVOoAikFSu6079MQAk&treasuryMediaId=1714645426831",
    image: new URL('@/assets/Projects/NAMovies.png', import.meta.url).href
  },
  {
    title: "Inference Engine",
    description:
      "Implements algorithms to determine if logical queries are entailed by a given knowledge base.",
    github: "https://github.com/NathanTrung/inference-engine",
    image: new URL('@/assets/Projects/InferenceEngine.png', import.meta.url).href
  },
  {
    title: "SwinDevOps",
    description:
      "CI/CD pipeline project using Docker, Jenkins, and AWS EC2 for a simple static website.",
    github: "https://github.com/NathanTrung/swindevops",
    image: new URL('@/assets/Projects/SwinDevOps.png', import.meta.url).href
  },
  {
    title: "Alarm Clock Circuitry",
    description:
      "A digital logic circuit simulating a 12-hour alarm clock with AM/PM display and alarm indicator.",
    github: "https://github.com/NathanTrung/Alarm-Clock-Circuit",
    image: new URL('@/assets/Projects/Circuit.png', import.meta.url).href
  }
]
</script>

<template>
  <div class="main">
    <div class="wrapper bg-light-custom py-4 mt-0 mb-0">
      <div class="container py-2">
        <div class="text-center mb-4">
          <h2 class="fs-2 fw-bold">My Projects</h2>
          <p class="text-muted">Explore the work I've done in Software Development, Web Development, Game Development, and A.I.</p>
        </div>
        <div class="row">
          <div
            class="col-md-6 col-lg-4 mb-4"
            v-for="(project, index) in projects"
            :key="index"
          >
            <div class="card h-100 shadow-sm">
              <div class="card-img-wrapper">
                <img :src="project.image" class="card-img-top" :alt="project.title" />
              </div>
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text flex-grow-1">{{ project.description }}</p>
                <div class="mt-3">
                  <a
                    v-if="project.github"
                    :href="project.github"
                    target="_blank"
                    class="btn btn-sm btn-outline-primary button-press"
                  >
                    GitHub
                  </a>
                  <a
                    v-if="project.linkedin"
                    :href="project.linkedin"
                    target="_blank"
                    class="btn btn-sm btn-outline-primary button-press"
                  >
                    LinkedIn
                  </a>
                  <a
                    v-if="project.url"
                    :href="project.url"
                    target="_blank"
                    class="btn btn-sm btn-outline-primary button-press"
                  >
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  padding-top: 0;
  margin-top: 0;
  background-color: var(--bg-color);
  color: var(--text-color);
}

.card-img-wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--card-bg);
}

/* White background for images in dark mode */
.dark-theme .card-img-wrapper {
  background-color: white;
}

.card-img-top {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  background-color: transparent;
}

.card {
  background-color: var(--card-bg);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    transparent 0%,
    rgba(255, 255, 255, 0.05) 50%,
    transparent 100%
  );
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.card:hover {
  transform: translateY(-8px) scale(1.01);
  box-shadow: var(--card-shadow);
}

.card:hover::before {
  transform: translateX(100%);
}

/* Smooth image zoom on hover */
.card-img-wrapper {
  overflow: hidden;
}

.card-img-top {
  transition: transform 0.4s ease;
}

.card:hover .card-img-top {
  transform: scale(1.05);
}

.card-title, .card-text {
  color: var(--text-color);
}

.card-body {
  padding: 1.5rem;
}

.btn-outline-primary {
  color: var(--primary-color);
  border-color: var(--primary-color);
}

.btn-outline-primary:hover {
  background-color: var(--primary-color);
  color: var(--bg-color);
  border-color: var(--primary-color);
}

h1, h2, h3, h6 {
  color: var(--text-color);
}

.bg-light-custom {
  background-color: var(--nav-bg);
  color: var(--text-color);
}

/* Light Background Section */
.wrapper {
  margin: 0 !important;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  border: 3px solid var(--border-color);
  overflow: visible;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

a {
  color: var(--primary-color);
  text-decoration: none;
}

a:hover {
  color: var(--primary-color);
  opacity: 0.8;
}

.text-muted {
  color: var(--text-muted) !important;
}

/* Make borders more definitive in light mode */
:root:not(.dark-theme) .card {
  border-width: 2px;
  border-color: #d1d5db;
}

/* Adjust shadow for dark mode */
.dark-theme .card:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.button-press:hover {
  transform: scale(1.05);
  transition: 0.3s;
}

/* Title styling for consistency */
.font-x2, .display-6 {
  font-size: 1.75rem;
  font-weight: 600;
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

/* Fix for button layout */
.mt-3 {
  display: flex;
  flex-wrap: nowrap;
  gap: 5px;
}

.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  white-space: nowrap;
}
</style>
