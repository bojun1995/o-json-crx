<template>
  <div class="the-editor-box">
    <div id="input" class="custom-editor editor-input"></div>
    <div id="output" class="custom-editor editor-output"></div>
  </div>
</template>
<script setup>
// sys
import { onMounted } from 'vue'
//util
import editorUtil from '@/utils/editor'
import consoleUtil from '@/utils/console'
const consoleCtrl = consoleUtil()

const inputOpts = {
  name: 'input',
  mode: 'code',
  modes: ['code', 'form', 'text', 'tree', 'view', 'preview'],
  onChangeText: (text) => {
    try {
      const testJsonObj = JSON.parse(text)
      editorCtrl.updateJson('output', testJsonObj)
      consoleCtrl.log(JSON.stringify(testJsonObj))
    } catch (err) {
      consoleCtrl.err(`parse json error: ${text}`)
    }
  },
}
const outputOpts = {
  name: 'output',
  mode: 'tree',
  modes: ['code', 'form', 'text', 'tree', 'view', 'preview'],
}

const editorCtrl = editorUtil()
onMounted(() => {
  editorCtrl.init('input', inputOpts)
  editorCtrl.init('output', outputOpts)
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
