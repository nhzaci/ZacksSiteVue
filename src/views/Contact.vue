<template>
  <v-container class="ma-0 primary" style="height: 100%" fluid>
    <v-row>
      <!-- Contact form section commented out
            <v-col cols="12" md="8">
                <v-sheet
                    color="secondary"
                    height="100%"
                    width="100%"
                    class="pa-lg-10"
                >
                    <v-form>
                        <label for="Name">Name</label>
                        <input type="text" class="ma-2 pa-2 yellow" style="width:80%">
                    </v-form>
                </v-sheet>
            </v-col>
            -->
      <v-col cols="12">
        <v-row justify="center" class="py-5">
          <v-col cols="12" md="10">
            <h1
              :class="titleClass + ' text-center white--text font-weight-bold'"
            >
              <v-icon x-large color="white">mdi-message</v-icon>
              Let's Chat
            </h1>
          </v-col>

          <v-col cols="12" md="10">
            <v-card
              class="contrast pa-5"
              style="height: 100%"
              tile
              elevation="10"
            >
              <v-card-title
                :class="titleClass"
                class="justify-center primary--text"
              >
                <v-icon x-large class="mx-2" color="primary">mdi-email</v-icon>
                Email
              </v-card-title>
              <v-card-text
                :class="subtitleClass"
                class="primary--text text-center"
              >
                ngzhicai98@gmail.com
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  tile
                  href="mailto:ngzhicai98@gmail.com"
                  class="white--text secondary"
                  x-large
                  elevation="5"
                >
                  Email me!
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="10" class="my-5">
            <h1
              :class="titleClass"
              class="text-center white--text font-weight-bold"
            >
              <v-icon x-large color="white">mdi-account-group</v-icon>
              My Socials
            </h1>
          </v-col>

          <v-col
            cols="12"
            md="5"
            v-for="platform in platforms"
            :key="platform.name"
          >
            <v-card
              class="contrast pa-5"
              style="height: 100%"
              elevation="10"
              tile
            >
              <v-card-title
                :class="titleClass"
                class="justify-center primary--text"
              >
                <v-icon x-large class="mx-2" color="primary">{{
                  platform.icon
                }}</v-icon>
                {{ platform.name }}
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  tile
                  :href="platform.link"
                  target="_blank"
                  class="white--text secondary"
                  elevation="5"
                  x-large
                >
                  {{ platform.action }}
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact Me",
    meta: [
      {
        vmid: "description",
        name: "description",
        content: "My Contact Info and Social Media Outlets",
      },
    ],
  },
  data: () => ({
    platforms: [
      {
        name: "Github",
        link: "https://github.com/nhzaci",
        icon: "mdi-github",
        action: "View my GitHub",
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/zhi-cai-ng-413549152/",
        icon: "mdi-linkedin",
        action: "Connect with me!",
      },
      {
        name: "My Resume",
        link:
          "https://drive.google.com/file/d/1axKoQOf4rn0gjAhg95nmGnB7AjCoirnp/view?usp=sharing",
        icon: "mdi-file-document",
        action: "Download my resume",
      },
    ],
  }),
  computed: {
    titleClass() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return "display-2";
      } else {
        return "headline";
      }
    },
    subtitleClass() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return "headline";
      } else {
        return "subtitle-1";
      }
    },
  },
};
</script>