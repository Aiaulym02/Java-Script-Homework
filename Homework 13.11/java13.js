//1
let question;
let score = 5;

do {
  let question = +prompt("Қазақстан қай жылы тәуелсіздігін алды?");
  if (question != 1991) {
    score--;
  } else {
    break;
  }
} while (true);
alert(score);
//2

//3есеп
var num1 = +prompt("");
var num2 = +prompt("");
var result4 = 1;
var result7 = 1;
var maxNum;
var minNum;

if (num1 > num2) {
  maxNum = num1;
  minNum = num2;
} else {
  maxNum = num2;
  minNum = num1;
}

while (minNum <= maxNum) {
  if (minNum % 4 == 0) {
    result4 *= minNum;
  } else if (minNum % 7 == 0) {
    result7 *= minNum;
  }
  minNum++;
}

console.log("4-ке бөлінетін көбейтіндісі" + result4);
console.log("7-ке бөлінетін көбейтіндісі" + result7);
