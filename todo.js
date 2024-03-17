const DataServices = (function(){

    async function fetchData(url){
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error('Failed to fetch....');
            }
            return await response.json();
        }catch(error){
            console.error(error);
            throw error;
        }
    }

    return {
        fetchPosts : async function(){
            return await fetchData('https://jsonplaceholder.typicode.com/posts');
        },
        fetchTodos : async function(){
            return await fetchData('https://jsonplaceholder.typicode.com/todos');
        }
    }

})();
const UI = (function(){
    function displayPosts(posts){
       const myPosts =  document.getElementById('posts');
       posts.forEach(post =>{
        const myPost = document.createElement('div');
        myPost.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <hr>
        `;
        myPosts.appendChild(myPost);
       })

    }

    function displayTodos(todos){
        const myTodos =  document.getElementById('todos');
        todos.forEach(todo =>{
         const myTodo = document.createElement('div');
         myTodo.innerHTML = `
         <h2>${todo.title}</h2>
         <p>${todo.completed}</p>
         <hr>
         `;
         myTodos.appendChild(myTodo);
        })
    }

    return {
        displayPosts,
        displayTodos
    }
})();
async function doALLtask(){

    try{
    const posts = await DataServices.fetchPosts();
    UI.displayPosts(posts);


    const todos = await DataServices.fetchTodos();
    UI.displayTodos(todos);
    }catch(error){
        document.getElementById('posts').innerHTML='Failed  to fetch data..';
        document.getElementById('todos').innerHTML='Failed  to fetch data..';
    }
}

const button1=document.getElementById('Button1');
const button2=document.getElementById('Button2');


doALLtask();