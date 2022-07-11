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


/* ЗАДАЧА 1
let personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "0");

const personalMovieDB = {
    count: personalMovieDB.count,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let movie = [];
let rate = [];
for (let i = 1; i <= 2; i++){
    movie[i] = prompt("Один из последних просмотренных фильмов?", "Logan");
    rate[i] = +prompt("На сколько вы его оцените?", "1");
    personalMovieDB.movies[movie[i]] = rate[i];
    document.write(`${movie[i]}:${rate[i]}<br>`);
}
console.log(personalMovieDB);
*/


/* УРОК 6 - УСЛОВИЯ
if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}


const num = 50;
if (num < 49) { 
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error');


const num1 = 50;

switch (num1) {
    case 49: console.log('Error');
    break;
    case 100: console.log('Много');
    break;
    case 50: console.log('Ок!');
    break;
    default: console.log('Не в этот раз!');
    break;
}
*/


/* УРОК  7 - ЦИКЛЫ
let num = 50;

while (num < 55) { 
    console.log(num);
    num++;
}


do {
    console.log(num);
    num++;
}
while (num < 55);


for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break; // останакливает цикл при выполнении условия
        continue; // пропуск нужного действия
    }

    console.log(i);
}
*/


/* ДОПОЛНИТЕЛЬНЫЙ УРОК - ЦИКЛ В ЦИКЛЕ И МЕТКИ
for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

let result = "";
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += i;
    }
    result += '\n';
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
    console.log(`First Level ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second Level ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) break first;
            console.log(`Third Level ${k}`);
        }
    }
}
*/


/* ЗАДАЧА 2
let personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "0");

const personalMovieDB = {
    count: personalMovieDB.count,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 1; i <= 2; i++){
    const a = prompt("Один из последних просмотренных фильмов?", "Logan");
    const b = prompt("На сколько вы его оцените?", "1");
if (a != null && b !=null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

let movie = [];
let rate = [];
for (let i = 1; i <= 2; i++){
    movie[i] = prompt("Один из последних просмотренных фильмов?", "Logan");
    rate[i] = +prompt("На сколько вы его оцените?", "1");
    if (movie[i] != null && rate[i] !=null && movie[i] != '' && rate[i] != '' && movie[i].length < 50) {
        personalMovieDB.movies[movie[i]] = rate[i];
    } else {
        i--;
    }
document.write(`${movie[i]}:${rate[i]}<br>`);
}

if (personalMovieDB.count < 10) { 
    console.log('Просмотрено довольно мало фильмов');
}else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
}else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
}else {
    console.log('Произошла ошибка');
}
console.log(personalMovieDB);
*/


/* УРОК 8 - ФУНКЦИИ
let num = 20;
// Function decloration
function showFirstMessage(text) {
    console.log(text);
    let num = 10;
}
showFirstMessage('Hello!');
console.log(num);


function calc (a,b) {
    return (a+b);
}
console.log(calc(1,2));
console.log(calc(5,6));


function ret() {
    let num = 50;
    return num;
}
const anotherOne = ret();
console.log(anotherOne);

// Function expression
const logger = function() {
    console.log("Hello");
};
logger();
// Стрелочная функция
const cal = (a, b) => { return a + b };
*/


/* ДОПОЛНИТЕЛЬНЫЙ УРОК - АРГУМЕНТЫ ФУНКЦИИ и ВАЖНОСТЬ RETURN
const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500,usdCurr);
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('done');
}
test();

function doNothing() { }
    console.log(doNothing() === undefined);
*/


/* УРОК 9 - МЕТОДЫ И СВОЙСТВА
const str = 'teSt';
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("q")); // Выводит позицию символа или слова

const logg = "Hello World";
console.log(logg.slice(6)); // Вырезает подстроку из строки

console.log(logg.substring(6)); // Вырезает подстроку из строки

console.log(logg.substr(6, 5)); // Вырезает подстроку из строки, вторым параметром принимает кол-во символов, которые необходимо вырезать

str.trim(); // Возвращает строку с вырезанными пробелами с начала и конца

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test)); // Переводит строку в число
console.log(parseFloat(test)); // Возвращает число из строки в десятичной форме
*/


