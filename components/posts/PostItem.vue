<template>
    <div class="post">
        <div class="post__content">
            <div class="post__img">
                <nuxt-img
                    class="post__img"
                    :src="post.image"
                    :alt="`${post.title} image`"
                    loading="lazy"
                />
            </div>
            <span class="post__preview">{{ post.preview }}</span>
        </div>

        <nuxt-link class="post__link" :to="`/posts/${post.id}`">Read more</nuxt-link>
    </div>
</template>

<script setup lang="ts">
import { type Post } from '~/stores/posts';

defineProps<{
    post: Post;
}>();
</script>

<style lang="scss" scoped>
.post {
    position: relative;

    @include sm-up {
        &:hover {
            & .post__content {
                transform: translateY(-1.8rem);
            }
        }
    }

    &__content {
        background: $c-white;
        position: relative;
        z-index: 1;
        transition: transform .3s $easeOut;
    }

    &__img {
        background: $c-light-grey;
        aspect-ratio: 1/1;

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__preview {
        display: inline-block;
        margin-top: 2.4rem;

        @include sm-up {
            margin-top: 1.2rem;
        }
    }

    &__link {
        display: inline-block;
        margin-top: 2.4rem;
        color: $c-light-purple;

        @include sm-up {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-top: 0;
        }
    }
}
</style>