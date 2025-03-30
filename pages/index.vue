<template>
    <div class="index-page container">
        <site-preloader :show-preloader="isLoading" />
        <h1>Articles</h1>
        <post-list class="posts" :posts="currentPostsChunk" />
        <post-pagination class="pagination" />
    </div>
</template>

<script setup lang="ts">
import { usePostStore } from '~/stores/posts';
import { type Post } from '~/stores/posts';
import type { MetaObject } from 'nuxt/schema';
import PostList from '~/components/posts/PostList.vue';
import PostPagination from '~/components/posts/PostPagination.vue';
import SitePreloader from '~/components/SitePreloader.vue';

const postStore = usePostStore();
const isLoading = ref(false);
const currentPostsChunk = computed(() => postStore.chunkPosts[postStore.$state.page - 1]);

const head: MetaObject = {
    title: 'QTIM | Какой-то заголовок главной страницы',
    meta: [
        { name: 'description', content: 'Какое-то описание главной страницы' },
        { property: 'og:title', content: 'QTIM | Какой-то заголовок главной страницы' },
        { property: 'og:description', content: 'Какое-то описание главной страницы' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:image', content: 'https://loremflickr.com/cache/resized/defaultImage.small_640_480_nofilter.jpg' },
    ],
};

useHead(head);

const fetchPosts = async (): Promise<void> => {
    isLoading.value = true;
    try {
        const { data } = await useApi<Post[]>('/posts');
        if (data.value) {
            postStore.setArticles(data.value);
        }
    } catch (err: unknown) {
        console.error('Ошибка', err);
    } finally {
        isLoading.value = false;
    }
};

await fetchPosts();

</script>

<style lang="scss" scoped>
.index-page {
    padding-top: var(--page-top-offset);
    padding-bottom: 7rem;
}

.posts {
    margin-top: 3rem;
}

.pagination {
    margin-top: 2.5rem;
}
</style>