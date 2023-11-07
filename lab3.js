"use strict";
// 3
/*
Реалізувати простий лічильник,
який зчитує свої виклики та повертає їх
поточну кількість використовуючи замикання (локальні визначення)
*/
function createCounter() {
    let count = 0; // локальне визначення
    return function () {
        count++;
        return count;
    };
}
const myCounter = createCounter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3
