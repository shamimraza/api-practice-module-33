function loadUser2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayData2(data));
}

function displayData2(data) {
  for (const user of data) {
    console.log(user);
  }
}
