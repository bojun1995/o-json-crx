<template>
  <el-dialog
    v-model="setDialog.visible"
    :show-close="false"
    :modal="false"
    :close-on-click-modal="true"
    class="o-dialog"
    @closed="setDialog.onClosed"
  >
    <template #header="{ close, titleId, titleClass }">
      <div class="set-dialog__header">
        <span :id="titleId" :class="titleClass">设置</span>
        <o-button icon="ri-close-line" @click="close"></o-button>
      </div>
    </template>
    <div class="set-dialog__content">
      <el-form :model="setForm" label-width="120px" class="o-form">
        <el-divider content-position="left" class="o-divider">
          <span class="o-divider__text">功能</span>
        </el-divider>
        <el-form-item label="自动读取剪切板">
          <el-switch v-model="setForm.useAutoReadClipboard" class="o-switch" />
        </el-form-item>
        <el-divider content-position="left" class="o-divider">
          <span class="o-divider__text">主题模式</span>
        </el-divider>
        <el-form-item label="切换主题">
          <el-radio-group v-model="setForm.useAutoChgTheme" class="o-radio-group">
            <el-radio label="auto">跟随设置</el-radio>
            <el-radio label="sys">跟随系统</el-radio>
            <el-radio label="none">不自动切换</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-show="'auto' == setForm.useAutoChgTheme" label="切换至日间主题">
          <el-time-select
            v-model="setForm.chgToSunThemeTime"
            prefix-icon="Sunny"
            start="00:00"
            step="00:15"
            end="23:45"
            placeholder="选择时间点"
            :clearable="false"
            class="o-select"
            popper-class="o-popper"
          />
        </el-form-item>
        <el-form-item v-show="'auto' == setForm.useAutoChgTheme" label="切换至夜间主题">
          <el-time-select
            v-model="setForm.chgToMoonThemeTime"
            prefix-icon="Moon"
            start="00:00"
            step="00:15"
            end="23:45"
            placeholder="选择时间点"
            :clearable="false"
            class="o-select"
            popper-class="o-popper"
          />
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" class="o-button" @click="setDialog.onConfirm">保存</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
// sys
import { ref } from 'vue'
// store
import { useAppStore } from '@/store/app'
// util
import useThemeUtil from '@/utils/theme'

const appStore = useAppStore()
const appSetConfig = appStore.getSetConfig()

const themeUtil = useThemeUtil()

const setDialog = ref({
  visible: false,
  onClosed: () => {
    appStore.chgSetConfig(setForm.value)
    themeUtil.chgThemeBySetConfig(false)
  },
  onConfirm: () => {
    setDialog.value.visible = false
  },
})

const setForm = ref({
  useAutoReadClipboard: appSetConfig.useAutoReadClipboard,
  useAutoChgTheme: appSetConfig.useAutoChgTheme,
  chgToSunThemeTime: appSetConfig.chgToSunThemeTime,
  chgToMoonThemeTime: appSetConfig.chgToMoonThemeTime,
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

.set-dialog__content {
  height: 300px;
}
</style>
