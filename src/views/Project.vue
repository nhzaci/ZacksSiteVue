<template>
  <v-container class="ma-0 pa-0" height="100%" fluid>
    <v-row 
      justify="center" 
      align="center"
    >
      <v-col cols="10">
        <v-btn 
          color="#1f4287"
          x-large
          dark
          tile
          to="/work"
          v-if="$vuetify.breakpoint.mdAndUp"
        > 
          <v-icon x-large> 
            mdi-arrow-left
          </v-icon>
          BACK TO MY WORKS
        </v-btn>
        <v-row align="center" class="white--text" v-else>
          <v-btn
            text
            to="/work"
            class="white--text font-weight-light"
          >
            <v-icon>mdi-arrow-left</v-icon>
            Back to My Works
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-row 
      justify="center"
      align="center"
      style="background:#1f4287"
      class="my-md-5"
    >
      <v-col cols="11" md="10">
        <v-card
          class="pa-lg-5"
          dark
          tile
          elevation="5"
          color="#17b978"
        >
          <v-card-title :class="titleClass" class="font-weight-bold">
            {{ title }}
          </v-card-title>
          <v-card-subtitle :class="subtitleClass" class="font-italic">
            {{ project.subtitle }}
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="10">
        <v-carousel
          cycle
          hide-delimiter-background
          show-arrows-on-hover
          :height="carouselHeight"
        >
          <v-carousel-item
            v-for="(img,i) in project.allImg"
            :key="i"
            :src="require('../assets/' + img)"
          >
            <v-sheet
              height="100%"
            >
              <v-row class="fill-height">
                <v-img 
                  :src="require('../assets/' + img)"
                  :height="carouselHeight"
                >
                </v-img>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      
      <v-col cols="11" md="10"> 
        <v-card
          class="pa-5"
          dark
          tile
          elevation="5"
          color="#17b978"
        >
          <v-row :class="subtitleClass" class="font-weight-light px-7">
            {{ project.description }}
          </v-row>
          <v-row class="px-lg-7">
            <v-col
              :class="subtitleClass"
              class="font-weight-light font-italic text-center"
            >
              Skills
            </v-col>
          </v-row>
          <v-row class="px-lg-8" justify="center">
            <v-chip 
              v-for="tag in project.tags"
              :key="tag"
              class="ma-1 mx-lg-2"
              color="#071a52"
              :class="accentClass"
            >
              {{ tag }}
            </v-chip>
          </v-row>
          <v-spacer></v-spacer>
          <v-card-actions class="px-lg-8">
            <v-btn
              tile
              elevation="5"
              class="mt-lg-2 mx-lg-2 pa-lg-2"
              color="#1f4287"
              large
              :class="accentClass"
              width="100%"
              :href="project.link"
            >
              Visit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    computed: {
      project() {
        return this.$store.state.projects.data[this.$route.params.id - 1];
      },
      items() {
        return [
          {
            text: 'My Works',
            to: '/work',
            link: true,
            disabled: false
          },
          {
            text: this.project.title,
            to: '',
            link: false,
            disabled: true
          }
        ]
      },
      titleClass () {
        if (this.$vuetify.breakpoint.mdAndUp) {
          return 'display-3 text-truncate'
        } else {
          return 'headline text-truncate justify-center'
        }
      },
      subtitleClass() {
        if (this.$vuetify.breakpoint.mdAndUp) {
          return 'display-1'
        } else {
          return 'title text-center'
        }
      },
      accentClass() {
        if (this.$vuetify.breakpoint.mdAndUp) {
          return 'subtitle-1'
        } else {
          return 'subtitle-2 text-center'
        }
      },
      carouselHeight() {
        if (this.$vuetify.breakpoint.smAndDown) {
          return "200"
        }
        return "800"
      },
      title() {
        if (this.project.fullTitle) {
          return this.project.fullTitle
        }
        return this.project.title
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>