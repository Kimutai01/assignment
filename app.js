const submit = document.getElementById("submit");
const newTaskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

submit.disabled = true;

newTaskInput.addEventListener("input", () => {
  submit.disabled = newTaskInput.value.trim() === "";
});

document.getElementById("task-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const taskText = newTaskInput.value.trim();

  if (taskText) {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    taskList.appendChild(listItem);

    newTaskInput.value = "";
    submit.disabled = true;
  }

  return false;
});
