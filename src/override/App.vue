<template>
  <div id="layout" class="layout"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import * as monaco from 'monaco-editor'

self.MonacoEnvironment = {
  getWorker: function (workerId, label) {
    const getWorkerModule = (moduleUrl, label) => {
      return new Worker(self.MonacoEnvironment.getWorkerUrl(moduleUrl), {
        name: label,
        type: 'module',
      })
    }

    switch (label) {
      case 'json':
        return getWorkerModule('/monaco-editor/esm/vs/language/json/json.worker?worker', label)
      case 'css':
      case 'scss':
      case 'less':
        return getWorkerModule('/monaco-editor/esm/vs/language/css/css.worker?worker', label)
      case 'html':
      case 'handlebars':
      case 'razor':
        return getWorkerModule('/monaco-editor/esm/vs/language/html/html.worker?worker', label)
      case 'typescript':
      case 'javascript':
        return getWorkerModule('/monaco-editor/esm/vs/language/typescript/ts.worker?worker', label)
      default:
        return getWorkerModule('/monaco-editor/esm/vs/editor/editor.worker?worker', label)
    }
  },
}
onMounted(() => {
  const dom = document.getElementById('layout')
  monaco.editor.create(dom, {
    language: 'json',
  })
})
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.layout {
  height: 100%;
  width: 100%;
}
</style>
