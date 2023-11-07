"use strict";
// 8
/*
Функція gcd обчислення найбільшого спільного дільника двох натуральних чисел може бути представлена рівняннями gcd m 0 = m
    gcd m n = gcd n (m 'mod' n). Зробіть графічне представлення виразу
    gcd 9 10 і проведіть редукції в отриманому графі до приведення його до нормальної форми.
    */
function gcd(m, n) {
    if (n === 0) {
        console.log(`N(${n}) is 0`);
        return m;
    }
    else {
        const l = m % n;
        console.log(`gcd(${n}, ${m} % ${n}) => gcd(${n}, ${l})`);
        return gcd(n, l);
    }
}
console.log(`gcd(9, 10)`);
const result = gcd(9, 10);
console.log(`GCD of 9 and 10 is ${result}`);
