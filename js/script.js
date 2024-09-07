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
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','5');
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
questions: for(let i = 1; i < 3; i++){
    const film = prompt('Один из последних просмотренных фильмов?', 'Гарри Поттер');
    const grade = +prompt('На сколько оцените его?', '9');
    if(film === null || grade === null ||film === '' || grade === '' || film.length > 50){
        i--;
        continue questions; 
    } else{
        personalMovieDB.movies[film] = grade;
        console.log('done');
    }
}
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



//ФУНКЦИИ
function showFirstMessege(){
    console.log('Hell world!');
}// создали функцию
showFirstMessege();//вызвали функцию

function showFirstMessege(text){
    console.log(text);
}
showFirstMessege("Hello world!");// функция с аргументом

//когда функция видит retun, она прекращает работу
function calc(a, b){
    return(a + b);
    console.log("hbhjj j");//функция не выполнит этот код, unreachable code - недостижимый код
}
console.log(calc(4,5));

//function declaration
// обычные функции, создаются до начала выполнения скрипта
function calc(a, b){
    return(a + b);
}

// function expression
// создаются только тогда, когда доходит поток кода, можно вызвать только после объявления
let foo = function(a, b){
    return(a + b);
};// не забывать после этой функции ставить;

//стрелочные функции
// не имеют своего контекста
const calc = (a, b) => a + b;
const calc = a => a + b;
const calc = (a, b) => {
    a + b;
    console.log(a);
};