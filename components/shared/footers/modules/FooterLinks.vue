<template lang="html">
    <div class="ps-footer__links">
        <p>
            <strong>Peripherals:</strong>
            <nuxt-link
                v-for="item in peripherals"
                :to="item.url"
                :key="item.text"
            >
                {{ item.text }}
            </nuxt-link>
        </p>
        <p>
            <strong>Components:</strong>
            <nuxt-link
                v-for="item in components"
                :to="item.url"
                :key="item.text"
            >
                {{ item.text }}
            </nuxt-link>
        </p>
        <p>
            <strong>Others:</strong>
            <nuxt-link v-for="item in others" :to="item.url" :key="item.text">
                {{ item.text }}
            </nuxt-link>
        </p>
    </div>
</template>

<script>
export default {
    name: 'FooterLinks',
    data() {
        return {
            peripherals: [
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
            ],
            components: [
                { text: 'Processors', url: '/shop' },
                { text: 'Motherboards', url: '/shop' },
                { text: 'Memory Modules', url: '/shop' },
                { text: 'Storage', url: '/shop' },
                { text: 'Graphics Card', url: '/shop' },
                { text: 'Casing', url: '/shop' },
                { text: 'Power Supply', url: '/shop' },
                { text: 'Monitors', url: '/shop' }
            ],
            others: [
                { text: 'Bundles', url: '/shop' },
                { text: 'Packages', url: '/shop' },
                { text: 'Laptops Modules', url: '/shop' }
            ]
        };
    }
};
</script>
