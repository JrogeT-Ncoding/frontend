<template>
  <nav class="navbar navbar-expand-lg border-bottom border-ligth py-3">
    <div class="container-fluid">
      <h1>Logo</h1>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown mx-4">
            <router-link class="nav-link dropdown-toggle" to="/available-courses" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <small>Available Courses</small>
            </router-link>
          </li>
          <li class="nav-item dropdown mx-4">
            <router-link class="nav-link dropdown-toggle" to="/continuing-education" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <small>Continuing Education</small>
            </router-link>
          </li>
          <li class="nav-item dropdown mx-4">
            <router-link class="nav-link dropdown-toggle" to="/my-courses" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <small>My Courses</small>
            </router-link>
          </li>
          <li class="nav-item dropdown mx-4">
            <router-link class="nav-link dropdown-toggle" to="/community" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <small>Community</small>
            </router-link>
          </li>
        </ul>
        <button class="btn btn-red rounded-0 my-2 my-sm-0" data-bs-toggle="modal" data-bs-target="#authModal">
          {{ isAuthenticated ? 'Logout' : 'Register or Login' }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  props: {
    isAuthenticated: {
      type: Boolean,
      required: true
    }
  },
}
</script>