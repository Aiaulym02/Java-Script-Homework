// Есеп 1
let a = prompt("Birinshi san");
let b = prompt("Ekinshi san");
let c = prompt("Ushinshi san");
if (a + b > c || a + c > b || b + c > a) {
  alert("Бұл үшбұрыш жасай алады");
} else {
  ("Бұл үшбұрыш жасай алмайды");
}
//Есеп 3
let upai = prompt("0-ден 100-ге дейін ұпай енгізіңіз");
switch (upai) {
  case "0-59":
    alert("Баға: F");
    break;
  case "60 - 69":
    alert("Баға: D");
    break;
  case "70-79":
    alert("Баға: C");
    break;
  case "80-89":
    alert("Баға: B");
    break;
  case "90-100":
    alert("Баға:A");
    break;
  default:
    alert("0-ден 100-ге дейін ұпай енгізіңіз");
}
