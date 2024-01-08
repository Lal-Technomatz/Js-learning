const score = 100;
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.8966
const otherNumber1 = 123.8966
const otherNumber2 = 1123.8966

// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber1.toPrecision(3));
// console.log(otherNumber2.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-In'));

// ++++++++++++++++++++Maths++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-88));
// console.log(Math.round(4.6));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.2));
// console.log(Math.min(4, 8, 6, 7));
// console.log(Math.max(4, 8, 6, 7));

console.log(Math.random());  // Always will get the value between 0 to 1.
console.log(Math.random()*10);
console.log((Math.random()*10) + 1 );
console.log(Math.floor((Math.random()*10) + 1) );

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min )
