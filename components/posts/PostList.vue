<template>
    <article class="post-list">
        <post-item
            v-for="post in posts"
            :key="post.id"
            :post="post"
        />
    </article>
</template>

<script setup lang="ts">
import { type Post } from '~/stores/posts';
import PostItem from '~/components/posts/PostItem.vue';

defineProps<{
    posts: Post[];
}>();
</script>

<style lang="scss" scoped>
.post-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 6rem;

    @include xs-up {
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
    }

    @include sm-up {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1.6rem;
    }
}
</style>