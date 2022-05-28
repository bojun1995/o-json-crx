<template>
  <el-dialog
    v-model="setDialog.visible"
    :show-close="false"
    :modal="false"
    :close-on-click-modal="true"
    custom-class="o-dialog"
  >
    <template #header="{ close, titleId, titleClass }">
      <div class="set-dialog__header">
        <span :id="titleId" :class="titleClass">设置</span>
        <o-button icon="ri-close-line" @click="close"></o-button>
      </div>
      <el-divider class="set-dialog__divider" />
    </template>
    <div class="set-dialog__content">
      <span>content</span>
    </div>
  </el-dialog>
</template>

<script setup>
// sys
import { ref, defineExpose } from 'vue'

const setDialog = ref({
  visible: false,
})

const doShow = () => {
  setDialog.value.visible = true
}

defineExpose({ doShow })
</script>
<script>
export default {
  name: 'TheSetDialog',
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.set-dialog__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.set-dialog__divider {
  &.el-divider--horizontal {
    margin: 20px 0px 0px 0px;
    @include theme-control {
      border-top-color: get-theme-val('logoColor');
    }
  }
}

.set-dialog__content {
  height: 50vh;
}
</style>
