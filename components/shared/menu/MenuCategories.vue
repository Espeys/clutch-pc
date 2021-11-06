<template lang="html">
    <ul class="menu--dropdown">
        <template v-for="item in menuCategories">
            <menu-dropdown v-if="item.subMenu" :menu-data="item" />
            <menu-mega v-else-if="item.mega" :menu-data="item" />
            <li v-else :key="item.text">
                <nuxt-link :to="localePath(item.url)">
                    {{ item.text }}
                </nuxt-link>
            </li>
        </template>
    </ul>
</template>

<script>
import MenuDefault from '~/components/shared/menu/MenuDefault';
import MenuDropdown from '~/components/shared/menu/MenuDropdown';
import MenuMega from '~/components/shared/menu/MenuMega';
export default {
    name: 'MenuCategories',
    components: { MenuMega, MenuDropdown, MenuDefault },
    data() {
        return {
            menuCategories: [
                {
                    text: 'Manila',
                    url: '/shop',
                    extraClass: 'menu-item-has-children has-mega-menu',
                    subClass: 'sub-menu',
                    mega: true,
                    megaContent: [
                        {
                            heading: 'Branches',
                            megaItems: [
                                {
                                    text: 'SM Manila',
                                    url: '/shop'
                                },
                                {
                                    text: 'SM San Lazaro',
                                    url: '/shop'
                                },
                                {
                                    text: 'Tutuban Center',
                                    url: '/shop'
                                },
                                {
                                    text: 'Robinson Manila',
                                    url: '/shop'
                                }
                            ]
                        }
                    ]
                },
                {
                    text: 'Valenzuela',
                    url: '/shop',
                    extraClass: 'menu-item-has-children has-mega-menu',
                    subClass: 'sub-menu',
                    mega: true,
                    megaContent: [
                        {
                            heading: 'Branches',
                            megaItems: [
                                {
                                    text: 'Malinta',
                                    url: '/shop'
                                },
                                {
                                    text: 'SM Valenzuela',
                                    url: '/shop'
                                },
                                {
                                    text: 'Marulas',
                                    url: '/shop'
                                },
                                {
                                    text: 'Paso de Blas',
                                    url: '/shop'
                                },
                                {
                                    text: 'Arkong Bato',
                                    url: '/shop'
                                },
                                {
                                    text: 'Malanday',
                                    url: '/shop'
                                }
                            ]
                        }
                    ]
                },
                {
                    text: 'Quezon City',
                    url: '/shop',
                    extraClass: 'menu-item-has-children has-mega-menu',
                    subClass: 'sub-menu',
                    mega: true,
                    megaContent: [
                        {
                            heading: 'Branches',
                            megaItems: [
                                {
                                    text: 'Trinoma',
                                    url: '/shop'
                                },
                                {
                                    text: 'SM North Edsa',
                                    url: '/shop'
                                },
                                {
                                    text: 'Munoz',
                                    url: '/shop'
                                },
                                {
                                    text: 'Cubao Gateway',
                                    url: '/shop'
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
