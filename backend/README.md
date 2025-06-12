# Task Management API

A RESTful API for managing tasks with basic CRUD operations and pagination support.

## Features

- Create new tasks
- Retrieve all tasks with pagination
- Retrieve specific task by ID
- Update existing tasks
- Delete tasks
- Pagination support (10 items per page by default)

## Prerequisites

- Node.js (latest LTS version recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the server:
   ```bash
   npm start
   ```

2. The server will run on `http://localhost:3000`

## API Endpoints

### GET /api/tasks
- Retrieves a paginated list of tasks
- Query Parameters:
  - `page`: Page number (default: 1)
  - `limit`: Number of items per page (default: 10)

### GET /api/tasks/:id
- Retrieves a specific task by ID

### POST /api/tasks
- Creates a new task
- Request Body:
  ```json
  {
    "title": string,
    "description": string,
    "completed": boolean
  }
  ```

### PUT /api/tasks/:id
- Updates an existing task
- Request Body:
  ```json
  {
    "title": string,
    "description": string,
    "completed": boolean
  }
  ```

### DELETE /api/tasks/:id
- Deletes a task by ID

## Task Data Structure

Each task object has the following structure:
```json
{
    "id": number,
    "title": string,
    "description": string,
    "completed": boolean
}
```

## Project Structure

```
backend/
├── controllers/        # API controllers
│   └── taskController.js
├── middleware/        # Middleware functions
│   └── errorHandler.js
├── routes/           # API routes
│   └── taskRoute.js
├── tasks.json        # Task data storage
├── server.js         # Main application file
└── package.json      # Project dependencies
```

## Error Handling

The API includes error handling middleware that will return appropriate error messages and status codes.