<template>
    <footer class="footer container">
        <span class="footer__project">Is there a project?</span>

        <div class="footer__top">
            <h2 class="footer__subtitle">Let’s work together</h2>
            <ul class="footer__contacts">
                <li class="footer__contact">
                    <h3>For all questions</h3>
                    <a href="tel:+79202780068" itemprop="telephone" aria-label="phone call" class="footer__contact-link">+7 (920) 278—00—68</a>
                    <a href="mailto:qtim@agency.com" itemprop="email" aria-label="email" class="footer__contact-link">qtim@agency.com</a>
                </li>

                <li class="footer__contact">
                    <h3>Office in Russia</h3>
                    <span class="footer__contact-address">139 Ruben Station Lake Drew, NM 52678</span>
                    <a
                        href="https://yandex.ru/maps/213/moscow/?ll=37.625554%2C55.749004&mode=routes&rtext=~55.755294%2C37.617796&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D86735430340&z=14.6"
                        target="_blank"
                        class="footer__contact-address-link"
                    >
                        <icon name="site-icon:location" />
                    </a>
                </li>

                <li class="footer__contact">
                    <h3>Office in Dubai</h3>
                    <span class="footer__contact-address">139 Ruben Station Lake Drew, NM 52678</span>
                    <a
                        href="https://yandex.ru/maps/11499/dubai/?ll=55.301470%2C25.204111&mode=routes&rtext=~25.197301%2C55.274242&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D95988573187&z=14.06"
                        target="_blank"
                        class="footer__contact-address-link"
                    >
                        <icon name="site-icon:location" />
                    </a>
                </li>
            </ul>
        </div>

        <div class="footer__bottom">
            <ul class="footer__socials">
                <li class="footer__social">
                    <a href="https://www.facebook.com/" class="footer__social-link" target="_blank">Facebook</a>
                </li>

                <li class="footer__social">
                    <a href="https://www.instagram.com/" class="footer__social-link" target="_blank">Instagram</a>
                </li>

                <li class="footer__social">
                    <a href="https://t.me/qtim_pro" class="footer__social-link" target="_blank">Telegram</a>
                </li>
            </ul>

            <ul class="footer__socials">
                <li class="footer__social">
                    <a href="https://www.behance.net/" class="footer__social-link" target="_blank">Behance</a>
                </li>

                <li class="footer__social">
                    <a href="https://ru.linkedin.com/" class="footer__social-link" target="_blank">Linkedn</a>
                </li>

                <li class="footer__social">
                    <nuxt-link to="/privacy" class="footer__social-link">Privacy Policy</nuxt-link>
                </li>
            </ul>

            <nuxt-link to="/" class="footer__bottom-link">Go</nuxt-link>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
    background: $c-light-purple;
    padding-top: 7rem;

    &__project {
        font-size: 4rem;

        @include sm-up {
            font-size: 0.8rem;
        }
    }

    &__top {
        margin-top: 2.8rem;

        @include sm-up {
            display: flex;
            justify-content: space-between;
            gap: 18.4125rem;
        }
    }

    &__subtitle {
        flex: 1.5;
        font-size: 12rem;
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 0.75rem;

        @include sm-up {
            font-size: 5.6rem;
        }
    }

    &__contacts {
        margin-top: 5rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 5rem;

        @include sm-up {
            margin-top: 0;
            gap: 1.8rem;
        }
    }

    &__contact {
        display: flex;
        flex-direction: column;
        font-size: 2.6rem;

        @include sm-up {
            width: 7.6rem;
            font-size: .8rem;
        }

        & h3 {
            margin-bottom: 12px;
        }
    }

    &__contact-link {
        &:not(.footer__contact-link:first-of-type) {
            margin-top: 4px;
        }
    }

    &__contact-address-link {
        width: 8rem;
        height: 8rem;
        margin-top: 8px;

        @include sm-up {
            width: 1.6rem;
            height: 1.6rem;
        }

        & span {
            display: block;
            width: 100%;
            height: 100%;
        }
    }

    &__bottom {
        position: relative;
        padding-top: 5rem;
        flex-direction: column;
        @include centered(space-between);

        @include sm-up {
            flex-direction: row;
            padding-top: 13.65rem;
        }
    }

    &__bottom-link {
        text-align: center;
        padding-top: 6.1rem;
        width: 17.9rem;
        height: 2.8525rem;
        border-radius: 999px 999px 0 0;
        background: $c-dark;
        border: none;
        color: $c-white;
        font-size: 1.8rem;
        cursor: pointer;

        @include sm-up {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    &__socials {
        margin-bottom: 1.5rem;
        gap: 1.6rem;
        width: 100%;
        display: flex;
        flex-direction: column;

        @include sm-up {
            width: auto;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }

    &__social-link {
        font-size: 2.6rem;
        line-height: 1.2;
        border-bottom: 1px solid $c-dark;

        @include sm-up {
            font-size: .8rem;
        }
    }
}
</style>