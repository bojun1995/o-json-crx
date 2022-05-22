<template>
  <div class="the-editor-box">
    <div id="input" class="editor-input"></div>
    <div id="output" class="editor-output"></div>
  </div>
</template>

<script setup>
// sys
import { onMounted } from 'vue'
//util
import editorUtil from '@/utils/editorUtil'

const inputOpts = {
  name: 'input',
  mode: 'code',
  modes: ['code', 'form', 'text', 'tree', 'view', 'preview'],
  onChangeText: (text) => {},
}
const outputOpts = {
  name: 'output',
  mode: 'tree',
  modes: ['code', 'form', 'text', 'tree', 'view', 'preview'],
  onValidationError: (errors) => {},
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
.the-editor-box {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}
.editor-input {
  width: 30%;
}
.editor-output {
  width: 70%;
}
</style>
