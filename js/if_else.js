// var enoughSleep = true;
// if (enoughSleep) {
//     console.log("i am ready to go!");
// } else {
//     console.log("I need a nap");
// }

// var temperature = 30;
// if (temperature < 20) {
//     console.log("Don't forget a jacket!");
// } else {
//     console.log("Keep cool today!");
// }

// var temperature = 30;
// if (temperature < 15) {
//     console.log("Don't forget a jacket!");
// } else if (temperature < 25) {
//     console.log("Have a nice day :");
// } else {
//     console.log("Keep cool today!");
// }

// var temperature = 30;
// if (temperature < 0) {
//     console.log("Brr! Don't freeze out there!");
// } else if (temperature < 5) {
//     console.log("don't forget a jacket!");
// } else if (temperature < 25) {
//     console.log("have a nice day :");
// } else {
//     console.log("Keep cool today!");
// }

// function fizzBuzz(number){
//     console.log(i);
// }

// function fizzBuzz(number) {
//     if (number%5 === 0) console.log("Buzz");
//     else if (number%3 === 0 && number%5 === 0) console.log("FizzBuzz");
//     else console.log(number);
// }
// fizzBuzz(15)

// function fizzBuzz(number){
//     if (number%3 === 0) console.log("Fizz");
//     else if(number%5 === 0) console.log("Buzz");
//     else console.log(number);
// }
// fizzBuzz(15)

// function fizzBuzz(number){
//     if (number%3 === 0 && number%5 === 0) console.log("FizzBuzz");
//     else if (number%3 === 0) console.log("Fizz");
//     else if (number%5 === 0) console.log("Buzz");
//     else console.log(number);
// }
// fizzBuzz(15)

function fizzBuzz(number) {
    if (number%15 === 0) console.log("FizzBuzz");
    else if (number%3 === 0) console.log("Fizz");
    else if (number%5 === 0) console.log("Buzz");
    else console.log(number);
}
fizzBuzz(15)