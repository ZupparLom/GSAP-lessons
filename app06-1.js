//Переменые
let screenPrice;
let percentage = 10
let allServicePrices;
let newTitle = '';
let titleProject;
let screensValue;
let responsive;
let service;
let serviceSecond;

//Функции

//Проверка на число 
const checkIsNumber = function(value) {
    return !isNaN(parseFloat(value)) && isFinite(value)
}

//Запросы
const asking = function() {
    titleProject = prompt('Название проекта', 'КальКулЯтор')
    screensValue = prompt('шаблоные, с уникальным дизайном, с анимациями', 'с анимациями')
    screenPrice = prompt('Сколькоэто будет стоить?', 12000)

    while (!checkIsNumber(screenPrice) || screenPrice.trim() === '' || screenPrice === null) {
        screenPrice = prompt('Сколькоэто будет стоить?', 12000)
    }
    screenPrice = Number(screenPrice)

    responsive = prompt('Нужен ли респонсив на сайте?', 'нужен')

}



//
const getAllServicePrices = function() {
    let sum = 0

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service = prompt('Какой дополнителный тип услуг нужен?', 'Услуга1')
        } else if (i === 1) {
            serviceSecond = prompt('Какой дополнителный тип услуг нужен?', 'Услуга2')
        }

        let textFormPrompt = '';

        while (!checkIsNumber(textFormPrompt) || textFormPrompt.trim() === '' || textFormPrompt === null) {
            textFormPrompt = prompt('Сколькоэто будет стоить?')
        }

        sum += Number(textFormPrompt)

    }

return sum

}


function getFullPrice() {
    return screenPrice + allServicePrices
}

const getServicePercentPrices = function () {
    return Math.round (fullPrice - (fullPrice * (percentage / 100)))
}

const getTitle = function() {
    return titleProject.trim() [0].toUpperCase() + titleProject.trim().slice(1).toLowerCase()
}


const getPercentMessage = function(price) {

    if(price > 50000) {
        return 'Делаем скидку 10%'
    } else if (price > 20000 && price < 40000) {
        return 'Делаем скидку 5%'
    } else if (price < 20000 && price > 0) {
        return 'Скидка не предусмотрена'
    } else if (price < 0) {
        return 'Что-то пошло не так'
    } else if (price === 0 || price === 20000 || price === 50000) {
        return 'Проверка на строгое равенство'
    }

}


//Вызов функций
asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice ();
servicePercentPrice = getServicePercentPrices();
newTitle = getTitle ();

console.log(newTitle);
console.log(allServicePrices);
console.log(fullPrice);
console.log(servicePercentPrice);
console.log(getPercentMessage(fullPrice))