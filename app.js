const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { initDB } = require("./models");
const logger = require("./middleware/logger");

const employeeRoutes = require("./routes/employeeRoutes");
const departmentRoutes = require("./routes/departmentRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.json({
    message: "Employee Management API",
    status: "Running 🚀",
    endpoints: {
      employees: {
        create: "POST /api/employees",
        getAll: "GET /api/employees",
        getById: "GET /api/employees/:id",
        update: "PUT /api/employees/:id",
        delete: "DELETE /api/employees/:id",
      },
      departments: {
        create: "POST /api/departments",
        getAll: "GET /api/departments",
        delete: "DELETE /api/departments/:id",
      },
    },
  });
});


app.use("/api/employees", employeeRoutes);
app.use("/api/departments", departmentRoutes);

const PORT = process.env.PORT || 5000;

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
