# 🚀 SprintFlow — MERN Project Management Dashboard (Phase 4)

A **Jira-inspired Project Management Dashboard** built using the MERN Stack (MongoDB, Express, React, Node.js).

This project is currently completed up to **Phase 4 (Authentication + Dashboard Layout + Project Management UI foundation)**.

It demonstrates a **real-world SaaS-style architecture** with authentication, protected routes, reusable layouts, and interactive project dashboard UI.

---

# 📌 Project Overview

SprintFlow is a simplified project tracking system where users can:

- Register and login securely
- Access protected dashboard routes
- Create and view projects
- Navigate through a modern sidebar layout
- Experience a clean SaaS-style dashboard UI

The goal of this project is to simulate **real-world project management tools like Jira / Trello (basic version)**.

---

# 🧠 Current Implementation (Phase 4 Completed)

## ✅ Backend (Completed)
- User Authentication (Register/Login)
- JWT-based authentication
- Password hashing using bcrypt
- Protected API routes using middleware
- MongoDB database integration using Mongoose

## ✅ Frontend (Completed)
- React + Vite setup
- Bootstrap-based responsive UI
- Authentication pages (Login/Register)
- Global Auth Context (state management)
- Protected Routes system
- Dashboard layout with sidebar + navbar
- Project listing page (UI + API integration)
- Project creation modal (UI functional)
- Axios API integration with JWT interceptor

---

# 🏗️ Tech Stack

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
│   │   ├── api/              # Axios instance with JWT interceptor
│   │   ├── context/         # Auth Context (global state)
│   │   ├── layouts/         # Sidebar + Dashboard layout
│   │   ├── pages/           # Login, Register, Dashboard, Projects
│   │   ├── routes/          # ProtectedRoute
│   │   └── App.jsx
│
├── server/
│   ├── config/              # MongoDB connection
│   ├── controllers/         # Auth + Project controllers
│   ├── middleware/          # JWT auth middleware
│   ├── models/              # User + Project models
│   ├── routes/              # Auth + Project routes
│   └── server.js
│
└── README.md
```

---

# 🔐 Authentication Flow

1. User registers or logs in
2. Backend validates credentials
3. JWT token is generated and sent to frontend
4. Token stored in `localStorage`
5. Axios automatically attaches token in requests
6. Protected routes validate token via middleware

---

# 📌 Features (Phase 4 Scope)

## 🔐 Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes

## 📊 Dashboard UI
- Sidebar Navigation
- Navbar with user info
- Responsive layout system
- Modern SaaS-style UI

## 📁 Project Management (Basic)
- Create Projects
- View Projects
- Project Cards UI
- Modal-based project creation

---

# ⚙️ Installation & Setup Guide

## 📦 Step 1: Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/sprintflow.git
cd sprintflow
```

---

# 🖥️ Backend Setup

## Step 2: Navigate to Server

```bash
cd server
```

## Step 3: Install Dependencies

```bash
npm install
```

## Step 4: Create `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

## Step 5: Run Backend

```bash
npm run dev
```

Backend runs on:
```
http://localhost:5000
```

---

# 🎨 Frontend Setup

## Step 6: Navigate to Client

```bash
cd client
```

## Step 7: Install Dependencies

```bash
npm install
```

## Step 8: Start Frontend

```bash
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```

---

# 🔗 API Endpoints (Phase 4)

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
| GET | /api/projects/:id | Get project |
| DELETE | /api/projects/:id | Delete project |

---

# 🧱 Architecture (Simplified)

```
React (Frontend)
   ↓ Axios (JWT Token)
Express (Backend API)
   ↓ Middleware (Auth Check)
MongoDB (Database)
```

---

# 🎯 Key Concepts Demonstrated

- Full Stack MERN Architecture
- JWT Authentication Flow
- Protected Routes (Frontend + Backend)
- Context API State Management
- REST API Design
- MongoDB Schema Design
- Component-Based UI Architecture
- SaaS Dashboard Layout Design

---

# 📸 UI Overview

- Login & Register Pages
- Dashboard Layout (Sidebar + Navbar)
- Project Listing Cards
- Modal-based Project Creation
- Responsive Bootstrap UI

---

# 🚧 Current Limitations (Phase 4 State)

- No Kanban Board yet
- No Task Management system yet
- No Drag & Drop functionality yet
- Basic project-level CRUD only

---

# 🚀 Upcoming Features (Next Phases)

- Kanban Board (To Do / In Progress / Done)
- Task CRUD system
- Drag & Drop task movement
- Dashboard analytics (real-time stats)
- Task assignment system
- Filters & search
- Toast notifications
- Advanced UI polish

---

# 👨‍💻 Author

**Yash Rane**  
Final Year Computer Science & Engineering Student  
MERN Stack Developer

---

# 📄 License

This project is developed for **educational and internship assessment purposes**.

---

# ⭐ Inspiration

Inspired by:
- Jira
- Trello
- Linear
