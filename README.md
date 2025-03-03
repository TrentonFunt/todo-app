# Todo App

A simple and intuitive Todo application built with HTML, CSS, and JavaScript. This app allows users to create, delete, and mark tasks as completed. Tasks are persisted in the browser's Local Storage, ensuring they remain available even after a page refresh.

## Features

1. **Add New Tasks**: Users can add new tasks using an input field and a button.
2. **Mark Tasks as Completed/Uncompleted**: Tasks can be marked as completed or uncompleted with a single click.
3. **Delete Tasks**: Users can delete specific tasks they no longer need.
4. **Persistent Storage**: Tasks are saved in the browser's Local Storage, ensuring they persist across page refreshes.
5. **Task Display**: Saved tasks are displayed when the page loads.

---

## Folder Structure

```
to-do-app/
├── index.html # Main HTML file
├── style.css # Styles for the app
├── script.js # JavaScript functionality
└── README.md # Project documentation

```
---

## How to Use

1. **Add a Task**:
   - Type your task in the input field.
   - Click the "Add Task" button or press `Enter`.

2. **Mark a Task as Completed**:
   - Click on the task text to toggle its completion status.
   - Completed tasks will appear with a strikethrough and reduced opacity.

3. **Delete a Task**:
   - Click the "Delete" button next to the task you want to remove.

4. **Persistent Storage**:
   - Tasks are automatically saved to Local Storage.
   - When you refresh the page, your tasks will still be there.

---

## Code Overview

### HTML (`index.html`)
- Contains the structure of the app:
  - Input field for new tasks.
  - "Add Task" button.
  - List to display tasks.

### CSS (`style.css`)
- Provides styling for:
  - Input field and button.
  - Task list items.
  - Completed tasks (strikethrough and opacity).

### JavaScript (`script.js`)
- Handles all functionality:
  - Adding new tasks.
  - Saving tasks to Local Storage.
  - Loading tasks from Local Storage on page load.
  - Marking tasks as completed/uncompleted.
  - Deleting tasks.

---

## Key Functions in `script.js`

1. **`addTask()`**:
   - Adds a new task to the list and saves it to Local Storage.

2. **`deleteTask(id)`**:
   - Removes a task by its unique ID and updates Local Storage.

3. **`toggleComplete(id)`**:
   - Toggles the completion status of a task and updates Local Storage.

4. **`saveTasks()`**:
   - Saves the current tasks array to Local Storage.

5. **`renderTasks()`**:
   - Displays all tasks in the task list, updating the UI.

---

## How to Run the Project

1. Clone the repository or download the project files.
2. Open the `index.html` file in your browser.
3. Start adding and managing your tasks!

---

## Future Improvements

1. **Edit Tasks**: Allow users to edit existing tasks.
2. **Due Dates**: Add due dates and sorting by date.
3. **Categories/Tags**: Organize tasks into categories or tags.
4. **Dark Mode**: Add a dark mode for better usability at night.
5. **Drag and Drop**: Allow reordering of tasks via drag-and-drop.

---

## Technologies Used

- **HTML**: For the structure of the app.
- **CSS**: For styling and layout.
- **JavaScript**: For dynamic functionality and Local Storage handling.

---

## License

This project is open-source and available under the [MIT License](LICENSE).