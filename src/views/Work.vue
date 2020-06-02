<template>
    <v-container class="ma-0 pa-0" style="background:#071a52; height:100%;" fluid>
        <v-row 
            class="pa-0 ma-0" 
            justify="center" 
            style="background:#1f4287"
        >
            <v-col cols="12" md="10">

                <!-- Title -->
                <h1 
                    class="mb-10 mt-5 display-1" 
                    style="color: #a7ff83"
                >
                    <span :class="titleClass" style="font-weight:bold">My Projects</span>
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
                            style="background: #17b978; color: #071a52"
                            elevation="5"
                            tile
                        >
                            <v-img src="../assets/satellite.jpg"></v-img>
                            <v-card-title>
                                {{ project.title }}
                            </v-card-title>
                            <v-card-subtitle style="color:#071a52">
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

                                <v-btn
                                    icon
                                    @click="project.show=!project.show"
                                >
                                    <v-icon>{{ project.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
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
        <v-row justify="center">
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
                    <v-card-text>
                        Hello World
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
                description: 'A minimalist typing speed test website made with Vue.js and Nuxt.js with styling of elements done in Tailwind CSS. Makes use of cookies to store a user\'s previous attempts and averages their speed and accuract over time.',
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
        ]
    }),
    computed: {
        slicedArray () {
            console.log(this.page);
            let start = (this.page - 1) * 4;
            let end = start + 4
            return this.projects.slice(start, end);
        },
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