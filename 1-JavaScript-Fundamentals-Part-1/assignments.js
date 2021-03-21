//Assignments from Jonas Schmedtmanns course

// 1. Values and Variables
/*let country = 'Germany';
let continent = 'Europe';
let population = 84;
console.log(country);
console.log(continent);
console.log(population);*/

// 2. Data Types
/*let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);*/

// 3. let, const, var
// const language; // ---> Uncaught SyntaxError: Missing initializer in const declaration
let language;
language = 'German';
const country = 'Germany';
const continent = 'Europe';
const isIsland = false;
//isIsland = true; ---> Uncaught TypeError: Assignment to constant variable.
//const isIsland = true; ---> Uncaught SyntaxError: Identifier 'isIsland' has already been declared

// 4. Basic Operators
let gerPopulation = 84;
let finPopulation = 6;
let averagePopulation = 33;
console.log(gerPopulation / 2);
gerPopulation++;
console.log(gerPopulation > finPopulation);
console.log(gerPopulation < averagePopulation);
let description =
  country +
  ' is in ' +
  continent +
  ', and its ' +
  gerPopulation +
  ' million people speak ' +
  language;
console.log(description);

// 5. Strings and Template Literals
description = `${country} is in ${continent}, and its ${gerPopulation} million people speak ${language}`;
console.log(description);

//  6. If else statements
if (gerPopulation > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${33 - gerPopulation} average`);
}

// 7. Type conversion and coercion
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// 8. Equality Operators
// Need to convert to number as the output of prompt() is string and strict equality would work
// const numNeighbours = Number(
//   prompt('Hom many neighbours does your country have?')
// );

// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

// 9. Logical Operators

language = 'English';
gerPopulation = 43;
if (language === 'English' && gerPopulation < 50 && !isIsland) {
  console.log('You should live in Germany');
} else {
  console.log('Germany does not meet you criteria');
}

// 10. The switch statement

const newLanguage = 'spanish';

switch (newLanguage) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too! :)');
}

// 11. The conditional (ternary operator)

console.log(
  `${country}'s population is ${
    gerPopulation > averagePopulation ? 'above' : 'below'
  } the average`
);
