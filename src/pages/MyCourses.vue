<template>
  <div class="container-fluid">
    <div class="row">
      <h5>
        <strong>My Courses</strong>
      </h5>
    </div>
    <div v-if="loading">
      Loading...
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

export default {
  name: 'MyCoursesPage',
  components: { AppCourse },
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
    ])
  }
}
</script>