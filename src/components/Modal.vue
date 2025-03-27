<script setup>
import { defineProps, defineEmits, computed, h } from 'vue'
import SubmitButton from '@/components/base/Button.vue'

const props = defineProps({
  isOpen: { // Флаг открытия/закрытия модального окна
    type: Boolean,
    required: true,
  },
  title: { // Заголовок модального окна
    type: String,
  },
  content: { // Содержимое модального окна (строка или компонент)
    type: [String, Object],
    default: ''
  },
  submit: { // Функция, вызываемая при нажатии на кнопку отправки
    type: Function,
  }
})

// Событие закрытия модального окна
const emit = defineEmits(['close'])

// Преобразуем `content` в корректный формат для рендеринга
const renderedContent = computed(() => {
  return typeof props.content === 'string' ? h('template', props.content) : props.content
})
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="modal-overlay" @click.self="emit('close')">
        <div class="modal-content">
          <div class="modal-header">
            <h1 v-if="!!title" v-html="title"></h1>
            <button class="close-button" @click.self="emit('close')"></button>
          </div>
          <div class="modal-body">
            <!-- Рендерим переданное содержимое -->
            <component :is="renderedContent"></component>
          </div>
          <div class="modal-footer" v-if="submit">
            <SubmitButton @click="submit" text="Отправить"/>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">

</style>
