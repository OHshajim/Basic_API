function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) // input data make this readable
    .then(json => console.log(json))  //output as you want 
}


function users (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>user(data)) //call a function and work as you need
}

function user(data){
        data.forEach(element => {
            console.log(element.id, element.name);
    });
    
}







