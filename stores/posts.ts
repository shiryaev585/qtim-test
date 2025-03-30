import { defineStore } from 'pinia';

export interface Post {
    id: number | string;
    createdAt: string;
    title: string;
    preview: string;
    image: string;
    description: string;
}

interface PostState {
    posts: Post[];
    page: number;
    limit: number;
}

export const usePostStore = defineStore('posts', {
    state: () => ({
        posts: [] as Post[],
        page: 1,
        limit: 8
    }),

    getters: {
        totalPages(state): number {
            return Math.floor(state.posts?.length / state.limit) + 1;
        },

        chunkPosts(state): Post[][] {
            const result = [];

            for (let i = 0; i < state.posts.length; i += state.limit) {
                const chunk = state.posts.slice(i, i + state.limit);
                result.push(chunk);
            }

            return result;
        }
    },

    actions: {
        setArticles(this: PostState, payload: Post[]): void {
            this.posts = payload;
        },

        setPage(this: PostState, payload: number) {
            this.page = payload;
        }
    }
});