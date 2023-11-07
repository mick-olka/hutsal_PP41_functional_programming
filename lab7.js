"use strict";
// 7
// отримує RecursiveFunction як аргумент і повертає рекурсивну версію цієї функції
function yCombinator(f) {
    return function (x) {
        return f(yCombinator(f))(x);
    };
}
// Всередині функції yCombinator ми передаємо сам yCombinator як аргумент функції f. Це дозволяє використовувати рекурсивні виклики.
// тест Y-комбінатора, визначення факторіальної функцію з його допомогою
const factorial = yCombinator((self) => (n) => {
    if (n <= 1) {
        return 1;
    }
    else {
        return n * self(n - 1);
    }
});
// редукції графа
console.log(factorial(5)); // 120
