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
      { from: 'jsoneditor-format', to: 'ri-file-list-2-line' },
      { from: 'jsoneditor-compact', to: 'ri-folder-zip-line' },
      { from: 'jsoneditor-sort', to: 'ri-code-line' },
      { from: 'jsoneditor-transform', to: 'ri-code-line' },
      { from: 'jsoneditor-repair', to: 'ri-code-line' },
      { from: 'jsoneditor-undo', to: 'ri-code-line' },
      { from: 'jsoneditor-redo', to: 'ri-code-line' },
      // { from: 'jsoneditor-modes', to: 'ri-code-line' },
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
