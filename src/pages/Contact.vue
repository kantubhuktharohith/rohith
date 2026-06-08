<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const handleSubmit = () => {
  alert(`Thank you ${formData.value.name}! Your message has been sent (simulated).`)
  formData.value = { name: '', email: '', subject: '', message: '' }
}
</script>

<template>
  <div class="contact-container">
    <p class="contact-bio" v-reveal>
      I'm always interested in hearing about new projects, collaboration opportunities, or just chatting about code. Feel free to drop me a message using the form below!
    </p>

    <form class="contact-form" @submit.prevent="handleSubmit" v-reveal="0.2">
      <div class="form-group">
        <input
          type="text"
          id="name"
          name="name"
          v-model="formData.name"
          required
          placeholder=" "
          class="form-input"
        />
        <label class="form-label" for="name">name</label>
      </div>

      <div class="form-group">
        <input
          type="email"
          id="email"
          name="email"
          v-model="formData.email"
          required
          placeholder=" "
          class="form-input"
        />
        <label class="form-label" for="email">email</label>
      </div>

      <div class="form-group">
        <input
          type="text"
          id="subject"
          name="subject"
          v-model="formData.subject"
          required
          placeholder=" "
          class="form-input"
        />
        <label class="form-label" for="subject">subject</label>
      </div>

      <div class="form-group">
        <textarea
          id="message"
          name="message"
          v-model="formData.message"
          required
          placeholder=" "
          class="form-textarea"
        />
        <label class="form-label" for="message">message</label>
      </div>

      <button type="submit" class="btn-submit">
        send message
      </button>
    </form>
  </div>
</template>
