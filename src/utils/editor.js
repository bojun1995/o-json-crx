// plugin
// doc https://github.com/josdejong/jsoneditor/blob/develop/docs/api.md
import JSONEditor from 'jsoneditor'

export default () => {
  const editorMap = {}
  const init = (domId, options, jsonObj) => {
    const container = document.getElementById(domId)
    editorMap[domId] = new JSONEditor(container, options, jsonObj)
  }
  const updateJson = (domId, jsonObj) => {
    editorMap[domId].update(jsonObj)
  }
  const onModeChg = (newMode, oldMode) => {
    replaceEditorIcon()
  }
  const replaceEditorIcon = () => {
    const targetClassList = [
      { from: 'jsoneditor-format', to: 'ri-magic-line' },
      { from: 'jsoneditor-compact', to: 'ri-align-vertically' },
      { from: 'jsoneditor-sort', to: 'ri-sort-desc' },
      { from: 'jsoneditor-transform', to: 'ri-find-replace-line' },
      { from: 'jsoneditor-repair', to: 'ri-bug-line' },
      { from: 'jsoneditor-undo', to: 'ri-arrow-go-back-line' },
      { from: 'jsoneditor-redo', to: 'ri-arrow-go-forward-line' },
      { from: 'jsoneditor-expand-all', to: 'ri-align-top' },
      { from: 'jsoneditor-collapse-all', to: 'ri-align-bottom' },
    ]
    targetClassList.forEach((item) => {
      const targetList = document.getElementsByClassName(item.from)
      if (targetList && targetList.length > 0) {
        for (let index = 0; index < targetList.length; index++) {
          const target = targetList[index]
          target.className = item.to
        }
      }
    })
  }
  return {
    editorMap,
    init,
    updateJson,
    onModeChg,
    replaceEditorIcon,
  }
}
