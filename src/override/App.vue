<template>
  <div id="layout" class="layout"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import * as monaco from 'monaco-editor'

window.MonacoEnvironment = {
  getWorker: function (workerId, label) {
    const getWorkerModule = (moduleUrl, label) => {
      return new Worker(window.MonacoEnvironment.getWorkerUrl(moduleUrl), {
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

// {"a": 1, "b": [1, 2, 3]}

onMounted(() => {
  const dom = document.getElementById('layout')
  monaco.editor.create(dom, {
    language: 'json',
    theme: 'vs-dark',
    // 可折叠
    folding: true,
    // 自适应布局
    automaticLayout: true,
    // 行亮
    renderLineHighlight: 'all',
    // 显示行号
    selectOnLineNumbers: true,
    // 字体大小
    fontSize: 16,
    // 取消代码后面一大段空白
    scrollBeyondLastLine: false,
    // 不要滚动条的边框
    overviewRulerBorder: false,
    // 右上角地图
    minimap: {
      enabled: true,
    },
    // 格式化
    formatOnPaste: true,
    formatOnType: true,
  })
})
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.layout {
  height: 100%;
  width: 100%;
}
</style>
