// №1
var age = 16;
var hasTicket = true;
var isVIP = false;

if ((age >= 16 && hasTicket) || isVIP) {
  //>=
  console.log("Сіз кіре аласыз");
} else {
  console.log("Болмайды");
}

// №2
let num = 25;

if (num % 2 == 0) {
  console.log("Бұл сан жұп");
} else {
  console.log("Бұл сан тақ");
}

let num1 = 24;

if (num1 % 2 == 0) {
  console.log("Бұл сан тақ");
} else {
  console.log("Бұл сан жұп");
}

//№3
var t = 20;
var c = 30;

console.log(t + c); //50

//№4
let num2 = 2;

if (num2 >= 0) {
  console.log("оң сан");
} else {
  console.log("теріс сан");
}

//№5
let num3 = 5;
let num4 = 10;

console.log(num3 != 3 && num3 != 6 && num3 + num4);

console.log(num4 != 3 && num4 != 6 && num4 - num3);
