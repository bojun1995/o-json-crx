import { defineStore } from 'pinia'
export const useAppStore = defineStore('app', {
  state: () => {
    return {
      themeName: 'sunlight',
      setConfig: {
        useAutoReadClipboard: true,
        useAutoChgTheme: 'auto',
        chgToSunThemeTime: '',
        chgToMoonThemeTime: '',
      },
      configKey: 'APP_SET_CFG',
    }
  },
  actions: {
    doChgThemeName(themeName) {
      this.themeName = themeName
      window.document.documentElement.setAttribute('data-themeName', themeName)
    },
    chgSetConfig(config) {
      this.setConfig = config
      window.localStorage.setItem(this.configKey, JSON.stringify(config))
    },
    getSetConfig() {
      const localConfigStr = window.localStorage.getItem(this.configKey)
      if (null !== localConfigStr && undefined !== localConfigStr) {
        this.setConfig = JSON.parse(localConfigStr)
      }
      return this.setConfig
    },
  },
})
