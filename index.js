
const {getCityesByCountryCode,getCityByAirportCode} = require('./const/IATA_city')
const {searchTickets,airLineCompanyByCodeAirlineCode} = require('./controller/tickets')
const countries = require('./const/countries')
const vaults = require('./const/vaults')
const TelegramApi = require('node-telegram-bot-api')
const dotenv = require('dotenv')
const defaultOption = require('./const/options')
let {market,
    currency,
    limit,
    fromCity,
    toCity,
    fromDate,
    toDate,
    reSit,
    sorting,oneWay} = require('./const/config');
dotenv.config()
const bot = new TelegramApi(process.env.TOKEN,{polling:true})
bot.setMyCommands([
    {command:'/tickets',description:'Показать меню запросов'},
    {command:'/filter',description:'Настройки фильтра поиска'},
    {command:'/profile',description:'Перейти на настройки профиля'},
])
let page = 0;
const countriesNames = countries.map(country => {
    return country.name
});
const vaultNames = vaults.map(vault => vault.code);
let ticketsNow=[];
let ticketsNowLinks=[];
let cityNames =[]
function  sendUpdatedOptions(chatId, options,text,finish=false,chosen='',type) {
    const keyboard = [];
    let row = [];
    let startIndex=50 * page;
    let lastIndex=50 + 50 * page;
    const maxButtonsPerRow = 2;
    const pref = type ? type+'_' : ''
    if(type==='ticket'){
        const navigationRow = [];
        const buyKeyboard=[[{ text: 'Купить', callback_data:pref +(1+page),url:`${process.env.AVIASALESWEB}${ticketsNowLinks[page]}`}]]
        if (page > 0) {
            navigationRow.push({ text: '⬅️', callback_data: 'prevPage'+'_'+type});
        }
        if ((page + 1) < options.length) {
            navigationRow.push({ text: '➡️', callback_data: 'nextPage'+'_'+type });
        }
        if (navigationRow.length > 0) {
            buyKeyboard.push(navigationRow);
        }

        bot.sendMessage(chatId, options[page], { reply_markup: {
                inline_keyboard: buyKeyboard,
                one_time_keyboard: true,
                resize_keyboard: true
            } })
        return;
    }
    if (finish && chosen) {
        bot.sendMessage(chatId, `Вы выбрали ${chosen}`).then(()=>{
            bot.sendMessage(chatId, `Ваши текущие настройки\n 
            Рынок:${market}\n
            Валюта:${currency}\n 
            Количество:${limit}\n 
            Пункт вылета:${fromCity}\n 
            Пункт прилёта:${toCity}\n 
            Дата вылета:${fromDate}\n 
            Дата прилёта:${toDate}\n 
            Тип пересадок:${reSit}\n 
            Сортировка по:${sorting}\n 
            Путь в один конец:${oneWay}.\n\n
            Возвращаемся к меню`,defaultOption)
        })
        return;
    }
    options.slice(startIndex,lastIndex<=options.length ? lastIndex : options.length).forEach((option, index) => {
        if(type==='country' || type==='city' || type==='currency' || type==='toCountry'){
            row.push({ text: option, callback_data: pref + option.toLowerCase().replace(/ /g, "_")+'_'+(index+(50*page)) });
        } else {
            row.push({ text: option, callback_data: pref + option.toLowerCase().replace(/ /g, "_")});
        }

        // Split into a new row if maximum buttons per row is reached or it's the last option
        if ((index + 1) % maxButtonsPerRow === 0 || index === options.length - 1) {
            keyboard.push(row);
            row = [];
        }
    });
    const navigationRow = [];
    if(type==='country' || type==='city' || type==='currency' || type==='toCountry'){
    if (page > 0) {
        navigationRow.push({ text: '⬅️', callback_data: 'prevPage'+'_'+type });
    }
    if ((page + 1) * 50 < options.length) {
        navigationRow.push({ text: '➡️', callback_data: 'nextPage'+'_'+type });
    }
    if (navigationRow.length > 0) {
        keyboard.push(navigationRow);
    }}
    const replyMarkup = {
        inline_keyboard: keyboard,
        one_time_keyboard: true,
        resize_keyboard: true
    };
    bot.sendMessage(chatId, text, { reply_markup: replyMarkup })
    if(finish===true){
        bot.sendMessage(query.message.chat.id, `Ваши текущие настройки\n 
            Рынок:${market}\n
            Валюта:${currency}\n 
            Количество:${limit}\n 
            Пункт вылета:${fromCity}\n 
            Пункт прилёта:${toCity}\n 
            Дата вылета:${fromDate}\n 
            Дата прилёта:${toDate}\n 
            Тип пересадок:${reSit}\n 
            Сортировка по:${sorting}\n 
            Путь в один конец:${oneWay}`);
    }
}

