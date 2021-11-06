<template lang="html">
    <div class="ps-product__specification">
        <nuxt-link to="/page/blank">
            <a class="report">Report Abuse</a>
        </nuxt-link>
        <p><strong>SKU:</strong> SF1133569600-1</p>
        <p class="categories">
            <strong> Categories:</strong>
            <nuxt-link to="/shop">
                <a>Peripherals</a>
            </nuxt-link>
            <nuxt-link to="/shop">
                <a>Gadgets</a>
            </nuxt-link>
        </p>
        <p class="tags">
            <strong> Tags</strong>
            <nuxt-link to="/shop">
                <a>gadgets</a>
            </nuxt-link>
            <nuxt-link to="/shop">
                <a>sale</a>
            </nuxt-link>
        </p>
    </div>
</template>

<script>
export default {
    name: 'ModuleProductDetailSpecification'
};
</script>

<style lang="scss" scoped></style>
