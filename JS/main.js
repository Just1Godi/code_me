"use strict";
//tema 80
// Объекты в JavaScript

//task 1

// let obj = {1: 'Понедельник', 2: 'Вторник', 3: 'Среда', 4: 'Четверг', 5: 'Пятница', 6: 'Суббота', 7: 'Воскресенье'};
// let i = 1;
// console.log (obj[i], obj[++i], obj[++i], obj[4], obj[5], obj[6], obj[++i], );

//tema 81
// Вывод всего объекта в JavaScript

//task 1

// let obj = {1: 'Январь', 2: 'Февраль', 3: 'Март', 4: 'Апрель', 5: 'Май', 6: 'Июнь', 7: 'Июль', 8: 'Август', 9: 'Сентябрь', 10: 'Октябрь', 11: 'Ноябрь', 12: 'Декабрь'};
// alert (obj);
// выведет [Object object]
// console.log (obj);

//tema 82
// Строковые ключи объектов в JavaScript

// let user = {nname: 'qwerty', surname: 'ytrewq', patronymic: 'zxc'};
// alert (`${user['nname']} ${user['surname']} ${user['patronymic']}`);

//tema 83
// Свойства объектов в JavaScript

// let date = {
//     year: '2023', 
//     month: '06', 
//     day: '27'
// };
// alert (`Today is ${date.day}.${date.month}.${date.year}`);

//tema 84
// Ограничения на ключи объектов в JavaScript

// Исправьте ошибки, допущенные в следующем коде:
// let obj = {
// 	'1a': 1,
// 	'b2': 2,
// 	'с-с': 3,
// 	'd 4': 4,
// 	'e5': 5
// };
// console.log(obj.1a);
// console.log(obj.b2);
// console.log(obj.c-c);
// console.log(obj.d 4);
// console.log(obj.e5);

// let obj = {
// 	'1a': 1,
// 	b2: 2,
// 	'c-c': 3,
// 	'd 4': 4,
// 	e5: 5
// };
// console.log(obj['1a']);
// console.log(obj.b2);
// console.log(obj['c-c']);
// console.log(obj['d 4']);
// console.log(obj.e5);

//tema 85
// Изменение элементов объектов в JavaScript

// Дан объект:
// let obj = {x: 1, y: 2, z: 3};
// Возведите в квадрат каждый элемент этого объекта.

// let obj = {x: 1, y: 2, z: 3};
// obj.x **= obj.x;
// obj.y **= obj.y;
// obj.z **= obj.z;
// console.log (obj);

//tema 86
// Добавление элементов в объекты в JavaScript

// let obj = {};
// obj.a = 1;
// obj.b = 2;
// obj.c = 3;
// console.log (obj);

//tema 87
// Неупорядоченность объектов в JavaScript

// Создайте объект и убедитесь, что порядок ключей в нем не имеет значения.

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// console.log (obj);
// let obj = {
//     c: 3,
//     b: 2,
//     a: 1
// };
// console.log (obj);

//tema 88
// Массив ключей объекта в JavaScript

// Получите массив ключей следующего объекта:

// let obj1 = {x: 1, y: 2, z: 3};
// let keys1 = Object.keys (obj1);
// console.log (keys1);

// в любом случае выводит как стринги

// let obj2 = {4: 1, 5: 2, 6: 3};
// let keys2 = Object.keys (obj2);
// console.log (keys2);

//tema 89
// Длина объекта в JavaScript

// Найдите количество элементов в следующем объекте:
// console.log(obj.length); // выведет undefined

// let obj = {x: 1, y: 2, z: 3};
// console.log (Object.keys(obj).length);

//tema 90
// Ключи объектов из переменных в JavaScript

// Дан следующий объект:
// Дана переменная key, в которой хранится один из ключей нашего объекта. Выведите с помощью этой переменной соответствующий элемент объекта.

// let obj = {
//     x: 1, 
//     y: 2, 
//     z: 3
// };
// let key;
// key = 'x';
// alert (obj[key]);
// key = 'y';
// alert (obj[key]);
// key = 'z';
// alert (obj[key]);

//tema 91
// Ошибка обращения к элементу по ключу в JavaScript

// task 1 Исправьте ошибку, допущенную в следующем коде:

// let obj = {x: 1, y: 2, z: 3};
// console.log(obj[x]);

// let obj = {x: 1, y: 2, z: 3};
// console.log(obj['x']);

// task 2 Исправьте ошибку, допущенную в следующем коде:

// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';
// console.log(obj['key']);

// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';
// console.log(obj[key]);

//tema 92
// Ошибка обращения к свойству объекта в JavaScript

// task 1 Исправьте ошибку, допущенную в следующем коде:

// let obj = {x: 1, y: 2, z: 3};
// let prop = 'x';
// console.log(obj.prop);

// let obj = {x: 1, y: 2, z: 3};
// let prop = 'x';
// console.log(obj [prop]);

// task 2 Исправьте ошибку, допущенную в следующем коде:

// let obj = {x: 1, y: 2, z: 3};
// let prop = 'x';
// console.log(obj['prop']);

// let obj = {x: 1, y: 2, z: 3};
// let prop = 'x';
// console.log(obj[prop]);

//tema 93
// Вычисляемые свойства в JavaScript

// task 1 В следующем коде ключ должен был взяться из переменной. Исправьте допущенную ошибку:

// let key = 'x';
// let obj = {
// 	key: 1,
// 	y: 2,
// 	z: 3
// }

// let key = 'x';
// let obj = {
// 	[key]: 1,
// 	y: 2,
// 	z: 3
// };
// console.log (obj [key]);

// Дан объект:
// let obj = {
// 	x: 1,
// 	y: 2,
// 	z: 3
// };
// Даны переменные:
// let key1 = 'x';
// let key2 = 'y';
// let key3 = 'z';
// Сделайте так, чтобы ключи объекта брались из этих переменных.

// let key1 = 'x';
// let key2 = 'y';
// let key3 = 'z';
// let obj = {
// 	[key1]: 1,
// 	[key2]: 2,
// 	[key3]: 3
// };
// console.log (obj [key1]);
// console.log (obj [key2]);
// console.log (obj [key3]);

// test
// let key = 'x';
// let obj = {
//     [key + '1']: 'x',
//     [key + '2']: 'y',
//     [key + '3']: 'z'
// };
// console.log (obj ['x3']);

//tema 103
// Поиск ошибок в коде с объектами JavaScript

// task 1 Код должен вывести элемент объекта:
// let obj = {x: 1, y: 2, z: 3};
// console.log(obj[x]);

// let obj = {
//     x: 1, 
//     y: 2, 
//     z: 3
// };
// console.log(obj.x);

// task 2 Код должен вывести элемент объекта по ключу из переменной:
// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';
// console.log(obj.key);

// let obj = {
//     x: 1, 
//     y: 2, 
//     z: 3
// };
// let key = 'x';
// console.log(obj [key]);

// task 3 Код должен вывести сумму элементов объекта:
// let obj = {x: 1, y: 2, z: 3};
// let sum = obj[x] + obj[y] + obj[x];
// console.log(obj)

// let obj = {
//     x: 1,
//     y: 2,
//     z: 3
// };
// let sum = obj['x'] + obj['y'] + obj['z'];
// console.log(sum)

// task 4 Код должен вывести количество элементов объекта:
// let obj = {x: 1, y: 2, z: 3};
// console.log(obj.length);

// let obj = {
//     x: 1,
//     y: 2,
//     z: 3
// };
// console.log(Object.keys(obj).length);