bot.onText(/\/start/,(msg)=>{
    const chatId = msg.chat.id;
    bot.sendMessage(chatId,'Привет, я бот который будет вам помогать найти авиа рейсы').then(()=>{
            bot.sendMessage(chatId, 'Посмотрите меню фильтраций',defaultOption)
    }
    )
})

bot.onText(/\/filter/,(msg)=>{
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, `Ваши текущие настройки\n 
            Рынок:${market}\n
            Валюта:${currency}\n 
            Количество:${limit}\n 
            Пункт вылета:${fromCity}\n 
            Пункт прилёта:${toCity}\n 
            Дата вылета:${fromDate}\n 
            Дата прилёта:${toDate}\n 
            Тип пересадок:${reSit}\n 
            Сортировка по:${sorting}\n 
            Путь в один конец:${oneWay}.\n\n
            Выберите опцию:`, defaultOption);
})
bot.onText(/\/tickets/,(msg)=>{
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Выберите опцию:', {reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Искать Авиарейсы️', callback_data: 'search_avia_tickets' },
                ],
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }});
})


//_________________________________________________________________//
bot.on('callback_query', (query) => {
    const option = query.data;

    switch (option) {
        case 'рынок':
            sendUpdatedOptions(query.message.chat.id, countriesNames,'Выберите страну:',false,'','country')
            break;
        case 'валюта':
            sendUpdatedOptions(query.message.chat.id, vaultNames,'Выберите валюту',false,'','currency')
            break;
        case 'пункт отправления':
            getCityesByCountryCode(market).then(data=>{
                cityNames = data.map(city => city.name)
                page=0
                sendUpdatedOptions(query.message.chat.id, cityNames,'Выберите город отправки:',false,'','fromCity')
            })

            break;
        case 'пункт назначения':
            sendUpdatedOptions(query.message.chat.id, countriesNames,'Выберите страну назначения:',false,'','toCountry')
            break;
        case 'дата вылета':
            bot.sendMessage(query.message.chat.id, 'Напишите дату отправления(Формат:YYYY-MM или YYYY-MM-DD). Например: 2023-10-14', {
                reply_markup: {
                    force_reply: true
                }
            });
            break;
        case 'дата возвращения':
            bot.sendMessage(query.message.chat.id, 'Напишите дату возвращения(Формат:YYYY-MM или YYYY-MM-DD). Например: 2023-10-24', {
                reply_markup: {
                    force_reply: true
                }
            });
            break;
        case 'пересадки':
            sendUpdatedOptions(query.message.chat.id, ['С пересадкой', 'Без пересадки'],'Искать рейсы с пересадками или без?',false,'','reSit')
            break;
        case 'количество':
            sendUpdatedOptions(query.message.chat.id, ['10','20','50','100','Другое'],'Выберите количество рейсов которые хотите получить:')
            break;
        case 'сортировка':
            sendUpdatedOptions(query.message.chat.id, ['По цене','По популярности'],'Выберите тип сортировки:',false,'','sort')
            break;
        case 'oneWay':
            sendUpdatedOptions(query.message.chat.id, ['Да','Нет'],'Билет в один конец?',false,'','oneWay')
            break;
        case 'prevPage_country':
            page-=1;
            sendUpdatedOptions(query.message.chat.id, countriesNames,'<<',false,'','country')
            break;
        case 'nextPage_country':
            page+=1;
            sendUpdatedOptions(query.message.chat.id, countriesNames,'>>',false,'','country')
            break;
        case 'prevPage_toCountry':
            page-=1;
            sendUpdatedOptions(query.message.chat.id, countriesNames,'<<',false,'','toCountry')
            break;
        case 'nextPage_toCountry':
            page+=1;
            sendUpdatedOptions(query.message.chat.id, countriesNames,'>>',false,'','toCountry')
            break;
        case 'prevPage_city':
            page-=1;
            sendUpdatedOptions(query.message.chat.id, cityNames,'<<',false,'','city')
            break;
        case 'nextPage_city':
            page+=1;
            sendUpdatedOptions(query.message.chat.id, cityNames,'>>',false,'','city')
            break;
        case 'prevPage_currency':
            page-=1;
            sendUpdatedOptions(query.message.chat.id, vaultNames,'<<',false,'','currency')
            break;
        case 'nextPage_currency':
            page+=1;
            sendUpdatedOptions(query.message.chat.id, vaultNames,'>>',false,'','currency')
            break;
        case 'prevPage_ticket':
            page-=1;
            sendUpdatedOptions(query.message.chat.id, ticketsNow,'<<',false,'','ticket')
            break;
        case 'nextPage_ticket':
            page+=1;
            sendUpdatedOptions(query.message.chat.id, ticketsNow,'>>',false,'','ticket')
            break;
        case 'search_avia_tickets':
try{
    searchTickets(market, currency, limit, fromCity, toCity, fromDate, toDate, reSit, sorting, oneWay, page)
        .then(async (response) => {
            if(response.error){
                console.log('Случилась ошибка')
                bot.sendMessage(query.message.chat.id,response.error)
            } else {
                const tickets = response;
                ticketsNow = await Promise.all(tickets.map(async (ticket) => {
                    ticketsNowLinks.push(ticket?.link)

                    const cityTo = await getCityByAirportCode(ticket?.destination_airport).then(response => {
                        return response[0]?.name
                    });
                    const airCompany = await airLineCompanyByCodeAirlineCode(ticket?.airline)
                        .then(response => {
                            return response?.length>0 ? response[0]?.name : 'Не получилось узнать'
                        });

                    const date = new Date(ticket?.departure_at);
                    const year = date.getFullYear();
                    const month = date.getMonth() + 1;
                    const day = date.getDate();
                    const hours = date.getHours();
                    const minutes = date.getMinutes();

                    const formattedDepDate = `${year}:${month < 10 ? '0' : ''}${month}: ${day < 10 ? '0' : ''}${day} и время ${hours}:${minutes}`;

                    const ticketInfo = `Направление ${fromCity} (${ticket?.origin_airport})➡️${cityTo} (${ticket?.destination_airport})\n` +
                        `Цена: ${ticket?.price} ${currency}\n` +
                        `Авиакомпания: ${airCompany}\n` +
                        `Номер рейса: ${ticket?.flight_number}\n` +
                        `Вылет: ${formattedDepDate}\n` +
                        `Пересадки: ${ticket?.transfers===0 ? 'нету' : ticket?.transfers}\n` +
                        `Пересадки на обратном пути: ${ticket?.return_transfers===0 ? 'нету' : ticket?.return_transfers}\n` +
                        `Время в полете туда: ${ticket?.duration_to} минут\n` +
                        `Время в полете обратно: ${ticket?.duration_back === 0 ? 'Обратного рейса нету': ticket?.duration_back + ' минут'}\n` +
                        `Общее время полета: ${ticket?.duration} минут`;

                    return ticketInfo;
                }));
                sendUpdatedOptions(query.message.chat.id, ticketsNow, 'Вот доступные билеты', false, '', 'ticket');
            }

        });
} catch (e){
    console.log('Билеты по вашему запросу отсутствуют. Поменяйте фильтры и попробуйте заново')
}
            break;
        default:
            break;
    }




});

