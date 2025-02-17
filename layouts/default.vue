<script lang="ts" setup>
import { useDark } from "~/composables/useDark"
const option = [
  { name: 'Home', link: '/' },
  { name: 'Login', link: 'login' },
  { name: 'Signup', link: 'signup' },
];

const { isDark } = useDark()

</script>

<template>
  <div>
    <Header :options="option" :dropDownTrigger="false" />
    <main>
      <Loader v-if="isDark" />
      <slot />
    </main>
  </div>
</template>
