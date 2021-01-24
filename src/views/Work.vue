<template>
  <v-container class="ma-0 pa-0 primary" style="height: 100%" fluid>
    <!-- Work Experience -->
    <v-row justify="center" class="primary">
      <v-col cols="12" md="10">
        <v-card
          class="pa-5 ma-5 white--text"
          color="contrast"
          tile
          elevation="10"
        >
          <v-card-title :class="titleClass" id="experience">
            Work Experience
          </v-card-title>
          <v-card-text class="ma-0 pa-0">
            <!-- Simple cards shown on smaller viewports -->
            <v-container v-if="$vuetify.breakpoint.mdAndDown">
              <v-card
                dark
                tile
                v-for="work in workExp"
                :key="work.title"
                elevation="5"
                class="primary my-3"
              >
                <v-card-title class="primary white--text flex s">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <span v-on="on" @click="on" class="text-truncate">
                        <v-icon class="mx-2">{{ work.icon }}</v-icon>
                        {{ work.title }}
                      </span>
                    </template>
                    <span>{{ work.title }}</span>
                  </v-tooltip>
                </v-card-title>
                <v-card-text>
                  <p class="ms-2 font-weight-bold subtitle-1" style="margin: 0">
                    {{ work.dept }}
                  </p>
                  <p class="ms-2 font-weight-bold subtitle-1" style="margin: 0">
                    {{ work.company }}
                  </p>
                  <p class="ms-2 font-weight-bold subtitle-1">
                    {{ work.duration }}
                  </p>
                  <ul v-if="work.responsibilities">
                    <li v-for="resp in work.responsibilities" :key="resp">
                      {{ resp }}
                    </li>
                  </ul>
                  <div v-else>
                    <p v-for="story in work.stories" :key="story">
                      {{ story }}
                    </p>
                  </div>
                </v-card-text>
              </v-card>
            </v-container>
            <!-- End of simple cards shown on smaller viewports -->

            <!-- Timeline shown on medium and up viewports -->
            <v-timeline
              :dense="$vuetify.breakpoint.mdAndDown"
              v-if="$vuetify.breakpoint.mdAndUp"
            >
              <v-timeline-item
                fill-dot
                color="primary"
                v-for="work in workExp"
                :key="work.title"
              >
                <v-card dark tile elevation="5" class="primary white--text">
                  <v-card-title class="primary white--text">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <span v-on="on" class="text-truncate">
                          <v-icon class="mx-2">{{ work.icon }}</v-icon>
                          {{ work.title }}
                        </span>
                      </template>
                      <span>{{ work.title }}</span>
                    </v-tooltip>
                  </v-card-title>
                  <v-card-text>
                    <p
                      class="ms-2 font-weight-bold subtitle-1"
                      style="margin: 0"
                    >
                      {{ work.dept }}
                    </p>
                    <p
                      class="ms-2 font-weight-bold subtitle-1"
                      style="margin: 0"
                    >
                      {{ work.company }}
                    </p>
                    <p class="ms-2 font-weight-bold subtitle-1">
                      {{ work.duration }}
                    </p>
                    <ul v-if="work.responsibilities">
                      <li v-for="resp in work.responsibilities" :key="resp">
                        {{ resp }}
                      </li>
                    </ul>
                    <div v-else>
                      <p
                        v-for="story in work.stories"
                        :key="story"
                        class="ml-2"
                      >
                        {{ story }}
                      </p>
                    </div>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
            <!-- End of timeline shown on medium and up viewports -->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Projects -->
    <v-row class="secondary pa-0 ma-0" justify="center">
      <v-col cols="12" md="10">
        <!-- Title -->
        <h1
          :class="titleClass"
          class="mb-10 mt-5 contrast2--text"
          id="projects"
        >
          <span :class="titleClass">My Projects</span>
        </h1>

        <!-- Card row -->
        <v-row>
          <!-- Project cards -->
          <v-col cols="6" v-for="project in slicedArray" :key="project.title">
            <v-card class="contrast ma-1" elevation="5" tile dark>
              <v-img
                :src="require('../assets/' + project.imgUrl)"
                :height="imgHeight"
                @click="$router.push(`/proj/${project.id}`)"
                style="cursor: pointer"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-card-title
                @click="$router.push(`/proj/${project.id}`)"
                style="cursor: pointer"
              >
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <span
                      v-on="on"
                      :class="subtitleClass"
                      class="font-weight-bold"
                    >
                      {{ project.title }}
                    </span>
                  </template>
                  <span>{{ projectTitle(project) }}</span>
                </v-tooltip>
              </v-card-title>
              <v-card-subtitle
                @click="$router.push(`/proj/${project.id}`)"
                style="cursor: pointer"
                :class="descriptionClass"
              >
                {{ project.subtitle }}
              </v-card-subtitle>

              <v-card-actions>
                <v-btn
                  tile
                  elevation="3"
                  color="secondary"
                  :href="project.link"
                  target="_blank"
                >
                  Visit
                </v-btn>

                <v-spacer></v-spacer>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn icon @click="project.show = !project.show" v-on="on">
                      <v-icon>{{
                        project.show ? "mdi-chevron-up" : "mdi-chevron-down"
                      }}</v-icon>
                    </v-btn>
                  </template>
                  <span>Show Details</span>
                </v-tooltip>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="project.show">
                  <v-divider></v-divider>

                  <v-card-text>
                    {{ project.description }}
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
        <!-- End or card row -->

        <!-- For pagination -->
        <v-row justify="end" class="my-5">
          <v-col cols="12">
            <v-pagination
              color="secondary"
              circle
              v-model="page"
              :length="Math.ceil(projects.length / 4)"
              @click="load"
            >
            </v-pagination>
          </v-col>
        </v-row>
        <!-- End of pagination -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  metaInfo: {
    title: "My Works",
    meta: [
      {
        vmid: "description",
        name: "description",
        content: "My Projects and past work experience",
      },
    ],
  },
  data: () => ({
    page: 1, // counts starting from 1
    loading: false,
    workExp: [
      {
        title: "Co-founder, CTO",
        icon: "mdi-code-braces-box",
        company: "Chow",
        duration: "Dec 2020 - Present",
        stories: [
          "In every Internet Minute, 347,222 stories are posted by Instagram users. With an increasing volume of untouched user-generated content, how might we be able to tap onto this fragmented F&B market to engage and connect with indecisive diners better?",
          "Introducing Chow! Chow provides algorithmic suggestions to consumers for restaurants through our AI algorithm, allowing user-generated video content to have a greater outreach for indecisive diners to save time and make food choices specifically catered to them.",
        ],
        avatar: "",
      },
      {
        title: "Software Engineer Intern",
        icon: "mdi-code-braces-box",
        company: "Gracet",
        duration: "Sep 2020 - Jan 2021",
        responsibilities: [
          "Developed a HR Management Solution with a team of 7, using MongoDB, Express, React and Node.js with GraphQL for our backend",
          "Developed full stack billing integration with Stripe with Webhooks set to listen to Stripe event callbacks",
          "Employed Agile project management methodology using Jira to help team work better together through sprints",
        ],
        avatar: "",
      },
      {
        title: "Software Engineer Intern",
        icon: "mdi-laptop",
        company: "ScaleStack.ai",
        duration: "Jun 2020 - Jan 2021",
        responsibilities: [
          "Developed an invoicing solution, live at ScaleStack.ai, with Angular, Firebase, Nest.js and Google Cloud Functions for our serverless backend",
          "Developed full stack integration with PEPPOL Access Point, StoreCove to send invoices through global PEPPOL network",
          "Developed full stack billing integration with Stripe with Webhooks set up to listen to Stripe event callbacks",
          "Attained certification as a PEPPOL Service Provider by IMDA",
        ],
        avatar: "",
      },
      {
        title: "Strategy and Planning Intern",
        icon: "mdi-trending-up",
        company: "AIA Singapore",
        duration: "Mar 2019 - Aug 2019",
        responsibilities: [
          "Developed VBA macros to automate several Excel reports",
          "Maintained Tableau dashboard databases",
          "Developed Python scripts for data verification",
          "Created PowerPoint decks for key C-suite executives",
          "Created Excel spreadsheets to optimise reporting flow",
        ],
        avatar: "",
      },
      {
        title: "CS2030 Teaching Assistant",
        icon: "mdi-billboard",
        company: "National University of Singapore",
        duration: "Aug 2020 - May 2021",
        responsibilities: [
          "Teaching assistant for CS2030: Programming Methodology II",
          "The module aims to equip students with skills in two modern programming paradigms, Object-Oriented Programming and Functional Programming in Java",
          "Topics include objects and classes, composition, association, inheritance, interface, polymorphism, abstract classes, dynamic binding, lambda expression, effect-free programming, first class functions, closures, continuations and monads.",
        ],
        avatar: "",
      },
    ],
  }),
  methods: {
    load() {
      this.loading = true;
      setTimeout(this.loadingFalse(), 2000);
    },
    loadingFalse() {
      this.loading = false;
    },
    projectTitle(project) {
      if (project.fullTitle) {
        return project.fullTitle;
      }
      return project.title;
    },
  },
  computed: {
    ...mapState({
      projects: (state) => state.projects.data,
    }),
    slicedArray() {
      this.load();
      let start = (this.page - 1) * 4;
      let end = start + 4;
      return this.projects.slice(start, end);
    },
    titleClass() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return "display-3 text-truncate";
      } else {
        return "display-1 text-truncate text-center";
      }
    },
    subtitleClass() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return "headline text-truncate";
      } else {
        return "subtitle-1 text-truncate text-center";
      }
    },
    descriptionClass() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return "subtitle-1 text-truncate";
      } else {
        return "subtitle-2 text-truncate text-center";
      }
    },
    imgHeight() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return "240";
      } else {
        return "120";
      }
    },
  },
};
</script>
