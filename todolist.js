
const todos = []; 



//selecting 
const todoInput = document.querySelector(".todo-input");
const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todolist");
const selectFilter = document.querySelector(".selectFilter"); 


//events 
todoForm.addEventListener("submit", addNewTodo); 
selectFilter.addEventListener("change", filterTodos)




//functions
function addNewTodo(e) {
    e.preventDefault();
  
    if (!todoInput.value) return null;
  
    const newTodo = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      title: todoInput.value,
      isCompleted: false,
    };

    todos.push(newTodo); 
    createTodos(todos); 
}

function createTodos(todos) {
    // create todos on DOM
let result = ""; 
todos.forEach((todo) => {
    result += `<li class="todo">
    <p class="todo__title">${todo.title}</p>
    <span class="todo__createdAt">${new Date(todo.createdAt).toLocaleDateString("fa-IR")}
    </span>
    <button data-todo-id=${todo.id}><i class="todo__check far fa-check-square"></i></button>
    <button data-todo-id=${todo.id}><i class="todo__remove far fa-trash-alt"></i></button>
  </li>`; 
}); 
todoList.innerHTML = result;
todoInput.value = ""; 
}

function filterTodos (e) {
    console.log(e.target.value); 
    const filter = e.target.value 
    switch(filter){
        case "all" :{
            createTodos(todos); 
            break; 
        }
        case "completed" :{
            const filteredTodo = todos.filter((t) => t.isCompleted); 
            createTodos(filterTodos); 
            break; 
        }
        case "uncompleted" :{ 
            const filteredTodo = todos.filter((t) => !t.isCompleted); 
            createTodos(filterTodos); 
            break;    
        }
        default:
            createTodos(todos);
    }
}