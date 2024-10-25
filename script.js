const todoInput = document.getElementById("todoInput"); 
const todoList = document.getElementById("todoList");

function addTask(){
    const usertext = todoInput.value;
    if(usertext === ""){
        alert("please enter the item");
    }
else{
    const todoItem = document.createElement("li");
    todoItem.innerHTML = usertext;
    todoList.appendChild(todoItem); 
} 
 }