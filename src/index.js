const content = document.getElementById('content');
const onLoad = document.createElement('div');
const all = document.getElementById('all');
onLoad.classList.add('content-header');
onLoad.innerHTML = all.innerHTML;
content.appendChild(onLoad);

