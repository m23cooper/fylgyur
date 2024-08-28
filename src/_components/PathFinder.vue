<script>
import Signup from './Signup.vue'
import Mentor from './Mentor.vue'

export default {
  components: {
    Signup,
    Mentor
  },
  data() {
    return {
      isFormSubmitted : false,
      email : ""
    }
  },
  methods: {
    setEmail(email) {
      this.email = email
      if(this.email !== ""){
        this.isFormSubmitted = true;
      }
    }
  }
}
</script>

<template>
  <Signup v-if="!isFormSubmitted" @setEmail="this.setEmail" />
  <Mentor v-else :email="email" />
</template>
