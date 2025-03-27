<script setup>
import { useLifecycleLogger } from '@/common/hooks/lifecycleLogger.js'
import { useModalStore } from '@/stores/index.js'
import { storeToRefs } from 'pinia'
import Modal from '@/components/Modal.vue'

// Инициализируем хранилище модального окна
const modalStore = useModalStore()
const { isOpen, modalData } = storeToRefs(modalStore)

useLifecycleLogger({ name: 'AppLayoutDefault' })
</script>

<template>
  <main class="flex justify-content-center">
      <slot /> <!-- Слот для рендеринга дочерних компонентов -->
  </main>

  <!-- Глобальный модальный компонент -->
  <Modal
      :isOpen="isOpen"
      @close="modalStore.closeModal"
      :title="modalData.title"
      :content="modalData.content"
      :submit="modalData.submit"
  />
</template>

<style scoped lang="scss">

</style>
