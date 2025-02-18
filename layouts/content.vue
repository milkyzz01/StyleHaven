<script lang="ts" setup>
const option = [
    {
        name: 'Dashboard',
        link: 'dashboard/'
    },
    {
        name: 'Products',
        link: '/'
    },
]
</script>
<template>
<div>
    <Header :options="option" :dropDownTrigger="true" />
    <main>
      <slot />
    </main>
  </div>
</template>