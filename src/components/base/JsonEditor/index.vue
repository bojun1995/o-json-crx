<template>
  <div :id="cp_domId" class="editor-box"></div>
  <!-- <div id="editor-1" class="editor-box"></div> -->
</template>

<script setup>
// vue
import { reactive, onMounted, computed } from 'vue'
// util
import * as editorInit from './editorInit.js'

const props = defineProps({
  identity: String,
})
const cp_domId = computed(() => {
  return `editor-${props.identity}`
})

onMounted(() => {
  editorInit.init(cp_domId.value)
})
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.editor-box {
  height: 100%;
  width: 100%;
}
</style>
