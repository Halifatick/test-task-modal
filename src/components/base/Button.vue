<script setup>
defineProps({
  text: {
    type: String,
    default: 'Отправить'
  }
})
</script>

<template>
  <button class="submit-button">
    {{ text }}
  </button>
</template>

<style scoped lang="scss">

</style>
