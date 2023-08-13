const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

function addItem(e) {
  e.preventDefault();
  if (newItem.value === "") {
    alert("Please add one");
    return;
  }
}
itemForm.addEventListener("submit", addItem);
