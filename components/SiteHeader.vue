<template>
    <header class="header">
        <div class="header-container">
            <nuxt-link to="/">
                <icon name="site-icon:logo" />
            </nuxt-link>
            
            <div class="header__actions">
                <nav class="header__nav">
                    <nuxt-link class="header__nav-link" to="/works">Works</nuxt-link>
                    <nuxt-link class="header__nav-link" to="/about">About</nuxt-link>
                </nav>

                <div class="header__btns">
                    <button class="header__lang-btn">
                        <icon name="site-icon:eng" />
                    </button>

                    <ui-button>Let’s work</ui-button>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: $c-white;
    z-index: 2;

    & .header-container {
        height: var(--header-height);
        padding: 0 2rem;
        @include centered(space-between);
    }

    &__actions {
        gap: 4.55rem;
        @include centered(space-between);
    }

    &__nav {
        gap: 2.9rem;
        @include centered(space-between);
    }

    &__nav-link {
        &.router-link-active {
            pointer-events: none;
            opacity: .6;
        }
    }

    &__btns {
        display: flex;
        gap: .8rem;
    }

    &__lang-btn {
        width: var(--btn-height);
        height: var(--btn-height);
        cursor: pointer;
        transition: opacity .3s $easeOut;

        @include hover {
            opacity: .6;
        }

        & span {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
}
</style>