<template lang="html">
    <div id="shop-widgets">
        <aside class="widget widget_shop">
            <h4 class="widget-title">
                {{ $t('shop.widget.byBrands') }}
            </h4>
            <figure>
                <v-checkbox
                    v-for="brand in brands"
                    :value="brand.slug"
                    :label="brand.name"
                    :key="brand.id"
                />
            </figure>
            <figure>
                <h4 class="widget-title">
                    By Price
                </h4>
                <v-range-slider
                    v-model="priceRange"
                    color="warning"
                    min="0"
                    max="1500"
                    track-color="#dddddd"
                />
                <p>Price: Php{{ priceRange[0] }} - Php{{ priceRange[1] }}</p>
            </figure>
        </aside>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { getColletionBySlug } from '~/utilities/product-helper';
import { serializeQuery } from '~/repositories/Repository';

export default {
    name: 'ShopWidget',
    computed: {
        ...mapState({
            categories: state => state.product.categories,
            products: state => state.product.products
        }),
        categorySlug() {
            return this.$route;
        }
    },
    data() {
        return {
            priceRange: [100, 1000],
            brands: [
                {
                    id: 1,
                    name: 'Apple',
                    slug: 'a'
                },
                {
                    id: 2,
                    name: 'Asus',
                    slug: 'b'
                },
                {
                    id: 3,
                    name: 'Razer',
                    slug: 'c'
                },
                {
                    id: 4,
                    name: 'A4Tech',
                    slug: 'd'
                }
            ]
        };
    },
    methods: {
        async handleGotoCategory(slug) {
            if (slug) {
                const url = `/shop?category=${slug}`;
                const products = getColletionBySlug(this.categories, slug);
                this.$store.commit('product/setProducts', products);
                this.$store.commit('product/setProducts', products);
                this.$store.commit('product/setTotal', products.length);
                this.$store.commit('collection/setQueries', [slug]);
                this.$router.push(url);
            } else {
                const params = {
                    _start: 1,
                    _limit: 12
                };
                await this.$store.commit('collection/setQueries', null);
                await this.$store.dispatch('product/getTotalRecords', params);
                await this.$store.dispatch('product/getProducts', params);
            }
        },

        async handleFilterByBrand() {
            if (this.selectedBrands) {
                await this.$store.commit(
                    'collection/setQueries',
                    this.selectedBrands
                );

                await this.$store.dispatch(
                    'product/getProductsByBrands',
                    this.selectedBrands
                );
            } else {
                const params = {
                    _start: 1,
                    _limit: 12
                };
                await this.$store.commit('collection/setQueries', null);
                await this.$store.dispatch('product/getTotalRecords', params);
                await this.$store.dispatch('product/getProducts', params);
            }
        },

        async handleFilterByPriceRagne() {
            const params = {
                price_gt: this.priceRange[0],
                price_lt: this.priceRange[1],
                _start: 1,
                _limit: 999
            };
            console.log(this.priceRange);
            await this.$store.dispatch(
                'product/getProductsByPriceRange',
                params
            );
            await this.$router.push(`/search?${serializeQuery(params)}`);
        }
    }
};
</script>

<style lang="scss" scoped></style>
