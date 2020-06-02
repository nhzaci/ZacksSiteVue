<template>
    <v-navigation-drawer
        app
        dark
        temporary
        v-model="navDrawerOpen"
        right
    >
            <v-row class="fill-height" align="center">
                <v-col>
                    <v-list>
                        <v-list-item
                            link
                            to="/"
                        >
                            <v-icon class="px-2">mdi-home</v-icon>
                            Home
                        </v-list-item>
                        <v-list-item
                            link
                            to="/work"
                        >
                            <v-icon class="px-2">mdi-briefcase</v-icon>
                            My Works
                        </v-list-item>
                        <v-list-item
                            link
                            to="/contact"
                        >
                            <v-icon class="px-2">mdi-message</v-icon>
                            Contact Me
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
    </v-navigation-drawer>
</template>

<script>
export default {
    computed: {
        navDrawerOpen: {
            get () {
                return this.$store.state.navDrawerOpen;
            },
            set (bool) {
                this.$store.commit('set_navDrawerOpen', bool);
            }
        }
    }
}
</script>