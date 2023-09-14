const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="completeButton">Complete</button>
            <button class="deleteButton">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";

        const completeButton = li.querySelector(".completeButton");
        completeButton.addEventListener("click", completeTask);

        const deleteButton = li.querySelector(".deleteButton");
        deleteButton.addEventListener("click", deleteTask);
    }
}

function completeTask(event) {
    const task = event.target.parentElement;
    task.classList.toggle("completed");
}

function deleteTask(event) {
    const task = event.target.parentElement;
    taskList.removeChild(task);
}
