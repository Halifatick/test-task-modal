<script setup>
import CheckboxList from '@/components/base/CheckboxList.vue'

defineProps({
  options: {
    type: Array,
    required: true
  }
})

const modelValue = defineModel({
  type: Array,
  required: true
})
</script>

<template>
  <div class="decline-reason">
    <h3>Расскажите, почему отказались от выполнения заказа?</h3>
    <!-- Компонент списка чекбоксов -->
    <CheckboxList :options="options" v-model="modelValue"/>
  </div>
</template>

<style scoped lang="scss">
.decline-reason {
  display: flex;
  flex-direction: column;
  gap: 55px;

  & h3 {
    font-size: 26px;
    line-height: 1.1;
    font-weight: 900;
    color: $gray-dispetcherskaya;
    text-align: center;
    text-transform: uppercase;
    margin: 0 36px;
  }
}
</style>