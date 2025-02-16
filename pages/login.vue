<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";
import { useForm } from "~/composables/useForms";

const loginAuth = useAuthStore();

const initialFormState = {
    email: '',
    password: ''
}
// destructure use form composable
const { formState, reset } = useForm(initialFormState);

const login = async () => {
    const success = await loginAuth.login(formState.value.email, formState.value.password);
    if(!success) {
        alert(`Login Failed: ${loginAuth.error}`);
        reset();
    } else {
        alert("Login Success");
        reset();
    }
}

definePageMeta({
    layout: 'default'
})
</script>

<template>
<div class="text-gray-900 lg:drop-shadow-md lg:border-0 flex justify-center" 
v-motion :initial="{ opacity: 0, y: 100 }" :visible="{ opacity: 1, y: 0, transition: { duration: 1000 } }">
    <div class="max-w-screen-xl m-0 sm:m-10 bg-white lg:shadow dark:bg-background sm:rounded-lg flex justify-center flex-1">
        <div class="flex-1 bg-indigo-100 text-center hidden md:flex">
            <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                 style="background-image: url('/login-image.png');"
                 v-motion :initial="{ opacity: 0, x: 100 }" :visible="{ opacity: 1, x: 0, transition: { duration: 2000 } }">
            </div>
        </div>
        <!-- login form  -->
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 dark:bg-background"
        v-motion :initial="{ opacity: 0, x:-100 }" :visible="{ opacity: 1, x: 0, transition: { duration: 2000 } }">
            <div class="mt-10 flex flex-col items-center">
                <h1 class="text-2xl xl:text-3xl font-extrabold dark:text-white">
                    Sign In
                </h1>
                <div class="w-full flex-1 mt-8">
                    <div class="mx-auto max-w-xs">
                        <input
                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="email" v-model="formState.email" placeholder="Email" />
                        <input
                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="password" v-model="formState.password" placeholder="Password" />
                        <Button @click="login"
                            class="mt-5 tracking-wide h-100 dark:text-white dark:bg-indigo-700 dark:hover:bg-green-500 font-semibold bg-black text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span class="ml-3">
                                Sign In
                            </span>
                        </Button>
                        <p class="mt-6 text-xs text-gray-600 text-center">
                            I agree to abide by templatana's
                            <a href="#" class="border-b border-gray-500 border-dotted">
                                Terms of Service
                            </a>
                            and its
                            <a href="#" class="border-b border-gray-500 border-dotted">
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

