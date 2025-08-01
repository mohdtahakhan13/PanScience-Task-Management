
# ✅ Task Management System - (TaskMate) (RBAC-Based)

A simple yet powerful **Task Management System** built using the **MERN** stack with **Role-Based Access Control (RBAC)**.
It helps teams manage, assign, and track tasks with file attachments and detailed status tracking.

---

## 🚀 Key Features

### 🔐 Role-Based Access

* **Admin:**

  * Create, edit, assign, and delete tasks
  * Assign tasks to specific users
  * Review submitted tasks (**approve** / **reject** with feedback)
  * Dashboard with task and user analytics
  * Manage users (CRUD)
  * Reset password and update profile

* **User:**

  * View personal tasks with current status
  * Update task progress (**In Progress → Review Requested**)
  * Submit completed tasks for review
  * View admin feedback on rejected/approved tasks
  * Manage own profile and password

---

## 📂 Task Features

* **Attach up to 3 documents** per task (**PDF only**)
* View uploaded documents in task details
* Track task priority (**High / Medium / Low**)
* Track task status (**Pending / In Progress / Review Requested / Completed**)

---

## 🔁 Task Workflow

1. **Admin assigns task** → Appears in User's dashboard
2. **User starts task** → Status updates to *In Progress*
3. **User submits task for review** → Admin approves or rejects with feedback
4. **Rejected tasks** → Can be reworked and resubmitted

---

## 🧩 Tech Stack

| Layer            | Technology Used                              |
| ---------------- | -------------------------------------------- |
| Frontend         | React, Bootstrap, MDB React UI Kit, Chart.js |
| Backend          | Node.js, Express.js                          |
| Database         | MongoDB                                      |
| Authentication   | JWT (JSON Web Tokens)                        |
| State Management | React Context API                            |
| Reports/Exports  | Chart.js, jsPDF, XLSX                        |
| UI Components    | MDB UI Kit, Font Awesome                     |

---

## 🧪 API Testing

All API endpoints are tested in a **public Postman workspace**:
🔗 [Postman Workspace](https://web.postman.co/workspace/fed13a77-8303-47a7-90f0-e08617e1544e)
Includes:

* **Users Collection** → Signup, Login, Update, Delete
* **Tasks Collection** → Create, Update, Assign, Delete
* **Test Collection** → Additional test cases

---

## 🐳 Docker Support

Run the entire stack with Docker:

```bash
docker-compose up --build
```

---

## 🏗️ Local Development Setup

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/task-management-system.git
cd task-management-system
```

2. **Backend setup**

```bash
cd Backend
npm install
# Add your .env file (MongoDB URI, JWT secret, etc.)
npm start
```

3. **Frontend setup**

```bash
cd Frontend
npm install
npm run dev
```

4. **Open the app**

* Frontend: [http://localhost:5173](http://localhost:5173)
* Backend: [http://localhost:5000](http://localhost:5000)

---

## 🎉 Why Use This?

* Clean, modern UI with **dark + white contrast**
* Role-based dashboards for clarity
* File upload & document preview support
* Secure authentication & authorization
* Ready-to-use **Docker + Postman workspace**

---


