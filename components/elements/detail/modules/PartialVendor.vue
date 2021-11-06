<template lang="html">
    <section>
        <h4>{{ product.vendor }}</h4>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            ante dictum, mattis ex non, pretium diam. Nulla non feugiat nibh.
            Maecenas lacinia tincidunt nunc at tincidunt. Sed accumsan
            vestibulum ipsum, sit amet tempor nisl laoreet et.
        </p>
        <a href="#">More Products from {{ product.vendor }}</a>
    </section>
</template>

<script>
export default {
    name: 'PartialVendor',
    props: {
        product: {
            type: Object,
            default: () => ({})
        }
    }
};
</script>

<style lang="scss" scoped></style>
