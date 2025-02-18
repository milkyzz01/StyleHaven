import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { useNuxtApp } from "#app";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null as User | null,
        loading: false as boolean,
        error: null as string | null,
    }),

    actions: {
        async signUp(email: string, password: string, age: number, address: string) {
            this.loading = true;
            this.error = null;
            try {
                const { $auth, $db } = useNuxtApp();

                // Create user in Firebase Auth
                const userCredential = await createUserWithEmailAndPassword($auth, email, password);
                this.user = userCredential.user;

                // Store additional user info in Firestore
                await setDoc(doc($db, "users", this.user.uid), {
                    email,
                    age,
                    address,
                    createdAt: new Date(),
                });

                return true;
            } catch (error: any) {
                this.error = error.message;
                return false;
            } finally {
                this.loading = false;
            }
        },

        async login(email: string, password: string) {
            this.loading = true;
            this.error = null;
            try {
                const { $auth } = useNuxtApp();
                const userCredential = await signInWithEmailAndPassword($auth, email, password);
                this.user = userCredential.user;
                return true;
            } catch (error: any) {
                this.error = error.message;
                return false;
            } finally {
                this.loading = false;
            }
        },

        async logout() {
            this.loading = true;
            try {
                const { $auth } = useNuxtApp();
                await signOut($auth);
                this.user = null;
            } catch (error: any) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        },

        async initAuth() {
            const { $auth } = useNuxtApp();
            onAuthStateChanged($auth, (user) => {
                this.user = user;
            });
        }
    },
});
