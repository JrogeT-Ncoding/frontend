<template>
  <div class="container-fluid">
    <div class="row">
      <h5>
        <strong>Available Courses</strong>
      </h5>
    </div>
    <div v-if="loading">
      Loading...
    </div>
    <div class="row mt-4">
      <div class="col-lg-4 col-md-6" v-for="(course) in availableCourses" v-bind:key="course">
        <AppCourse :course="course"/>
      </div>
    </div>
  </div>
</template>

<script>
import AppCourse from '../components/Course.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'AvailableCoursesPage',
  components: { AppCourse },
  data(){
    return {
      loading : true,
    }
  },
  mounted() {
    this.$store.dispatch('getAvailableCourses').then(() => {
      this.loading = false
    })
  },
  computed: {
    ...mapGetters({
      availableCourses: 'availableCourses',
    })
  }
}
</script>