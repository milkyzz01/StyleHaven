import { defineStore } from 'pinia';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as User | null,
        loading: false,
        error: null as string | null,
    }),

    actions: {
        async signUp(email: string, password: string) {
            this.loading = true;
            this.error = null;
            try {
                const auth = getAuth();
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                this.user = userCredential.user;
            } catch (error: any) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        },

        async login(email: string, password: string) {
            this.loading = true;
            this.error = null;
            try {
                const auth = getAuth();
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                this.user = userCredential.user;
            } catch (error: any) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        },

        async logout() {
            this.loading = true;
            try {
                const auth = getAuth();
                await signOut(auth);
                this.user = null;
            } catch (error: any) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        },

        async initAuth() {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                this.user = user;
            });
        }
    },
});
