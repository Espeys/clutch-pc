<template lang="html">
    <client-only>
        <v-app>
            <v-system-bar
                absolute
                color="orange lighten-2"
                class="pa-4"
                height="48"
                app
            >
                <div class="d-block text-center ma-4" style="font-size: 1.6rem">
                    <span>📢</span>
                    Project of
                    <span class="font-weight-bold"
                        >Elizah Laine Kayla C. Alquizar</span
                    >
                </div>
            </v-system-bar>
            <v-main>
                <header-default />
                <header-mobile />
                <nuxt />
                <footer-fullwidth />
                <navigation-list />
                <mobile-drawer />
                <notify />
            </v-main>
        </v-app>
    </client-only>
</template>

<script>
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';
import NavigationList from '~/components/shared/mobile/NavigationList';
import MobileDrawer from '~/components/shared/mobile/MobileDrawer';
import FooterFullwidth from '~/components/shared/footers/FooterFullwidth';
import Notify from '~/components/elements/commons/notify';
export default {
    name: 'layout-default',
    components: {
        FooterFullwidth,
        MobileDrawer,
        NavigationList,
        HeaderMobile,
        HeaderDefault,
        Notify
    }
};
</script>

<style lang="scss" scoped></style>
