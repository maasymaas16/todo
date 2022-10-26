import { displayHome, addNewTask, makePopUpForm } from './UI.js'

makePopUpForm();
displayHome();
const add = document.getElementById('addTask');
add.addEventListener('click', function(){
    addNewTask();
});

