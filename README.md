# Project Frontend (Vite)

This is the frontend user interface for the application, built using React and Vite. It provides a clean form to create posts, automatically generating URL-friendly slugs from your titles before sending them to the backend API.

---

# Features

* Vite-powered React: Lightning-fast HMR (Hot Module Replacement) and development builds.
* Dynamic Slug Generation: Form titles are automatically sanitized into clean URL slugs dynamically on submission.
* Axios Integration: Seamless communication with the Node.js Express backend.

---

# Prerequisites

Before running the app, make sure you have:
* [Node.js](https://nodejs.org/) (v16 or higher recommended)
* The backend server running on `http://localhost:5000`

---

## Getting Started

### 1. Install Dependencies
Navigate into your frontend directory and install the necessary packages:
```bash
npm install
```
### 2. Start Project 
```bash
npm run dev
```



# Project Backend (Express & Prisma with MySQL)

This is the backend service for the application, built using Node.js, Express, and Prisma ORM connected to a MySQL database.

---

# Features

* REST API built with Express.
* Database Management using Prisma ORM.
* MySQL Database integration.
* Endpoints to create and fetch posts uniquely via slugs.

---

##  Prerequisites

Before running the server, ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v16 or higher recommended)
* [MySQL Server](https://www.mysql.com/) running locally or hosted online

---

##  Getting Started

### 1. Install Dependencies
Navigate to the backend directory and install the required npm packages:
```bash
npm install
```

### 2. Start Project 
```bash
npx tsx script.ts
```
