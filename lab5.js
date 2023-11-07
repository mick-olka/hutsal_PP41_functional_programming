"use strict";
// 5
/*
реалізувати програму «вгадування» задуманого числа
(у вигляді: «Задумайтесь число від 0 до 99 Задумане менше, ніж 50? (Yes, по)».
Якщо ні, то «Задумане менше, ніж 75? (Yes, по)» і т.д.).
 Обрати найбільш вдалий інструмент та методику налагодження.
 Провести налагодження реалізованої програми.
*/
function guessNumber() {
    let lowerBound = 0;
    let upperBound = 99;
    let steps = 0;
    console.log("Think of a number from 0 to 99");
    while (lowerBound < upperBound) {
        const middle = Math.floor((lowerBound + upperBound) / 2);
        const userInput = prompt(`Is it less than ${middle}? (Yes/No)`);
        if (!userInput) {
            break; // Exit if the user cancels the prompt
        }
        if (userInput.toLowerCase() === "yes") {
            upperBound = middle;
        }
        else {
            lowerBound = middle + 1;
        }
        steps++;
    }
    if (lowerBound === upperBound) {
        console.log(`Your number is ${lowerBound}`);
        console.log(`It took ${steps} steps to guess the number.`);
    }
    else {
        console.log("Invalid input or you cancelled the game.");
    }
}
guessNumber();
