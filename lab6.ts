// 6

// Y-комбінатор для створення нерекурсивної функції
// @ts-ignore
const Y = (f: (g: Function) => Function) =>
  // @ts-ignore
  ((x) => f((y: number) => x(x)(y)))((x: number) => f((y) => x(x)(y)));

// рекурсивна лямбда-функ для факторіалу
const recursiveFactorial = (fact: (n: number) => number) => (n: number) => {
  if (n === 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
};

// Використання Y-комбінатора для створення еквівалентної нерекурсивної функції
// @ts-ignore
const nonRecursiveFactorial = Y(recursiveFactorial);

// тест
console.log("Non recursive factorial: ", nonRecursiveFactorial(5)); // 120 (5!)

// рекурсивна лямбда-функ для фібоначі
const recursiveFibonacci = (fib: (n: number) => number) => (n: number) => {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

// Використання Y-комбінатора для створення еквівалентної нерекурсивної функції
// @ts-ignore
const nonRecursiveFibonacci = Y(recursiveFibonacci);

// тест
console.log("Non recursive fibonacci: ", nonRecursiveFibonacci(6)); // 8 (fibonacci(6))
