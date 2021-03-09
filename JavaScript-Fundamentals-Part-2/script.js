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
const calcAverage = (a,b,c) => (a + b + c)/3;

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
checkWinner(scoreDolphins2,scoreKoalas2);



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



