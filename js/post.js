function postData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayShow(data));
}

function displayShow(posts) {
  const div = document.getElementById("post-item");

  for (const post of posts) {
    // console.log(post);
    const divPost = document.createElement("div");
    divPost.classList.add("post");
    divPost.innerHTML = `
        <h1>Name : ${post.title}</h1>
        <p>Id : ${post.id}</p>
        <h3> Body name : ${post.body}</h3>
    
    `;
    div.appendChild(divPost);
  }
}

postData();
