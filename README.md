# 🚀 SprintFlow — MERN Project Management Dashboard

A modern **Jira-inspired Project Management System** built using the MERN Stack (MongoDB, Express, React, Node.js).

SprintFlow is designed to simulate real-world SaaS project management tools like Jira and Trello, with a clean dashboard, authentication system, and project-level workflow management.

---

# 📌 Project Overview

SprintFlow is a full-stack web application that allows users to:

- Register and login securely
- Access a protected dashboard
- Create and manage projects
- View projects in a clean card-based UI
- Navigate through a modern sidebar dashboard layout
- Interact with a responsive SaaS-style interface

The application focuses on **real-world architecture, authentication flow, and scalable frontend structure**.

---

# ✨ Features Implemented

## 🔐 Authentication System
- User Registration
- User Login
- JWT-based authentication
- Protected routes (frontend + backend)
- Password hashing using bcrypt

## 📊 Dashboard UI
- Responsive sidebar navigation
- Top navigation bar with user info
- Clean SaaS-style layout
- Reusable layout system

## 📁 Project Management
- Create new projects
- View all projects in card format
- Project creation modal
- Project data stored in MongoDB
- API integration using Axios

## ⚙️ System Design
- REST API architecture
- Context API for global authentication state
- Axios interceptor for JWT handling
- Clean separation of frontend and backend

---

# 🛠️ Tech Stack

## Frontend
- React.js (Vite)
- React Router DOM
- Bootstrap 5
- Axios
- Context API

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs

---

# 📁 Project Structure

```
SprintFlow/
│
├── client/
│   ├── src/
│   │   ├── api/          # Axios instance (JWT interceptor)
│   │   ├── context/      # Auth Context (global state management)
│   │   ├── layouts/      # Dashboard layout (Sidebar + Navbar)
│   │   ├── pages/        # Login, Register, Dashboard, Projects
│   │   ├── routes/       # ProtectedRoute logic
│   │   └── App.jsx
│
├── server/
│   ├── config/           # Database connection
│   ├── controllers/      # Auth & Project logic
│   ├── middleware/       # JWT authentication middleware
│   ├── models/           # User & Project schemas
│   ├── routes/           # API routes
│   └── server.js
│
└── README.md
```

---

# 🔐 Authentication Flow

1. User registers or logs in
2. Server validates credentials
3. JWT token is generated and sent to client
4. Token is stored in localStorage
5. Axios automatically attaches token to API requests
6. Protected routes verify token on backend

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/sprintflow.git
cd sprintflow
```

---

## 🖥️ Backend Setup

```bash
cd server
npm install
```

### Create `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run Backend

```bash
npm run dev
```

Backend runs at:
```
http://localhost:5000
```

---

## 🎨 Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs at:
```
http://localhost:5173
```

---

# 🔗 API Endpoints

## Authentication

| Method | Endpoint | Description |
|------|----------|-------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |

---

## Projects

| Method | Endpoint | Description |
|------|----------|-------------|
| GET | /api/projects | Get all projects |
| POST | /api/projects | Create project |
| GET | /api/projects/:id | Get project details |
| DELETE | /api/projects/:id | Delete project |

---

# 🧠 Key Concepts Demonstrated

- Full-stack MERN architecture
- JWT authentication flow
- Protected routing (frontend + backend)
- REST API design
- MongoDB schema modeling
- Context API state management
- Axios interceptor pattern
- Component-based UI architecture
- SaaS-style dashboard design

---

# 📸 UI Highlights

- Authentication screens (Login / Register)
- Dashboard with sidebar navigation
- Project listing interface
- Modal-based project creation
- Responsive Bootstrap-based UI

---

# 🚧 Current Limitations

The project currently focuses on:
- Project-level management system
- Authentication and dashboard foundation
- Basic CRUD operations for projects

Advanced task-level workflow features are not yet implemented.

---

# 🚀 Future Enhancements

- Kanban Board (To Do / In Progress / Done)
- Task management system
- Drag & drop task movement
- Task assignment system
- Real-time dashboard analytics
- Search and filtering system
- Toast notifications for better UX
- Advanced role-based access control
- Activity logs and collaboration features
