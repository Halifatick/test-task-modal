import { defineStore } from 'pinia'
import { ref } from 'vue'

/**
 * Хранилище `useDeclineReasonStore` управляет списком причин отказа от заказа.
 */
export const useDeclineReasonStore = defineStore('declineReason', () => {
    // Заголовок модального окна с номером заказа
    const title = ref('Отказаться от выполнения заказа <b>№ У00017711</b>')

    // Список возможных причин отказа
    const options = ref([
        'НЕ ПОДХОДИТ ДАТА ИЛИ ВРЕМЯ',
        'НЕ ПОДХОДИТ ТОННАЖ ГРУЗА',
        'НЕ ПОДХОДИТ ОБЪЕМ ГРУЗА',
        'НЕ ПОДХОДИТ ТИП ФУРГОНА',
        'НЕТ ПРОПУСКА В МКАД ТТК СК',
        'ПОЛОМКА МАШИНЫ/АВАРИЯ',
        'ЗАБОЛЕЛ',
        'НЕТ САНОБРАБОТКИ',
        'НЕТ МЕД. КНИЖКИ',
        'НЕТ Гидроборта',
        'НЕТ растентовки',
        'Не устраивает ставка за рейс',
        'не устраивает маршрут',
        'Другое'
    ])

    // Список выбранных пользователем причин отказа
    const selectedReasons = ref([])

    /**
     * Сбрасывает список выбранных причин отказа.
     */
    const resetSelectedReasons = () => {
        selectedReasons.value = []
    }

    return {
        title,
        options,
        selectedReasons,
        resetSelectedReasons
    }
})