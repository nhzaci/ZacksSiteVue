<template>
    <v-container class="ma-0 pa-0" style="background:#071a52; height:100%;" fluid>
        <v-row 
            class="pa-0 ma-0" 
            justify="center" 
        >
            <v-col cols="12" md="10">

                <!-- Title -->
                <h1 
                    class="mb-10 mt-5 display-1" 
                    style="color: #a7ff83"
                >
                    <span :class="titleClass">My Projects</span>
                </h1>

                <!-- Card row -->
                <v-row>
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
                            <v-img src="../assets/satellite.jpg"></v-img>
                            <v-card-title>
                                {{ project.title }}
                            </v-card-title>
                            <v-card-subtitle>
                                {{ project.subtitle }}
                            </v-card-subtitle>

                            <v-card-actions>
                                <v-btn 
                                    text 
                                    color="purple" 
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
                            color="orange darken-2"
                            circle
                            v-model="page"
                            :length="Math.ceil(projects.length / 4)"
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
                    <v-card-title :class="titleClass">
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
                        <v-container class="ma-0 pa-0" v-if="$vuetify.breakpoint.mdAndUp">
                            <v-timeline 
                                :dense="$vuetify.breakpoint.mdAndDown"
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
                        </v-container>
                        <!-- End of timeline shown on medium and up viewports -->

                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        page: 1, //counts starting from 1
        projects: [
            {
                title: 'ClickClack',
                subtitle: 'Typing Test Site',
                link: 'https://nhzaci.github.io/ClickClack/',
                description: 'A minimalist typing speed test website made with Vue.js and Nuxt.js with styling of elements done in Tailwind CSS. Makes use of cookies to store a user\'s previous attempts and averages their speed and accuracy over time.',
                show: false
            },
            {
                title: 'ClickClack1',
                subtitle: 'Typing Test Site',
                link: 'https://nhzaci.github.io/ClickClack/',
                description: 'A minimalist typing speed test website made with Vue.js and Nuxt.js with styling of elements done in Tailwind CSS. Makes use of cookies to store a user\'s previous attempts and averages their speed and accuract over time.',
                show: false
            },
            {
                title: 'ClickClack2',
                subtitle: 'Typing Test Site',
                link: 'https://nhzaci.github.io/ClickClack/',
                description: 'A minimalist typing speed test website made with Vue.js and Nuxt.js with styling of elements done in Tailwind CSS. Makes use of cookies to store a user\'s previous attempts and averages their speed and accuract over time.',
                show: false
            },
            {
                title: 'ClickClack3',
                subtitle: 'Typing Test Site',
                link: 'https://nhzaci.github.io/ClickClack/',
                description: 'A minimalist typing speed test website made with Vue.js and Nuxt.js with styling of elements done in Tailwind CSS. Makes use of cookies to store a user\'s previous attempts and averages their speed and accuract over time.',
                show: false
            },
            {
                title: 'ClickClack4',
                subtitle: 'Typing Test Site',
                link: 'https://nhzaci.github.io/ClickClack/',
                description: 'A minimalist typing speed test website made with Vue.js and Nuxt.js with styling of elements done in Tailwind CSS. Makes use of cookies to store a user\'s previous attempts and averages their speed and accuract over time.',
                show: false
            },
            {
                title: 'ClickClack5',
                subtitle: 'Typing Test Site',
                link: 'https://nhzaci.github.io/ClickClack/',
                description: 'A minimalist typing speed test website made with Vue.js and Nuxt.js with styling of elements done in Tailwind CSS. Makes use of cookies to store a user\'s previous attempts and averages their speed and accuract over time.',
                show: false
            },
            {
                title: 'ClickClack6',
                subtitle: 'Typing Test Site',
                link: 'https://nhzaci.github.io/ClickClack/',
                description: 'A minimalist typing speed test website made with Vue.js and Nuxt.js with styling of elements done in Tailwind CSS. Makes use of cookies to store a user\'s previous attempts and averages their speed and accuract over time.',
                show: false
            },
            {
                title: 'ClickClack7',
                subtitle: 'Typing Test Site',
                link: 'https://nhzaci.github.io/ClickClack/',
                description: 'A minimalist typing speed test website made with Vue.js and Nuxt.js with styling of elements done in Tailwind CSS. Makes use of cookies to store a user\'s previous attempts and averages their speed and accuract over time.',
                show: false
            },
            {
                title: 'ClickClack8',
                subtitle: 'Typing Test Site',
                link: 'https://nhzaci.github.io/ClickClack/',
                description: 'A minimalist typing speed test website made with Vue.js and Nuxt.js with styling of elements done in Tailwind CSS. Makes use of cookies to store a user\'s previous attempts and averages their speed and accuract over time.',
                show: false
            },
            {
                title: 'ClickClack9',
                subtitle: 'Typing Test Site',
                link: 'https://nhzaci.github.io/ClickClack/',
                description: 'A minimalist typing speed test website made with Vue.js and Nuxt.js with styling of elements done in Tailwind CSS. Makes use of cookies to store a user\'s previous attempts and averages their speed and accuract over time.',
                show: false
            },
            {
                title: 'ClickClack10',
                subtitle: 'Typing Test Site',
                link: 'https://nhzaci.github.io/ClickClack/',
                description: 'A minimalist typing speed test website made with Vue.js and Nuxt.js with styling of elements done in Tailwind CSS. Makes use of cookies to store a user\'s previous attempts and averages their speed and accuract over time.',
                show: false
            },
            {
                title: 'ClickClack11',
                subtitle: 'Typing Test Site',
                link: 'https://nhzaci.github.io/ClickClack/',
                description: 'A minimalist typing speed test website made with Vue.js and Nuxt.js with styling of elements done in Tailwind CSS. Makes use of cookies to store a user\'s previous attempts and averages their speed and accuract over time.',
                show: false
            },
            {
                title: 'FinancialSense',
                subtitle: 'Financial Tracking Site',
                link: 'https://github.com/nhzaci/FinancialSense',
                description: 'A beautiful financial tracker built with Nuxt.js and Vuetify.js for styling. The home dashboard provides quick data and summarised insights to users and there is a tracking page to see more data and connects to an Express.js back end to get data on each user\'s balance and transactional data.',
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
    computed: {
        slicedArray () {
            let start = (this.page - 1) * 4;
            let end = start + 4
            return this.projects.slice(start, end);
        },
        titleClass () {
          if (this.$vuetify.breakpoint.mdAndUp) {
            return 'display-3 text-truncate'
          } else {
            return 'display-1 text-truncate'
          }
        }
    }
}
</script>