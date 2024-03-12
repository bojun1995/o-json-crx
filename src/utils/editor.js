// plugin
// doc https://github.com/josdejong/jsoneditor/blob/develop/docs/api.md
import JSONEditor from 'jsoneditor'
import { useConsoleUtil } from '@/utils/console'
// element
import { ElNotification } from 'element-plus'
// json2ts
import { json2ts } from '@hzzlyxx/json2ts'

let isTsMode = false
const editorMap = {}

export default () => {
  const consoleUtil = useConsoleUtil()
  const init = (domId, options, jsonObj) => {
    const container = document.getElementById(domId)
    editorMap[domId] = new JSONEditor(container, options, jsonObj)
  }
  const readClipboard = (domId) => {
    navigator.clipboard
      .readText()
      .then((val) => {
        // consoleUtil.log(val)
        const jsonObj = JSON.parse(val)
        if (jsonObj) {
          editorMap['input'].update(JSON.parse(val))
          editorMap['output'].update(JSON.parse(val))
          ElNotification({
            title: 'o-json',
            message: '已自动解析剪切板JSON',
            type: 'success',
            customClass: 'o-notification',
          })
        }
        consoleUtil.log(`parse clipboard success`)
      })
      .catch((err) => {
        consoleUtil.err(`parse clipboard fail: ${err}`)
      })
  }
  const updateJson = (domId, jsonObj) => {
    if ('output' == domId) {
      let ret = jsonObj
      if (true === isTsMode) {
        ret = getTsInterfaceStr(jsonObj)
      }
      editorMap[domId].update(ret)
    }
  }
  const onModeChg = (newMode, oldMode, domId) => {
    replaceEditorIcon()
    if ('output' == domId) {
      isTsMode = false
    }
  }
  const replaceEditorIcon = () => {
    const targetClassList = [
      { from: 'jsoneditor-format', to: 'ri-align-bottom' },
      { from: 'jsoneditor-compact', to: 'ri-align-top' },
      { from: 'jsoneditor-sort', to: 'ri-sort-desc' },
      { from: 'jsoneditor-transform', to: 'ri-find-replace-line' },
      { from: 'jsoneditor-repair', to: 'ri-magic-line' },
      { from: 'jsoneditor-undo', to: 'ri-arrow-go-back-line' },
      { from: 'jsoneditor-redo', to: 'ri-arrow-go-forward-line' },
      { from: 'jsoneditor-expand-all', to: 'ri-align-bottom' },
      { from: 'jsoneditor-collapse-all', to: 'ri-align-top' },
      { from: 'jsoneditor-refresh', to: 'ri-search-line' },
      { from: 'jsoneditor-next', to: 'ri-arrow-down-s-line' },
      { from: 'jsoneditor-previous', to: 'ri-arrow-up-s-line' },
    ]
    targetClassList.forEach((item) => {
      const targetList = document.getElementsByClassName(item.from)
      if (targetList && targetList.length > 0) {
        for (let index = targetList.length - 1; index > -1; index--) {
          let target = targetList[index]
          target.className = item.to
        }
      }
    })
  }
  const getTsInterfaceStr = (json) => {
    let ret = json2ts(json)
    ret = ret.replaceAll('export ', '')
    ret = ret.replaceAll(';', '')
    return ret
  }
  const parseJsonToTs = () => {
    isTsMode = true
    const inputText = editorMap['input'].getText()
    try {
      // 排序
      const unSortObj = JSON.parse(inputText)
      const keys = Object.keys(unSortObj).sort()
      const sortObj = {}
      keys.forEach((key) => {
        sortObj[key] = unSortObj[key]
      })
      const tsInterfaceStr = getTsInterfaceStr(JSON.stringify(sortObj))
      editorMap['output'].setMode('code')
      editorMap['output'].setText(tsInterfaceStr)
      ElNotification({
        title: 'o-json',
        message: '已转换为TS Interfaces',
        type: 'success',
        customClass: 'o-notification',
      })
    } catch (err) {
      ElNotification({
        title: 'o-json',
        message: '请检查JSON格式',
        type: 'error',
        customClass: 'o-notification',
      })
    }
  }
  return {
    editorMap,
    init,
    updateJson,
    onModeChg,
    replaceEditorIcon,
    readClipboard,
    parseJsonToTs,
  }
}
