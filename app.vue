<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useThemeStore } from '~/store/theme'

const themeStore = useThemeStore()
themeStore.initializeTheme()
</script>