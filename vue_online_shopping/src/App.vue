<template>
  <div id="app">
    <!-- Rendered content  -->
    <router-view></router-view>
    <!-- Nav at the bottom -->
    <NavBottom/>
  </div>
</template>

<script>
import NavBottom from './components/NavBottom'
export default {
  name: 'App',
  data() {
    return {

    }
  },

  components: {
    NavBottom
  }
}
</script>

<style>
@import './assets/css/index.css'
</style>
