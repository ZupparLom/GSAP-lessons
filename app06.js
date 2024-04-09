'use strict'

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// let num = 0;

// for (let i = 10; i > num; i--) {
//     console.log(i);
// }


// Функция проверки на число
function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

  // Валидация ввода стоимости услуг
function getValidatedServicePrice(serviceName) {
    let price;
    do {
    price = prompt(`Сколько будет стоить ${serviceName}?`).trim();
    if (price === null) {
        // Пользователь отменил ввод
        console.error("Ввод был отменен.");
        return null;
    } else if (!isNumeric(price)) {
        console.warn ("Необходимо ввести числовое значение! Повторите ввод.");
    }
    } while (!isNumeric(price));
    
    return Number(price);
}

//Start data
let screenPrice = 12400; // цена реализации одного экрана
let contractorPercentage = 0.1 //10%



let titleProject = prompt("Название проекта?");
let screensValue = prompt("Какой тип экрана?", "Шаблонные, с уникальным дизайном, с анимациями").trim();
let responsive = confirm("Нужен ли респонсивный сайт?");
let service1 = prompt("Какой сервис нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой еще сервис тебе нужен?");
let servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?");


//Функции
let getAllServicePrices = function(){
    return  servicePrice1 + servicePrice2;
};
let allServicePrices = getAllServicePrices();


function getFullPrice() {
    return allServicePrices + screenPrice;
}
let fullPrice = getFullPrice();


function getTitle() {
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
}
let editedTitle = getTitle();


function getServicePercentPrices() {
    let contractorCut = fullPrice * contractorPercentage;
    return Math.round(fullPrice - contractorCut);
}
let servicePercentPrice = getServicePercentPrices();


function getRollbackMessage() {
    if (fullPrice > 50000) {
    return "Скидка клиенту: 10%";
    } else if (fullPrice > 20000 && fullPrice <= 50000) {
    return "Скидка клиенту: 5%";
    } else if (fullPrice > 0 && fullPrice <= 20000) {
    return "Скидка клиенту не предусмотрена";
    } else {
    return "Что-то пошло не так";
    }
};
let rollbackMessage = getRollbackMessage();


// Выводим результаты в консоль
console.log("Название проекта:", editedTitle);
console.log("Тип экрана:", screensValue);
console.log("Респонсивный сайт:", responsive ? "Да" : "Нет");
console.log("Сервис 1:", service1);
console.log("Стоимость сервиса 1:", servicePrice1);
console.log("Сервис 2:", service2);
console.log("Стоимость сервиса 2:", servicePrice2);
console.log("Стоимость экрана:", screenPrice);
console.log("Стоимость всех дополнительных услуг:", allServicePrices);
console.log("Полная стоимость проекта:", fullPrice);
console.log("Итоговая стоимость для клиента:", servicePercentPrice);
console.log(rollbackMessage);


