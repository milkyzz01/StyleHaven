import { useThemeStore } from '~/store/theme'

export function useDark() {
  const themeStore = useThemeStore()

  return {
    isDark: computed(() => themeStore.isDark),
    toggleDarkMode: themeStore.toggleDarkMode,
  }
}
