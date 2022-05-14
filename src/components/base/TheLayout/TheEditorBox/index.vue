<template>
  <div class="the-editor-box">
    <json-editor identity="1"></json-editor>
  </div>
</template>

<script setup>
import JsonEditor from '@/components/base/JsonEditor/index.vue'
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.the-editor-box {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
