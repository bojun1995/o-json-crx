// plugin
import JSONEditor from 'jsoneditor'

export default () => {
  const editorMap = {}
  const init = (domId, options, jsonObj) => {
    const container = document.getElementById(domId)
    editorMap[domId] = new JSONEditor(container, options, jsonObj)
  }
  return {
    editorMap,
    init,
  }
}
