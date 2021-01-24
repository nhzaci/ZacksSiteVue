<template>
  <v-container class="ma-0 pa-0 px-lg-12" height="100%" fluid>

    <!-- Back button row -->
    <v-row 
      justify="center" 
      align="center"
    >
      <v-col cols="12">
        <v-btn
          to="/work"
          color="contrast"
          class="white--text mx-2"
          tile
          elevation="5"
        >
          <v-icon class="me-2">mdi-arrow-left</v-icon>
          Back to my works
        </v-btn>
      </v-col>
    </v-row>

    <!-- Content row -->
    <v-row justify="center" no-gutters>

      <!-- Left column -->
      <v-col cols="12" md="8" align="center">
        <v-card tile class="ma-lg-2 pa-lg-5 pa-2 ma-2" elevation="5" color="secondary" dark>
          <v-carousel>
            <v-carousel-item
              v-for="img in project.allImg"
              :key="img"
              :src="require('../assets/' + img)"
            ></v-carousel-item>
          </v-carousel>
          <v-card-title :class="titleClass">
            {{ title }}
          </v-card-title>
          <v-card-subtitle :class="accentClass" class="text-left subtitle-1">
            {{ project.subtitle }}
          </v-card-subtitle>
          <v-card-text :class="subtitleClass">
            {{ project.description }}
          </v-card-text>
          <v-card-actions>
            <v-btn
              tile
              elevation="5"
              color="contrast"
              :href="project.link"
              target="_blank"
            >
              Visit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Right column -->
      <v-col cols="12" md="4" align="center">
        <v-sheet
          class="ma-lg-2 pa-lg-5 pa-2 ma-2"
          color="contrast"
          elevation="5"
          dark
          tile
        >
        
          <v-list color="contrast" dark>
            <v-list-item>
              <v-list-item-title :class="subtitleClass">
                Other Projects
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              v-for="proj in getList"
              :key="proj.id"
              :to="`/proj/${proj.id}`" 
              class="secondary my-2"
              elevation="5"
            >
              <v-list-item-content :class="accentClass" class="justify-center">
                {{ proj.title }} <span class="font-italic font-weight-light">{{ proj.subtitle }}</span>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    metaInfo: {
      title: 'Details',
      meta: [
        { vmid: 'description', name: 'description', content: `Details page for my projects` }
      ]
    },
    methods: {
      ...mapGetters({
        'getMoreProjects': 'projects/getMoreProjects'
      })
    },
    computed: {
      getList() {
        return this.getMoreProjects()(this.$route.params.id)
      },
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
        return this.$vuetify.breakpoint.mdAndUp? "display-3 text-truncate" : "headline text-truncate justify-center"
      },
      subtitleClass() {
        return this.$vuetify.breakpoint.mdAndUp? "display-1 text-left" : "title text-center"
      },
      accentClass() {
        return this.$vuetify.breakpoint.mdAndUp? "title" : "subtitle-1 text-center"
      },
      carouselHeight() {
        return this.$vuetify.breakpoint.smAndDown ? "200" : "800"
      },
      title() {
        return this.project.fullTitle ? this.project.fullTitle : this.project.title
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>