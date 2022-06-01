<template>
  <div class="the-editor-box">
    <div id="input" class="custom-editor editor-input"></div>
    <div id="output" class="custom-editor editor-output"></div>
  </div>
</template>
<script setup>
// https://github.com/josdejong/jsoneditor/blob/master/docs/api.md
// sys
import { onMounted } from 'vue'
// store
import { useAppStore } from '@/store/app'
//util
import editorUtil from '@/utils/editor'
import consoleUtil from '@/utils/console'
const consoleCtrl = consoleUtil()
const editorCtrl = editorUtil()

const appStore = useAppStore()
const setConfig = appStore.getSetConfig()

const inputOpts = {
  // name: 'input',
  mode: 'code',
  modes: ['code', 'form', 'text', 'tree', 'view', 'preview'],
  onChangeText: (text) => {
    try {
      const jsonObj = JSON.parse(text)
      editorCtrl.updateJson('output', jsonObj)
      // consoleCtrl.log(JSON.stringify(jsonObj))
      consoleCtrl.log('sync text success')
    } catch (err) {
      // consoleCtrl.err(`parse json error: ${text}`)
      consoleCtrl.err('parse fail')
    }
  },
  onModeChange: (newMode, oldMode) => editorCtrl.onModeChg(newMode, oldMode),
}
const outputOpts = {
  // name: 'output',
  mode: 'tree',
  modes: ['code', 'form', 'text', 'tree', 'view', 'preview'],
  onModeChange: (newMode, oldMode) => editorCtrl.onModeChg(newMode, oldMode),
}

onMounted(() => {
  editorCtrl.init('input', inputOpts)
  editorCtrl.init('output', outputOpts)
  editorCtrl.replaceEditorIcon()
  // 是否读取剪切板
  if (true == setConfig.useAutoReadClipboard) {
    editorCtrl.readClipboard('input')
  }
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
  // 50px the-menu-bar height
  // 20px padding
  max-height: calc(100% - 50px - 20px);
}
.editor-input {
  width: 30%;
  margin-right: 10px;
}
.editor-output {
  width: 70%;
  max-height: 100%;
}
</style>
