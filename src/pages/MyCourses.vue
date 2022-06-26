<template>
  <div v-if="!isAuthenticated">
    You must be logged in to view this page.
  </div>
  <div v-else class="container-fluid">
    <div class="row">
      <h5>
        <strong>My Courses</strong>
      </h5>
    </div>
    <div v-if="loading" class="container" style="height: 100vh;">
      <div class="row h-100 justify-content-center align-items-center">
        <AppSpinner/>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-lg-4 col-md-6" v-for="(course) in myCourses" v-bind:key="course">
        <AppCourse :course="course"/>
      </div>
    </div>
  </div>
</template>

<script>
import AppCourse from '../components/Course.vue'
import {mapGetters} from 'vuex'
import AppSpinner from '../components/Spinner.vue'

export default {
  name: 'MyCoursesPage',
  components: { AppCourse, AppSpinner },
  data(){
    return {
      loading : true,
    }
  },
  mounted() {
    this.$store.dispatch('getMyCourses').then(() => {
      this.loading = false
    })
  },
  computed: {
    ...mapGetters([
      'myCourses',
      'isAuthenticated'
    ])
  }
}
</script>