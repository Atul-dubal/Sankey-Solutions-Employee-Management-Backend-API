# 📦 Employee Management Backend API

A RESTful backend service to manage **Employees, Departments, and Reporting Managers** with proper relational integrity, joins, and middleware logging.

---

## 🚀 Live Demo
🔗 https://sankey-solutions-employee-management.onrender.com/

---

## 💻 GitHub Repository
🔗 https://github.com/Atul-dubal/Sankey-Solutions-Employee-Management-Backend-API

---

## 📌 Features

- ✅ CRUD operations for Employees & Departments  
- ✅ Relational database (PostgreSQL) with ORM (Sequelize)  
- ✅ Employee–Department & Manager relationships  
- ✅ JOIN queries for fetching complete employee details  
- ✅ Middleware for request–response logging  
- ✅ Proper error handling & HTTP status codes  
- ✅ Referential integrity (FK constraints enforced)  

---

## 🗄️ Database Design

### Employee
- id (PK)
- first_name
- last_name
- email (unique)
- department_id (FK → Department.id)
- manager_id (FK → Employee.id, nullable)
- created_at
- updated_at

### Department
- id (PK)
- name (unique)

---

## 🌐 API Endpoints

### 👨‍💼 Employee Routes
```
POST    /api/employees
GET     /api/employees
GET     /api/employees/:id
PUT     /api/employees/:id
DELETE  /api/employees/:id
```

### 🏢 Department Routes
```
POST    /api/departments
GET     /api/departments
DELETE  /api/departments/:id
```

---

## ⚙️ Installation & Setup

### 🔹 1. Clone the Repository
```bash
git clone https://github.com/Atul-dubal/Sankey-Solutions-Employee-Management-Backend-API.git
cd Sankey-Solutions-Employee-Management-Backend-API
```

### 🔹 2. Install Dependencies
```bash
npm install
```

### 🔹 3. Setup Environment Variables

Create a `.env` file in root:

```env
PORT=5000

# Local DB Config
DB_NAME=employee_db
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_HOST=localhost

# Production (Render)
DB_URL=your_postgres_connection_url
```

### 🔹 4. Run the Server
```bash
node app.js
```

or (for development):

```bash
npx nodemon app.js
```

---

## 🧪 Sample API Request

### Create Employee
```json
{
  "first_name": "Atul",
  "last_name": "Dubal",
  "email": "atul@gmail.com",
  "department_id": 1,
  "manager_id": null
}
```

---

## 📊 Middleware Logging

Logs:
- HTTP Method  
- Endpoint  
- Status Code  
- Response Time  

Example:
```
GET /api/employees 200 - 35ms
```

---

## ⚠️ Business Rules Implemented

- 🚫 Cannot delete a department if employees exist  
- 🔄 Deleting a manager sets `manager_id = NULL` for subordinates  
- 🔗 Foreign key constraints enforced  
- 📧 Email must be unique  

---

## 🛠️ Tech Stack

- Backend: Node.js, Express  
- Database: PostgreSQL  
- ORM: Sequelize  
- Deployment: Render  

---

## 👨‍💻 Author

**Atul Dubal**  
📧 atuldubal199@gmail.com  
