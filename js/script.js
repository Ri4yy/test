"use strict"; // строгий режим для проверки кода на правильность выполнения

/* УРОК 1 ТИПЫ ПЕРЕМЕННЫХ И СТРОГИЙ РЕЖИМ
let number = 5;
// Необходимо использовать тип задания переменной const
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    a: 50
};

obj.a = 10;
console.log(obj);

console.log(name);
var name = 'Ivan';
*/


/* УРОК 2 - МАССИВЫ И ОБЪЕКТЫ
let number = 4.6;

console.log(4/0); // Ошибка Infinity - бесконечность
console.log('string' * 9); // Ошибка NaN - не число

const persone = "Alex";

const bool = true; // булиновые значения - либо да, либо нет

console.log(something); // null - ничего не задано

let und;
console.log(und); // undefined - переменнная существует, но в ней ничего не содержится

// ОБЪЕКТЫ > массив частный случай объекта, а не отдельный тип данных
const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

//console.log(obj.name);
console.log(obj['name']);

// МАССИВ - может включать любые типы данных
let arr =['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[1]);
*/


/* ДОПОЛНИТЕЛЬНЫЙ УРОК - РАЗНИЦА МЕЖДУ МАССИВАМИ И ОБЪЕКТАМИ
const arr = ['a', 'b', 'c']; // У массивов ключ всегда фиксированный

arr[10] = '3456';

console.log(arr[10]);

const arrObj = {
    0: 'a',
    1: 'b',
    2: 'c',
    abc: {
        df: [],
        def: {

        }
    }
};

const b = 'b';

//arrObj.b = '1234'; // Добавление нового элемента в объект
arrObj[b] = '1234'; // Второй вариант записи нового значения

console.log(arrObj['b']);
console.log(arrObj[b]);

// const obj = {a: 1, b: 2};
const obj = {
    Anna: 500,
    Alice: 800
};
*/

/* УРОК 3 - ВЗАИМОДЕЙСТВИЕ С ПОЛЬЗОВАТЕЛЕМ
//Вся информация которая приходит с модальных окно - это строка
alert('Hello');// - сообщение

const result = confirm('Вы здесь?'); // модальное окно с вариантами ответа - ок и закрыть
console.log(result); // выводит булевое значение ответа

const answer = prompt('Вам есть 18?', '18'); // модальное окно с вопросом, +prompt - выводит числовое значение
console.log(answer);

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Какая у вас фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

console.log(answers);
*/


/*  УРОК 4 - ИНТЕРПОЛЯЦИЯ
const category = 'toys';

console.log(`https://someurl.com/${category}`);

const user = 'Ivan';

alert(`Привет, ${user}`);
*/


/* УРОК 5 - ОПЕРАТОРЫ
console.log('arr' + ' - object');
console.log(4 + ' - object');

let incr = 10, 
    decr = 10;

    ++incr;
    --decr;
console.log(incr);
console.log(decr);

console.log(5%2);

console.log(2*4 == 8);
*/

