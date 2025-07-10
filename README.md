#  MoneyTrack

**MoneyTrack** is a full-stack expense tracker web application that helps users manage and visualize their income and expenses. It includes secure user authentication, dynamic transaction management, and data visualization.

## Live Demo

- **Frontend (Netlify):** [moneytrack23.netlify.app](https://moneytrack23.netlify.app)
- **Backend (Render):** [moneytrack-2.onrender.com](https://moneytrack-23.onrender.com)

---

## Features

-  User authentication (Register & Login)
-  Add, edit, and delete transactions
-  Transaction filtering by date, type, category
-  Visual charts using MUI and Bootstrap
-  Sync with MongoDB database
-  Beautiful animated UI with particle effects

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Bootstrap & MUI (Material UI)
- React Toastify
- Axios
- React-Tsparticles

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- Helmet & Morgan (Security & Logs)
- CORS & dotenv



## Setup Instructions

### Backend (Render)
```bash
cd backend
npm install
# Add your Mongo URI and PORT in config/config.env
npm start

Frontend (Netlify)
cd frontend
npm install
npm start

Update API URLs
In frontend/utils/ApiRequest.js, replace:
const host = "https://moneytrack-23.onrender.com";

 Deployment
🔹 Backend (Render)
Service root directory: backend
Build command: npm install
Start command: npm start

🔹 Frontend (Netlify)
Build command: npm run build
Publish directory: frontend/build
Environment variables: (optional if using)
