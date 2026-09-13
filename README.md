# Web Development - Semester 3

This repository houses coursework, practical assignments, and laboratory projects completed during Semester 3 of Web Development. Each project is contained in its own modular directory with dedicated documentation, code, and execution instructions.

## Project Index

Use the index below to navigate directly to each project's folder and documentation:

| Project | Directory | Documentation | Description |
| :--- | :--- | :--- | :--- |
| **Smart Utility Toolkit** | [`smart-utility-toolkit/`](./smart-utility-toolkit) | [View README](./smart-utility-toolkit/README.md) | Node.js utility suite implementing a CLI calculator, custom CommonJS modules, HTTP server, synchronous file manager, and crypto dice generator. |
| **Project 2** *(Upcoming)* | `Coming Soon` | `Coming Soon` | Upcoming semester assignment / project. |

---

## Repository Structure

```text
WebDev-Sem3/
├── .gitignore
├── README.md                      # Main repository documentation and project index
│
└── smart-utility-toolkit/          # Project 1: Core Node.js utility toolkit
    ├── modules/
    │   └── isEven.js              # Custom exported module
    ├── app.js                     # Custom module import & test runner
    ├── calculator.js              # CLI arithmetic calculator
    ├── dice.js                    # Cryptographic dice generator
    ├── fileManager.js             # Synchronous file CRUD lifecycle manager
    ├── server.js                  # Native HTTP web server
    ├── package.json               # Project manifest and scripts
    └── README.md                  # Project 1 documentation
```

---

## Getting Started

### Cloning the Repository

```bash
git clone https://github.com/codeREDxbt/WebDev-Sem3.git
cd WebDev-Sem3
```

### Running Projects

Each project operates independently. Navigate to the desired project subfolder and follow its specific instructions:

```bash
# Example: Running the Smart Utility Toolkit
cd smart-utility-toolkit
node calculator.js add 10 5
node server.js
```

Refer to the respective project [README.md](./smart-utility-toolkit/README.md) for full usage examples and task details.

---

## Author

- **Vinayak Vashisth**
  - GitHub: [@codeREDxbt](https://github.com/codeREDxbt)
