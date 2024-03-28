// let x = 10
// if (x > 10) {console.log('true');}
// else {console.log('false')};
// let a = 5;
// let b = '10';
// let res = a + +b
// console.log(a.toString());
// console.log(res);

// console.log(typeof a);
// console.log(typeof b);

// let age = prompt ('Your age');
// console.log(age);
// let a = 10;
// let res = a + +age;
// console.log(res);

let titleProject = prompt ('Название проекта?');
console.log(titleProject);
let screensValue = prompt ('Типы экранов? "шаблонные, с уникальным дизайном, с анимациями"');
console.log(screensValue)
let responsive = confirm ('Hужен ли респонсивный сайт?')
console.log(responsive);
let service1 = prompt ('Какой сервис нужен?')
console.log (service1);
let servicePrice1 = prompt ('Сколько это будет стоить?')
console.log(servicePrice1);
let service2 = prompt ('Какой еще сервис тебе нужен?')
console.log(service2);
let servicePrice2 = prompt ('Сколько будет стоить этот второй сервис?')
console.log(servicePrice2);
let screenPrice = 1000; //Цена экрана
let fullPrice = screenPrice + +servicePrice1 + +servicePrice2
console.log(fullPrice); 

//Процент партнеру
let partnerPrecentage = 15
let precentageCut = fullPrice * (partnerPrecentage/100)
let servicePercentPrice = Math.round (fullPrice - precentageCut);
console.log(servicePercentPrice, 'clean price'); 
if (fullPrice > 50000) {console.log('сделаем скидку в 10%')}
else if (fullPrice > 20000 && fullPrice <= 50000) {console.log('сделаем скидку 5%')}
else if (fullPrice > 0 && fullPrice <= 20000) {console.log('скидка не предусмотрена')}
else if (fullPrice <= 0) {console.log('Что то пошло не так')};