bot.on('callback_query', (query) => {
    const option = query.data;
    if (option.startsWith('country')){
        const selectedCountry = option.split('_')[1].split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");

        const index = option.split('_')[2];
        market=countries[index].code
        getCityesByCountryCode(market).then(data=>{
            cityNames = data.map(city => `${city.name}(${city.city_code})`)
            page=0
            sendUpdatedOptions(query.message.chat.id, cityNames,'Вы выбрали страну:'+selectedCountry+'.\nВыберите Город отправки:',false,'','fromCity')
        })
    } else if (option.startsWith('currency_')){
        const selectedCurrency = option.split('_')[1].split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
        sendUpdatedOptions(query.message.chat.id, [],'Выберите валюту:',true,selectedCurrency)
        currency=selectedCurrency;
        page=0
    } else if(option.startsWith('fromCity_')){
        const selectedFromCity = option.split('_')[1].split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
        sendUpdatedOptions(query.message.chat.id, [],'',true,selectedFromCity)
        fromCity=selectedFromCity.split('(')[1].split(')')[0].toUpperCase()
        page=0
    }else if(option.startsWith('toCountry_')){
        const selectedToCountry = option.split('_')[1].split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
        const index = option.split('_')[2];
        const selectedToCountryCode=countries[index].code
        getCityesByCountryCode(selectedToCountryCode).then(data=>{
            cityNames = data.map(city => `${city.name}(${city.city_code})`)
            page=0
            sendUpdatedOptions(query.message.chat.id, cityNames,'Вы выбрали страну:'+selectedToCountry+'.\nВыберите Город назначения:',false,'','toCity')
        })
    }else if(option.startsWith('toCity_')){
        const selectedToCity = option.split('_')[1].split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
        sendUpdatedOptions(query.message.chat.id, [], '', true, selectedToCity)
        toCity=selectedToCity.split('(')[1].split(')')[0].toUpperCase();
        page=0
    }else if(option.startsWith('reSit_')){
        const optionParts=option.split('_')
            let combinedWords = optionParts[1] +" "+ optionParts[2]; // Объединение 2 и 3 слова с помощью "_"
        const needReSit = combinedWords === 'с пересадкой'
        sendUpdatedOptions(query.message.chat.id, [],'',true,combinedWords,'')
        reSit=needReSit
    }else if(option.startsWith('sort_')){
        const optionParts=option.split('_')
        let selectedSort = optionParts[1] +" "+ optionParts[2]
        sendUpdatedOptions(query.message.chat.id, [],'',true,selectedSort)
        sorting=selectedSort==='по популярности' ? 'route' : 'price';
    }else if(option.startsWith('oneWay_')){
        const selectedOneWay=option.split('_')[1] === "да"
        oneWay=selectedOneWay
        sendUpdatedOptions(query.message.chat.id, [],'',true,selectedOneWay ? "в один конец" : "в оба конца")
    } else if (option.startsWith('другое')) {
        bot.sendMessage(query.message.chat.id, 'Введите количество:');
    } else if (/^\d+$/.test(option)) {
        const quantity = parseInt(option);
        sendUpdatedOptions(query.message.chat.id,[], '',true,'количество: ' + quantity);
        limit=quantity
    }
});
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    if (msg.reply_to_message && msg.reply_to_message.text === 'Напишите дату отправления(Формат:YYYY-MM или YYYY-MM-DD). Например: 2023-10-14') {
        sendUpdatedOptions(chatId,[], '',true,'дату отправления:: ' + text);
        fromDate=text
        return
    }
    if (msg.reply_to_message && msg.reply_to_message.text === 'Напишите дату возвращения(Формат:YYYY-MM или YYYY-MM-DD). Например: 2023-10-24') {
        sendUpdatedOptions(chatId,[], '',true,'дату возвращения:: ' + text);
        toDate=text
        return
    }

    if (/^\d+$/.test(text)) {
        const quantity = parseInt(text);
        sendUpdatedOptions(chatId,[], '',true,'количество: ' + quantity);
        limit=quantity

    }
});

bot.on("polling_error", (e)=>{console.log(e)});