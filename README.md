# Web Development - Semester 3

This repository houses coursework, practical assignments, and laboratory projects completed during Semester 3 of Web Development. Each project is contained in its own modular directory with dedicated documentation, source code, and execution instructions.

## Project Index

Use the index below to navigate directly to each project's directory and full documentation:

| Project | Directory | Documentation | Description |
| :--- | :--- | :--- | :--- |
| **Smart Utility Toolkit** | [`smart-utility-toolkit/`](./smart-utility-toolkit) | [Read Documentation](./smart-utility-toolkit/README.md) | Node.js utility suite implementing a CLI calculator, custom CommonJS modules, native HTTP server, synchronous file manager, and cryptographic dice generator. |
| **Student Management API** | [`student-management-api/`](./student-management-api) | [Read Documentation](./student-management-api/README.md) | RESTful API built with Express.js featuring complete CRUD operations, request logging middleware, and modular route architecture. |

---

## Quick Documentation Switcher

Jump directly between project specifications:
- [Smart Utility Toolkit Documentation](./smart-utility-toolkit/README.md)
- [Student Management API Documentation](./student-management-api/README.md)

---

## Repository Structure

```text
WebDev-Sem3/
├── .gitignore
├── README.md                      # Main repository index and documentation switcher
│
├── smart-utility-toolkit/          # Project 1: Core Node.js utility toolkit
│   ├── modules/
│   │   └── isEven.js              # Custom exported module
│   ├── app.js                     # Custom module import & test runner
│   ├── calculator.js              # CLI arithmetic calculator
│   ├── dice.js                    # Cryptographic dice generator
│   ├── fileManager.js             # Synchronous file CRUD lifecycle manager
│   ├── server.js                  # Native HTTP web server
│   ├── package.json               # Project manifest and scripts
│   └── README.md                  # Project 1 documentation
│
└── student-management-api/        # Project 2: Express.js Student Management REST API
    ├── data/
    │   └── students.js            # In-memory student dataset
    ├── middleware/
    │   └── logger.js              # Custom request logging middleware
    ├── routes/
    │   └── studentRoutes.js       # Express Router student endpoints
    ├── app.js                     # Express application bootstrap and server setup
    ├── package.json               # Project manifest and scripts
    ├── package-lock.json          # Dependency lockfile
    └── README.md                  # Project 2 documentation
```

---

## Author

- **Vinayak Vashisth**
  - GitHub: [@codeREDxbt](https://github.com/codeREDxbt)
