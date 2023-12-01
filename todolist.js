// form == submit == create new todo == {id, createdAt, title:, isCompleted }
// const todos = [] = todos.pus(...)

const todos = []; 

//selecting 

const todoInput = document.querySelector(".todo-input"); 
const todoForm = document.querySelector(".todo-form");

todoForm.addEventListener("submit", addNewTodo); 

function addNewTodo(e){
    e.preventDeafult(); 

    if(!todoInput.value) return null; 

    const newTodo = {
        id: Date.now(),
        createdAt: new Date().toISOString(), 
        title: todoInput.value, 
        isCompleted: false, 
    }; 

    todos.push(newTodo); 
}