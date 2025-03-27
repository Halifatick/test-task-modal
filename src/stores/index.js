import { defineStore } from 'pinia'
import { ref } from 'vue'

/**
 * Хранилище `useModalStore` управляет состоянием модального окна.
 */
export const useModalStore = defineStore('modal', () => {
    // Флаг состояния модального окна (открыто / закрыто)
    const isOpen = ref(false)

    // Данные модального окна (заголовок, контент, обработчик отправки)
    const modalData = ref({
        title: '',
        content: null,
        submit: null
    })

    /**
     * Открывает модальное окно с переданными данными.
     * @param {Object} data - Данные для модального окна.
     */
    const openModal = (data) => {
        modalData.value = { ...data }
        isOpen.value = true
    }

    /**
     * Закрывает модальное окно и сбрасывает его данные.
     */
    const closeModal = () => {
        isOpen.value = false
        modalData.value = { title: '', content: null, submit: null }
    }

    return {
        isOpen,
        modalData,
        openModal,
        closeModal
    }
})
