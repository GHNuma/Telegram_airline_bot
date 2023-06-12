const defaultOptions = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: 'Рынок 🌍️', callback_data: 'рынок' },
            ],
            [
                { text: 'Валюта 💵💴💶💷', callback_data: 'валюта' },
            ],
            [
                { text: 'Количество 📏', callback_data: 'количество' },
            ],
            [
                { text: 'Пункт отправления ✈️', callback_data: 'пункт отправления' },
            ],
            [
                { text: 'Пункт назначения 📍', callback_data: 'пункт назначения' },
            ],
            [
                { text: 'Дата вылета 📆', callback_data: 'дата вылета' },
            ],
            [
                { text: 'Дата возвращения 📅', callback_data: 'дата возвращения' },
            ],
            [
                { text: 'Пересадки 🛬☕️🛫', callback_data: 'пересадки' },
            ],
            [
                { text: 'Сортировка 🗂️', callback_data: 'сортировка' }
            ],
            [
                { text: 'Билет в один конец 🔛', callback_data: 'oneWay' }
            ]
        ],
        resize_keyboard: true,
        one_time_keyboard: true
    }
};

module.exports = defaultOptions