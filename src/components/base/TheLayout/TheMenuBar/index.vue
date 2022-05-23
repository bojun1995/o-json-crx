<template>
  <div class="the-menu-bar">
    <div class="the-logo">
      <img :src="LogoPic" height="40" width="40" />
      <div class="the-logo__text">
        <span>o-tools</span>
      </div>
    </div>
    <div class="the-name-input__box">
      <div class="the-name-input">
        <el-input v-model="nameInput.nameVal" placeholder="输入标签页名" size="normal" clearable></el-input>
      </div>
    </div>
    <div class="the-setting-btn">
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
// file
import LogoPic from '@/assets/icons/logo_with_white_bg.png'

const nameInput = ref({
  nameVal: '',
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
  color: #585858;
}

.the-logo__text {
  font-family: 'JetBrainsMono-Bold';
  line-height: 40px;
  font-size: 24px;
  padding-left: 10px;
  user-select: none;
}

.the-name-input__box {
  margin-left: 20px;
  display: flex;
  flex-grow: 1;
}

.the-name-input {
  width: 400px;
}

.the-setting-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
