[WebDev-Sem3 (Repository Root)](../README.md) | **Smart Utility Toolkit** | [Student Management API](../student-management-api/README.md)

# Smart Utility Toolkit

A comprehensive Node.js utility toolkit built using native Node.js core modules. This project implements command-line arithmetic evaluation, CommonJS modularization, native HTTP server routing, synchronous file system lifecycle management, and cryptographically secure random number generation.

## Table of Contents

- [Overview](#overview)
- [Directory Structure](#directory-structure)
- [Modules and Tasks](#modules-and-tasks)
  - [Task 1: CLI Calculator](#task-1-cli-calculator)
  - [Task 2: Custom Module System](#task-2-custom-module-system)
  - [Task 3: Native HTTP Web Server](#task-3-native-http-web-server)
  - [Task 4: File System Manager](#task-4-file-system-manager)
  - [Task 5: Cryptographic Dice Generator](#task-5-cryptographic-dice-generator)
- [Getting Started](#getting-started)
- [Author](#author)

---

## Overview

The Smart Utility Toolkit demonstrates essential Node.js fundamentals without relying on third-party dependencies. It uses built-in modules (`http`, `fs`, `crypto`, and CommonJS `module.exports`/`require`) along with command-line arguments parsing via `process.argv`.

---

## Directory Structure

```text
smart-utility-toolkit/
├── modules/
│   └── isEven.js          # Custom exported utility module
├── app.js                 # Entry point importing and testing isEven
├── calculator.js          # CLI arithmetic calculator
├── dice.js                # Cryptographic dice roll generator
├── fileManager.js         # Synchronous file system CRUD operations
├── server.js              # Native HTTP web server with routing
├── package.json           # Subproject metadata and scripts
└── README.md              # Project documentation
```

---

## Modules and Tasks

### Task 1: CLI Calculator

The CLI Calculator (`calculator.js`) parses command-line arguments via `process.argv` to perform standard arithmetic operations.

#### Supported Operations

| Operation | Syntax | Description | Example |
| :--- | :--- | :--- | :--- |
| `add` | `node calculator.js add <num1> <num2>` | Adds two numbers | `node calculator.js add 10 5` |
| `subtract` | `node calculator.js subtract <num1> <num2>` | Subtracts num2 from num1 | `node calculator.js subtract 10 8` |
| `multiply` | `node calculator.js multiply <num1> <num2>` | Multiplies two numbers | `node calculator.js multiply 8 5` |
| `divide` | `node calculator.js divide <num1> <num2>` | Divides num1 by num2 | `node calculator.js divide 1000 50` |

#### Edge-Case Handling

- Division by zero: The calculator inspects the denominator and exits safely with an error message: `Error: Cannot divide by zero`.
- Invalid operation: If an unrecognized operator is supplied, the process exits with `Invalid operation`.

#### Usage and Terminal Output

```bash
# Addition
node calculator.js add 10 5
# Result: 15

# Subtraction
node calculator.js subtract 10 8
# Result: 2

# Multiplication
node calculator.js multiply 8 5
# Result: 40

# Division
node calculator.js divide 1000 50
# Result: 20
```

---

### Task 2: Custom Module System

Demonstrates modular architecture in Node.js using the CommonJS specification (`module.exports` and `require`).

- `modules/isEven.js`: Exports a utility function that returns `true` if a given number is even (`number % 2 === 0`), and `false` otherwise.
- `app.js`: Imports `isEven` using `require('./modules/isEven')` and tests both even and odd inputs.

#### Usage and Terminal Output

```bash
node app.js
```

Output:
```text
Is 10 even? true
Is 7 even? false
```

---

### Task 3: Native HTTP Web Server

The HTTP server (`server.js`) utilizes Node.js's built-in `http` module to handle incoming client requests and dispatch routing on port `3000`.

#### Endpoint Routing Table

| Route | Method | Status Code | Content Type | Response Body |
| :--- | :--- | :--- | :--- | :--- |
| `/` | GET | `200 OK` | `text/plain` | `Welcome to Node Server` |
| `/about` | GET | `200 OK` | `text/plain` | `About Page` |
| `/contact` | GET | `200 OK` | `text/plain` | `Contact Page` |
| *(Wildcard / Unmatched)* | GET | `404 Not Found` | `text/plain` | `404 - Page Not Found` |

#### Usage and Testing

Start the server:
```bash
node server.js
```

In another terminal or browser:
```bash
curl http://localhost:3000/
# Welcome to Node Server

curl http://localhost:3000/about
# About Page

curl http://localhost:3000/contact
# Contact Page

curl http://localhost:3000/undefined-route
# 404 - Page Not Found
```

---

### Task 4: File System Manager

The File Manager (`fileManager.js`) demonstrates synchronous file management using the Node.js native `fs` module, executing an end-to-end CRUD (Create, Read, Update, Delete) lifecycle on `sample.txt`.

#### Lifecycle Operations

1. Create: `fs.writeFileSync()` writes the initial string to `sample.txt`.
2. Read: `fs.readFileSync()` retrieves and displays the initial content.
3. Update: `fs.appendFileSync()` appends a secondary line of text.
4. Verify: `fs.readFileSync()` confirms both lines exist.
5. Delete: `fs.unlinkSync()` cleans up by deleting `sample.txt`.

#### Usage and Terminal Output

```bash
node fileManager.js
```

Output:
```text
File created successfully.
File content: Hello, this is my first file.
File updated successfully.
Updated content: Hello, this is my first file.
This content was added later.
File deleted successfully.
```

---

### Task 5: Cryptographic Dice Generator

The Dice Generator (`dice.js`) uses Node.js's built-in `crypto` module (`crypto.randomInt(1, 7)`) to produce cryptographically strong pseudo-random integers from 1 to 6.

#### Features

- Supports a configurable number of rolls passed as a command-line parameter.
- Defaults to 1 roll when no argument is supplied.
- Validates that the input is a positive integer, rejecting non-integer or non-positive values.

#### Usage and Terminal Output

```bash
# Default single roll
node dice.js

# Output:
# Starting dice rolls...
# Roll 1: Dice Rolled: 5
# Dice rolling completed.

# Multiple rolls (e.g. 3 rolls)
node dice.js 3

# Output:
# Starting dice rolls...
# Roll 1: Dice Rolled: 2
# Roll 2: Dice Rolled: 6
# Roll 3: Dice Rolled: 4
# Dice rolling completed.
```

---

## Getting Started

### Prerequisites

- Node.js installed (v16.0.0 or higher recommended). No third-party packages or `npm install` steps required.

### Quick Commands

Navigate to the `smart-utility-toolkit` directory:

```bash
cd smart-utility-toolkit
```

Run any of the utilities:

```bash
# Calculator
node calculator.js add 25 15

# Custom Module
node app.js

# HTTP Server
node server.js

# File Manager
node fileManager.js

# Dice Generator
node dice.js 5
```

---

## Author

- Vinayak Vashisth (GitHub: [@codeREDxbt](https://github.com/codeREDxbt))

---

[Back to Repository Root](../README.md) | [Next Project: Student Management API](../student-management-api/README.md)
