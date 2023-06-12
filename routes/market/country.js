// const {sendUpdatedOptions,bot} = require('../../index')
// bot.on('callback_query', (query) => {
//     const option = query.data;
//     // Handle the selected option
//     console.log(option)
//     switch (option) {
//         case 'казахстан':
//             sendUpdatedOptions(query.message.chat.id, ['Алматы', 'Астана', 'Шымкент'],'Выберите Страну:')
//             break;
//         case 'россия':
//             sendUpdatedOptions(query.message.chat.id, ['Москва', 'Сант-Петербург', 'США'],'Выберите Страну:')
//             break;
//         case 'сша':
//             sendUpdatedOptions(query.message.chat.id, ['Ньй-Йорк', 'Аляска', 'Вашингтон'],'Выберите Страну:')
//             break;
//         default:
//             sendUpdatedOptions()
//             break;
//     }
//
// });