<template>
  <div class="card border-white p-4">
    <img :src="course.image" class="card-img-top" style="max-height: 15rem;min-height: 15rem;">
    <label class="ms-3">
      <div class="d-flex" style="margin-top: -2rem;">
        <span class="badge text-bg-light">{{ course.category.name }}</span>
      </div>
    </label>
    <div class="card-body">
      <h5 class="card-title">
        <strong>
          {{ course.name }}
        </strong>
      </h5>
      <p class="card-text" style="min-height: 4rem;max-height: 4rem;">
        <small>
          {{ ( course.description?.substring(0, 100) || 'No description' ) + '...' }}
        </small>
      </p>
      <p>
        <i class="bi bi-star-fill me-1"></i>
        <strong>{{ course.rate }}</strong>
        <small class="text-muted ms-1">({{ enrolledCount() }})</small>
      </p>
      <p>
        <i class="bi bi-clock me-1"></i>
        <strong>
          {{ timeFormatted() }}
        </strong>
      </p>
      <!--Continue-->
      <div v-if="allowToEnroll" class="col-6 form-floating my-3 d-grid gap-2 p-0">
        <button @click="startEnrollment" class="btn badge rounded-pill text-bg-dark py-2" data-bs-toggle="modal" data-bs-target="#enrollModal">
          <small>
            Enroll
          </small>
        </button>
      </div>
      <div v-else-if="allowToViewDetails" class="col-6 form-floating my-3 d-grid gap-2 p-0">
        <button class="btn badge rounded-pill text-bg-dark py-2">
          <small>
            View Details
          </small>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCourse',
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  computed:{
    allowToEnroll(){
      return this.$store.getters.allowToEnroll(this.course.id) && this.$store.getters.isAuthenticated
    },
    allowToViewDetails(){
      return this.$store.getters.allowToViewDetails(this.course.id)
    },
  },
  methods: {
    startEnrollment(){
      this.$store.commit('startEnrollment',this.course)
    },
    enrolledCount(){
      return this.course.maxCapacity - this.course.availableCapacity
    },
    timeFormatted(){
      let hours = Math.floor(this.course.duration / 60)
      let minutes = this.course.duration % 60
      return `${hours}:${minutes}hs`
    }
  }
}
</script>