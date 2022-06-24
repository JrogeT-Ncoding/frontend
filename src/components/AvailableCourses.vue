<template>
  <h5>
    <strong>Available Courses</strong>
  </h5>
  <AppCourse/>
</template>

<script>
import AppCourse from './Course.vue'

export default {
  name: 'AvailableCourses',
  components: {
    AppCourse
  }

}
</script>