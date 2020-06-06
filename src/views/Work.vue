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
                        md="3" 
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
                                height="120"
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
                            <v-card-title>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <span v-on="on" class="text-truncate">
                                            {{ project.title }}
                                        </span>
                                    </template>
                                    <span>{{ project.title }}</span>
                                </v-tooltip>
                            </v-card-title>
                            <v-card-subtitle>
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
        projects: [
            {
                title: 'ClickClack',
                subtitle: 'Minimalist Typing Test Site',
                link: 'https://nhzaci.github.io/ClickClack/',
                description: 'A minimalist typing speed test website made with Vue.js and Nuxt.js with styling of elements done in Tailwind CSS. Makes use of cookies to store a user\'s previous attempts and averages their speed and accuracy over time.',
                show: false,
                imgUrl: 'ClickClack.png'
            },
            {
                title: 'ZacksSiteVue',
                subtitle: 'Minimalist Personal Website',
                link: 'https://github.com/nhzaci/ZacksSiteVue',
                description: 'A beautiful personal website with material design styling, made with Vue CLI 3 with styling from the UI pack Vuetify.js.',
                show: false,
                imgUrl: 'ZacksSiteVue.png'
            },
            {
                title: 'FinancialSense (FS)',
                subtitle: 'Financial Tracking Site',
                link: 'https://github.com/nhzaci/FinancialSense',
                description: 'A beautiful financial tracker built with Nuxt.js and Vuetify.js for styling. The home dashboard provides quick data and summarised insights to users and there is a tracking page to see more data and connects to an Express.js back end to get data on each user\'s balance and transactional data.',
                imgUrl: 'FinancialSense.png',
                show: false
            },
            {
                title: 'FSExpress',
                subtitle: 'Back-end RESTful API for FS',
                link: 'https://github.com/nhzaci/FinancialSenseExpress',
                description: 'Back-end API with full documentation for FinancialSense front-end financial tracking site. Database used is MongoDB with the mongoose package for queries to the database, set up on MongoDB Atlas.',
                imgUrl: 'express.png',
                show: false
            },
            {
                title: 'WhereCanEat',
                subtitle: 'Food Platform for Hackathon',
                link: 'https://github.com/nhzaci/WhereCanEat',
                description: 'A standard food platform site created with Nuxt.js on the front end with styling done in Tailwind CSS for custom component styling. The website was created in slightly under a day with a back-end Express.js server that transmits data from front end and get real-time results for food delivery from FoodPanda.',
                imgUrl: 'WhereCanEat.png',
                show: false
            },
            {
                title: 'ZacksBlog (ZB)',
                subtitle: 'Personal Blog Template',
                link: 'https://github.com/nhzaci/ZacksBlogTemplate',
                description: 'A beautiful blog template made in Nuxt.js for SEO options and TailwindCSS for styling. A clean material design is used with custom built components with Tailwind CSS, allowing for a very clean user interface.',
                imgUrl: 'ZacksBlogTemplate.png',
                show: false
            },
            {
                title: 'ZBDjango',
                subtitle: 'Back-end API for ZB',
                link: 'https://github.com/nhzaci/DjangoFrameworkForBlog',
                description: 'Back-end RESTful API for ZacksBlog, created with SQLite as the database on the back end.',
                imgUrl: 'django.png',
                show: false
            },
            {
                title: 'ExpressAuthentication',
                subtitle: 'Back-end Authentication API',
                link: 'https://github.com/nhzaci/ExpressAuthentication',
                description: 'Back-end RESTful API created to learn the ropes regarding authentication APIs, database used is a local MongoDB server.',
                imgUrl: 'passport.png',
                show: false
            }

        ],
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
        }
    },
    computed: {
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
        }
    }
}
</script>