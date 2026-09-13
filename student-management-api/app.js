const express = require("express");
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(logger);
app.use("/students", studentRoutes);


app.get("/", (req, res) => {
  res.send("Student Management API is running");
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});