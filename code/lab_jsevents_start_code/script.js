let numOfTask = 1;

const enterButton = document.querySelector("#enter"); 

const taskForm = document.querySelector("#task-form");

//Show Date
const dateButton = document.getElementById("date");

function showDate() {
    const date = new Date();
    document.getElementById('date__value').textContent = date;
}

const addTask = (event) => {
    event.preventDefault();
    //console.log(event.target.newTask.value);

    //Make task
    const task = document.createElement("li");
    task.setAttribute('id', `${numOfTask}-task`);
    const inputText = document.querySelectorAll("#new-todo");
    task.textContent = event.target.newTask.value;
    //console.log(inputText);

    // Grab List
    const list = document.querySelector("#list");
    
    // Make checkbox
    const itemComplete = document.createElement("input");
    itemComplete.type = "checkbox";
    itemComplete.onclick = function () {
        const completedList = document.getElementById('completed-list');
        this.parentElement.remove();
        completedList.appendChild(task);
    };
    task.appendChild(itemComplete);

    // Make a delete button
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute('id', `${numOfTask}-delete`);
    const buttonText = document.createTextNode("delete");
    deleteButton.appendChild(buttonText);

    deleteButton.onclick = function() {
        this.parentElement.remove();
    }

    // Add button to task, then task to list
    task.appendChild(deleteButton);

    list.appendChild(task);
    console.log(inputText);

    // Increment task number
    numOfTask++;
    console.log(numOfTask);
}

function deleteTask(element) {
    element.parentElement.remove();
}

taskForm.addEventListener('submit', addTask);

dateButton.addEventListener("click", showDate);
deleteButton.addEventListener('click', deleteTask);

