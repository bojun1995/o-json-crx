<template>
  <div class="the-editor-box">
    <div id="input" class="custom-editor editor-input"></div>
    <div id="output" class="custom-editor editor-output"></div>
  </div>
</template>
<script setup>
// https://github.com/josdejong/jsoneditor/blob/master/docs/api.md
// sys
import { onMounted, onUpdated } from 'vue'
//util
import editorUtil from '@/utils/editor'
import consoleUtil from '@/utils/console'
const consoleCtrl = consoleUtil()
const editorCtrl = editorUtil()

const inputOpts = {
  name: 'input',
  mode: 'code',
  modes: ['code', 'form', 'text', 'tree', 'view', 'preview'],
  onChangeText: (text) => {
    try {
      const testJsonObj = JSON.parse(text)
      editorCtrl.updateJson('output', testJsonObj)
      // consoleCtrl.log(JSON.stringify(testJsonObj))
      consoleCtrl.log('succ')
    } catch (err) {
      // consoleCtrl.err(`parse json error: ${text}`)
      consoleCtrl.err('parse fail')
    }
  },
  onModeChange: (newMode, oldMode) => editorCtrl.onModeChg(newMode, oldMode),
}
const outputOpts = {
  name: 'output',
  mode: 'tree',
  modes: ['code', 'form', 'text', 'tree', 'view', 'preview'],
  onModeChange: (newMode, oldMode) => editorCtrl.onModeChg(newMode, oldMode),
}

onMounted(() => {
  editorCtrl.init('input', inputOpts)
  editorCtrl.init('output', outputOpts)
  editorCtrl.replaceEditorIcon()
})
</script>
<script>
export default {
  name: 'TheEditorBox',
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
@import '@/style/business/editor.scss';

.the-editor-box {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  padding: 10px;
}
.editor-input {
  width: 30%;
  margin-right: 10px;
}
.editor-output {
  width: 70%;
}
</style>
