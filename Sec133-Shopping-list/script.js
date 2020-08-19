var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");
var list = document.getElementById("list");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  var delButton = document.createElement("button");
  delButton.className = "delete";
  delButton.appendChild(document.createTextNode("DELETE"));
  li.appendChild(delButton);
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

// 1. If you click on the list item, it toggles the .done  class on and off:
function toggleListElement() {
  for (i = 0; i < listItems.length; i++) {
    let item = listItems[i];
    let toggle = () => item.classList.toggle("done");
    item.addEventListener("click", toggle);
  }
}

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button:

function deleteItemAfterClick(element) {
  if (element.target.classList.contains("delete")) {
    if (confirm("Are you sure you want to delete this?")) {
      let li = element.target.parentElement;
      list.removeChild(li);
    }
  }
}

enterButton.addEventListener("click", addListAfterClick);
ul.addEventListener("click", toggleListElement);
ul.addEventListener("click", deleteItemAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)
