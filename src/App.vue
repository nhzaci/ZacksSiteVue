<template>
  <v-app
    app
    dark
  >
    <NavBar />

    <NavDrawer />

    <v-content height="100%" style="background:#071a52;">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <v-btn
        fixed
        fab
        bottom
        right
        large
        @click="navDrawerOpen=!navDrawerOpen"
        color="orange darken-2"
        v-if="$vuetify.breakpoint.mdAndDown"
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
  metaInfo: {
    titleTemplate: '%s | Zack\'s Site',
    link: [
      { rel: 'favicon', href: 'favicon.ico' }
    ]
  },
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

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>