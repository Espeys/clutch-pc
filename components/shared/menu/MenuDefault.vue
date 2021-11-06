<template lang="html">
    <ul :class="className">
        <template v-for="item in mainMenu">
            <MenuDropdown v-if="item.subMenu" :menu-data="item" />
            <MenuMega v-else-if="item.mega" :menu-data="item" />
            <li v-else :key="item.text">
                <nuxt-link :to="localePath(item.url)">
                    {{ item.text }}
                </nuxt-link>
            </li>
        </template>
    </ul>
</template>

<script>
import MenuDropdown from './MenuDropdown';
import MenuMega from './MenuMega';
export default {
    name: 'MenuDefault',
    components: { MenuMega, MenuDropdown },
    props: {
        className: {
            type: String,
            default: 'menu'
        }
    },
    data() {
        return {
            mainMenu: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Shop Now',
                    url: '/shop',
                    extraClass: 'menu-item-has-children has-mega-menu',
                    subClass: 'sub-menu',
                    mega: 'true',
                    megaContent: [
                        {
                            heading: 'Peripherals',
                            megaItems: [
                                { text: 'Accessories', url: '/shop' },
                                { text: 'AVR/UPS', url: '/shop' },
                                { text: 'Audio Devices', url: '/shop' },
                                { text: 'Cables/Adapters', url: '/shop' },
                                { text: 'Cooling Devices', url: '/shop' },
                                { text: 'External Storage', url: '/shop' },
                                { text: 'Gaming Chairs', url: '/shop' },
                                { text: 'Keyboard and Mouse', url: '/shop' },
                                { text: 'Network Devices', url: '/shop' },
                                { text: 'Optical Drives', url: '/shop' },
                                { text: 'Printers/Inks', url: '/shop' }
                            ]
                        },
                        {
                            heading: 'Components',
                            megaItems: [
                                { text: 'Processors', url: '/shop' },
                                { text: 'Motherboards', url: '/shop' },
                                { text: 'Memory Modules', url: '/shop' },
                                { text: 'Storage', url: '/shop' },
                                { text: 'Graphics Card', url: '/shop' },
                                { text: 'Casing', url: '/shop' },
                                { text: 'Power Supply', url: '/shop' },
                                { text: 'Monitors', url: '/shop' }
                            ]
                        },
                        {
                            heading: 'Others',
                            megaItems: [
                                { text: 'Bundles', url: '/shop' },
                                { text: 'Packages', url: '/shop' },
                                { text: 'Laptops', url: '/shop' }
                            ]
                        }
                    ]
                },
                {
                    text: 'FAQs',
                    url: '/page/faqs'
                },
                {
                    text: 'Track your Order',
                    url: '/account/order-tracking'
                },
                {
                    text: 'Contact',
                    url: '/page/contact-us'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
