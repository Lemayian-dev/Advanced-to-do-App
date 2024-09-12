// To store add btn
const addtodoicon = document.getElementById('addTodo');

// To store popup content
const popUp = document.querySelector('.popUp');

// To store the close button in the popup
const closebtn = document.querySelector('.close-btn');

// To store the add button in the popup
const addBtn = document.getElementById('addBtn');

// To store the input field for new todos
const todoInput = document.getElementById('todoContent');

// To store the list where new todos will be appended
const todoList = document.getElementById('todoList');

// To store the search input field
const searchInput = document.getElementById('searchInput');

// Function to show the pop-up
function showPopUp() {
    popUp.style.visibility = 'visible';
    // Optionally, you can also show an overlay or perform other actions
}

// Function to hide the pop-up
function hidePopUp() {
    popUp.style.visibility = 'hidden';
}

// Function to add a new todo item
function updateTodo() {
    if (todoInput.value.trim() !== '') { // Checks if the input is not empty
        // Create new to-do list item
        const item = document.createElement('li'); 

        // Create the tick icon (checkbox)
        const tickIcon = document.createElement('input');
        tickIcon.type = 'checkbox';
        tickIcon.classList.add('tickIcon');

        // Create the task text
        const taskText = document.createElement('span');
        taskText.textContent = todoInput.value; // Set the text to the input value
        taskText.classList.add('todoText'); // Optional: Add a class for styling

        // Create the delete icon
        const deleteIcon = document.createElement('img');
        deleteIcon.src = 'Images/icons8-delete-48.png'; // Path to your delete icon image
        deleteIcon.classList.add('deleteIcon');

        // Append elements to the list item
        item.appendChild(tickIcon);
        item.appendChild(taskText);
        item.appendChild(deleteIcon);

        // Add event listener to delete icon to remove the item
        deleteIcon.addEventListener('click', () => {
            todoList.removeChild(item); // Remove the item from the list
        });

        // Add the new item to the list
        todoList.appendChild(item);

        // Clear the input field
        todoInput.value = '';
    }
}

// Function to filter todos based on the search query
function filterTodos() {
    const query = searchInput.value.toLowerCase(); // Get the search query and convert it to lowercase

    // Get all to-do items
    const items = todoList.getElementsByTagName('li');

    // Loop through the to-do items and hide/show based on the search query
    for (const item of items) {
        const text = item.querySelector('.todoText').textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = 'flex'; // Show item
        } else {
            item.style.display = 'none'; // Hide item
        }
    }
}

// Event listeners for button clicks
addBtn.addEventListener('click', updateTodo);
addtodoicon.addEventListener('click', showPopUp);
closebtn.addEventListener('click', hidePopUp);

// Add event listener to search input field
searchInput.addEventListener('input', filterTodos);





// JavaScript to toggle dark mode
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check if dark mode is already enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        // Toggle dark mode class on the body
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled'); // Save preference
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled'); // Save preference
        }
    });
});
