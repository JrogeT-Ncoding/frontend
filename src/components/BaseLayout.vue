<template>
    <AppNavbar/>
  <div class="container pt-4">
    <router-view></router-view>
  </div>
  <AppFooter/>
</template>

<script>
import AppNavbar from './Navbar.vue'
import AppFooter from './Footer.vue'

export default {
  name: 'BaseLayout',
  components: {AppNavbar, AppFooter}

}
</script>