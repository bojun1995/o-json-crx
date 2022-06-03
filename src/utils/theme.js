import { useAppStore } from '@/store/app'

export default () => {
  const appStore = useAppStore()
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
  return {
    chgTheme,
  }
}
