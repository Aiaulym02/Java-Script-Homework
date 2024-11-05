// 1 - тапсырма
var age = 16;
var hasTicket = true;
var isVIP = false;

if ((age >= 16 && hasTicket) || isVIP) {
  //>=
  console.log("siz kire alasyz");
} else {
  console.log("bolmaidy");
}

// 2 - тапсырма
let num = 25;

if (num % 2 == 0) {
  console.log("bul san zhup");
} else {
  console.log("bul san taq");
}

let num1 = 24;

if (num1 % 2 == 0) {
  console.log("bul san taq");
} else {
  console.log("bul san zhup");
}

//3 - тапсырма
var t = 20;
var c = 30;

console.log(t + c); //50

//4 - тапсырма
let num2 = 2;

if (num2 >= 0) {
  console.log("оң сан");
} else {
  console.log("теріс сан");
}

//5 - тапсырма
let num3 = 5;
let num4 = 10;

console.log(num3 != 3 && num3 != 6 && num3 + num4);

console.log(num4 != 3 && num4 != 6 && num4 - num3);
