<template>
    <AppNavbar @onAuthenticate="openModal"/>
  <div class="container pt-4">
    <router-view></router-view>
  </div>
  <AppFooter/>
  <AppAuthModal/>
</template>

<script>
import AppNavbar from './Navbar.vue'
import AppFooter from './Footer.vue'
import AppAuthModal from './AuthModal.vue'

export default {
  name: 'BaseLayout',
  components: {AppNavbar, AppFooter, AppAuthModal},
  methods: {
    openModal() {
      //this.$refs.authModal.open()
      alert("HI")
    }
  }
}
</script>