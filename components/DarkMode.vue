<script lang="ts" setup>
import { useDark } from '~/composables/useDark'

//use theme darkmode composable
const { isDark, toggleDarkMode } = useDark();
</script>
<template>
      <Button @click="toggleDarkMode" class="p-2 rounded-lg border">
              <span v-if="isDark">🌙</span>
              <span v-else>☀️</span>
      </Button>
</template>