<template>
  <div class="container-fluid">
    <div class="row">
      <h5>
        <strong>Available Courses</strong>
      </h5>
    </div>
    <div class="row mt-4">
      <div class="col-lg-4 col-md-6" v-for="(course) in availableCourses" v-bind:key="course">
        <AppCourse :course="course" :allow-to-enroll="authenticated"/>
      </div>
    </div>
  </div>
</template>

<script>
import AppCourse from './Course.vue'

export default {
  name: 'AvailableCourses',
  components: { AppCourse },
  mounted() {
    //this.authenticated = this.$store.store.authenticated
    this.$store.dispatch('getCourses')
  },
  data() {
    return {
      //authenticated: false,
    }
  },
  computed: {
    availableCourses() {
      return this.$store.getters.allCourses
    },
    authenticated() {
      return this.$store.state.authenticated
    }
  }
}
</script>