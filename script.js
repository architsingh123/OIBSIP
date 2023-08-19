const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const pendingTasksList = document.getElementById("pendingTasksList");
const completedTasksList = document.getElementById("completedTasksList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <span class="actions">
                <button class="completeBtn">Complete</button>
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            </span>
        `;
        taskItem.querySelector(".completeBtn").addEventListener("click", completeTask);
        taskItem.querySelector(".editBtn").addEventListener("click", editTask);
        taskItem.querySelector(".deleteBtn").addEventListener("click", deleteTask);

        pendingTasksList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function completeTask(event) {
    const taskItem = event.target.closest("li");
    taskItem.classList.add("completed");
    taskItem.querySelector(".completeBtn").remove();
    taskItem.querySelector(".editBtn").remove();
    completedTasksList.appendChild(taskItem);
}

function editTask(event) {
    const taskItem = event.target.closest("li");
    const taskText = taskItem.querySelector("span").textContent;
    const newText = prompt("Edit task:", taskText);
    if (newText !== null) {
        taskItem.querySelector("span").textContent = newText;
    }
}

function deleteTask(event) {
    const taskItem = event.target.closest("li");
    taskItem.remove();
}
