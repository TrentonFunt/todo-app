//Initialize Variables and Event Listeners
let tasks = loadTasks();
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});

// Initial render
renderTasks();

// Add task function
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false
  };

  tasks.push(task);
  saveTasks();
  renderTasks();
  taskInput.value = '';
}

// Delete task 

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

// Task completion

function toggleComplete(id) {
  tasks = tasks.map(task => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  saveTasks();
  renderTasks();
}

// Save tasks using local storage
function saveTasks() {
  try {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    
    console.error('Error saving tasks:', error);
  }
}


function loadTasks() {
  try {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  } catch (error) {
    
    console.error('Error loading tasks:', error);
    return [];
  }
}


// Render tasks
function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
            <div class="task-content">
                <input type="checkbox" 
                    onchange="toggleComplete(${task.id})" 
                    ${task.completed ? 'checked' : ''}>
                <span class="task-number">${index + 1}.</span>
                <span class="task-text ${task.completed ? 'completed' : ''}">${task.text}</span>
            </div>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        `;
    taskList.appendChild(li);
  });
}

