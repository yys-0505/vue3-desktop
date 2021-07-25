<template>
  <div class="simple-input">
    <label v-if="label">{{ label }}</label>
    <el-input v-model="input" :placeholder="placeholder" />
  </div>
</template>
<script>
import { ref, watch } from 'vue'
export default {
  props: {
    defaultValue: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  emits: {
    inputChange: null
  },
  setup(props, { emit }) {
    const input = ref(props.defaultValue)
    watch(input, (newValue) => {
      emit('inputChange', newValue)
    })
    return { input }
  }
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/variable'
.simple-input
  display: flex
  align-items: center
  label
    color: #495060
    padding-right: 12px
    font-size: $font-size-small
    white-space: nowrap
</style>