<template>
  <div class="the-menu-bar">
    <div></div>
    <div>
      <o-button type="primary" class="ri-list-settings-line"></o-button>
    </div>
  </div>
</template>
<script setup>
// comp
import OButton from '@/components/base/OButton/index.vue'
</script>
<script>
export default {
  name: 'TheMenuBar',
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.the-menu-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
}
</style>
