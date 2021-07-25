<template>
  <el-input
    v-model="input"
    :placeholder="placeholder"
    class="input-with-select"
    @keydown.enter="handleSearch"
  >
    <template #append>
      <el-button icon="el-icon-search" :loading="loading" @click="handleSearch" />
    </template>
  </el-input>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  props: {
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    defaultValue: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['inputChange', 'handleSearch'],
  setup(props, { emit }) {
    const input = ref(props.defaultValue)
    const handleSearch = () => emit('handleSearch')
    watch(input, (newVal) => {
      emit('inputChange', newVal)
    })
    return { input, handleSearch }
  }
}
</script>

<style>

</style>