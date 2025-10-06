"use strict";

const input = document.querySelector(".input");
const buttonAddTask = document.querySelector(".button-add");
const todoBody = document.querySelector(".todo-body");

buttonAddTask.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") {
    return;
  }

  const existingTasks = document.querySelectorAll(".task p");
  for (let p of existingTasks) {
    if (p.textContent.toLowerCase() === taskText.toLowerCase()) {
      alert("Такая задача уже добавлена");
      return;
    }
  }

  const div = document.createElement("div");
  div.classList.add("task");

  todoBody.appendChild(div);

  const paragraph = document.createElement("p");
  paragraph.textContent = taskText;
  div.appendChild(paragraph);

  const buttonbuttonTaskDone = document.createElement("button");
  buttonbuttonTaskDone.classList.add("button-task", "button-task-done");
  buttonbuttonTaskDone.type = "button";

  const taskIconDone = document.createElement("img");
  taskIconDone.classList.add("task-icon", "task-icon-done");
  taskIconDone.src = "icons/done.png";
  taskIconDone.alt = "task done";
  taskIconDone.width = 20;
  taskIconDone.height = 20;

  buttonbuttonTaskDone.appendChild(taskIconDone);

  div.appendChild(buttonbuttonTaskDone);

  //

  const buttonbuttonTaskDel = document.createElement("button");
  buttonbuttonTaskDel.classList.add("button-task", "button-task-del");
  buttonbuttonTaskDel.type = "reset";

  const taskIconDel = document.createElement("img");
  taskIconDel.classList.add("task-icon", "task-icon-del");
  taskIconDel.src = "icons/del.png";
  taskIconDel.alt = "delete this task";
  taskIconDel.width = 20;
  taskIconDel.height = 20;

  buttonbuttonTaskDel.appendChild(taskIconDel);

  div.appendChild(buttonbuttonTaskDel);

  input.value = "";

  buttonbuttonTaskDel.addEventListener("click", () => {
    div.remove();
  });

  buttonbuttonTaskDone.addEventListener("click", () => {
    paragraph.classList.toggle("done");
  });
});
