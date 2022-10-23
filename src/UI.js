import { allTasks, Task } from './tasks.js'

function displayHome(){
    const content = document.getElementById('content');

    const contenthead = document.createElement('div');
    contenthead.setAttribute('id', 'contenthead');
    contenthead.innerHTML = document.getElementById('all').innerHTML;
    contenthead.classList.add('content-header');
    content.appendChild(contenthead);

    const addTask = document.createElement('div');
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

    return { contenthead };
}

function addTask(){
    const contenthead = document.getElementById('contenthead');
    const addTask = document.getElementById('addTask');
    document.addEventListener('click',function(e){
        if(e.target && (e.target.id == 'addTask' || e.target.id == 'add-task-description' || e.target.id == 'add-button')){
            contenthead.classList.add('active');
            addTask.classList.add('active');

            // Create add task pop form
            var f = document.createElement('form');
            f.setAttribute('id', 'add-task-form');
            // f.setAttribute('method', 'post');
            // f.setAttribute('action', 'submit.php');

            var task = document.createElement("input"); 
            task.setAttribute('type',"text");
            task.setAttribute('name',"Task Description");
            task.setAttribute('id', 'task-field');
            task.setAttribute('placeholder', 'Pay Phone Bill');

            var date = document.createElement("input"); 
            date.setAttribute('id', 'dueDate');
            date.setAttribute('type',"date");
            date.setAttribute('name', 'Due Date');

            var buttonrow = document.createElement('div');
            buttonrow.classList.add('buttonrow');

            var submit = document.createElement('button');
            submit.classList.add('submit-task-button');
            submit.setAttribute('id', 'submitTask');
            submit.innerHTML = 'Add Task'

            var cancel = document.createElement('button');
            cancel.classList.add('cancel-add-task');
            cancel.setAttribute('id', 'cancelTask');
            cancel.innerHTML = "Cancel";
            
            buttonrow.appendChild(submit);
            buttonrow.appendChild(cancel);
            f.appendChild(task);
            f.appendChild(date);
            f.appendChild(buttonrow);

            content.appendChild(f);
        }
    });

    const form = document.getElementById('add-task-form');
    document.addEventListener('click',function(e){
        if(e.target && e.target.id == 'cancelTask'){
            form.classList.add('active');
            contenthead.classList.remove('active');
            addTask.classList.remove('active');
        }   
    });
}

export { displayHome, addTask }