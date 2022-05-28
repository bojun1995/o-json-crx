<template>
  <div id="override-app">
    <the-layout></the-layout>
  </div>
</template>

<script setup>
// comp
import TheLayout from '@/components/layout/TheLayout/index.vue'
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
#override-app {
  height: 100%;
  width: 100%;
}
</style>
