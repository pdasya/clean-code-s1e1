var taskInput = document.getElementById("main__add_newtask");
var addButton = document.getElementsByTagName("button")[0]; 
var incompleteTaskHolder = document.getElementById("main__add_list");
var completedTasksHolder = document.getElementById("main__completed_list"); 

<<<<<<< HEAD
//Problem: User interaction does not provide the correct results.
//Solution: Add interactivity so the user can manage daily tasks.
//Break things down into smaller steps and take each step at a time.

// Event handling, user interaction is what starts the code execution.

<<<<<<< HEAD
<<<<<<< HEAD
var taskInput = document.getElementById("main__add_newtask"); //Add a new task.
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTaskHolder = document.getElementById("main__add_list"); //ul of #incompleteTasks
var completedTasksHolder = document.getElementById("main__completed_list"); //completed-tasks
=======
var taskInput = document.getElementById("new-task"); //Add a new task.
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTaskHolder = document.getElementById("incompleteTasks"); //ul of #incompleteTasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks
>>>>>>> d42b499 (refactor: add html formatting according to 2.1 requirement)
=======
var taskInput = document.getElementById("main__add_newtask"); //Add a new task.
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTaskHolder = document.getElementById("main__add_list"); //ul of #incompleteTasks
var completedTasksHolder = document.getElementById("main__completed_list"); //completed-tasks
>>>>>>> 8a8f0e5 (refactor: add meaningfil naming of identifiers and classes accoridng to 3.2 requitement)

//New task list item
=======
>>>>>>> 510c2cb6b1e00e04a46c4f67a1403edc871c24d8
var createNewTaskElement = function (taskString) {
  var listItem = document.createElement("li");

  var checkBox = document.createElement("input");
  var label = document.createElement("label");
  var editInput = document.createElement("input");
  var editButton = document.createElement("button");

  var deleteButton = document.createElement("button"); 
  var deleteButtonImg = document.createElement("img");

<<<<<<< HEAD
<<<<<<< HEAD
  listItem.className = "main__list-item";
  
  label.innerText = taskString;
  label.className = "main__task main__task_label";

  checkBox.type = "checkbox";
  checkBox.className = "main__task_checkbox";
  editInput.type = "text";
  editInput.className = "main__task main__task_text";

  editButton.innerText = "Edit";
  editButton.className = "main__edit main__button";

  deleteButton.className = "main__delete main__button";
  deleteButtonImg.src = "assets/remove.svg";
  deleteButtonImg.className = "main__delete_image";
=======
=======
  listItem.className = "main__list-item";
  
>>>>>>> 8a8f0e5 (refactor: add meaningfil naming of identifiers and classes accoridng to 3.2 requitement)
  label.innerText = taskString;
  label.className = "main__task main__task_label";

  //Each elements, needs appending
  checkBox.type = "checkbox";
  checkBox.className = "main__task_checkbox";
  editInput.type = "text";
  editInput.className = "main__task main__task_text";

  editButton.innerText = "Edit"; //innerText encodes special characters, HTML does not.
  editButton.className = "main__edit main__button";

<<<<<<< HEAD
  deleteButton.className = "delete";
  deleteButtonImg.src = "./remove.svg";
>>>>>>> d42b499 (refactor: add html formatting according to 2.1 requirement)
=======
  deleteButton.className = "main__delete main__button";
  deleteButtonImg.src = "assets/remove.svg";
  deleteButtonImg.className = "main__delete_image";
>>>>>>> 8a8f0e5 (refactor: add meaningfil naming of identifiers and classes accoridng to 3.2 requitement)
  deleteButton.appendChild(deleteButtonImg);

  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
};

var addTask = function () {
  console.log("Add Task...");
  if (!taskInput.value) return;
  var listItem = createNewTaskElement(taskInput.value);

  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

  taskInput.value = "";
};

var editTask = function () {
  console.log("Edit Task...");
  console.log("Change 'edit' to 'save'");

  var listItem = this.parentNode;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8a8f0e5 (refactor: add meaningfil naming of identifiers and classes accoridng to 3.2 requitement)
  var editInput = listItem.querySelector(".main__task_text");
  var label = listItem.querySelector(".main__task_label");
  var editBtn = listItem.querySelector(".main__edit");
  var containsClass = listItem.classList.contains("main__edit_mode");
<<<<<<< HEAD
<<<<<<< HEAD
=======
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  var editBtn = listItem.querySelector(".edit");
  var containsClass = listItem.classList.contains("editMode");
>>>>>>> d42b499 (refactor: add html formatting according to 2.1 requirement)
=======
>>>>>>> 8a8f0e5 (refactor: add meaningfil naming of identifiers and classes accoridng to 3.2 requitement)
  //If class of the parent is .editmode
=======
>>>>>>> 510c2cb6b1e00e04a46c4f67a1403edc871c24d8
  if (containsClass) {
    label.innerText = editInput.value;
    editBtn.innerText = "Edit";
  } else {
    editInput.value = label.innerText;
    editBtn.innerText = "Save";
  }

<<<<<<< HEAD
  //toggle .editmode on the parent.
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 510c2cb6b1e00e04a46c4f67a1403edc871c24d8
  listItem.classList.toggle("main__edit_mode");
=======
  listItem.classList.toggle("editMode");
>>>>>>> d42b499 (refactor: add html formatting according to 2.1 requirement)
=======
  listItem.classList.toggle("main__edit_mode");
>>>>>>> 8a8f0e5 (refactor: add meaningfil naming of identifiers and classes accoridng to 3.2 requitement)
};

var deleteTask = function () {
  console.log("Delete Task...");

  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
};

var taskCompleted = function () {
  console.log("Complete Task...");

  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
};

var taskIncomplete = function () {
  console.log("Incomplete Task...");
  var listItem = this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
};

var ajaxRequest = function () {
  console.log("AJAX Request");
};

addButton.onclick = addTask;
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
  console.log("bind list item events");
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
<<<<<<< HEAD
<<<<<<< HEAD
  var editButton = taskListItem.querySelector("button.main__edit");
  var deleteButton = taskListItem.querySelector("button.main__delete");
=======
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
>>>>>>> d42b499 (refactor: add html formatting according to 2.1 requirement)
=======
  var editButton = taskListItem.querySelector("button.main__edit");
  var deleteButton = taskListItem.querySelector("button.main__delete");
>>>>>>> 8a8f0e5 (refactor: add meaningfil naming of identifiers and classes accoridng to 3.2 requitement)

  editButton.onclick = editTask;
  deleteButton.onclick = deleteTask;
  checkBox.onchange = checkBoxEventHandler;
};

for (var i = 0; i < incompleteTaskHolder.children.length; i++) {
  bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}

for (var i = 0; i < completedTasksHolder.children.length; i++) {
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}

