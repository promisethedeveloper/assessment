// Select the form element
const form = document.querySelector("#todoform");
// Select the unordered list
const orderedList = document.querySelector("ol");
// Select the input
const input = document.querySelector("#activity");

// Create an empty array to store the todos
const savedTodos = [];

// Add eventListener to the form
form.addEventListener("submit", (e) => {
	// Prevent the default behavior of the form which is making a submission
	e.preventDefault();
	// If the input is empty, alert
	if (input.value === "") {
		alert("Please add a task");
	} else {
		// Create a list item
		const listItem = document.createElement("li");
		// Create a completed button
		const btnCompleted = document.createElement("button");
		// Add a class of firstButton to the completed button
		btnCompleted.classList.add("firstButton");
		// Add text to the completed button
		btnCompleted.textContent = "Completed";
		// Create a remove item button
		const btnRemoved = document.createElement("button");
		// Add text to the remove button
		btnRemoved.textContent = "Remove Task";
		// Set the list item text to the value of the input coming from the form
		listItem.textContent = input.value;

		// Create an object to store the task
		savedTodos.push({
			task: listItem.textContent,
		});
		// Add the task to localStorage
		localStorage.setItem("todos", JSON.stringify(savedTodos));

		// Append the completed button to the list item
		listItem.appendChild(btnCompleted);
		// Append the remove button to the list item
		listItem.appendChild(btnRemoved);
		// Append the list item to the unordered list
		orderedList.appendChild(listItem);

		// Clear the input after submission
		input.value = "";
	}
});

// Using event delegation to listen for a click on the completed button on the parent element, which is the ul
orderedList.addEventListener("click", (e) => {
	// Using the name of the class added to the completed button
	if (e.target.className === "firstButton") {
		e.target.parentElement.classList.toggle("done");
		// Using the tag name of the second button to remove the parent element
	} else if (e.target.tagName === "BUTTON") {
		e.target.parentElement.remove();
	}
});
