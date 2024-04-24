//Функция для генерации случайного числа
function randomGenerate(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Созадание главной функции
const gameBotFunction = function () {
    let mysteryNumber = randomGenerate(1, 100); // Генерация загаданного числа
    let tries = 2; // Количество попыток

    function getResult() {
        let answerNum = prompt('Угадайте число от 1 до 100');
        if (answerNum === null) {
            alert('Вы завершили игру');
            return;
        }
        answerNum = parseInt(answerNum.trim()); // Удаление лишних пробелов и преобразование в число

        if (isNaN(answerNum)) {
            alert('Введите число');
            getResult();
            return;
        }

        if (answerNum > mysteryNumber) {
            alert('Загаданное число меньше');
        } else if (answerNum < mysteryNumber) {
            alert('Загаданное число больше');
        } else {
            if (confirm('Поздравляем! Вы угадали число. Хотите сыграть еще раз?')) {
                tries = 2; // Сброс попыток
                gameBotFunction(); // Перезапуск игры
                return;
            } else {
                alert('Вы завершили игру');
                return;
            }
        }

        if (tries > 0) {
            tries--;
            getResult();
        } else {
            if (confirm('Вы исчерпали все попытки. Хотите попробовать снова?')) {
                tries = 2; // Сброс попыток
                gameBotFunction(); // Перезапуск игры
            } else {
                alert('Вы завершили игру');
            }
        }
    }

    getResult();
}

gameBotFunction(); // Запуск игры