// 004. To Do List
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    span.classList.add("todo-list-item");
    button.classList.add("todo-list-btn");
    li.appendChild(span);
    li.appendChild(button);
    li.classList.add("todo-list");

    toDoList.appendChild(li);
}

function checkStatus(){
    const saved = localStorage.getItem(TODOS_KEY);
    if (saved !== null) {
        const parsed = JSON.parse(saved);
        if (parsed.length >= 5){
            alert("So many Todos")
            return true;
        }
    }

    return false;
}

function handleToDoSubmit(event){
    event.preventDefault();

    if (checkStatus()){
        return;
    }

    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
    paintToDo(item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}