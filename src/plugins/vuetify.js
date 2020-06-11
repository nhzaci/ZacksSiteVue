import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#071a52",
        contrast: "#17b978"
      },
      dark: {
        primary: "#071a52",
        contrast: "#17b978"
      }
    }
  }
});
