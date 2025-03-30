<template>
    <div class="post-page container">
        <site-preloader :show-preloader="isLoading" />
        <h1>{{ post.title }}</h1>

        <article class="post">
            <div class="post__image">
                <nuxt-img
                    :src="post.image"
                    alt="post image"
                    loading="lazy"
                />
            </div>

            <h3 class="post__subtitle">About</h3>
            <p class="post__description">{{ post.description }}</p>
        </article>
    </div>
</template>

<script setup lang="ts">
import { type Post } from '~/stores/posts';
import type { MetaObject } from 'nuxt/schema';

const post = reactive<Post>({
    id: '',
    createdAt: '',
    title: '',
    preview: '',
    image: '',
    description: ''
});
const isLoading = ref(false);
const route = useRoute();

const id = computed(() => route.params.id);

const head: MetaObject = {
    title: 'QTIM | Какой-то заголовок страницы поста',
    meta: [
        { name: 'description', content: 'Какое-то описание страницы поста' },
        { property: 'og:title', content: 'QTIM | Какой-то заголовок страницы поста' },
        { property: 'og:description', content: 'Какое-то описание страницы поста' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:image', content: 'https://loremflickr.com/cache/resized/defaultImage.small_640_480_nofilter.jpg' },
    ],
};

useHead(head);

const fetchPost = async (): Promise<void> => {
    isLoading.value = true;
    try {
        const { data } = await useApi<Post>(`/posts/${id.value}`);
        if (data.value) {
            Object.assign(post, data.value);
        }
    } catch (err: unknown) {
        console.error('Ошибка загрузки поста:', err);
    } finally {
        isLoading.value = false;
    }
};

await fetchPost();

</script>

<style lang="scss" scoped>
.post-page {
    padding-top: var(--page-top-offset);
    padding-bottom: 4rem;
}

.post {
    &__image {
        background: $c-light-grey;
        width: 100%;
        height: 35rem;
        margin-top: 3.65rem;

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__subtitle {
        margin-top: 6rem;
        font-size: 2.6rem;

        @include sm-up {
            margin-top: 4rem;
            font-size: .8rem;
        }
    }

    &__description {
        font-size: 3rem;
        line-height: 1.2;
        margin-top: 2.4rem;

        @include sm-up {
            margin-top: 1.6rem;
            width: 57.869%;
            font-size: 1.8rem;
        }
    }
}
</style>