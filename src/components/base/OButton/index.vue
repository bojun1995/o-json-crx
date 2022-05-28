<template>
  <div class="o-button" @click="oButton.onClk">
    <el-icon :class="{ 'is-loading': oButton.loading }" :size="25">
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
})

const oButton = ref({
  loading: false,
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
.o-button {
  cursor: pointer;
  display: flex;
  flex-direction: row;
}

.o-button__icon {
  &:hover {
    @include font-color('logoColor');
  }
}
</style>
