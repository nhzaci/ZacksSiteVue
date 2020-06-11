<template>
  <v-container class="ma-0 pa-0" fluid>
    <v-row align="center" no-gutters>
      
      <!-- Left column -->
      <v-col cols="12" class=""> 
        <v-parallax src="../assets/computersOverlayed.jpg" :height="parallaxHeight">
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12" md="8">
              <v-card class="pa-10 primary">
                <v-card-title 
                  class="white--text justify-center font-weight-bold" 
                  :class="titleClass"
                >
                  <span class="text-center text-break">Creating Experiences</span>
                </v-card-title>
                <v-card-actions class="justify-center">
                  <v-btn 
                    class="contrast mx-2 white--text" 
                    x-large
                    to="/work"
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
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-parallax>
      </v-col>
    </v-row>

    <!-- Skills -->
    <v-row 
      class="pa-0" 
      align="center" 
      justify="center" 
      no-gutters 
    >

      <v-col cols="12" md="10">
          <v-col>
            <v-card
              class="pa-5 ma-5 white--text"
              color="contrast"
              tile
              elevation="10"
              id="skills"
            >
              <v-card-title 
                :class="titleClass"
              >
                My Skills
              </v-card-title>

              <!-- Skills card text -->
              <v-card-text class="ma-0 pa-0">
                <v-container class="ma-0 pa-0" fluid>
                  <v-row class="ma-0 pa-0">

                    <!-- Left list -->
                    <v-col cols="12" md="6">
                      <v-list elevation="5">
                        <v-list-item v-for="lang in languages" :key="lang.icon">
                          <v-list-item-icon>
                            <v-icon large>
                              {{ lang.icon }} 
                            </v-icon>
                          </v-list-item-icon>
                          <v-list-item-content class="subtitle-1">
                            {{ lang.name }}
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-col>

                    <!-- Right List --> 
                    <v-col cols="12" md="6">
                      <v-list elevation="5">
                        <v-list-item v-for="lang in languages2" :key="lang.icon">
                          <v-list-item-icon>
                            <v-icon large>
                              {{ lang.icon }} 
                            </v-icon>
                          </v-list-item-icon>
                          <v-list-item-content class="subtitle-1">
                            {{ lang.name }}
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <!-- End of Skills card text -->

            </v-card>
          </v-col>
      </v-col>
    </v-row>


    <!-- Education -->
    <v-row justify="center">
      <!-- Right Column -->
      <v-col cols="12" md="10">
        <v-card
          class="pa-5 ma-5 white--text"
          style="background:#1f4287"
          tile
          dark
          elevation="10"
          id="education"
        >
          <v-card-title 
            :class="titleClass" 
          >
            My Education
          </v-card-title>
          <v-card-text class="ma-0 pa-0">

            <!-- Container with cards for small viewports -->
            <v-container class="ma-0 pa-0" v-if="$vuetify.breakpoint.mdAndDown">
              
                <v-card class="my-3" tile>
                  <v-card-title class="orange darken-2">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <span v-on="on" @click="on" class="text-truncate">
                                <v-icon class="mx-2">mdi-library</v-icon>
                                National University of Singapore
                            </span>
                        </template>
                        <span>National University of Singapore</span>
                    </v-tooltip>
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="10">
                        <span class="font-weight-bold subtitle-1">
                          Bachelor of Science (Business Analytics) 
                        </span>
                        <br>
                        <span class="font-weight-bold subtitle-1">
                          School of Computing
                        </span>
                        <p>
                          Graduating 2023
                        </p>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>

                <v-card class="my-3" tile>
                  <v-card-title class="green">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <span v-on="on" @click="on" class="text-truncate">
                                <v-icon class="mx-2">mdi-check-outline</v-icon>
                                Catholic Junior College
                            </span>
                        </template>
                        <span>Catholic Junior College</span>
                    </v-tooltip>
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="10">
                        <span class="font-weight-bold subtitle-1">
                          GCE 'A' Levels
                        </span>
                        <p>Graduated 2016</p>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>

                <v-card class="my-3" tile>
                  <v-card-title class="green">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <span v-on="on" @click="on" class="text-truncate">
                                <v-icon class="mx-2">mdi-check-outline</v-icon>
                                Holy Innocents' High School
                            </span>
                        </template>
                        <span>Holy Innocents' High School</span>
                    </v-tooltip>
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="10">
                        <span class="font-weight-bold subtitle-1">
                          GCE 'O' Levels
                        </span>
                        <p>Graduated 2014</p>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>

            </v-container>
            <!-- End of Container with cards for small viewports -->

            <!-- Timeline for larger viewports -->
            <v-timeline
              v-if="!$vuetify.breakpoint.mdAndDown"
            >
              <!-- Undergrad -->
              <v-timeline-item
                color="orange darken-2"
                fill-dot
                small
              >
                <v-card>
                  <v-card-title class="orange darken-2">
                    <v-icon class="mx-2">mdi-library</v-icon>
                      National University of Singapore
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="10">
                        <span class="font-weight-bold subtitle-1">
                          Bachelor of Science (Business Analytics)
                        </span>
                        <br>
                        <span class="font-weight-bold subtitle-1">
                          School of Computing
                        </span>
                        <p>
                          Graduating 2023
                        </p>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-timeline-item>

              <!-- High School -->
              <v-timeline-item
                color="green"
                fill-dot
                small
              >
                <v-card>
                  <v-card-title :class="$vuetify.breakpoint.mdAndDown ? 'green justify-start' : 'green justify-end'">
                    <v-icon class="mx-2">mdi-check-outline</v-icon>
                    Catholic Junior College
                  </v-card-title>
                  <v-container>
                    <v-row justify="end">
                      <v-col cols="12" md="10" :class="$vuetify.breakpoint.mdAndDown ? 'text-start' : 'text-end'">
                        <span class="font-weight-bold subtitle-1">
                          GCE 'A' Levels
                        </span>
                        <p>Graduated 2016</p>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-timeline-item>

              <!-- Secondary School -->
              <v-timeline-item
                color="green"
                fill-dot
                small
              >
                <v-card>
                  <v-card-title class="green">
                    <v-icon class="mx-2">mdi-check-outline</v-icon>
                    Holy Innocents' High School
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="10">
                        <span class="font-weight-bold subtitle-1">
                          GCE 'O' Levels
                        </span>
                        <p>Graduated 2014</p>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-timeline-item>
            </v-timeline>
            <!-- End of timeline for larger viewports -->

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- End of Education -->

    <!-- Accolades -->
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card
          class="pa-5 ma-5 white--text"
          style="background:#17b978"
          tile
          elevation="10"
          id="accolades"
        >
          <v-card-title 
            :class="titleClass"
          >
            My Accolades
          </v-card-title>
          <v-card-text>
            <v-row v-if="!$vuetify.breakpoint.mdAndUp">
              <v-card
                color="#1f4287"
                tile
                elevation="5"
                class="my-2"
                v-for="(award,i) in awards"
                :key="award.title+i"
              >
                <v-card-title class="white--text">
                  {{ award.title }}
                </v-card-title>
                <v-card-subtitle class="white--text text--darken-2">
                  {{ award.subtitle }}
                </v-card-subtitle>
              </v-card>
            </v-row>
            <v-timeline
              dense
              v-if="$vuetify.breakpoint.mdAndUp"
            >
              <v-timeline-item
                fill-dot
                small
                color="#1f4287"
                v-for="award in awards"
                :key="award.subtitle"
              >
                <v-card
                  color="#1f4287"
                  tile
                  elevation="5"
                >
                  <v-card-title class="white--text">
                    {{ award.title }}
                  </v-card-title>
                  <v-card-subtitle class="white--text text--darken-2">
                    {{ award.subtitle }}
                  </v-card-subtitle>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>

