"use strict";
// 4
/*
Реалізувати функцію обчислення добутку п’яти натуральних чисел.
Застосувати часткове використання функції до 1-го, 2-х, 3-х та 4-х аргументів, які задати за замовчуванням.
*/
function calculateProduct(...args) {
    return args.reduce((a, b) => a * b);
}
// Створено частково застосовну функцію зі значеннями за замовчуванням для перших чотирьох аргументів
const partialProduct = calculateProduct.bind(1, 1, 1, 1, 1);
// Тепер можна визвати функцію з 1-5 аргуметами
const result1 = partialProduct(6);
const result2 = partialProduct(6, 5);
const result3 = partialProduct(6, 5, 3);
console.log(result1, result2, result3);
