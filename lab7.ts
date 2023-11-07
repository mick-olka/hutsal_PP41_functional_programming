// 7

/* 
Представити Y-комбінатор Каррі в графічному вигляді. Виконати редукції графа.
*/

type RecursiveFunction<T, R> = (fn: (arg: T) => R) => (arg: T) => R;

// отримує RecursiveFunction як аргумент і повертає рекурсивну версію цієї функції
function yCombinator<T, R>(f: RecursiveFunction<T, R>): (arg: T) => R {
  return function (x) {
    return f(yCombinator(f))(x);
  };
}
// Всередині функції yCombinator ми передаємо сам yCombinator як аргумент функції f. Це дозволяє використовувати рекурсивні виклики.

// тест Y-комбінатора, визначення факторіальної функцію з його допомогою
const factorial = yCombinator<number, number>((self) => (n) => {
  if (n <= 1) {
    return 1;
  } else {
    return n * self(n - 1);
  }
});

// редукції графа
console.log(factorial(5)); // 120
