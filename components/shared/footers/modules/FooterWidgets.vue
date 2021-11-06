<template lang="html">
    <div class="ps-footer__widgets">
        <aside class="widget widget_footer widget_contact-us">
            <h4 class="widget-title">
                {{ $t('footer.widgetHeading.contactUs') }}
            </h4>
            <div class="widget_content">
                <p>Call us 24/7</p>
                <h3>+63 (9112) 2334 445</h3>
                <p>
                    A. Pablo Street, Malinta, Valenzuela City<br />
                    <a href="mailto:contact@clutchph.com"
                        >contact@clutchph.com</a
                    >
                </p>
                <ul class="ps-list--social">
                    <li>
                        <a class="facebook" href="#">
                            <i class="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a class="twitter" href="#">
                            <i class="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a class="google-plus" href="#">
                            <i class="fa fa-google-plus"></i>
                        </a>
                    </li>
                    <li>
                        <a class="instagram" href="#">
                            <i class="fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                {{ $t('footer.widgetHeading.quickLink') }}
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="#">Policy</a>
                </li>
                <li>
                    <a href="#">Term & Condition</a>
                </li>
                <li>
                    <a href="#">Shipping</a>
                </li>
                <li>
                    <a href="#">Return</a>
                </li>
                <li>
                    <a href="contact-us.html">Contact</a>
                </li>
                <li>
                    <a href="/page/faqs">FAQs</a>
                </li>
            </ul>
        </aside>

        <aside class="widget widget_footer">
            <h4 class="widget-title">
                {{ $t('footer.widgetHeading.bussiness') }}
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="/account/checkout">Checkout</a>
                </li>
                <li>
                    <a href="/shop">Shop</a>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
export default {
    name: 'FooterWidgets'
};
</script>

<style lang="scss" scoped></style>
