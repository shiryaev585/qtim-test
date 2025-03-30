<template>
    <ul class="pagination">
        <li v-for="item in pages" :key="item">
            <button
                :class="['pagination__btn', { 'pagination__btn-active': activePage === item }]"
                @click="setActivePage(item)"
            >
                {{ item }}
            </button>
        </li>
        <li>
            <button
                :class="['pagination__btn pagination__btn-chevron', { 'pagination__btn-disabled': activePage === totalPages }]"
                @click="setActivePage(activePage + 1)"
            >
                <icon name="site-icon:chevron" />
            </button>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { usePostStore } from '~/stores/posts';
const { scrollToTop } = useScroll();

const postStore = usePostStore();
const totalPages = computed((): number => postStore.totalPages);
const activePage = computed((): number => postStore.$state.page);
const pages = computed((): number[] => Array.from({ length: totalPages.value }, (_, idx) => idx + 1));

const setActivePage = (page: number): void => {
    postStore.setPage(page);
    scrollToTop();
};
</script>

<style lang="scss" scoped>
.pagination {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    &__btn {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        font-size: 16px;
        background: $c-light-grey;
        cursor: pointer;
        transition: opacity .3s $easeOut;
        @include centered(center);

        @include hover {
            opacity: .6;
        }

        &-active {
            background: $c-dark;
            color: $c-white;
            pointer-events: none;
        }

        &-chevron {
            background: $c-white;
            border: 1px solid $c-light-grey;
        }

        &-disabled {
            pointer-events: none;
            opacity: .6;
        }
    }
}
</style>