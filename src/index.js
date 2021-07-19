document.addEventListener("DOMContentLoaded", () => {
  noDefault();
});


function noDefault() {
  document.getElementById("create-task-form").addEventListener("click", function(event) {
    event.preventDefault();
  });
}

document.getElementsByTagName("input")[1].addEventListener("click", handleClick)

function handleClick(e) {
  const task = (document.getElementById('new-task-description').value) + ' ';
  listTask(task);
  document.getElementById('new-task-description').value="";
}

  function listTask(task) {

   if (task !== " " ) {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.setAttribute('task-name', task);
    li.appendChild(document.createTextNode(task))
    ul.appendChild(li); 
    let button = document.createElement("button");
    button.name = task;
    button.innerHTML = "x";

    button.onclick = function() { deleteButton(task) };
    li.appendChild(button); 
    }     
  }


if (document.querySelector("button") !== null) {

    let btn = document.querySelector('button')
    btn.addEventListener("click", deleteTask)
}

function deleteButton(task) {
  let taskVal = task;
  let taskSel = document.querySelector('li', 'taskVal');
  taskSel.remove();
}






