import { displayHome, addNewTask, makePopUpForm, displayPopUp, displayTasks, completeTask } from './UI.js'
import { allTasks, Task } from './tasks.js'
let currproj = allTasks;

makePopUpForm();
displayHome();
const add = document.getElementById('addTask');
add.addEventListener('click', function(){
    displayPopUp();
});
addNewTask(currproj);
completeTask(currproj);