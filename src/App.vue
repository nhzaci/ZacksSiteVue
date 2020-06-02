<template>
  <v-app
    app
    dark
  >
    <NavBar />

    <NavDrawer />

    <v-content>
      <router-view></router-view>
      <v-btn
        fixed
        fab
        bottom
        right
        large
        @click="navDrawerOpen=!navDrawerOpen"
        color="orange darken-2"
        class="hidden-md-and-up"
      >
        <v-icon color="white">mdi-menu</v-icon>
      </v-btn>
    </v-content>

  </v-app>
</template>

<script>
import NavBar from './components/NavBar';
import NavDrawer from './components/NavDrawer';

export default {
  name: 'App',
  components: {
    NavBar,
    NavDrawer
  },
  computed: {
    navDrawerOpen: {
      get () {
        return this.$store.state.navDrawerOpen;
      },
      set (bool) {
        this.$store.commit('set_navDrawerOpen', bool);
      }
    }
  }
};
</script>
