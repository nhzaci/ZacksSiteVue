<template>
    <v-app-bar
        app
        elevate-on-scroll
        style="background:#071a52;"
        class="px-lg-12 justify-lg-center"
        height="120px"
    >

        <v-toolbar-title
            class="white--text"
        >
            <span :class="titleClass">ZACK</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
            text
            link
            to="/"
            class="headline font-weight-light hidden-md-and-down white--text"
        >
            Home
        </v-btn>
        <v-btn
            text
            link
            to="/work"
            class="headline font-weight-light hidden-md-and-down white--text"
        >
            My Works
        </v-btn>
        <v-btn
            text
            link
            to="/contact"
            class="headline font-weight-light hidden-md-and-down white--text"
        >
            Contact
        </v-btn>

    </v-app-bar>
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
        },
        titleClass () {
            let retClass = 'font-weight-bold';
            if (this.$vuetify.breakpoint.mdAndUp) {
                retClass += ' display-3';
            } else {
                retClass += ' display-1';
            }
            return retClass;
        }
    }
}
</script>