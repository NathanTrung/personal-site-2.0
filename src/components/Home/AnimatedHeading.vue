<template>
    <div class="animated-heading">
      <span
        v-for="(char, index) in characters"
        :key="index"
        class="char"
        :style="{
          animationDelay: `${index * 0.1 + delay}s`
        }"
      >
        {{ char === ' ' ? '\u00A0' : char }}
      </span>
      <img v-if="imageSrc" :src="imageSrc" alt="Wave Emoji" class="wave-img ms-2" />
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { defineProps } from 'vue'
  
  const props = defineProps({
    text: String,
    imageSrc: String,
    delay: {
      type: Number,
      default: 0
    }
  })
  
  const characters = computed(() => props.text.split(''))
  </script>
  
  <style scoped>
  .animated-heading {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 2rem;
    font-weight: bold;
  }
  
  .char {
    opacity: 0;
    transform: translateY(-10px);
    display: inline-block;
    animation: fadeInUp 0.5s ease forwards;
  }
  
  .wave-img {
    height: 2rem;
    margin-left: 0.5rem;
  }
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  