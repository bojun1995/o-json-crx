<template>
  <div class="the-editor-box">
    <json-editor identity="input" class="editor-input"></json-editor>
    <json-editor identity="output" class="editor-output"></json-editor>
  </div>
</template>

<script setup>
import JsonEditor from '@/components/base/JsonEditor/index.vue'
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
