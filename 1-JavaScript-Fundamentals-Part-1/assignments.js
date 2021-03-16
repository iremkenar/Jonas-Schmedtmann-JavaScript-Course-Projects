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
