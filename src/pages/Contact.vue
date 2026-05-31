<script setup>
import { ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)

// Form state
const open = ref(false)
const loading = ref(false)

// Validation schema
const schema = yup.object({
  name: yup.string().required('Name is required').max(50, 'Must be 50 characters or less'),
  email: yup.string().required('Email is required').email('Invalid email address'),
  message: yup.string().required('Message is required').max(500, 'Must be 500 characters or less')
})

// VeeValidate form
const { handleSubmit, resetForm } = useForm({
  validationSchema: schema
})

const { value: name, errorMessage: nameError } = useField('name')
const { value: email, errorMessage: emailError } = useField('email')
const { value: message, errorMessage: messageError } = useField('message')

const onSubmit = handleSubmit(async (values) => {
  loading.value = true
  try {
    const response = await fetch('https://formspree.io/f/xqakegzn', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })

    if (response.ok) {
      resetForm()
      open.value = true
    } else {
      console.error('Error submitting form')
    }
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="main" id="contact">
    <div class="wrapper bg-light-custom py-4" id="contact">
      <div class="container py-2">
        <div class="text-center mb-4 fade-in">
          <h3 class="fs-2 fw-bold animated-title">Get in Touch</h3>
          <p class="text-muted contact-description">
            Have questions, collaboration ideas, or just want to connect? <br />
            Reach out below, and I'll get back to you soon!
          </p>
        </div>
        <form @submit.prevent="onSubmit" class="mx-auto contact-form" style="max-width: 600px;">
          <div class="mb-3 form-group animate-up" style="--delay: 0.1s">
            <input
              v-model="name"
              type="text"
              placeholder="Name"
              class="form-control animated-input"
            />
            <div class="text-danger mt-1">{{ nameError }}</div>
          </div>

          <div class="mb-3 form-group animate-up" style="--delay: 0.3s">
            <input
              v-model="email"
              type="email"
              placeholder="Email"
              class="form-control animated-input"
            />
            <div class="text-danger mt-1">{{ emailError }}</div>
          </div>

          <div class="mb-3 form-group animate-up" style="--delay: 0.5s">
            <textarea
              v-model="message"
              placeholder="Message"
              class="form-control animated-input"
              rows="6"
            ></textarea>
            <div class="text-danger mt-1">{{ messageError }}</div>
          </div>

          <button
            type="submit"
            class="btn btn-primary w-100 animate-up submit-btn"
            :disabled="loading"
            style="--delay: 0.7s"
          >
            <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
            <span class="submit-text">Submit</span>
          </button>

          <div
            v-if="open"
            class="alert alert-success mt-4 success-animation"
            role="alert"
          >
            Your message has been sent!
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 0 !important;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  border: 3px solid var(--border-color);
  overflow: visible;
  background-color: var(--nav-bg);
  color: var(--text-color);
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.bg-light-custom {
  background-color: var(--nav-bg);
  color: var(--text-color);
}

.contact-description {
  font-size: 1.1rem;
  color: var(--text-color) !important;
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
}

/* Form controls with more visible border */
.form-control {
  background-color: var(--card-bg);
  color: var(--text-color);
  border: 2px solid #556677 !important;
  border-radius: 4px;
  padding: 10px;
  transition: all 0.3s ease;
}

.form-control::placeholder {
  color: var(--text-muted);
  opacity: 0.8;
}

/* Dark mode specific styles */
.dark-theme .form-control {
  color: white;
  background-color: var(--card-bg) !important;
}

.dark-theme .form-control:focus {
  background-color: var(--card-bg) !important;
}

.dark-theme .form-control::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.form-control:focus {
  border: 2px solid var(--primary-color) !important;
  box-shadow: none;
  outline: none;
  animation: blinkBorder 1.5s infinite;
  transform: translateY(-3px);
}

/* Blinking border animation */
@keyframes blinkBorder {
  0% { border-color: var(--primary-color) !important; }
  50% { border-color: rgba(52, 152, 219, 0.3) !important; }
  100% { border-color: var(--primary-color) !important; }
}

.btn-primary {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: var(--bg-color);
  padding: 10px 20px;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary:hover {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  opacity: 0.9;
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.4);
}

/* Fade-in animation */
.fade-in {
  animation: fadeIn 1s ease-out forwards;
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

/* Animated title */
.animated-title {
  display: inline-block;
  position: relative;
  color: var(--primary-color);
  animation: fadeIn 0.8s ease-out forwards;
}

.animated-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  width: 0;
  height: 3px;
  background-color: var(--primary-color);
  transform: translateX(-50%);
  animation: growLine 1.5s ease-out forwards;
  animation-delay: 0.8s;
}

@keyframes growLine {
  from {
    width: 0;
  }
  to {
    width: 80px;
  }
}

/* Form animations */
.animate-up {
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.8s ease-out forwards;
  animation-delay: var(--delay, 0s);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-input {
  transition: all 0.3s ease;
}

.animated-input:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Success animation */
.success-animation {
  animation: successPulse 2s ease infinite;
}

@keyframes successPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(40, 167, 69, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(40, 167, 69, 0);
  }
}

/* Submit button animation */
.submit-btn {
  position: relative;
  z-index: 1;
}

.submit-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: all 0.6s;
  z-index: -1;
}

.submit-btn:hover::before {
  left: 100%;
}

.submit-text {
  position: relative;
  z-index: 2;
}

/* Contact form wrapper animation */
.contact-form {
  position: relative;
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;
}

.contact-form::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 15px;
  
  opacity: 0;
  z-index: -1;
  transition: opacity 0.5s ease;
}

.contact-form:hover::before {
  opacity: 0.1;
}

.form-group {
  position: relative;
}

.form-group::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.5s ease;
}

.form-group:hover::after {
  width: 100%;
}
</style>
