// plugin
import dayjs from 'dayjs'
// store
import { useAppStore } from '@/store/app'
// util
import useConsole from '@/utils/console'
// element
import { ElNotification } from 'element-plus'

export default () => {
  const appStore = useAppStore()
  const consoleUtil = useConsole()
  const setConfig = appStore.getSetConfig()
  const oneDayMills = 24 * 60 * 60 * 1000
  let chg2MoonTimer = null
  let chg2SunTimer = null

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
  const chgTheme = (themeName = 'sunlight', showMsg = true) => {
    const logoColor = themePack[themeName]['logoColor']
    document.body.style.setProperty('--el-color-primary', logoColor)
    appStore.doChgThemeName(themeName)
    if (showMsg) {
      ElNotification({
        title: 'o-json',
        message: '已为您切换主题',
        type: 'success',
      })
    }
  }
  const chgThemeBySetConfig = () => {
    if ('auto' == setConfig.useAutoChgTheme) {
      const curDateStr = dayjs().format('YYYY-MM-DD')
      const curMills = new Date().getTime()
      const chg2SunMills = new Date(`${curDateStr} ${setConfig.chgToSunThemeTime}`).getTime()
      const chg2MoonMills = new Date(`${curDateStr} ${setConfig.chgToMoonThemeTime}`).getTime()
      if (null !== chg2SunTimer) {
        clearTimeout(chg2SunTimer)
        chg2SunTimer = null
      }
      if (null !== chg2MoonTimer) {
        clearTimeout(chg2MoonTimer)
        chg2MoonTimer = null
      }
      // consoleUtil.log(`chg2SunDiffMills = ${chg2SunMills - curMills}, chg2MoonDiffMills = ${chg2MoonMills - curMills}`)
      if (chg2SunMills - curMills >= 0) {
        doChg2Sun(chg2SunMills - curMills)
      } else {
        doChg2Sun(chg2SunMills + oneDayMills - curMills)
      }
      if (chg2MoonMills - curMills >= 0) {
        doChg2Moon(chg2MoonMills - curMills)
      } else {
        doChg2Moon(chg2MoonMills + oneDayMills - curMills)
      }
    }
  }
  const doChg2Sun = (delay = oneDayMills) => {
    chg2SunTimer = setTimeout(() => {
      chgTheme('sunlight')
      doChg2Sun()
    }, delay)
  }
  const doChg2Moon = (delay = oneDayMills) => {
    chg2MoonTimer = setTimeout(() => {
      chgTheme('matrix')
      doChg2Moon()
    }, delay)
  }
  return {
    chgTheme,
    chgThemeBySetConfig,
  }
}
