<template>
  <div :class="cp_dividerCls"></div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'y',
  },
})

const cp_dividerCls = computed(() => {
  let ret = {}
  if ('y' == props.type) {
    ret['o-divider-y'] = true
  }
  return ret
})
</script>
<script>
export default {
  name: 'ODivider',
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.o-divider-y {
  height: 100%;
  width: 1px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
