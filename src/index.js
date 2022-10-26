import { displayHome, addNewTask, makePopUpForm, displayPopUp, displayTasks } from './UI.js'
import { allTasks, Task } from './tasks.js'

makePopUpForm();
displayHome();
const add = document.getElementById('addTask');
add.addEventListener('click', function(){
    displayPopUp();
});
addNewTask();
