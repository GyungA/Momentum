const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
let toDos = [];
const TODOS_KEYS = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEYS, JSON.stringify(toDos));
}

function paintToDo(newTodo){
    const item = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    item.appendChild(span);
    item.appendChild(button);
    toDoList.appendChild(item);
}

function deleteToDo(event) {
  toDoList.removeChild(event.target.parentElement);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEYS);

if(savedToDos !== null){
  const parsedToDos=JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}