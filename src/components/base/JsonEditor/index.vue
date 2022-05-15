<template>
  <div :id="cp_domId" class="editor-box"></div>
  <!-- <div id="editor-1" class="editor-box"></div> -->
</template>

<script setup>
// vue
import { reactive, onMounted, computed } from 'vue'
// util
import * as editorUtil from './editorUtil.js'

const props = defineProps({
  identity: {
    type: String,
    default: '',
  },
})
const cp_domId = computed(() => {
  return `editor-${props.identity}`
})

let editorObj = {}

onMounted(() => {
  editorObj = editorUtil.init(cp_domId.value)
  setTimeout(() => {
    editorObj.update({ a: 1 })
  }, 2000)
})
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.editor-box {
  height: 100%;
  width: 100%;
}
</style>
