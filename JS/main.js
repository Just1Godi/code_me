"use strict";
// Конструкция if-else в JavaScrip

//tema 105
// Операторы больше и меньше в JavaScript

// task 1 Проверьте, что переменная test больше 10.
// let test = 10;

// if (test < 10) {
//     console.log('+');
// } else {
//     console.log('-');
// }

// if (test > 10) {
//     console.log('+');
// } else {
//     console.log('-');
// }

// if (test >= 10) {
//     console.log('+');
// } else {
//     console.log ('-');
// }

// if (test <= 10) {
//     console.log('+');
// } else {
//     console.log('-');
// }

//tema 106
// Проверка на равенство в JavaScript


// task 1 Проверьте, что переменная test равна 10.

// let test = 10;
// let test = 11;
// if (test == 10) {
//     console.log('+');
// } else {
//     console.log('-');
// }

//tema 107
// Проверка на неравенство в JavaScript

// task 1 Проверьте, что переменная test не равна 10.
// let test = 10;
// let test = 9;
// if (test != 10) {
//     console.log('+');
// } else {
//     console.log('-');
// }

//tema 108
// Сравнение переменных в JavaScript

// task 1 Даны переменные test1 и test2. Проверьте, что значение какой из этих переменных больше и выведите соответствующее сообщение.
// let test1 = 10, test2 = 9;
// let test1 = 9, test2 = 10;
// if (test1 > test2) {
//     console.log('+');
// } else {
//     console.log('-');
// }

// task 2 Даны переменные test1 и test2. Проверьте, равны ли их значения и выведите соответствующее сообщение.
// let test1 = 10, test2 = 9;
// let test1 = 10, test2 = 10;
// if (test1 == test2) {
//     console.log('+');
// } else {
//     console.log('-');
// }

//tema 109
// Равенство строк в JavaScript

// task 1 Даны переменные test1 и test2, содержащие строки. Проверьте, равны ли их значения и выведите соответствующее сообщение.
// let test1 = 'qwer', test2 = 'qwert';
// let test1 = 'qwer', test2 = 'qwer';
// if (test1 == test2) {
//     console.log('+');
// } else {
//     console.log('-');
// }

//tema 110
// Равенство строк и чисел в JavaScript

// task 1 Проверьте, равны ли значения переменных и выведите соответствующее сообщение.
// let test1 = '123';
// let test2 = 123;
// if (test1 == test2) {
//     console.log('+');
// } else {
//     console.log('-');
// }
// if (test2 == test1) {
//     console.log('+');
// } else {
//     console.log('-');
// }

//tema 113
// Логическое И в JavaScript

// task 1 Проверьте, что переменная num больше нуля и меньше 5.
// let num = 4;
// let num = 6;
// let num = -1;
// if (num > 0 && num < 5) {
//     console.log('+');
// } else {
//     console.log('-');
// }

// task 2 Проверьте, что переменная num больше или равна 10 и меньше или равна 20.
// let num = 10;
// num = 20;
// num = 11;
// num = 9;
// num = 21;
// if (num >= 10 && num <=20) {
//     console.log('+');
// } else {
//     console.log ('-');
// }

// task 3 Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
// let num1 = 1, num2 = 3;
// num1 = 2;
// num1 = 1, num2 = 2;
// num1 = 2, num2 = 2;
// if (num1 <= 1 && num2 >= 3) {
//     console.log('+');
// } else {
//     console.log('-');
// }

//tema 114
// Логическое ИЛИ в JavaScript

// task 1 Не запуская код определите, что выведется в консоль:
// let num1 = 10;
// let num2 = -10;
// if (num1 >= 0 || num2 >= 0) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// task 8 Не запуская код определите, что выведется в консоль:
// let num = 2;
// if (num == 0 || num == 1 || num == 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//tema 115
// Приоритет логических операторов в JavaScript
// Операция && имеет приоритет над ||.

