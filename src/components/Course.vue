<template>
  <div class="card border-white p-4">
    <img :src="course.image" class="card-img-top" style="max-height: 15rem;min-height: 15rem;">
    <label class="ms-3">
      <div class="d-flex" style="margin-top: -2rem;">
        <span class="badge text-bg-light">{{ course.category }}</span>
      </div>
    </label>
    <div class="card-body">
      <h5 class="card-title">
        <strong>
          {{ course.name }}
        </strong>
      </h5>
      <p class="card-text text-justify">
        <small>
          {{ course.description.substring(0, 100) + '...' }}
        </small>
      </p>
      <p>
        <i class="bi bi-star-fill me-1"></i>
        <strong>{{ course.rating }}</strong>
        <small class="text-muted">(422)</small>
      </p>
      <p>
        <i class="bi bi-clock me-1"></i>
        <strong>
          3:20hs
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
      return this.$store.getters.allowToEnroll(this.course.id)
    },
    allowToViewDetails(){
      return this.$store.getters.allowToViewDetails(this.course.id)
    }
  },
  methods: {
    startEnrollment(){
      this.$store.commit('startEnrollment',this.course)
    }
  }
}
</script>