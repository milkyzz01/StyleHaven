import { defineStore } from "pinia";

export const useLoaderStore = defineStore('loader', {
    state: () => ({
        isLoading: false as boolean
    }),

    actions: {
        toggleLoader(){
            this.isLoading = !this.isLoading
        }
    }
})