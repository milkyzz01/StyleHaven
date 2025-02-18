<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";
import { useForm } from "~/composables/useForms";
import { useLoader } from "~/composables/useLoader";
import { computed } from "vue";

const authStore = useAuthStore();
const { toggleLoader } = useLoader();

const signupInputState = {
  email: '',
  password: '',
  age: null,
  address: '',
}
const errorMessage = ref<string | null>(null);

const { formState, reset } = useForm(signupInputState);


const handleSignup = async () => {
  toggleLoader(); // Start loader
  const success = await authStore.signUp(
    formState.value.email,
    formState.value.password,
    formState.value.age,
    formState.value.address
  );

  if (!success) {
    toggleLoader(); // Stop loader
    errorMessage.value = authStore.error || "Signup failed. Please try again.";
  } else {
    toggleLoader(); // Stop loader
    alert('Signup successful');
  }
  
  reset();
  
};

definePageMeta({
    layout: 'default'
});
</script>

<template>
   
    <div class="text-gray-900 lg:drop-shadow-md lg:border-0 flex justify-center dark:bg-background" 
      v-motion :initial="{ opacity: 0, y: 100 }" :visible="{ opacity: 1, y: 0, transition: { duration: 1000 } }">
      <div class="max-w-screen-xl m-0 sm:m-10 bg-white lg:shadow dark:bg-background sm:rounded-lg flex justify-center flex-1">
        <!-- Login Form -->
        <div class="lg:w-full xl:w-5/12 p-6 sm:p-12 flex-1 dark:bg-background" 
          v-motion :initial="{ opacity: 0, y: 100 }" :visible="{ opacity: 1, y: 0, transition: { duration: 2000 } }">
          <div class="mt-10 flex flex-col items-center">
            <h1 class="text-2xl xl:text-3xl font-extrabold dark:text-white">
              Sign Up
            </h1>
  
            <div class="w-full flex-1 mt-8">
              <div class="mx-auto grid grid-cols-2 gap-5">
                <input v-model="formState.email"
                  class="w-full col-span-2 px-8 py-4 rounded-lg bg-gray-100 border border-gray-200 mt-1 placeholder-gray-500"
                  type="email" placeholder="Email" />
                
                <input v-model="formState.password"
                  class="w-full px-8 py-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 mt-1"
                  type="password" placeholder="Password" />
                
                <input v-model="formState.age"
                  class="w-full px-8 py-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 mt-1"
                  type="number" placeholder="Age" />
                
                <input v-model="formState.address"
                  class="w-full col-span-2 px-8 py-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 mt-1"
                  type="text" placeholder="Address" />
                
                <div class="col-span-2">
                  <button @click="handleSignup"
                    class="mt-5 h-100 dark:bg-indigo-500 dark:text-white tracking-wide font-semibold bg-black text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all">
                    Sign Up
                  </button>
  
                  <p v-if="errorMessage" class="mt-3 text-red-500 text-center">{{ errorMessage }}</p>
  
                  <p class="mt-6 text-xs text-gray-600 text-center dark:text-white">
                    I agree to abide by
                    <a href="#" class="border-b border-gray-500 border-dotted">Terms of Service</a>
                    and
                    <a href="#" class="border-b border-gray-500 border-dotted">Privacy Policy</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Image -->
        <div class="bg-indigo-100 text-center hidden lg:flex lg:w-1/2 xl:w-5/12"
          v-motion :initial="{ opacity: 0, y: -100 }" :visible="{ opacity: 1, y: 0, transition: { duration: 2000 } }">
          <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
               style="background-image: url('/login-image.png');">
          </div>
        </div>
      </div>
    </div>
  </template>

