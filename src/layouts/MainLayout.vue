<template>
  <AppNavbar :is-authenticated="isAuthenticated"/>
  <div class="container pt-4" style="min-height: 100vh;">
    <router-view></router-view>
  </div>
  <AppFooter/>
  <AppAuthModal/>
  <AppEnrollModal/>
</template>

<script>
import AppNavbar from '../components/Navbar.vue'
import AppFooter from '../components/Footer.vue'
import AppAuthModal from '../components/AuthModal.vue'
import AppEnrollModal from '../components/EnrollModal.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'MainLayout',
  components: {AppNavbar, AppFooter, AppAuthModal, AppEnrollModal},
  mounted() {
    setTimeout(() => {
      //this.$store.dispatch('authenticate')
    }, 5000)
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated'
    })
  }
}
</script>