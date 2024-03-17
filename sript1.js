

const button1=document.getElementById('Button1');
const button2=document.getElementById('Button2');

async function fetchUser(){
    try{
        const resp = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!resp.ok){
            throw new Error('Data Not Found');
        }
        const user = await resp.json();
        displayUsers(user);
    }
    catch(error){
        console.log(error.message);
        const errormsg=document.getElementById('Div');
        errormsg.innerHTML = 'Data is not found';
    }
    
}
function displayUsers(user){
    const myData = document.getElementById('Div');

    user.forEach(post => {
        const Users = document.createElement('div');
        Users.innerHTML = `
        <h2>${post.id}</h2>
        <p>${post.email}</p>
        <p>${post.address}</p>
        <p>${post.address.street}</p>
        <p>${post.address.suite}</p>
        <p>${post.address.city}</p>
        <p>${post.address.zipcode}</p>
       
        <hr>
        `;
        myData.appendChild(Users);
    });

}

async function fetchToDo(){
    try{
        const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
        if(!resp.ok){
            throw new Error('Data Not Found');
        }
        const tododata = await resp.json();
        displayToDo(tododata);
    }
    catch(error){
        console.log(error.message);
        const errormsg=document.getElementById('Div');
        errormsg.innerHTML = 'Data is not found';
    }
    
}
function displayToDo(user){
    const myData = document.getElementById('Div');

    user.forEach(post => {
        const Users = document.createElement('div');
        Users.innerHTML = `
        <h2>${post.userId}</h2>
        <p>${post.id}</p>
        <p>${post.title}</p>
        <p>${post.completed}</p>
       
        <hr>
        `;
        myData.appendChild(Users);
    });

}


