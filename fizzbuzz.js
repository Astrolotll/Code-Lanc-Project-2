// JavaScript source code
//Write a function that takes a number n as input and prints the following for each number from 1 to n://
//If / by 3, Fizz. If / by 5, Buzz. If / by 3 & 5, FizzBuzz. If not / by 3 or 5, print number.//

for (i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}