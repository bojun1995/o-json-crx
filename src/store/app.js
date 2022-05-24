import { defineStore } from 'pinia'
export const useAppStore = defineStore('app', {
  state: () => {
    return {
      themeName: 'sunlight',
    }
  },
  actions: {
    doChgThemeName(themeName) {
      this.themeName = themeName
      window.document.documentElement.setAttribute('data-themeName', themeName)
    },
  },
})
