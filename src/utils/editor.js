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
  return {
    editorMap,
    init,
    updateJson,
  }
}
