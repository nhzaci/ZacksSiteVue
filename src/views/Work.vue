<template>
    <v-container class="ma-0 pa-0" style="background:#071a52; height:100%;" fluid>
        <v-row 
            class="pa-0 ma-0" 
            justify="center" 
        >
            <v-col cols="12" md="10">

                <!-- Title -->
                <h1 
                    :class="titleClass + ' mb-10 mt-5'" 
                    style="color: #a7ff83"
                    id="projects"
                >
                    <span :class="titleClass">My Projects</span>
                </h1>

                <!-- Card row -->
                <v-row>
                    <!-- Project cards -->
                    <v-col 
                        cols="6" 
                        v-for="project in slicedArray" 
                        :key="project.title"
                    >
                        <v-card
                            class="ma-1"
                            style="background: #17b978;"
                            elevation="5"
                            tile
                            dark
                        >
                            <v-img 
                                :src="require('../assets/' + project.imgUrl)"
                                :height="imgHeight"
                                @click="$router.push(`/proj/${project.id}`)"
                                style="cursor:pointer"
                            >
                                <template v-slot:placeholder>
                                    <v-row
                                      class="fill-height ma-0"
                                      align="center"
                                      justify="center"
                                    >
                                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                            <v-card-title
                                @click="$router.push(`/work/${project.id}`)"
                                style="cursor:pointer"
                            >
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <span v-on="on" :class="subtitleClass" class="font-weight-bold">
                                            {{ project.title }}
                                        </span>
                                    </template>
                                    <span>{{ projectTitle(project) }}</span>
                                </v-tooltip>
                            </v-card-title>
                            <v-card-subtitle
                                @click="$router.push(`/work/${project.id}`)"
                                style="cursor:pointer"
                                :class="descriptionClass"
                            >
                                {{ project.subtitle }}
                            </v-card-subtitle>

                            <v-card-actions>
                                <v-btn 
                                    tile
                                    elevation="3"
                                    color="#1f4287" 
                                    :href="project.link"
                                    target="_blank"
                                >
                                    Visit
                                </v-btn>

                                <v-spacer></v-spacer>

                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn
                                            icon
                                            @click="project.show=!project.show"
                                            v-on = 'on'
                                        >
                                            <v-icon>{{ project.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
                            color="#1f4287" 
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

        <!-- Work Experience -->
        <v-row 
            justify="center"
            style="background:#1f4287"
        >
            <v-col cols="12" md="10">
                <v-card
                    class="pa-5 ma-5 white--text"
                    style="background:#17b978"
                    tile
                    elevation="10"
                >
                    <v-card-title :class="titleClass" id="experience">
                        Work Experience
                    </v-card-title>
                    <v-card-text class="ma-0 pa-0">

                        <!-- Simple cards shown on smaller viewports -->
                        <v-container
                            v-if="$vuetify.breakpoint.mdAndDown"
                        >
                            <v-card
                                dark
                                tile
                                v-for="work in workExp"
                                :key="work.title"
                                elevation="5"
                                class="my-3"
                                style="background:#071a52;"
                            >
                                <v-card-title
                                    style="background:#071a52;color:white"
                                >
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
                                    <p class="ms-2 font-weight-bold subtitle-1" style="margin:0">
                                        {{ work.dept }}
                                    </p>
                                    <p class="ms-2 font-weight-bold subtitle-1" style="margin:0">
                                        {{ work.company }}
                                    </p>
                                    <p class="ms-2 font-weight-bold subtitle-1">
                                        {{ work.duration }}
                                    </p>
                                    <ul>
                                        <li v-for="resp in work.responsibilities" :key="resp">{{ resp }}</li>
                                    </ul>
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
                                color="#071a52"
                                v-for="work in workExp"
                                :key="work.title"
                            >
                                <v-card
                                    dark
                                    tile
                                    elevation="5"
                                    style="background:#071a52;color:white"
                                >
                                    <v-card-title 
                                        style="background:#071a52;color:white"
                                    >
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
                                        <p class="ms-2 font-weight-bold subtitle-1" style="margin:0">
                                            {{ work.dept }}
                                        </p>
                                        <p class="ms-2 font-weight-bold subtitle-1" style="margin:0">
                                            {{ work.company }}
                                        </p>
                                        <p class="ms-2 font-weight-bold subtitle-1">
                                            {{ work.duration }}
                                        </p>
                                        <ul>
                                            <li v-for="resp in work.responsibilities" :key="resp">{{ resp }}</li>
                                        </ul>
                                    </v-card-text>
                                </v-card>
                            </v-timeline-item>
                        </v-timeline>
                        <!-- End of timeline shown on medium and up viewports -->

                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
    metaInfo: {
        title: 'My Works',
        meta: [
        { vmid: 'description', name: 'description', content: 'My Projects and past work experience' }
        ]
    },
    data: () => ({
        page: 1, //counts starting from 1
        loading: false,
        workExp: [
            {
                title: 'Strategy and Planning Admin Asst',
                icon: 'mdi-trending-up',
                dept: 'Strategy and Transformation Department',
                company: 'AIA Singapore',
                duration: 'Mar 2019 - Aug 2019',
                responsibilities: [
                    'Developed new Excel macros written in VBA to help automate several daily and weekly reports',
                    'Worked on several presentation decks for key stakeholders to better visualise company standing and plan ahead',
                    'Maintained Tableau dashboards which are published daily for key stakeholders to track daily progress of sales teams and get a better understanding of which parts of the business is doing well and which areas need more improvement',
                    'Used the Python pandas library for data manipulation',
                    'Created new Excel sheets to tailor to specific needs based on raw data provided in various different sources'
                ],
                avatar: ''
            },
            {
                title: 'Events Promoter',
                icon: 'mdi-calendar-blank-outline',
                company: 'EZ-Link Pte Ltd',
                duration: 'Nov 2018 - Jan 2019',
                responsibilities: [
                    'Supervised a team of 3 part-timers at each MRT station to ensure team is focused on hitting daily targets',
                    'Promoted the download and registration of EZ-Link application to commuters at various MRT stations across Singapore',
                ],
                avatar: ''
            },
            {
                title: 'Retail Sales Associate',
                icon: 'mdi-store',
                company: 'UNIQLO Singapore',
                duration: 'Dec 2014 - Jan 2015',
                responsibilities: [
                    'Provided assistance to customers in a retail outlet that sees a few hundred customers daily',
                    'Handled general inquiries and responsibilities of a cashier',
                    'Assisted in daily processes before opening and after closing hours'
                ]
            }
        ]
    }),
    methods: {
        load () {
            this.loading = true;
            setTimeout(this.loadingFalse(), 2000);
        },
        loadingFalse () {
            this.loading = false;
        },
        projectTitle(project) {
            if (project.fullTitle) {
                return project.fullTitle
            }
            return project.title
        }
    },
    computed: {
        ...mapState({
            projects: state => state.projects.data
        }),
        slicedArray () {
            this.load();
            let start = (this.page - 1) * 4;
            let end = start + 4
            return this.projects.slice(start, end);
        },
        titleClass () {
          if (this.$vuetify.breakpoint.mdAndUp) {
            return 'display-3 text-truncate'
          } else {
            return 'display-1 text-truncate text-center'
          }
        },
        subtitleClass () {
          if (this.$vuetify.breakpoint.mdAndUp) {
            return 'headline text-truncate'
          } else {
            return 'subtitle-1 text-truncate text-center'
          }
        },
        descriptionClass() {
          if (this.$vuetify.breakpoint.mdAndUp) {
            return 'subtitle-1 text-truncate'
          } else {
            return 'subtitle-2 text-truncate text-center'
          }
        },
        imgHeight() {
          if (this.$vuetify.breakpoint.mdAndUp) {
            return '240'
          } else {
            return '120'
          }
        }
    }
}
</script>