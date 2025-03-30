<template>
    <div class="default-layout">
        <site-header />
        <main class="default-main">
            <slot></slot>
        </main>
        <site-footer />
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.default-layout {
    min-height: 100vh;
}

.default-main {
    padding-top: var(--header-height);
}
</style>