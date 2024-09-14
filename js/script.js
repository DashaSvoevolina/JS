//для проектов обычно создается отдельная папка и файл со скриптом
//console.log(1);


////ПЕРЕМЕННЫЕ И СТРОГИЙ РЕЖИМ
// "use strict"; //работа в современном режиме
// let number = 5;
// const leftBorderWidth = 1;
// const obj = {
//     a: 50
// };
// obj.a = 10;
// console.log(obj); //константы можно изменять в каких-то случаях


////ТИПЫ ДАННЫХ
////ОБЪЕКТЫ
// const obj = {
//     //данные внутри объекта называются его свойствами
//     //действия внутри объекта называются его методами
//     name: 'Dasha',
//     age: 18,
//     isMarried: false
// };

// //мы можем обратиться к свойству объекта с помощи точки или квадратных скобок
// console.log(obj.age);
// console.log(obj['name']);

// //массив это частный случай объекта
// let arr = ['plum.png', 'orange.jpg', 6, {}, [], 'apple.bmb'];
// console.log(arr[0]); //обращаемся к первому элементу массива(plum.png)

// //работа с объектами
// const arrObj = {
//     a: 1,
//     '1': 2,
//     2: 'c'
// }
// arrObj.b = '1234';//создаст новое свойтсво в объекте b: 1234
// arrObj['b'] = '1234';//второй споособ создания нового свойства
// const b = 'b';
// arrObj[b] = '1234';//третий способ(переменная b уже была создана)


// //ПРОСТОЕ ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ
// allert('Hello') //просто выведет сообщение: "Hello"

// const result = confirm("Are you here?"); //выведет сообщение: "Are you here?" и две кнопки
// console.log(result)// в зависимости от выбора кнопки в переменную result запишется либо true либо false

// const answer = prompt("Вам есть 18?",""); //вторые ковычки нужны для дефолтного ответа. Команда выведет вопрос:"Вам есть 18?", строку 
// //с дефолтным ответом и две кнопки. В переменную answer будет записан результат, который ввел пользователь, с типом данных - строка
// console.log(typeof(answer))//команда выведет тип данных перемнной answer

// const answerr = +prompt("Вам есть 18?","");//в этом случае типом данных переменной answerr будет number

// const answers = [];
// answers[0] = prompt("Как ваше имя?", "Даша");
// answers[1] = prompt("Какая у вас фамилия?", "Своеволина");
// answers[2] = prompt("Сколько вам лет?", "18");
// document.write(answers);//эта команда выведет наш массив на страничку(ее минус в том, что она убирает все остальное, что может быть на странице)


// //ИНТЕРПОЛЯЦИЯ
// const category = 'toys';

// console.log('https://someurl.com/' + category + '/' + '4');//это старая версия написания кода
// console.log(`https://someurl.com/${category}/5`);// новая версия написания кода ВНИМАНИЕ НА КОВЫЧКИ


// //ОПЕРАТОРЫ В JS
// console.log(4 + "5"); //выведет 45
// console.log(4 + +"5"); //выведет 9

// //инкремент и декремент
// let incr = 10,
//     decr = 10;
// // incr++;
// // decr--;

// // постфиксная и префиксная формы
// console.log(incr++);
// console.log(decr--); //выведет: 10 и 10

// console.log(++incr);
// console.log(--decr); //выведет: 11 и 9

// //сравнение
// console.log(4*2 == 8); //выведет true
// console.log(4*2 == '8'); //тоже выведет true
// console.log(4*2 === '8'); //выведет false, так как это строгое сравнение и оно сравнивает типы данных тоже

// //логические операции
// //&& - логическое И
// //|| - логическое ИЛИ
// //! - логическое отрицание 
// //!= - не равно
// //!== - строгое не равно
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','5');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','5');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};
// const film1 = prompt('Один из последних просмотренных фильмов?', 'Гарри Поттер');
// const grade1 = +prompt('На сколько оцените его?', '9');
// const film2 = prompt('Один из последних просмотренных фильмов?', 'Гарри Поттер');
// const grade2 = +prompt('На сколько оцените его?', '9');
// personalMovieDB.movies[film1] = grade1;
// personalMovieDB.movies[film2] = grade2;
// console.log(personalMovieDB)

