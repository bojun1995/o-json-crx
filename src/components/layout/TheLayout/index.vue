<template>
  <div class="the-layout">
    <the-menu-bar @on-set-btn-clk="setDialog.onSetBtnClk"></the-menu-bar>
    <the-editor-box></the-editor-box>
    <the-set-dialog ref="theSetDialogRef"></the-set-dialog>
  </div>
</template>
<script setup>
// sys
import { ref } from 'vue'
// comp
import TheMenuBar from './TheMenuBar/index.vue'
import TheEditorBox from './TheEditorBox/index.vue'
import TheSetDialog from './TheSetDialog/index.vue'

// childRef
const theSetDialogRef = ref()

const setDialog = ref({
  onSetBtnClk: () => {
    theSetDialogRef.value.doShow()
  },
})
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
  @include background-color('layoutBgColor');
}
</style>
