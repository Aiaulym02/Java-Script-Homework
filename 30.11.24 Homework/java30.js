//1Тапсырма:filter және map
let sandar = [2, 11, 58, 7, 56, 77, 34];
function smallFifty() {
  return sandar.filter((num) => num > 50);
}
smallFifty();
console.log(smallFifty());

function ekigeKobeitu() {
  return sandar.map((sann) => sann * 2);
}
ekigeKobeitu();
console.log(ekigeKobeitu()); //именно 50 ден асқандарды шығара алмадым

//2Тапсырма:push және forEach
function zhanaElement() {
  let numbers = [6, 7, 8, 9];
  numbers.push(10, 11) &&
    numbers.forEach(function (number) {
      console.log(number);
    });
}
zhanaElement();
//3Тапсырма:map және filter
let numbers = [40, 25, 19, 4, 38, 55, 7];

function kobeitu() {
  let doubled = numbers.map((num) => num * 3);
  console.log(doubled);
}
kobeitu();

// let number = [40, 25, 19, 4, 38, 55, 7];
// let doubled = number.map((num) => num * 2);
// console.log(doubled);
