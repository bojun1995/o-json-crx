import { useAppStore } from '@/store/app'

export default () => {
  const appStore = useAppStore()
  const setConfig = appStore.getSetConfig()

  const themePack = {
    sunlight: {
      logoColor: '#ff6768',
      fontColor: '2d323c',
    },
    matrix: {
      logoColor: '#41b883',
      fontColor: '#f0f0f0',
    },
  }
  const chgTheme = (themeName = 'sunlight') => {
    const logoColor = themePack[themeName]['logoColor']
    document.body.style.setProperty('--el-color-primary', logoColor)
    appStore.doChgThemeName(themeName)
  }
  const chgThemeBySetConfig = () => {
    if ('auto' == setConfig.useAutoChgTheme) {
      const curDateStr = new Date()
      const curMills = new Date().getTime()
      const chg2SunMills = new Date(`2021-12-22 ${setConfig.chgToSunThemeTime}`).getTime()
      const chg2MoonMills = new Date(`2021-12-22 ${setConfig.chgToMoonThemeTime}`).getTime()
    }
  }
  const doChgThemeByTime = () => {}
  return {
    chgTheme,
    chgThemeBySetConfig,
  }
}
