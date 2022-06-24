<template>
    <AppNavbar/>
  <div class="container pt-4">
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavbar from './Navbar.vue'

export default {
  name: 'BaseLayout',
  components: {
    AppNavbar,
  }

}
</script>