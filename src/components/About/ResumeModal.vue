<template>
    <div v-if="isOpen" class="modal fade show d-block" tabindex="-1" role="dialog" style="background: rgba(0,0,0,0.5);">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">My Resume</h5>
            <button type="button" class="btn-close" @click="$emit('close')"></button>
          </div>
          <div class="modal-body">
            <iframe :src="pdfUrl" width="100%" height="600px" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    isOpen: Boolean,
    pdfUrl: String
  })
  </script>
  