<template>
  <v-container class="ma-0 pa-0" style="background:#071a52; height:100%;" fluid>
    <v-row align="center" no-gutters style="height:50%">
      
      <!-- Left column -->
      <v-col cols="12" md="6" :class="titleClass"> 

        <!-- Title Row -->
        <v-row justify="center" class="font-weight-bold white--text py-10">
          Creating Experiences
        </v-row>

        <!-- Button Row -->
        <v-row justify="center" class="py-10">
          <v-btn 
            class="mx-2 white--text" 
            x-large
            to="/work"
            style="background:#17b978"
            tile
            elevation="10"
          >My works</v-btn>
          <v-btn 
            class="mx-2 white--text" 
            x-large
            outlined
            to="/contact"
            tile
            elevation="5"
          >Contact Me</v-btn>
        </v-row>
      </v-col>

      <!-- Right Column -->
      <v-col cols="12" md="6">
        <v-parallax src="../assets/computers.jpg" height="600"></v-parallax>
      </v-col>
    </v-row>

    <v-row class="pa-0" align="center" no-gutters style="height:50%">

      <!-- Left Column -->
      <v-col cols="12" md="6">
        <v-parallax src="../assets/earth.jpg" height="600"></v-parallax>
      </v-col>

      <!-- Right Column -->
      <v-col cols="12" md="6">
        <v-row justify="center" align="center">
          <v-col>
            <v-card
              class="pa-5 ma-5 white--text"
              style="background:#17b978"
              tile
              elevation="10"
            >
              <v-card-title :class="titleClass">
                My Skills
              </v-card-title>
              <v-card-text>
                <v-list elevation="5">
                  <v-list-item v-for="lang in languages" :key="lang.icon">
                    <v-list-item-icon>
                      <v-icon>
                        {{ lang.icon }} 
                      </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      {{ lang.name }}
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    languages: [
      { name: 'Java', icon: 'mdi-language-java' },
      { name: 'JavaScript', icon: 'mdi-language-javascript' },
      { name: 'HTML 5', icon: 'mdi-language-html5' },
      { name: 'Python', icon: 'mdi-language-python' },
      { name: 'PHP', icon: 'mdi-language-php' },
    ]
  }),
  computed: {
    titleClass () {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return 'display-3'
      } else {
        return 'display-1'
      }
    }
  }
}
</script>
