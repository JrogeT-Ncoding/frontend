<template>
  <div class="card border-white p-4">
    <img :src="course.image" class="card-img-top" style="max-height: 15rem;">
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
    }
  }
</script>