<template>
  <el-dialog v-model="setDialog.visible" :show-close="false" :modal="false" :close-on-click-modal="true">
    <template #header="{ close, titleId, titleClass }">
      <div class="set-dialog__header">
        <span :id="titleId" :class="titleClass">设置</span>
        <o-button icon="ri-close-line" @click="close"></o-button>
      </div>
    </template>
    This is dialog content.
  </el-dialog>
</template>

<script setup>
// sys
import { ref, defineExpose } from 'vue'
// comp
// import OButton from '@/components/base/OButton/index.vue'

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
</style>
