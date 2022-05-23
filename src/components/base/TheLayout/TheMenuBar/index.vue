<template>
  <div class="the-menu-bar">
    <div class="the-logo">
      <img :src="LogoPic" height="40" width="40" />
      <div class="the-logo__text">
        <span>o-tools</span>
      </div>
    </div>
    <div class="the-name-input">
      <input type="text" placeholder="输入标签名" />
    </div>
    <div class="the-setting-btn">
      <o-button type="primary" class="ri-settings-4-fill"></o-button>
    </div>
  </div>
</template>
<script setup>
// comp
import OButton from '@/components/base/OButton/index.vue'
// file
import LogoPic from '@/assets/icons/logo_with_white_bg.png'
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

.the-name-input {
  margin-left: 20px;
  display: flex;
  flex-grow: 1;
}

.the-setting-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
