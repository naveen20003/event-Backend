# Event Planner Backend

Backend REST API for the **Event Planner Web Application**, built with **Node.js, Express.js, and MongoDB**.

This backend provides APIs for user authentication, event management, guest management, task management, and budget management. It follows a modular structure with separate routes, controllers, models, middleware, and configuration layers.

## 🚀 Features

* 🔐 User registration and authentication
* 🔑 JWT-based authorization
* 🔒 Password hashing using bcrypt
* 📅 Event CRUD operations
* 👥 Guest management
* ✅ Task management
* 💰 Budget management
* 🔗 Event invitation and guest assignment functionality
* 🔍 Search and sorting support
* 🗄️ MongoDB database integration
* 🌐 CORS support
* ☁️ Vercel deployment support
* 🧩 Modular backend architecture

## 🛠️ Tech Stack

| Technology     | Purpose                        |
| -------------- | ------------------------------ |
| Node.js        | JavaScript runtime             |
| Express.js     | REST API framework             |
| MongoDB        | Database                       |
| Mongoose       | MongoDB ODM                    |
| JSON Web Token | Authentication & authorization |
| bcryptjs       | Password hashing               |
| CORS           | Cross-origin requests          |
| dotenv         | Environment configuration      |
| nanoid         | Unique invitation IDs          |
| uuid           | Unique identifiers             |
| Nodemon        | Development server             |

These dependencies are defined in the repository's `package.json`.

## 📂 Project Structure

```text
event-Backend/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── user.controller.js
│   │   ├── event.controller.js
│   │   ├── guest.controller.js
│   │   ├── task.controller.js
│   │   └── budget.controller.js
│   │
│   ├── middlewares/
│   │   └── authentication middleware
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   ├── event.model.js
│   │   ├── guest.model.js
│   │   ├── task.model.js
│   │   └── budget.model.js
│   │
│   ├── routes/
│   │   ├── user.routes.js
│   │   ├── event.routes.js
│   │   ├── guest.routes.js
│   │   ├── task.routes.js
│   │   └── budget.routes.js
│   │
│   └── app.js
│
├── index.js
├── package.json
├── package-lock.json
├── vercel.json
└── .env
```

The repository currently contains separate `config`, `controllers`, `middlewares`, `models`, and `routes` directories under `src`, with the main application entry point in `index.js`.

## 🏗️ Architecture

The backend follows a layered REST API architecture:

```text
                    Client
                      │
                      ▼
                 Express API
                      │
              ┌───────┴────────┐
              │                │
            Routes          Middleware
              │                │
              ▼                ▼
          Controllers     Authentication
              │
              ▼
            Models
              │
              ▼
           MongoDB
```

### Request Flow

```text
HTTP Request
     │
     ▼
Express Router
     │
     ▼
Authentication Middleware
     │
     ▼
Controller
     │
     ▼
Mongoose Model
     │
     ▼
MongoDB
     │
     ▼
JSON Response
```

## 🔐 Authentication

The application uses **JWT-based authentication**.

The general authentication flow is:

```text
User Registration
       │
       ▼
Password Hashing
       │
       ▼
User Stored in MongoDB
       │
       ▼
User Login
       │
       ▼
Credentials Verified
       │
       ▼
JWT Generated
       │
       ▼
Authenticated API Requests
```

Passwords are handled using `bcryptjs`, while `jsonwebtoken` is used for token-based authentication.

## 📡 API Routes

The main API resources are mounted under the following paths:

| Resource | Base Route     | Purpose                            |
| -------- | -------------- | ---------------------------------- |
| Users    | `/api/users`   | Authentication and user management |
| Events   | `/api/events`  | Event management                   |
| Guests   | `/api/guests`  | Guest management                   |
| Tasks    | `/api/tasks`   | Event task management              |
| Budgets  | `/api/budgets` | Budget management                  |

These route groups are registered directly in the Express application.

### 👤 Users

```http
/api/users
```

Handles user-related operations such as:

* User registration
* User login
* User authentication
* User profile operations

### 📅 Events

```http
/api/events
```

Provides event management functionality including:

* Create event
* Get events
* Get event details
* Update event
* Delete event
* Event-related guest management
* Invitation functionality

### 👥 Guests

```http
/api/guests
```

Provides functionality for:

* Adding guests
* Viewing guests
* Updating guest information
* Removing guests
* Associating guests with events

### ✅ Tasks

```http
/api/tasks
```

Provides functionality for:

* Creating tasks
* Viewing tasks
* Updating tasks
* Deleting tasks
* Managing event-related tasks

### 💰 Budgets

```http
/api/budgets
```

Provides functionality for:

* Creating budget records
* Viewing budget information
* Updating budget records
* Deleting budget records
* Tracking event expenses

## 🗄️ Database

The application uses **MongoDB** with **Mongoose** as the ODM.

The backend establishes a connection to MongoDB and uses Mongoose models to interact with application data.

Main data entities include:

```text
User
 │
 ├── Events
 │    ├── Guests
 │    ├── Tasks
 │    └── Budgets
 │
 └── Profile
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/naveen20003/event-Backend.git
cd event-Backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Use your own MongoDB connection string and JWT secret.

> Never commit `.env` files or database credentials to a public repository.

### 4. Start the server

```bash
npm start
```

For development, you can use Nodemon:

```bash
npx nodemon index.js
```

## 🌐 Server

The backend is configured for deployment on **Vercel**. The repository includes a `vercel.json` configuration file, and the deployed backend is associated with:

```text
https://event-planner-backend-mu.vercel.app
```

The repository's GitHub page currently lists this deployment as the project's website.

## 🔗 Frontend

This backend is designed to work with the Event Planner frontend:

**Event Planner Frontend**

```text
https://github.com/naveen20003/event-Frontend
```

The frontend communicates with the REST API provided by this repository.

## 🔄 Full-Stack Architecture

```text
┌──────────────────────────┐
│     React + Vite         │
│      Frontend            │
└────────────┬─────────────┘
             │
             │ HTTP / REST API
             ▼
┌──────────────────────────┐
│      Express.js          │
│       Backend            │
├──────────────────────────┤
│ Routes                   │
│ Controllers              │
│ Middleware               │
│ Mongoose Models          │
└────────────┬─────────────┘
             │
             │ Mongoose
             ▼
┌──────────────────────────┐
│        MongoDB           │
│       Database           │
└──────────────────────────┘
```

## 📌 Key Backend Concepts Demonstrated

This project demonstrates practical implementation of:

* RESTful API development
* MVC-style backend organization
* CRUD operations
* JWT authentication
* Password hashing
* MongoDB database modeling
* Mongoose ODM
* Middleware-based authorization
* Route/controller separation
* Environment variable configuration
* Frontend-backend integration
* API deployment using Vercel

## 🔮 Future Improvements

Potential improvements for the backend include:

* API request validation with a dedicated validation library
* Centralized error-handling middleware
* API rate limiting
* Refresh-token authentication
* Pagination for large datasets
* Advanced event filtering
* Email-based event invitations
* Guest RSVP tracking
* Automated event reminders
* Image/file upload support
* API documentation with Swagger/OpenAPI
* Automated unit and integration tests
* Improved logging and monitoring

## 👨‍💻 Author

**Naveen Saini**

**BCA Graduate — IPS Business School**

Full-Stack Web Developer focused on building applications using the **MERN stack**.

## 📄 License

This project is currently available for educational and portfolio purposes.
