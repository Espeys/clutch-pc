<template lang="html">
    <div class="navigation--list">
        <div class="navigation__content">
            <a
                class="navigation__item"
                href="#"
                @click.prevent="handleOpenDrawer('menu')"
            >
                <i class="icon-menu"></i>
                <span> Menu</span>
            </a>
            <a
                class="navigation__item"
                @click.prevent="handleOpenDrawer('search')"
            >
                <i class="icon-magnifier"></i>
                <span> Search</span>
            </a>

            <nuxt-link class="navigation__item" to="/shop">
                <i class="icon-bag"></i>
                <span> Shop</span>
            </nuxt-link>
            <a
                class="navigation__item"
                @click.prevent="handleOpenDrawer('cart')"
            >
                <i class="icon-cart"></i>
                <span> Cart</span>
            </a>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'NavigationList',
    computed: {
        ...mapState({
            appDrawer: state => state.app.appDrawer
        })
    },
    data() {
        return {
            drawer: true
        };
    },
    methods: {
        async loadCartProducts() {
            const cookieCart = this.$cookies.get('cart', { parseJSON: true });
            let queries = [];
            cookieCart.cartItems.forEach(item => {
                queries.push(item.id);
            });
            if (queries.length > 0) {
                await this.$store.dispatch('product/getCartProducts', queries);
            }
        },
        handleOpenDrawer(drawer) {
            if (drawer === 'cart') {
                this.loadCartProducts();
            }
            this.$store.commit('app/setCurrentDrawerContent', drawer);
            this.$store.commit('app/setAppDrawer', !this.appDrawer);
        }
    }
};
</script>

<style lang="scss" scoped></style>
