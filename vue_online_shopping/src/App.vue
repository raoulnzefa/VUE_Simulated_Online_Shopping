<template>
  <div id="app">
    <!-- Rendered content  -->
    <router-view></router-view>
    <!-- Nav at the bottom -->
    <NavBottom v-show="showNav"></NavBottom>
  </div>
</template>

<script>
import NavBottom from './components/NavBottom'
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  data() {
    return {

    }
  },

  components: {
    NavBottom
  },

  computed: mapGetters(['showNav'])
  // computed: mapGetters(['shownav'])
}

</script>

<style>
@import './assets/css/index.css'
</style>
