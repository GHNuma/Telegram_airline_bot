let market='KZ';
let currency='kzt';
let limit=20;
let fromCity='ALA';
let toCity='';
let toDate='';
let reSit=false;
let sorting='price';
let fromDate=''
let oneWay=true
// let currentDate = new Date();
// let month = currentDate.getMonth() + 1; // Получение месяца (число от 0 до 11, поэтому добавляем 1)
// let year = currentDate.getFullYear();
// let fromDate=year+"-"+month;

module.exports = {
    market,
    currency,
    limit,
    fromCity,
    toCity,
    fromDate,
    toDate,
    reSit,
    sorting,
    oneWay
};