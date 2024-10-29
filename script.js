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
    saveTask();
} 
 } 
    // check and delete logic 
    todoList.addEventListener("click",function(event) {
        if(event.target.tagName === "LI") {
event.target.classList.toggle("checked"); 
saveTask();

        } 
else if(event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveTask();
}
        } 
    ) 
    // add list to local storage 
    function saveTask(){
        localStorage.setItem("data",todoList.innerHTML); 
    } 
    // retrieve list from local storage 
    function showTask(){
        todoList.innerHTML = localStorage.getItem("data");
    } 
    showTask();