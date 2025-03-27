<script setup>
defineProps({
  label: String
})

const modelValue = defineModel({
  type: Boolean,
  required: true
})
</script>

<template>
  <label class="checkbox-container">
    <input type="checkbox" v-model="modelValue" />
    <span v-if="!!label">{{ label }}</span>
  </label>
</template>

<style scoped lang="scss">

</style>
