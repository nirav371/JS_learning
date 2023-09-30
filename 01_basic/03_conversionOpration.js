let score = "33abc"
// there are diffrent diffrent types of console console.table([]), info, warn, error etc.
// set vs array => there is a only one diffrence between them. this is set does not allow repeated values
// map vs objects => i) map order object not order ii)duplicates keys allow in map in object that is not allowed 

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score) // String(y) Boolean(y) Object(y)
//console.log(typeof valueInNumber); // output: number 
// console.log(valueInNumber); // output: Nan


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0; 

let isLoggedIn = "nirav"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "nirav" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter++);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion