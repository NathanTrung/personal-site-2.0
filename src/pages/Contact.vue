<script setup>
import { ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

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
  <div class="wrapper py-5">
    <div class="container">
      <div class="text-center mb-4">
        <h2 class="">Get in Touch</h2>
        <p class="contact-description text-white">
          Have questions, collaboration ideas, or just want to connect? <br />
          Reach out below, and I’ll get back to you soon!
        </p>
      </div>
      <form @submit.prevent="onSubmit" class="mx-auto" style="max-width: 600px;">
        <div class="mb-3">
          <input
            v-model="name"
            type="text"
            placeholder="Name"
            class="form-control"
          />
          <div class="text-danger mt-1">{{ nameError }}</div>
        </div>

        <div class="mb-3">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="form-control"
          />
          <div class="text-danger mt-1">{{ emailError }}</div>
        </div>

        <div class="mb-3">
          <textarea
            v-model="message"
            placeholder="Message"
            class="form-control"
            rows="6"
          ></textarea>
          <div class="text-danger mt-1">{{ messageError }}</div>
        </div>

        <button
          type="submit"
          class="btn btn-primary w-100"
          :disabled="loading"
        >
          <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
          Submit
        </button>

        <div
          v-if="open"
          class="alert alert-success mt-4"
          role="alert"
        >
          Your message has been sent!
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background: rgba(0, 0, 0, 0.7);
  background-size: cover;
  color: white; /* Ensure text is white */
}

.contact-description {
  font-size: 1.1rem;
}

.form-control {
  background-color: rgba(255, 255, 255, 0.8); /* Slightly transparent white background */
  color: #000; /* Black text in input fields */
  border: 1px solid #ccc;
}

.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:disabled {
  background-color: #c6d0e1;
  border-color: #c6d0e1;
}

.alert {
  background-color: #28a745;
  color: white;
}

.mb-3 {
  margin-bottom: 1rem !important; /* default ~1.5rem */
}

.mt-4 {
  margin-top: 1rem !important;
}

textarea {
  min-height: 120px;
}
h2 { 
  color: #56d736;
}
</style>
