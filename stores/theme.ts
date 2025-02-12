import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: import.meta.client ? localStorage.getItem('theme') === 'dark' : false,
  }),
  actions: {
    toggleDarkMode() {
      this.isDark = !this.isDark;
      const theme: string = this.isDark ? 'dark' : 'light';

      if (import.meta.client) {
        localStorage.setItem('theme', theme)
        document.documentElement.classList.toggle('dark', this.isDark)
      }
    },
    initializeTheme() {
      if (import.meta.client) {
        const savedTheme = localStorage.getItem('theme')
        this.isDark = savedTheme === 'dark'
        document.documentElement.classList.toggle('dark', this.isDark)
      }
    }
  },
})
