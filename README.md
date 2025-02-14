# Task Manager

## Description
A simple Task Manager application built using React. This application allows users to add, edit, and delete tasks efficiently. It demonstrates the use of React hooks like `useState` for managing state and provides a clean user interface for task management.

## Features
- Add new tasks
- Edit existing tasks
- Delete tasks
- Inline editing functionality

## Technologies Used
- React.js
- JavaScript (ES6+)
- HTML
- CSS

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/suryanag9099/task-manager.git
   ```
2. Navigate to the project directory:
   ```sh
   cd task-manager
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage
1. Start the development server:
   ```sh
   npm start
   ```
2. Open your browser and go to:
   ```
   http://localhost:3000
   ```
3. Add tasks, edit them, or delete them as needed.

## File Structure
```
TaskManager/
│── src/
│   ├── components/
│   │   ├── TaskManager.js
│   │   ├── TaskList.js
│   ├── App.js
│── public/
│── package.json
│── README.md
```

## Components
### 1. `TaskManager.js`
- Manages the state of tasks
- Adds new tasks
- Passes tasks to `TaskList`

### 2. `TaskList.js`
- Displays the list of tasks
- Provides editing and deleting functionality

### 3. `App.js`
- Renders the `TaskManager` component

## Contributing
Feel free to contribute to this project by creating a pull request or opening an issue.

## License
This project is open-source and available under the MIT License.

