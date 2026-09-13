[WebDev-Sem3 (Repository Root)](../README.md) | [Smart Utility Toolkit](../smart-utility-toolkit/README.md) | **Student Management API**

# Student Management REST API

A modular RESTful API built with Node.js and Express.js for managing student records. This project demonstrates full CRUD (Create, Read, Update, Delete) capability, HTTP status code semantics, request body parsing with `express.json()`, custom request logging middleware, and route modularization using Express Router.

## Table of Contents

- [Overview](#overview)
- [Directory Structure](#directory-structure)
- [API Specifications](#api-specifications)
- [Tasks and Implementation Details](#tasks-and-implementation-details)
  - [Task 1: Express Server Setup](#task-1-express-server-setup)
  - [Task 2: Retrieve All Students](#task-2-retrieve-all-students)
  - [Task 3: Retrieve Student by ID](#task-3-retrieve-student-by-id)
  - [Task 4: Add New Student](#task-4-add-new-student)
  - [Task 5: Update Student Record](#task-5-update-student-record)
  - [Task 6: Delete Student Record](#task-6-delete-student-record)
  - [Task 7: Error Handling and Validation](#task-7-error-handling-and-validation)
  - [Task 8: Custom Logger Middleware](#task-8-custom-logger-middleware)
  - [Task 9: Modular Route Architecture](#task-9-modular-route-architecture)
  - [Task 10: Complete CRUD Verification](#task-10-complete-crud-verification)
- [Author](#author)

---

## Overview

The Student Management API is developed as part of Node.js coursework. It provides a structured backend service to manage in-memory student datasets. Key features include:

- RESTful API design principles with standard HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`).
- JSON payload parsing via built-in `express.json()` middleware.
- Custom logging middleware tracking every incoming request's method and endpoint URL.
- Modular code architecture separating data models, custom middleware, route handlers, and application bootstrap logic.
- Input validation and HTTP error response handling (`400 Bad Request`, `404 Not Found`).

---

## Directory Structure

```text
student-management-api/
├── data/
│   └── students.js           # In-memory student data store and initial records
├── middleware/
│   └── logger.js             # Custom request logging middleware
├── routes/
│   └── studentRoutes.js      # Express Router handlers for /students endpoints
├── app.js                    # Application entry point, middleware integration, and server listener
├── package.json              # Project manifest and execution scripts
├── package-lock.json         # Dependency tree lockfile
└── README.md                 # Project documentation and API guide
```

---

## API Specifications

Base URL: `http://localhost:3000`

| Method | Endpoint | Status Code | Description | Request Body | Response Body |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `GET` | `/` | `200 OK` | Health check endpoint confirming API status | None | Plain text: `"Student Management API is running"` |
| `GET` | `/students` | `200 OK` | Fetch array of all student records | None | JSON array of student objects |
| `GET` | `/students/:id` | `200 OK` / `404 Not Found` | Fetch single student record by numeric ID | None | Student object or `{ message: "Student not found" }` |
| `POST` | `/students` | `201 Created` / `400 Bad Request` | Create a new student record with auto-incremented ID | `{ "name": "...", "age": 21, "course": "..." }` | `{ message: "Student added successfully", student: { ... } }` |
| `PUT` | `/students/:id` | `200 OK` / `400 Bad Request` / `404 Not Found` | Update fields of an existing student by ID | `{ "name": "...", "age": 22, "course": "..." }` | `{ message: "Student updated successfully", student: { ... } }` |
| `DELETE` | `/students/:id` | `200 OK` / `404 Not Found` | Remove a student record by ID | None | `{ message: "Student deleted successfully", student: { ... } }` |

---

## Tasks and Implementation Details

### Task 1: Express Server Setup

The entry point (`app.js`) initializes an Express application, mounts middleware, defines the root health check route (`GET /`), and begins listening on port `3000`.

- Endpoint: `GET /`
- Response: `"Student Management API is running"`

#### Execution and Verification

```bash
curl http://localhost:3000/
```

<img width="1913" height="980" alt="Task 1 - Express Server Setup Output" src="https://github.com/user-attachments/assets/8c148134-fb1d-4ba5-8006-9368c4523b26" />

---

### Task 2: Retrieve All Students

Retrieves the complete list of student records stored in the in-memory dataset (`data/students.js`).

- Method: `GET`
- Endpoint: `/students`
- Success Status: `200 OK`

#### Execution and Verification

```bash
curl http://localhost:3000/students
```

```json
[
  { "id": 1, "name": "Aman", "age": 20, "course": "B.Tech CSE AI/ML" },
  { "id": 2, "name": "Rohit", "age": 21, "course": "B.Tech CSE" },
  { "id": 3, "name": "Riya", "age": 20, "course": "B.Tech IT" }
]
```

<img width="1576" height="932" alt="Task 2 - Retrieve All Students Output" src="https://github.com/user-attachments/assets/22b8420b-714a-4c72-8490-89d0883ea4e1" />

---

### Task 3: Retrieve Student by ID

Retrieves details for a specific student using route parameter `:id`. If the ID exists, the record is returned with `200 OK`. If not found, a `404 Not Found` response is issued.

- Method: `GET`
- Endpoint: `/students/:id`
- Example: `/students/1`
- Success Status: `200 OK`

#### Execution and Verification

```bash
curl http://localhost:3000/students/1
```

```json
{
  "id": 1,
  "name": "Aman",
  "age": 20,
  "course": "B.Tech CSE AI/ML"
}
```

<img width="1571" height="882" alt="Task 3 - Retrieve Student by ID Output" src="https://github.com/user-attachments/assets/471327d9-23d9-4243-8cf8-eb6052c12a94" />

---

### Task 4: Add New Student

Creates a new student record using the HTTP `POST` method. The handler validates that `name`, `age`, and `course` are provided in the request body, generates an auto-incremented `id`, appends the student to the array, and returns `201 Created`.

- Method: `POST`
- Endpoint: `/students`
- Content-Type: `application/json`
- Success Status: `201 Created`

#### Request Payload

```json
{
  "name": "Kavya",
  "age": 19,
  "course": "B.Tech CSE Data Science"
}
```

#### Execution and Verification

```bash
curl -X POST http://localhost:3000/students \
  -H "Content-Type: application/json" \
  -d '{"name": "Kavya", "age": 19, "course": "B.Tech CSE Data Science"}'
```

<img width="1581" height="905" alt="Task 4 - Add New Student Output" src="https://github.com/user-attachments/assets/a97bc94e-cdf2-430e-b8d6-5de5783dbb36" />

---

### Task 5: Update Student Record

Updates the attributes of an existing student using the HTTP `PUT` method. Verifies the existence of the student and the presence of all required fields before updating the record.

- Method: `PUT`
- Endpoint: `/students/:id`
- Content-Type: `application/json`
- Success Status: `200 OK`

#### Request Payload

```json
{
  "name": "Aman Sharma",
  "age": 21,
  "course": "B.Tech CSE AI/ML"
}
```

#### Execution and Verification

```bash
curl -X PUT http://localhost:3000/students/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Aman Sharma", "age": 21, "course": "B.Tech CSE AI/ML"}'
```

<img width="1582" height="912" alt="Task 5 - Update Student Output" src="https://github.com/user-attachments/assets/342e2bcc-d9e8-4190-a5ca-8e68e37a79fc" />

---

### Task 6: Delete Student Record

Deletes an existing student from the records array using the HTTP `DELETE` method by matching the provided `:id`.

- Method: `DELETE`
- Endpoint: `/students/:id`
- Success Status: `200 OK`

#### Execution and Verification

```bash
curl -X DELETE http://localhost:3000/students/2
```

```json
{
  "message": "Student deleted successfully",
  "student": {
    "id": 2,
    "name": "Rohit",
    "age": 21,
    "course": "B.Tech CSE"
  }
}
```

<img width="1567" height="882" alt="Task 6 - Delete Student Output" src="https://github.com/user-attachments/assets/5b5c8946-0766-4f8c-87dc-aa07946678ee" />

---

### Task 7: Error Handling and Validation

Comprehensive validation safeguards the API against malformed requests and missing records:

1. **Missing Required Fields (`400 Bad Request`)**:
   When `POST` or `PUT` payloads lack `name`, `age`, or `course`.
   ```json
   { "message": "Name, age and course are required" }
   ```
2. **Resource Not Found (`404 Not Found`)**:
   When an invalid student `:id` is requested in `GET`, `PUT`, or `DELETE`.
   ```json
   { "message": "Student not found" }
   ```

#### Execution and Verification

```bash
# Missing body fields
curl -X POST http://localhost:3000/students \
  -H "Content-Type: application/json" \
  -d '{"name": "Incomplete Record"}'

# Non-existent ID lookup
curl http://localhost:3000/students/999
```

<img width="1571" height="927" alt="Task 7 - Error Handling Output" src="https://github.com/user-attachments/assets/240ff2c3-a634-4607-87c5-9a9b19c5d52c" />

---

### Task 8: Custom Logger Middleware

Custom logging middleware (`middleware/logger.js`) intercepts all incoming HTTP requests before reaching route handlers. It logs the HTTP method and requested URL path to the console, then invokes `next()` to pass control down the middleware pipeline.

```javascript
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

module.exports = logger;
```

#### Terminal Log Output Example

```text
GET /
GET /students
POST /students
PUT /students/1
DELETE /students/2
```

<img width="1915" height="983" alt="Task 8 - Logger Middleware Output" src="https://github.com/user-attachments/assets/ab6129e1-3584-47fb-80f4-1145e5606f30" />

---

### Task 9: Modular Route Architecture

The project decouples routing logic from the primary application server file by using `express.Router()` in `routes/studentRoutes.js`. The routes are mounted into `app.js` with a single root path:

```javascript
// app.js
const studentRoutes = require("./routes/studentRoutes");
app.use("/students", studentRoutes);
```

This ensures high maintainability, clear separation of concerns, and clean scalability for subsequent API resources.

<img width="1917" height="982" alt="Task 9 - Modular Routing Output" src="https://github.com/user-attachments/assets/5fb7563e-624c-4808-95bb-11254dda834d" />

---

### Task 10: Complete CRUD Verification

Final verification showing the updated state of student records after executing creation, modification, and deletion operations across the full API lifecycle.

<img width="1560" height="920" alt="Task 10 - Final Output" src="https://github.com/user-attachments/assets/a6ef4f0f-f293-448f-88c6-e3eda9c2910a" />

---

## Author

- **Vinayak Vashisth**
  - GitHub: [@codeREDxbt](https://github.com/codeREDxbt)

---

[Back to Repository Root](../README.md) | [View Smart Utility Toolkit](../smart-utility-toolkit/README.md)