export default {
  name: 'Home',
  metaInfo: {
    title: 'Home',
    meta: [
      { vmid: 'description', name: 'description', content: 'My Skills, Education and Accolades over the years' }
    ]
  },
  data: () => ({
    rating: 4,
    languages: [
      { name: 'Vue.js', icon: 'mdi-vuejs' },
      { name: 'Nuxt.js', icon: 'mdi-nuxt' },
      { name: 'Node.js', icon: 'mdi-nodejs' },
      { name: 'Java', icon: 'mdi-language-java' },
      { name: 'JavaScript', icon: 'mdi-language-javascript' },
      { name: 'Python', icon: 'mdi-language-python' },
      { name: 'Tableau', icon: 'mdi-view-dashboard' },
    ],
    languages2: [
      { name: 'R', icon: 'mdi-language-r' },
      { name: 'HTML 5', icon: 'mdi-language-html5' },
      { name: 'CSS', icon: 'mdi-language-css3' },
      { name: 'PHP', icon: 'mdi-language-php' },
      { name: 'MySQL', icon: 'mdi-database-settings' },
      { name: 'MongoDB', icon: 'mdi-database' },
    ],
    awards: [
      { title: 'Outstanding Contribution Award for CCA', subtitle: 'CJC, 2017' },
      { title: 'Edusave Certificate of Academic Achievement', subtitle: 'CJC, 2016' },
      { title: 'Edusave Good Progress Award', subtitle: 'CJC, 2016' }, 
      { title: 'Edusave Scholarship', subtitle: 'HIHS, 2014' },
      { title: 'Edusave Scholarship', subtitle: 'HIHS, 2013' },
      { title: 'Edusave Certificate of Academic Achievement', subtitle: 'HIHS, 2012' }
    ]
  }),
  computed: {
    titleClass () {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return 'display-3'
      } else {
        return 'display-1'
      }
    },
    parallaxHeight() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return '800'
      } else {
        return '400'
      }
    }
  },
}
</script>
