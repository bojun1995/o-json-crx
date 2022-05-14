// plugin
import JSONEditor from 'jsoneditor'

export function init(domId) {
  const container = document.getElementById(domId)
  const options = {
    mode: 'code',
    modes: ['tree', 'code'],
    onValidationError: function (errors) {},
  }
  const editor = new JSONEditor(container, options)
}
