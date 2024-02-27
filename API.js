// btn API-1
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json()) // input data make this readable
        .then(json => console.log(json))  //output as you want 
}

// btn API-2
function users() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => user(data)) //call a function and work as you need
}

function user(data) {
    const ul = document.getElementById('ul');
    data.forEach(element => {
        console.log(element.id, element.name);
        const li = document.createElement('li');
        li.innerText = element.id + " " + element.name;
        ul.appendChild(li);
    });
}


// btn API-3 using arrow function
const loadComment = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await res.json();
        console.log(data);
    }

    catch (error) {
        console.error("data load error "); //customize error
    }
}


// how we get info and display that post 
const post = (data) => {
    const PostBox = document.getElementById('post-box')
    for (const post of data) {
        console.log(post);
        const Div = document.createElement('div');
        Div.innerHTML = `
        <h3>${post.id}</h3>
        <h4>post : ${post.title}</h4>
        <p>${post.body}</p>
        `;
        PostBox.appendChild(Div)
        Div.classList.add('post')
    }
}

function posts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => post(data))
}

posts()




