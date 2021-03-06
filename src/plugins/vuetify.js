import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#071a52",
        secondary: "#1f4287",
        contrast: "#17b978",
        contrast2: "#a7ff83"
      },
      dark: {
        primary: "#071a52",
        secondary: "#1f4287",
        contrast: "#17b978",
        contrast2: "#a7ff83"
      }
    }
  }
});
