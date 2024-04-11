const list = document.querySelector("ul");
const input = document.querySelector("input");
const addButton = document.querySelector("#btn");


addButton.addEventListener("click", clicked);

// Functino that is called after the thingy is clicked
function clicked() {
    const addItem = input.value;
    console.log(addItem);
    input.value = "";

    // Creating the document elements that will be on the list
    const newList = document.createElement("li");
    const newSpan = document.createElement("span");
    const newButton = document.createElement("button");

    // Adding the document elements to the newList
    newList.appendChild(newSpan);
    newList.appendChild(newButton);
    newSpan.textContent = addItem;
    newButton.textContent = "Delete";

    // Adding the total list element to the final list
    list.appendChild(newList);

    newButton.addEventListener("click", () => {
        list.removeChild(newList);
    });

}


