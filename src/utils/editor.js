// plugin
// doc https://github.com/josdejong/jsoneditor/blob/develop/docs/api.md
import JSONEditor from 'jsoneditor'
import useConsole from '@/utils/console'
// element
import { ElNotification } from 'element-plus'
// json2ts
import json2ts from '@cyly/json2ts'

let isTsMode = false

export default () => {
  const editorMap = {}
  const consoleUtil = useConsole
  const init = (domId, options, jsonObj) => {
    const container = document.getElementById(domId)
    editorMap[domId] = new JSONEditor(container, options, jsonObj)
  }
  const readClipboard = (domId) => {
    navigator.clipboard
      .readText()
      .then((val) => {
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
        consoleUtil().log(`parse clipboard success`)
      })
      .catch((err) => {
        consoleUtil().err(`parse clipboard fail: ${err}`)
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
    return json2ts(json, {
      parseArray: true,
      typePrefix: 'I',
      typeSuffix: '',
    })
  }
  const parseJsonToTs = () => {
    isTsMode = true
    const inputText = editorMap['input'].getText()
    try {
      const tsInterfaceStr = getTsInterfaceStr(inputText)
      editorMap['output'].setMode('code')
      editorMap['output'].setText(tsInterfaceStr)
      ElNotification({
        title: 'o-json',
        message: '已转换为TS Interface',
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
