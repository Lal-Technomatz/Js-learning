const name = "Lal singh";
const repoCount = 5;

// console.log(name + repoCount + " value"); // this is not a good way it is outdated.

// console.log(`Hello my name is ${name} and my repo count on github is ${repoCount}.`); // this is latest way to the help of string interpolation.

// Another Way to declaring the string.
const gameName = new String('Hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4);
// console.log(newString);

// const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);

// const newStringOne = "   hitesh   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("hitesh"));
console.log(url.includes("sundar"));

console.log(gameName.split('-'));