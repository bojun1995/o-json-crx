<template>
  <div class="the-layout">
    <the-menu-bar></the-menu-bar>
    <the-editor-box></the-editor-box>
  </div>
</template>
<script setup>
// comp
import TheMenuBar from './TheMenuBar/index.vue'
import TheEditorBox from './TheEditorBox/index.vue'
</script>
<script>
export default {
  name: 'TheLayout',
}
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.the-layout {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
