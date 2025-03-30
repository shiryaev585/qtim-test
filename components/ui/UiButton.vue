<template>
    <button class="ui-btn">
        <span><slot></slot></span>
    </button>
</template>

<style lang="scss" scoped>
.ui-btn {
    background: $c-dark;
    color: $c-white;
    height: var(--btn-height);
    padding-right: 32px;
    padding-left: 32px;
    border-radius: 999px;
    cursor: pointer;
    white-space: nowrap;
    transition: background .3s $easeOut;

    @include hover {
        background: rgba(16, 16, 16, .8);
    }
}
</style>