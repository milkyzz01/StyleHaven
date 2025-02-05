<script lang="ts" setup>
const option = [
  { name: 'Home', link: '/' },
  { name: 'Login', link: 'login' },
  { name: 'Signup', link: 'signup' },
];
</script>

<template>
  <div>
    <Header :options="option" :dropDownTrigger="false" />
    <main>
      <slot />
    </main>
  </div>
</template>
