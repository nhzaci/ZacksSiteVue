<template>
    <v-overlay
        :value="navDrawerOpen"
        opacity=".6"
    >
        <v-row class="justify-center py-2">
            <v-btn
                link
                to="/"
                text
                x-large
                class="headline"
            >
                Home
            </v-btn>
        </v-row>
        <v-row class="justify-center py-2">
            <v-btn
                link
                to="/work"
                text
                class="headline"
                x-large
            >
                My Works
            </v-btn>

        </v-row>
        <v-row class="justify-center py-2">
            <v-btn
                link
                to="/contact"
                text
                class="headline"
                x-large
            >
                Contact Me
            </v-btn>
        </v-row>
        <v-row class="justify-center py-2">
            <v-btn
                @click="navDrawerOpen=!navDrawerOpen"
                icon
                x-large
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-row>
    </v-overlay>
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