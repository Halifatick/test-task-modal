<script setup>
import Checkbox from '@/components/base/Checkbox.vue'

const props = defineProps({
  options: { // Список вариантов выбора
    type: Array,
    required: true
  },
  modelValue: {
    type: Array,
    required: true
  }
})

/**
 * Функция обновления выбранных причин отказа
 * @param {number} id - Индекс выбранного элемента
 * @param {boolean} checked - Флаг состояния чекбокса (выбран / не выбран)
 */
const updateSelectedReasons = (id, checked) => {
  if (checked) {
    props.modelValue.push(id)
  } else {
    const index = props.modelValue.indexOf(id)
    if (index > -1) {
      props.modelValue.splice(index, 1)
    }
  }
}
</script>

<template>
  <div class="checkbox-list custom-scroll">
    <!-- Генерируем чекбоксы на основе списка options -->
    <Checkbox
        v-for="(option, index) in options"
        :key="index"
        :label="option"
        :modelValue="modelValue.includes(index)"
        @update:modelValue="updateSelectedReasons(index, $event)"
    />
  </div>
</template>

<style lang="scss" scoped>

</style>
