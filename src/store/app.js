import { defineStore } from 'pinia'
export const useAppStore = defineStore('app', {
  state: () => {
    return {
      themeName: '',
      setConfig: {
        useAutoReadClipboard: true,
        useAutoChgTheme: 'auto',
        chgToSunThemeTime: '',
        chgToMoonThemeTime: '',
      },
      configKey: 'APP_SET_CFG',
    }
  },
  getters: {
    cp_themeName: (state) => state.themeName,
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
      } else {
        // 默认值
        this.setConfig = {
          useAutoReadClipboard: true,
          useAutoChgTheme: 'auto',
          chgToSunThemeTime: '09:00',
          chgToMoonThemeTime: '17:30',
        }
      }
      return this.setConfig
    },
  },
})