/* ЗАДАЧА 3
let personalMovieDB.count;

const personalMovieDB = {
    count: personalMovieDB.count,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "0");

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "0");
    }
}
start();

function rememberMyFilms() {
    for (let i = 1; i <= 2; i++){
        const a = prompt("Один из последних просмотренных фильмов?", "Logan").trim();
        const b = prompt("На сколько вы его оцените?", "1").trim();
    if (a != null && b !=null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) { 
        console.log('Просмотрено довольно мало фильмов');
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    }else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    }else {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let gen = prompt(`Ваш любимый жанр под номером - ${i}`, "Фантастика");
        personalMovieDB.genres[i - 1] = gen;
    }
}
writeYourGenres();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);
*/


/* УРОК 10 - Callback
function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}
first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок');
}

learnJS('JavaScript', done);
*/


/* УРОК 11 - ОБЪЕКТЫ И ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);
//console.log(Object.keys(options).length);

//console.log(options.name);

//delete options.name;

//console.log(options);

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);
*/


/* УРОК 12 - МАССИВЫ И ПСЕВДОМАССИВЫ
const arr = [1, 12, 23, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
//arr[99] = 0;
//console.log(arr.length);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr} `);
});

//arr.pop(); // Удаляет последний элемент в массиве
//arr.push(10); // Добавлет элемент в конец массива

//console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

const str = prompt('','');
const products = str.split(', '); // Возвращает массив элементов из строки
products.sort(); // Сортировка внутри массива как строки
console.log(products.join('; ')); // Создает строку из массива с разделителем
*/


/* УРОК 13 - ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ, SPREAD ОПЕРАТОРЫ
const obj = {
    a: 5, 
    b: 1
};

//const copy = obj; // Ссылку

//copy.a = 10;
//console.log(copy);
//console.log(obj);

function copy(mainObj) {
    let objCopy ={};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
console.log(newNumbers);


const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add); // Используется для объединения массивов
clone.d = 20;
//console.log(add);
//console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asdafas';
console.log(newArray);
console.log(oldArray);


const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'lj', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'fb'];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);


const array = ['a', 'b'];
const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
*/


/* УРОК 14 - ПРОТОТИПИРОВАНИЕ
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = Object.create(soldier);

//const john = {
//    health: 100
//};

//john.__proto__ = soldier;

//Object.setPrototypeOf(john, soldier);


console.log(john.armor);
john.sayHello();
*/


/* ЗАДАЧА 4
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "0");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "0");
        }
    },
    rememberMyFilms: function() {
        for (let i = 1; i <= 2; i++){
            const a = prompt("Один из последних просмотренных фильмов?", "Logan").trim();
            const b = prompt("На сколько вы его оцените?", "1").trim();
        if (a != null && b !=null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) { 
            console.log('Просмотрено довольно мало фильмов');
        }else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        }else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        }else {
            console.log('Произошла ошибка');
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let gen = prompt(`Ваш любимый жанр под номером - ${i}`, "Фантастика");
            if (gen != null && gen != '') {
                personalMovieDB.genres[i - 1] = gen;
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
*/


/* УРОК 14 - ТИПИЗАЦИЯ
// To string
// 1)
console.log(typeof(String(4)));

// 2)
console.log(typeof(5+ ''));

const num = 5;
console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

// To Number
// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt('15px', 10)));

let answer = +prompt('Hello', '');

// To Boolean
// 0, '', null, undefined, NaN;
// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'55555'));
*/


/* УРОК 15
function createCounter() {
    let counter = 0;

    const myFunction = function() {
        counter = counter + 1;
        return counter;
    }

    return myFunction;
}   

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);
*/

/*
let x = 5;
console.log(x++); // 5
console.log([] + false - null + true); // NaN

let y = 1;
let k = y = 2;
console.log(k);

console.log([] + 1 + 2); // '12', пустой массив преобразовывается в пустую строку
console.log('1'[0]); // обращаемся к первому символу - 1
console.log(2 && 1 && null && 0 && undefined); // null
// И запинается на лжи
// ИЛИ запинается на правде
console.log(!!(1 && 2)  === (1 && 2));
                     //3
console.log(null || 2 && 3 || 4);

const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a == b); // false

console.log(+'infinity'); // NaN

console.log('Ёжик' > 'яблоко'); // false, сравнивается по символам unicode

console.log(0 || '' || 2 || undefined || true || false); // 2
*/