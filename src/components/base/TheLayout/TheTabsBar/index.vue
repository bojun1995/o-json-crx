<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="User" name="first"></el-tab-pane>
    <el-tab-pane label="Config" name="second"></el-tab-pane>
    <el-tab-pane label="Role" name="third"></el-tab-pane>
    <el-tab-pane label="Task" name="fourth"></el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { reactive } from 'vue'
const activeName = 'first'
reactive({
  activeName,
})
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped></style>
