<template>
  <div class="the-menu-bar">
    <div class="the-logo">
      <img :src="LogoPic" height="40" width="40" />
      <div class="the-logo__text">
        <span>o-json</span>
      </div>
    </div>
    <div class="the-grow"></div>
    <div class="the-name-input">
      <el-input
        v-model="nameInput.nameVal"
        placeholder="输入标签页名"
        size="normal"
        clearable
        @change="nameInput.onValChg"
      >
        <template #prefix>
          <el-icon :size="18">
            <i class="ri-edit-box-line"></i>
          </el-icon>
        </template>
      </el-input>
    </div>
    <div class="the-btn-group">
      <el-switch v-model="themeSwitch.isSunTheme" style="margin-right: 20px" @change="themeSwitch.onThemeChg" />
      <o-button icon="ri-settings-4-fill" @click="setBtn.onClk"></o-button>
    </div>
  </div>
</template>
<script setup>
// sys
import { ref, defineEmits } from 'vue'
import { useAppStore } from '@/store/app'
// file
import LogoPic from '@/assets/icons/logo_with_white_bg.png'

const emit = defineEmits(['on-set-btn-clk'])

const appStore = useAppStore()
const themeSwitch = ref({
  isSunTheme: false,
  onThemeChg: (val) => {
    const themeName = false === val ? 'sunlight' : 'matrix'
    appStore.doChgThemeName(themeName)
  },
})

const nameInput = ref({
  nameVal: '',
  onValChg: (val) => {
    document.title = val
  },
})

const setBtn = ref({
  onClk: () => {
    emit('on-set-btn-clk')
  },
})
</script>
<script>
export default {
  name: 'TheMenuBar',
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.the-menu-bar {
  padding: 5px 15px 5px 10px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @include background-color('headBgColor');
}

.the-logo {
  display: flex;
  flex-direction: row;
  @include font-color('logoColor');
}

.the-logo__text {
  font-family: $g_fontFamilyBold;
  line-height: 40px;
  font-size: 24px;
  padding-left: 10px;
  user-select: none;
}

.the-grow {
  display: flex;
  flex-grow: 1;
}

.the-name-input {
  width: 400px;
  margin-right: 20px;
}

.the-btn-group {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
