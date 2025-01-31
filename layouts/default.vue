<script lang="ts" setup>
const option = [
  { name: 'Dashboard', link: '#' },
  { name: 'Products', link: '#' },
  { name: 'Order', link: '#' },
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
