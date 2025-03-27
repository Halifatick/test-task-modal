<script setup>
import { useLifecycleLogger } from '@/common/hooks/lifecycleLogger.js'
import { h } from 'vue'
import { useModalStore } from '@/stores/index.js'
import { useDeclineReasonStore } from '@/stores/useDeclineReasonStore.js'
import { storeToRefs } from 'pinia'
import Button from '@/components/base/Button.vue'
import DeclineReason from '@/components/DeclineReason.vue'

const modalStore = useModalStore()
const declineReasonStore = useDeclineReasonStore()
const { title, options, selectedReasons } = storeToRefs(declineReasonStore)

// Открытие модального окна
const openModal = () => {
  modalStore.openModal({
    title: title,
    content:  h(DeclineReason, { // Динамическое содержимое модалки
      options: options.value,
      modelValue: selectedReasons.value
    }),
    submit: handleSubmit
  })
}

const handleSubmit = () => {
  alert(`Выбранные причины: ${selectedReasons.value}`)

  declineReasonStore.resetSelectedReasons() // Очищаем выбранные причины
  modalStore.closeModal() // Закрываем модальное окно
}

useLifecycleLogger({ name: 'HomePage' })
</script>

<template>
  <div class="flex">
    <Button @click="openModal" text="Открыть модальное окно"/>
  </div>
</template>

<style scoped lang="scss">

</style>
