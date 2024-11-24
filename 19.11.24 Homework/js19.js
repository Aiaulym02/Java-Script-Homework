let secretNumber = +prompt("Sandy Zhasyr");

const findNumber = (secret) => {
  while (true) {
    let number = +prompt("Sandy boljap kor:");

    if (number == secretNumber) {
      alert("San tabyldy");
      break;
    } else if (number > secretNumber) {
      alert("Qupia san kishirek");
    } else {
      alert("Qupia san ulkenirek");
    }
  }
  alert("Oiyn aiaqtaldy");
};
findNumber(secretNumber);
