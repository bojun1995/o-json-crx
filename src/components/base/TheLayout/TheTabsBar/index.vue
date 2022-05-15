<template>
  <div class="the-tabs-bar">
    <el-tabs v-model="activeName">
      <el-tab-pane label="User" name="first"></el-tab-pane>
      <el-tab-pane label="Config" name="second"></el-tab-pane>
      <el-tab-pane label="Role" name="third"></el-tab-pane>
      <el-tab-pane label="Task" name="fourth"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const activeName = 'first'
reactive({
  activeName,
})
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.the-tabs-bar {
  :deep(.el-tabs__nav-scroll) {
    padding-left: 10px;
  }
}
</style>
