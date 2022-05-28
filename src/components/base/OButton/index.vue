<template>
  <div class="o-button__box" @click="oButton.onClk">
    <el-icon :class="{ 'o-button--clk': oButton.clkCls }" :size="props.size">
      <i :class="props.icon" class="o-button__icon"></i>
    </el-icon>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const emit = defineEmits(['click'])

const props = defineProps({
  icon: {
    type: String,
    default: 'ri-bell-line',
  },
  size: {
    type: Number,
    default: 25,
  },
})

const oButton = ref({
  clkCls: false,
  onClk: (event) => {
    emit('click', event)
  },
})
</script>
<script>
export default {
  name: 'OButton',
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.o-button__box {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  @include font-color('fontColor');
}

.o-button--clk {
}

.o-button__icon {
  &:hover {
    @include font-color('logoColor');
  }
}
</style>
