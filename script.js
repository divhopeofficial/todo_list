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
    //add delete button
    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "❌";
    todoItem.appendChild(deleteBtn); 
} 
 } 
    // check and delete logic 
    todoList.addEventListener("click",function(event) {
        if(event.target.tagName === "LI") {
event.target.classList.toggle("checked"); 
        } 
else if(event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
}
        } 
    )