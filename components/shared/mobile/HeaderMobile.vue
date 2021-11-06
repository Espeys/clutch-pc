<template lang="html">
    <header class="header header--mobile">
        <div class="header__top">
            <div class="header__left">
                <p>Welcome to ClutchPC !</p>
            </div>
            <div class="header__right"></div>
        </div>
        <div class="navigation--mobile">
            <div class="navigation__left">
                <nuxt-link to="/" class="ps-logo">
                    <img src="~/static/img/logo-clutch.png" alt="clutchPH" />
                </nuxt-link>
            </div>
            <mobile-header-actions />
        </div>
    </header>
</template>

<script>
import MobileHeaderActions from '~/components/shared/mobile/modules/MobileHeaderActions';
export default {
    name: 'HeaderMobile',
    components: { MobileHeaderActions }
};
</script>

<style lang="scss" scoped></style>