// task 1 Расскажите порядок выполнения сравнения в следующем условии:
// if (num == 0 || num > 1 && num < 5 ) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// при num строго равном нулю и при num строго больше нуля и меньше 5 будет '+++'

//tema 116
// Группировка условий в JavaScript

// task 1 В приведенном ниже коде укажите приоритет операций в явном виде:
// let num = 3;
// if (num > 5 && num < 10 || num == 20) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 3;
// num = 6;
// num = 11;
// num = 20;
// if (num > 5 && (num < 10 || num ==20)) {
//     console.log('+');
// } else {
//     console.log('-');
// }

// task 2 В приведенном ниже коде укажите приоритет операций в явном виде:
// let num = 3;	
// if (num > 5 || num > 0 && num < 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 3;
// num = 6;
// num = 2;
// if ((num > 5 || num > 0) && num < 3) {
//     console.log ('+');
// } else {
//     console.log('-');
// }

// task 3 В приведенном ниже коде укажите приоритет операций в явном виде:
// let num = 3;
// if (num == 9 || num > 10 && num < 20 || num > 20 && num < 30) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 3;
// num = 9;
// num = 10;
// num = 19;
// num = 20;
// num = 29;
// num = 30;
// if ((num == 9 || num > 10) && (num < 20 || num > 20) && num < 30) {
//     console.log('+');
// } else {
//     console.log('-');
// }

//tema 117
// Инвертирование логических выражений в JavaScript

// task 1 Дан следующий код Используя оператор ! инвертируйте приведенное условие.
// if (num1 >= 0 || num2 <= 10) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num1 = 1, num2 = 9;
// num1 = -1;
// if (!(num1 >= 0) || !(num2 <= 10)) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// или работает как и должно

// let num1 = 1, num2 = 9;
// num1 = -1, num2 =11;
// if (!(num1 >= 0 || num2 <= 10)) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// должны выполняться оба условия

//tema 118
// Условия с булевыми значениями в JavaScript

// task 1 Проверьте, что переменная test равна true.
// let test = true;
// let test = false;
// if (test === true) {
//     console.log('+');
// } else {
//     console.log('-');
// }

// task 2 Проверьте, что переменная test равна false.
// let test = false;
// let test = true;
// if (test === false) {
//     console.log('+');
// } else {
//     console.log('-');
// }

//tema 119
// Сравнение значений с булевым типом в JavaScript

// task 1 Вспомните и напишите, какие значения при приведении к логическому типу дают false.
// console.log(Boolean(0));          // false
// console.log(Boolean(-0));         // false
// console.log(Boolean(+0));         // false
// console.log(Boolean(null));       // false
// console.log(Boolean(false));      // false
// console.log(Boolean(NaN));        // false
// console.log(Boolean(undefined));  // false
// console.log(Boolean(''));         // false
// Все кроме не пустой строки, всех отриательных чисел кроме нуля, плюс/минус бесконечности

// task 2 Не запуская код, определите, что выведется в консоль:
// let test = 1;	
// if (test == true) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// +++

// task 3 Не запуская код, определите, что выведется в консоль:
// let test = 0;	
// if (test == true) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// ---

// task 4 Не запуская код, определите, что выведется в консоль:
// let test = 1;
// if (test == false) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// ---

// task 5 Не запуская код, определите, что выведется в консоль:
// let test = 1;
// if (test != true) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// ---

// task 6 Не запуская код, определите, что выведется в консоль:
// let test = '';
// if (test == false) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// +++

// task 7 Не запуская код, определите, что выведется в консоль:
// let test;
// if (test == true) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// ---

// task 8 Не запуская код, определите, что выведется в консоль:
// let test = 3 * 'a';
// if (test == true) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// ---

//tema 120
// Сокращенная форма проверки на истину в JavaScript

// task 1 Перепишите следующий код с использованием сокращенной формы:
// let test = true;
// if (test === true) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let test = true;
// let test = false;
// if (test) {
//     console.log('+');
// } else {
//     console.log('-');
// };