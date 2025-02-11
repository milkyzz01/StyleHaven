import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark:<boolean> process.client ? localStorage.getItem('theme') === 'dark' : false,
  }),
  actions: {
    toggleDarkMode() {
      this.isDark = !this.isDark
      const theme = this.isDark ? 'dark' : 'light'

      if (process.client) {
        localStorage.setItem('theme', theme)
        document.documentElement.classList.toggle('dark', this.isDark)
      }
    },
    initializeTheme() {
      if (process.client) {
        const savedTheme = localStorage.getItem('theme')
        this.isDark = savedTheme === 'dark'
        document.documentElement.classList.toggle('dark', this.isDark)
      }
    }
  },
})
