console.log("---- 2 ----");
/* Перевизначити існуючий клас простих типів даних, 
визначений за замовчуванням та дати їм нові імена, 
використовуючи механізм синонімів типів із застосуванням параметрів типів.
*/
type MyNumber = number;
type MyString = string;

type SpecialObject<T> = { value: T };

const num: MyNumber = 43;
const str: MyString = "Hello, Functional Programming!";
const num_value: SpecialObject<number> = { value: 123 };

console.log(num);
console.log(str);
console.log(num_value.value);