function rememberMyFilms(){
    questions: for(let i = 1; i < 3; i++){
        const film = prompt('Один из последних просмотренных фильмов?', 'Гарри Поттер').trim();
        const grade = +prompt('На сколько оцените его?', '9').trim();
        if(film === null || grade === null ||film === '' || grade === '' || film.length > 50){
            i--;
            continue questions; 
        } else{
            personalMovieDB.movies[film] = grade;
            console.log('done');
        }
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    console.log(personalMovieDB);
    if(personalMovieDB.count < 10){
        alert('Просмотренно довольно мало фильмов');
    }  
    if((personalMovieDB.count > 9) && (personalMovieDB.count < 30)){
        alert('Вы - классический зритель');
    } 
    if(personalMovieDB.count > 29){
        alert('Вы киноман');
    }
}

detectPersonalLevel();

function showMyDB(){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGeners(){
    for(let i = 1; i < 4; i++ ){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGeners();

// let a = 0;
// question: while(a < 2){
//     const film = prompt('Один из последних просмотренных фильмов?', 'Гарри Поттер');
//     const grade = +prompt('На сколько оцените его?', '9');
//     personalMovieDB.movies[film] = grade;
//     if(film === false || film.length > 50){
//         break question; 
//     }
//     a++;
// }

// questio: do{
//     const film = prompt('Один из последних просмотренных фильмов?', 'Гарри Поттер');
//     const grade = +prompt('На сколько оцените его?', '9');
//     personalMovieDB.movies[film] = grade;
//     if(film === false || film.length > 50){
//         break questio; 
//     }
//     a++;
// }
// while(a < 1);

// //УСЛОВИЯ
// const num = 50;
// if(num < 49){
//     console.log('Мало')
// } else if(num > 100){
//     console.log('Много') 
// } else{
//     console.log('Верно')
// }

// //тернарный оператор
// (num === 50)?console.log('Ok'):console.log('Error');//первое - условие; второе - если условие верно; третье - если условие неверно

// // switch case
// switch(num){
//     case 49:
//         console.log('Неверно');
//         break;   
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('Верно');
//         break;      
//     default:
//         console.log('Не в этот раз');
//         break;   
// }


// //ЦИКЛЫ
// let num = 50;
// //1)
// while(num < 55){
//     console.log(num);
//     num ++;
// }
// //2)
// do{
//     console.log(num);
//     num++;
// }
// while(num < 55);
// //3)
// for(let i = 1; i < 8; i++){
//     console.log(i);
// }

// //метки
// first: for(let i = 1; i < 8; i++){// first - является меткой
//     console.log(`First level: ${i}`);
//     for(let j = 1; j < 8; j++){
//         console.log(`Second level: ${j}`);
//         for(let k = 1; k < 8; k++){
//             if(k === 2) continue first;// переход на метку
//             console.log(`Third level: ${k}`);
//         }
        
//     }
    
// }



// //ФУНКЦИИ
// function showFirstMessege(){
//     console.log('Hell world!');
// }// создали функцию
// showFirstMessege();//вызвали функцию

// function showFirstMessege(text){
//     console.log(text);
// }
// showFirstMessege("Hello world!");// функция с аргументом

// //когда функция видит retun, она прекращает работу
// function calc(a, b){
//     return(a + b);
//     console.log("hbhjj j");//функция не выполнит этот код, unreachable code - недостижимый код
// }
// console.log(calc(4,5));

// //function declaration
// // обычные функции, создаются до начала выполнения скрипта
// function calc(a, b){
//     return(a + b);
// }

// // function expression
// // создаются только тогда, когда доходит поток кода, можно вызвать только после объявления
// let foo = function(a, b){
//     return(a + b);
// };// не забывать после этой функции ставить;

// //стрелочные функции
// // не имеют своего контекста
// const calc = (a, b) => a + b;
// const calc = a => a + b;
// const calc = (a, b) => {
//     a + b;
//     console.log(a);
// };


// // МЕТОДЫ И СВОЙСТВА СТРОК И ЧИСЕЛ

// //свойство length
// const str = "test";
// console.log(str.length)//выведет 4

// //метод dir
// console.dir(Number)//выведет всю информацию о типе данных "Number"

// //методы изменения регистра(не меняют строку напрямую)
// console.log(str.toUpperCase());// выведет строку в верхнем регистре
// console.log(str.toLowerCase());// выведет строку в нижнем регистре

// //indexOf
// const fruit = "Some fruit";
// console.log(fruit.indexOf('fruit'));//выведет 5(с какого индекса начинается искомая строка; если выведет -1, то искомой строкив переменной нет)

// //изменения строк(режим строки)
// const logg = "Hello world";
// console.log(logg.slice(6,11));//выведет world. Первый аргумент - индекс, с которого начинается строка; второй аргумент- индекс до которого она продолжается(не включительно).Если написан один аргумент, то с него начинается строка и обрежется до конца
// console.log(logg.slice(-5,-1));//выведет worl. Отрицательные аргументы- индексы справа налево
// console.log(logg.substring(6,11));// то же самое. Нельзя использовать отрицательные аргкменты и можно делать первый аргумент больше второго(не рекомендуется)
// console.log(logg.substr(6,5));//выведет world. Первый аргумент - индекс, с которого начнется строка; второй аргумент - длина строки

// //числа
// const num = 12.2;
// console.log(Math.round(num));//выведет 12. Округляет
// const test = "12.2px";
// console.log(parseInt(test));//выведет 12 в числовом типе. Но по идее он переводит числа в разные системы счисления
// console.log(parseFloat(test));//выведет 12.2 в числовом типе. Но по идее он переводит числа в десятичную систему счисления


// // CALLBACK - ФУНКЦИИ
// function first(){
//     //Do something
//     setTimeout(function(){
//         console.log(1);
//     }, 500); //замедляем функцию на пол секунды
// }

// function second(){
//     console.log(2);
// }

// first();
// second();//получается, что вторая функция выведет результат быстрее первой

// function learnJS(lang, callback){
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// learnJS('JavaScript', function(){
//     console.log('Я прошел этот урок');
// }) //сначала выведет:" Я учу JavaScript",а потом: "Я прошел этот урок"


// //ОБЪЕКТЫ, ДЕКСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ
// const options ={
//     name: 'test',
//     weight: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function(){
//         console.log('test');
//     }//сделали сами метод
// };

// options.makeTest();//запустили метод

// delete options.name;//удалит свойство name из объекта

// for(let key in options){
//     if(typeof(options[key] === 'object')){
//         for(let i in options[key]){
//             console.log(`Свойство ${key} имеет значение ${options[key][i]}`);//если вдруг одно из свойств объекта еще один объект, то JS не сможет просто так превратить его в строку, для этого мы запускаем в таком случае еще один for in
//         }
//     } else{
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }//перебирает все свойства объекта и будет выводить их по очереди. Например первая строка будет:"Свойство name имеет значение test"

// console.log(Object.keys(options));//создаст массив только из ключей нашего объекта:['name', 'weight', 'height', 'colors']
// console.log(Object.keys(options).length);//выведет количество свойств в объекте       

// //Деструктуризация объекта JS — это синтаксическое удобство, которое облегчает извлечение данных из массивов или объектов, позволяя прямо «распаковывать» их значения в переменные
// const{border, bg} = options.colors;
// console.log(border);// выведет black



// //МАССИВЫ И ПСЕВДОМАССИВЫ
// const arr = [1, 2, 3, 6, 8];

// arr.pop();//метод, который удаляет последний элемент массива
// arr.push(10);//метод, который добавляет элемент в конец массива

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// } //перебираем все элементы массива

// for(let value of arr){
//     console.log(arr[value]);
// }//перебираем элементы массива, но уже с прмрщью for of

// console.log(arr.length);// выведет 5; т.е. последний индекс массива + 1

// arr.forEach(function(item, i, arr){//аргументы функции: первый - элемент массива; второй - его индекс; третий - ссылаемся на сам массив
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// })//forEach перебирает все элементы массива и можно для каждого 'элемента массива использовать функцию 
// //for of имеет преимущество в том, что там можно использовать break и continue

// const str = prompt("", "");
// const products = str.split(", ");//создаст массив из данных, которые пользователь ввел в строку(!при этом данные должны быть разделены запятой и пробелом)
// products.sort();//всегда сортирует массив, как строки(дефолтно - в алфавитном порядке)
// console.log(products.join('; '));//выведет массив ввиде строки, где данные разделяются - "; "

// function compareNum(a, b){
//     return a - b;
// }
// arr.sort(compareNum);//отсортирует числа в массиве по возрастанию

// // У псевдомассивов не никаких методов


//ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ, SPREAD ОПЕРАТОР
// const obj = {
//     a : 5,
//     b: 1,
// };
// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);//выведет два одинаковых объекта: {a:10, b:1} {a:10, b:1}, так как мы не копируем значения, а передаем его ссылкой

function copy(mainObj){//функция для КОПИРОВАНИЯ одного объекта в другой
    let objCopy = {};

    let key;
    for(key in mainObj){
        objCopy[key] = mainObj;
    }
    return objCopy;
}
const numbers = {
    a:2,
    b:5,
    c: {
        x:7,
        y:4
    }
};

const newNumbers = copy(numbers);// совершили клонирование объекта
newNumbers.a = 10;
console.log(newNumbers); //выведет {a: 10, b: 5, c: {x: 7, y: 4}}
console.log(numbers);//выведет {a: 2, b: 5, c: {x: 7, y: 4}}

newNumbers.c.x = 10;// эта функция НЕ глубокая копия объекта( то есть любой вложенное свойство будет иметь ссылочный вид данных)
console.log(newNumbers); //выведет {a: 10, b: 5, c: {x: 10, y: 4}}
console.log(numbers);//выведет {a: 2, b: 5, c: {x: 10, y: 4}}

const add = {
    d: 17,
    e: 20

};
console.log(Object.assign(numbers, add));//Функция для соединения лвух объектов в один(в данном случае в объект numbers) выведет: {a: 2, b: 5, c: {x: 7, y: 4}, d: 17, e: 20}
// это тоже поверхностная(не глубокая) функция

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();// метод, который позволяет поверхностно скопировать массивы
//оператор разворота, Spread оператор
const video = ['youtube', 'vimeo','rutube'],
      blogs =['wordpress', 'livejorunal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet); //выведет: ['youtube', 'vimeo','rutube', 'wordpress', 'livejorunal', 'blogger', 'vk', 'facebook']

const array = ['a', 'b'];
const newAarray = [...array];//создаем поверхностную копию объекта

const q = {
    one: 1,
    two: 2
};
const newObj = {...q};//создаем поверхностную копию объекта