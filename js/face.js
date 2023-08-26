// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

function dataLoad() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function loadUser3() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayLoad(data));
}

function displayLoad(data) {
  const ul = document.getElementById("user-list");

  for (const user of data) {
    // console.log(user.name);
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
}
