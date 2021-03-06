// plugin
import dayjs from 'dayjs'
// store
import { useAppStore } from '@/store/app'
// util
import { useConsoleUtil } from '@/utils/console'
// element
import { ElNotification } from 'element-plus'

export default () => {
  const appStore = useAppStore()
  const consoleUtil = useConsoleUtil()
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
    // consoleUtil.log(`themeName = ${themeName}`)
    appStore.doChgThemeName(themeName)
    if (showMsg) {
      ElNotification({
        title: 'o-json',
        message: '已切换主题',
        type: 'success',
        customClass: 'o-notification',
      })
    }
  }
  const chgThemeBySetConfig = (setThemeNow = true) => {
    if ('auto' == setConfig.useAutoChgTheme) {
      const curDateStr = dayjs().format('YYYY-MM-DD')
      const curMills = new Date().getTime()
      const chg2SunMills = new Date(`${curDateStr} ${setConfig.chgToSunThemeTime}`).getTime()
      const chg2MoonMills = new Date(`${curDateStr} ${setConfig.chgToMoonThemeTime}`).getTime()
      const chg2SunDifMills = chg2SunMills - curMills
      const chg2MoonDifMills = chg2MoonMills - curMills

      // 清除定时器
      if (null !== chg2SunTimer) {
        clearTimeout(chg2SunTimer)
        chg2SunTimer = null
      }
      if (null !== chg2MoonTimer) {
        clearTimeout(chg2MoonTimer)
        chg2MoonTimer = null
      }
      // 开启计时器定时切换
      // consoleUtil.log(`chg2SunDifMills = ${chg2SunDifMills}, chg2MoonDifMills = ${chg2MoonDifMills}`)
      if (chg2SunDifMills >= 0) {
        doChg2Sun(chg2SunDifMills)
      } else {
        doChg2Sun(chg2SunDifMills + oneDayMills)
      }
      if (chg2MoonDifMills >= 0) {
        doChg2Moon(chg2MoonDifMills)
      } else {
        doChg2Moon(chg2MoonDifMills + oneDayMills)
      }
      // 立刻切换
      if (setThemeNow) {
        // consoleUtil.log(`chg2SunDifMills = ${chg2SunDifMills}, chg2MoonDifMills = ${chg2MoonDifMills}`)
        if (chg2SunDifMills > 0 && chg2MoonDifMills > 0) {
          chgTheme('matrix', false)
        }
        if (chg2SunDifMills < 0 && chg2MoonDifMills > 0) {
          chgTheme('sunlight', false)
        }
        if (chg2SunDifMills < 0 && chg2MoonDifMills < 0) {
          chgTheme('matrix', false)
        }
      }
    }

    if ('sys' == setConfig.useAutoChgTheme) {
      const lightMedia = window.matchMedia('(prefers-color-scheme:light)')
      if (lightMedia.matches) {
        chgTheme('sunlight', false)
      } else {
        chgTheme('matrix', false)
      }
      lightMedia.addEventListener('change', (e) => {
        if (e.matches) {
          chgTheme('sunlight', false)
        } else {
          chgTheme('matrix', false)
        }
      })
    }

    if ('none' == setConfig.useAutoChgTheme) {
      chgTheme('sunlight', false)
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
