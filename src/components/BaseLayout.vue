<template>
    <AppNavbar @onAuthenticate="openModal" :is-authenticated="isAuthenticated"/>
  <div class="container pt-4">
    {{availableCoursesCount}} Available courses and {{ count }}
    <router-view></router-view>
  </div>
  <AppFooter/>
  <AppAuthModal/>
</template>

<script>
import AppNavbar from './Navbar.vue'
import AppFooter from './Footer.vue'
import AppAuthModal from './AuthModal.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'BaseLayout',
  components: {AppNavbar, AppFooter, AppAuthModal},
  data() {
    return {
      isAuthenticated: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.isAuthenticated = true
    }, 5000)
  },
  /*computed: mapState({
    myCounter: store =>store.count
  })*/
  computed: {
    ...mapState(['count']),
    ...mapGetters(['availableCoursesCount'])
  },
}
</script>