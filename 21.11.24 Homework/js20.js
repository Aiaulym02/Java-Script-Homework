//1
//kez kelgen san engizedi,takpa zhuppa anuktau
function ggg() {
  let num = +prompt("Bir san engiz");
  if (num % 2 == 0) {
    alert("bul san zhup");
  } else {
    alert("bul san taq");
  }
}
alert(ggg());

//2
//1den 100ge deiyngy sandardyn kosyndysy
function kosu() {
  let num = 1;
  for (let i = 1; 1 < 100; i++) {
    num = num + i;
  }
  console.log(i);
}
kosu();

//3
//Kez kelgen san engizedi,sol sannan 1 ge din keri sanau zhuredi
function countDown() {
  let san = prompt("Bir san engiz");
  for (let i = san; san >= 1; san--) {
    console.log(san);
  }
}
countDown();
