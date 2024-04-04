// function foo() {console.log('Hello')}

// foo ()


// let name = 'Fool'

// function foo () {
//     let age = 27
//     console.log('Hello', name);
//     console.log('I am', age);
// }

// foo()

// 'use strict'

// let name = 'Hool'

// function foo() {
//     name = 'Gool'
//     console.log('Hi ', name)
// }
// console.log('Hi ', name)

// foo()

const titleProject = prompt("Название проекта?");
const screensValue = prompt("Какой тип экрана?", "Шаблонные, с уникальным дизайном, с анимациями").trim();
const responsive = confirm("Нужен ли респонсивный сайт?");
const service1 = prompt("Какой сервис нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой еще сервис тебе нужен?");
const servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?");
const screenPrice = 12400; // цена реализации одного экрана

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

function getServicePercentPrices() {
    let contractorPercentage = 10;
    let contractorCut = fullPrice * (contractorPercentage / 100);
    return Math.round(fullPrice - contractorCut);
}

function getRollbackMessage() {
    let message;
    if (fullPrice > 50000) {
        message = "Скидка клиенту: 10%";
    } else if (fullPrice > 20000 && fullPrice <= 50000) {
        message = "Скидка клиенту: 5%";
    } else if (fullPrice > 0 && fullPrice <= 20000) {
        message = "Скидка клиенту не предусмотрена";
    } else {
        message = "Что-то пошло не так";
    }
    console.log(message);
}

let editedTitle = getTitle();
let servicePercentPrice = getServicePercentPrices();

console.log("Название проекта:", editedTitle);
console.log("Тип экрана:", screensValue);
console.log("Респонсивный сайт:", responsive);
console.log("Сервис 1:", service1);
console.log("Стоимость сервиса 1:", servicePrice1);
console.log("Сервис 2:", service2);
console.log("Стоимость сервиса 2:", servicePrice2);
console.log("Стоимость экрана:", screenPrice);
console.log("Стоимость всех дополнительных услуг:", allServicePrices);
console.log("Полная стоимость проекта:", fullPrice);
console.log("Итоговая стоимость для клиента:", servicePercentPrice);

getRollbackMessage();