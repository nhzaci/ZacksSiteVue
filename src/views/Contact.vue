<template>
    <v-container class="ma-0 pa-5" style="background:#071a52; height:100%;" fluid>

        <v-row justify="center">
            <v-col cols="12" md="10">
                <h1 :class="titleClass + ' text-center white--text font-weight-bold'">
                    <v-icon x-large color="white">mdi-message</v-icon>
                    Let's Chat
                </h1>
            </v-col>
        </v-row>

        <v-row justify="center">

            <v-col cols="12" md="10">
                <v-card 
                    class="pa-5" 
                    style="height:100%; background: #17b978;" 
                    tile
                >
                    <v-card-title :class="titleClass + ' justify-center'" style="color:#071a52">
                        <v-icon x-large class="mx-2">mdi-email</v-icon>
                        Email
                    </v-card-title>
                    <v-card-text :class="subtitleClass + ' text-center'" style="color:#071a52">
                        ngzhicai98@gmail.com
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            tile
                            href="mailto:'ngzhicai98@gmail.com'"
                            class="white--text"
                            style="background:#1f4287"
                            x-large
                        >
                            Let's Go
                        </v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col 
                cols="12" 
                md="5"
                v-for="platform in platforms"
                :key="platform.name"
            >
                <v-card 
                    class="pa-5" 
                    style="height:100%; background: #17b978;" 
                    tile
                >
                    <v-card-title :class="titleClass + ' justify-center'" style="color:#071a52">
                        <v-icon x-large class="mx-2">{{ platform.icon }}</v-icon>
                        {{ platform.name }}
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            tile
                            :href="platform.link"
                            target="_blank"
                            class="white--text"
                            style="background:#1f4287"
                            x-large
                        >
                            Let's Go
                        </v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        platforms: [
            {
                name: 'Github',
                link: 'https://github.com/nhzaci',
                icon: 'mdi-github'
            },
            {
                name: 'LinkedIn',
                link: 'https://www.linkedin.com/in/zhi-cai-ng-413549152/',
                icon: 'mdi-linkedin'
            },
        ]
    }),
    computed: {
        titleClass () {
            if (this.$vuetify.breakpoint.mdAndUp) {
                return 'display-2'
            } else {
                return 'headline'
            }
        },
        subtitleClass () {
            if (this.$vuetify.breakpoint.mdAndUp) {
                return 'headline'
            } else {
                return 'subtitle-1'
            }

        }
    }
}
</script>