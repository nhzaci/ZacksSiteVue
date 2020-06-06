<template>
    <v-app-bar
        app
        elevate-on-scroll
        style="background:#071a52;"
        class="px-lg-12 justify-lg-center"
        height="120px"
    >

        <v-spacer class="hidden-md-and-up"></v-spacer>

        <v-toolbar-title
            class="white--text"
        >
            <span :class="titleClass">ZACK</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu 
            transition="scale-transition"
            bottom
            offset-y
        >
            <template v-slot:activator="{ on }">
                <v-btn
                    text
                    link
                    to="/"
                    v-on="on"
                    class="headline font-weight-light hidden-md-and-down white--text"
                >
                    Home
                    <v-icon class="ms-2">mdi-chevron-down</v-icon>
                </v-btn>
            </template>

            <v-list 
                justify="center"
            >
                <v-list-item
                    v-for="link in homeLinks"
                    :key="link.id"
                    link
                    @click="$vuetify.goTo(link.id, options)"
                >
                    <v-list-item-title
                        class="text-center"
                        style="color:#071a52" 
                    >
                        {{ link.title }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-menu 
            transition="scale-transition"
            bottom
            offset-y
        >
            <template v-slot:activator="{ on }">
                <v-btn
                    text
                    link
                    to="/work"
                    v-on="on"
                    class="headline font-weight-light hidden-md-and-down white--text"
                >
                    My Works
                    <v-icon class="ms-2">mdi-chevron-down</v-icon>
                </v-btn>
            </template>

            <v-list 
                justify="center"
            >
                <v-list-item
                    v-for="link in workLinks"
                    :key="link.id"
                    link
                    @click="$vuetify.goTo(link.id, options)"
                >
                    <v-list-item-title
                        class="text-center"
                        style="color:#071a52" 
                    >
                        {{ link.title }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
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
    data: () => ({
        homeLinks: [
            { title: 'My Skills', id: '#skills' },
            { title: 'My Education', id: '#education'},
            { title: 'My Accolades', id: '#accolades'}
        ],
        workLinks: [
            { title: 'My Projects', id: '#projects' },
            { title: 'Work Experience', id: '#experience'}
        ],
        number: 999
    }),
    computed: {
        options() {
            return {
                duration: 300,
                easing: 'easeInOutCubic'
            }
        },
        target() {
            const value = this['number']
            if (!isNaN(value)) return Number(value)
            else return 0
        },
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