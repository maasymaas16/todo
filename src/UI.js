import { allTasks, Task } from './tasks.js'

const content = document.getElementById('content');
const contenthead = document.createElement('div');
const addTask = document.createElement('div');
const f = document.getElementById('addTaskForm');

function makePopUpForm(){

    var f = document.createElement('form');
    f.setAttribute('id', 'addTaskForm');
    f.setAttribute('method', 'POST');

    var task = document.createElement("input"); 
    task.setAttribute('type',"text");
    task.setAttribute('name',"Task Description");
    task.setAttribute('id', 'taskField');
    task.setAttribute('placeholder', 'Pay Phone Bill');

    var date = document.createElement("input"); 
    date.setAttribute('id', 'dueDate');
    date.setAttribute('type',"date");
    date.setAttribute('name', 'Due Date');

    var buttonrow = document.createElement('div');
    buttonrow.classList.add('button-row');

    var submit = document.createElement('button');
    submit.classList.add('submit-task-button');
    submit.setAttribute('id', 'submitTask');
    submit.setAttribute('type', 'button');
    submit.innerHTML = 'Add Task'

    var cancel = document.createElement('button');
    cancel.classList.add('cancel-add-task');
    cancel.setAttribute('id', 'cancelTask');
    cancel.setAttribute('type', 'button');
    cancel.innerHTML = "Cancel";
    
    buttonrow.appendChild(submit);
    buttonrow.appendChild(cancel);
    f.appendChild(task);
    f.appendChild(date);
    f.appendChild(buttonrow);

    content.appendChild(f);
    f.classList.add('active');

}

function displayHome(){

    contenthead.setAttribute('id', 'contenthead');
    contenthead.innerHTML = document.getElementById('all').innerHTML;
    contenthead.classList.add('content-header');
    content.appendChild(contenthead);

    addTask.classList.add('add-task');
    addTask.setAttribute('id', 'addTask');
    const addDesc = document.createElement('div');
    addDesc.classList.add('add-task-description');
    addDesc.setAttribute('id','add-task-description');
    addDesc.innerHTML = "Add Task";
    const addButton = document.createElement('div');
    addButton.classList.add('add-button');
    addButton.setAttribute('id','add-button');
    addButton.innerHTML = '<i class="fa-regular fa-square-plus "></i>';

    addTask.appendChild(addButton);
    addTask.appendChild(addDesc);
    content.appendChild(addTask);
}

function addNewTask(){
    const f = document.getElementById('addTaskForm');
    document.addEventListener('click', function (e){
        if(e.target && e.target.id == 'submitTask'){
            const name = document.getElementById('taskField').value;
            const date = document.getElementById('dueDate').value;
            const task = new Task(name, date);
            allTasks.push(task);
            f.reset();
            f.classList.add('active');
            contenthead.classList.remove('active');
            addTask.classList.remove('active');
            displayTasks(allTasks);
        }

    });
    document.addEventListener('click', function(e){
        if(e.target && e.target.id == 'cancelTask'){
            f.reset();
            f.classList.add('active');
            contenthead.classList.remove('active');
            addTask.classList.remove('active');
        }
    });
}

function displayTasks(project){
    for (var i = 0; i < allTasks.length; i++){
        var taskrow = document.createElement('div');
        taskrow.classList.add('taskrow');
        var checkbox = document.createElement('div');
        checkbox.id = 'completeTask';
        checkbox.innerHTML = '<i class = "far fa-circle">';
        var taskName = document.createElement('div');
        var taskDate = document.createElement('div');
        taskDate.innerHTML = project[i].getDate();
        taskName.innerHTML = project[i].getName();
        taskrow.appendChild(checkbox);
        taskrow.appendChild(taskName);
        taskrow.appendChild(taskDate);
        content.appendChild(taskrow);
    } 
}

function displayPopUp(){
    const f = document.getElementById('addTaskForm');
    contenthead.classList.add('active');
    addTask.classList.add('active');
    f.classList.remove('active');
}

export { displayHome, addNewTask, makePopUpForm, displayPopUp, displayTasks }