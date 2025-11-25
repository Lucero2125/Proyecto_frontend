# Task Manager - Final Project

This is a simple Task Management application built with React and Vite, as part of the final project for the Visual Studio Frontend course.

## Project Overview

The goal of this project is to demonstrate the core concepts of a CRUD (Create, Read, Update, Delete) application. The application allows you to manage a list of tasks, with a clean and intuitive user interface.

### Features

- **Create:** Add new tasks with a title and description.
- **Read:** View a list of all your tasks.
- **Update:** Edit existing tasks.
- **Delete:** Remove tasks from your list.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast and modern build tool for web development.
- **JavaScript (ES6+):** The programming language used for the application's logic.
- **Fetch API:** Used for making HTTP requests to the backend.
- **MockAPI:** A service used to simulate a real backend for development and testing.

## Project Structure

The project is structured to be modular and easy to maintain, with a clear separation of concerns.

- **`src/components`:** Contains the React components that make up the user interface.
- **`src/services`:** Contains the logic for interacting with the MockAPI.
- **`src/styles`:** Contains the CSS stylesheets for the application.
- **`.env`:** Contains the environment variables for the application, such as the API base URL.

## Getting Started

To get the project up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Entrega_proyecto_lucero_oriundo/task-manager
    ```

3.  **Install the dependencies:**
    You can use either `npm` or `yarn` to install the dependencies.
    ```bash
    # With npm
    npm install

    # With yarn
    yarn install
    ```

4.  **Set up the environment variables:**
    Create a `.env` file in the root of the project directory and add the following line:
    ```
    VITE_API_BASE_URL=<your-mockapi-url>
    ```
    Replace `<your-mockapi-url>` with your own MockAPI endpoint.

5.  **Run the development server:**
    ```bash
    # With npm
    npm run dev

    # With yarn
    yarn dev
    ```
    This will start the development server and open the application in your browser.

## A Note on the Development Environment

During the development of this project, there were persistent issues with the development environment that prevented the `vite` server from starting reliably. These issues are likely specific to the environment in which the project was developed and may not affect you. If you encounter any issues, please try the following:

-   Ensure you have a recent version of Node.js and npm/yarn installed.
-   Try deleting the `node_modules` directory and the `package-lock.json` or `yarn.lock` file and reinstalling the dependencies.

## Final Explanation

This project was a great opportunity to apply the concepts learned in the Visual Studio Frontend course. The application is a testament to the power and simplicity of React for building modern web applications. The use of a component-based architecture, a dedicated API service, and a clean project structure are all best practices that will serve you well in your future projects.

I hope you're happy with the final result, and I wish you the best of luck with your presentation!
