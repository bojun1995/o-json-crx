<template>
  <div class="the-menu-bar">
    <div class="the-logo">
      <img :src="LogoPic" height="40" width="40" />
      <div class="the-logo__text">
        <span>o-tools</span>
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
      <el-button-group>
        <el-button type="primary">
          <el-icon :size="25">
            <i class="ri-github-fill"></i>
          </el-icon>
        </el-button>
        <el-button type="primary">
          <el-icon class="is-loading" :size="25">
            <i class="ri-settings-4-fill"></i>
          </el-icon>
        </el-button>
      </el-button-group>
    </div>
  </div>
</template>
<script setup>
// sys
import { ref } from 'vue'
import { useAppStore } from '@/store/index'
// file
import LogoPic from '@/assets/icons/logo_with_white_bg.png'

const appStore = useAppStore()
const themeSwitch = ref({
  isSunTheme: false,
  onThemeChg: (val) => {
    const themeName = val ? 'sunlight' : 'matrix'
    appStore.doChgThemeName(themeName)
  },
})

const nameInput = ref({
  nameVal: '',
  onValChg: (val) => {
    document.title = val
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
  padding: 5px 10px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.the-logo {
  display: flex;
  flex-direction: row;
  // color: #585858;
  // color: $fontColor;
  @include font-color('theme-color--0');
}

.the-logo__text {
  font-family: 'JetBrainsMono-Bold';
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
