import { type UseFetchOptions } from 'nuxt/app';

export const useApi = <T>(endpoint: string, opts?: UseFetchOptions<T>) => {
    const config = useRuntimeConfig();

    return useFetch(endpoint, {
        baseURL: config.public.apiUrl,
        ...opts
    });
};