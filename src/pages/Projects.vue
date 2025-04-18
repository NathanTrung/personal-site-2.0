<script setup>
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
  <section class="wrapper overlay  my-5">
    <h2 class="text-center font-x2 mt-5 mb-3">My Projects</h2>
    <p class="text-center mb-5">
      Explore the work I've done in Software Development, Web Development, Game Development, and A.I.
    </p>
    <div class="row">
      <div
        class="col-md-6 col-lg-4 mb-4"
        v-for="(project, index) in projects"
        :key="index"
      >
        <div class="card h-100 shadow-sm border-0 bg-dark-overlay">
          <div class="card-img-wrapper">
            <img :src="project.image" class="card-img-top" :alt="project.title" />
          </div>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-dark">{{ project.title }}</h5>
            <p class="card-text text-dark flex-grow-1">{{ project.description }}</p>
            <div class="mt-3">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                class="btn btn-sm btn-outline-dark me-2"
              >
                GitHub
              </a>
              <a
                v-if="project.linkedin"
                :href="project.linkedin"
                target="_blank"
                class="btn btn-sm btn-outline-dark me-2"
              >
                LinkedIn
              </a>
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                class="btn btn-sm btn-outline-dark"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-img-wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
}


.card-img-top {
  width: 100%; /* Ensure image spans the full width of the wrapper */
  height: auto; /* Let the image maintain its natural aspect ratio */
}

.bg-dark-overlay {
  background-color: black;  /* Darker semi-transparent black for the card */
  color: white;  /* Light text for contrast */
}

.card-title, .card-text {
  color: white !important; /* Light text */
}

.card-body {
  padding: 1.5rem;
}

.card-btns a {
  color: white !important; /* Ensure the buttons have a light color on dark background */
}

.card-btns .btn-outline-light {
  border-color: white !important;
}

.card-btns .btn-outline-light:hover {
  background-color: white !important;
  color: #333;
}
h1, h3, h6, .AnimatedHeading {
  color: #56d736;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.7) !important; /* Apply semi-transparent black background */
  color: #e0e0e0;
}

a, h2 { 
  color: #56d736;
  border-color: #56d736;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: white;
}

</style>
