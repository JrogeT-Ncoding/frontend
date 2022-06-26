<template>
  <BaseLayout/>
</template>

<script>
import BaseLayout from './layouts/MainLayout.vue'

export default {
  name: 'App',
  components: {
    BaseLayout
  },
  beforeCreate() {
    this.$store.commit('initialiseStore');
  },
}
</script>
