import { useLoaderStore } from "~/stores/loader";
export function useLoader(){
    const loaderStore = useLoaderStore();

    return {
        loading: computed(() => loaderStore.isLoading),
        toggleLoader: loaderStore.toggleLoader,
    }
}
