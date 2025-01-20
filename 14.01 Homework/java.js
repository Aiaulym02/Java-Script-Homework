function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Желі қатесі!");
      }
      return response.json();
    })
    .then((data) => {
      displayUsers(data);
    })
    .catch((error) => {
      console.error("Қате орын алды!", error);
    });
}

function displayUsers(users) {
  const usersContainer = document.getElementById("users-container");
  usersContainer.innerHTML = "";

  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");

    const userName = document.createElement("h2");
    userName.textContent = "Қолданушы аты: ${user.name}";

    const userEmail = document.createElement("p");
    userEmail.textContent = "Email: ${user.email}";

    userCard.appendChild(userName);
    userCard.appendChild(userEmail);

    usersContainer.appendChild(userCard);
  });
}
