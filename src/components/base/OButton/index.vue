<template>
  <div class="o-button" :class="cp_oBtnCls">
    <i :class="props.class"></i>
  </div>
</template>

<script setup>
// sys
import { defineProps, computed } from 'vue'
const props = defineProps({
  class: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
})

const cp_oBtnCls = computed(() => {
  let ret = {}
  if ('primary' == props.type) {
    ret['__primary'] = true
  }
  return ret
})
</script>
<script>
export default {
  name: 'OButton',
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.o-button {
  height: 20px;
  font-size: 20px;
  line-height: 18px;
  padding: 4px 5px 3px 5px;

  display: inline-flex;
  justify-content: center;
  align-content: center;

  border: 1px solid rgb(208, 208, 208);
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
  &.__primary {
    $primaryColor: #3883fa;
    color: #ffffff;
    background-color: $primaryColor;
    border: 1px solid $primaryColor;
  }
}
</style>
