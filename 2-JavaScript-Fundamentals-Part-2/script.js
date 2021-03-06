///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/


/******const calcAverage = (a,b,c) => (a + b + c)/3;

const checkWinner = (avgDolphins,avgKoalas) => {
    avgDolphins >= 2 * avgKoalas ? console.log(`Dolphins win 🏆 ${avgDolphins} vs ${avgKoalas}`) 
    :avgKoalas >= 2 * avgDolphins ? console.log(`Koalas win 🏆 ${avgKoalas} vs ${avgDolphins}`)
    :console.log("No team wins!");
}

//Test Data 1
let scoreDolphins = calcAverage(44,23,71)
let scoreKoalas = calcAverage(65,54,49);
checkWinner(scoreDolphins,scoreKoalas);

//Test Data 2
scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
checkWinner(scoreDolphins,scoreKoalas);
/*Could be declared as different variables as well
const scoreDolphins2 = calcAverage(85,54,41);
const scoreKoalas2 = calcAverage(23,34,27);
checkWinner(scoreDolphins2,scoreKoalas2);******/



/*****Method 2
// Test 1
const calcAverage = (a,b,c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas); ******/


///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: 
Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, 
calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). 
Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44 */

/*****
 
const calcTip = billVal => billVal >= 50 && billVal <= 300 ? billVal * 0.15 : billVal * 0.2;
console.log(calcTip(100));

const bills = [125,555,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips);
console.log(total);

********/

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, 
let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height 
(Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). 
Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. 
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

*/

/****** 
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmiVal = this.mass / this.height ** 2;
    return this.bmiVal;
  }
}

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmiVal = this.mass / this.height ** 2;
    return this.bmiVal;
  }
}

mark.calcBMI();
john.calcBMI();
console.log(mark.bmiVal);
console.log(john.bmiVal);

mark.bmiVal > john.bmiVal ? 
console.log(`${mark.fullName}'s BMI (${mark.bmiVal}) is higher than (${john.fullName})'s (${john.bmiVal})`)
:console.log(`${john.fullName}'s BMI (${john.bmiVal}) is higher than (${mark.fullName})'s (${mark.bmiVal})`);

*****/

///////////////////////////////////////
// Coding Challenge #4

/****
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) 
for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. 
This function calculates the average of all numbers in the given array. 

****/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = billVal => billVal >= 50 && billVal <= 300 ? billVal * 0.15 : billVal * 0.2;

for (let i = 0; i < bills.length; i++) {
  //const tip = calcTip(bills[i]);
  //tips.push(tip);
  //totals.push(tip + bills[i]);
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(tips, totals);

calcAverage = (arr) => {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  } return sum / arr.length;
}

console.log(calcAverage(totals));




