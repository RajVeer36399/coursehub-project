## 📘 SubscribEd – Full-Stack Course Subscription Platform

SubscribEd is a production-ready full-stack web application that simulates a real-world online course subscription platform.
Users can browse courses, view detailed information, apply promotional discounts, and securely subscribe to free or paid courses.

This project demonstrates end-to-end full-stack development skills, including authentication, protected routes, RESTful APIs, database relationships, and cloud deployment.

## 🔗 Live Application

Frontend (Vercel)
👉 https://coursehub-project.vercel.app/

Backend API (Render)
👉 https://coursehub-backend-07lk.onrender.com

Reviewers are encouraged to use the live deployed application.
Local setup instructions are provided for development reference only.

## 🎯 Project Purpose

The goal of this project was to replicate the core functionality of a modern SaaS-style learning platform, focusing on:

Secure user authentication

User-specific subscriptions and protected content

Clean API architecture

Scalable backend design

Production deployment workflow

It reflects how real-world platforms manage users, subscriptions, pricing logic, and access control.

# 🧠 Key Features
## 👤 Authentication & Authorization

User signup and login using JWT-based authentication

Secure token handling with localStorage

Protected routes for subscribed content

Logout functionality clears user session safely

## 📚 Course Management

Browse available courses with images, pricing, and short descriptions

Detailed course view including:

Full course description

Promotional discount input

Discounted pricing (Black Friday edition)

Smooth hover effects and UI transitions

## 💳 Subscriptions & Pricing

Subscribe to free or paid courses

Backend-validated promo code (BFSALE25)

Prevents duplicate subscriptions

User-specific subscription records stored securely

## 🧾 My Courses Dashboard

Displays only courses subscribed by the logged-in user

Shows price paid and subscription date

Fully protected route (unauthorized access blocked)

## 🎨 UI & UX

Responsive design using Tailwind CSS

Skeleton loaders for improved perceived performance

Consistent layout with sticky footer

Custom favicon and branding

Promotional banner for special offers

## 🧩 Technical Highlights

JWT authentication with route-level protection

RESTful API design using Express.js

MongoDB schema relationships between Users, Courses, and Subscriptions

Server-side validation for pricing and promo codes

Centralized API service layer using Axios

Environment-based configuration for development and production

Deployed with real-world cloud hosting platforms

# 🛠️ Tech Stack
## Frontend

React (Vite)

React Router DOM

Tailwind CSS

Axios

Deployed on Vercel

## Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

JSON Web Tokens (JWT)

Deployed on Render

## 📁 Project Structure
```
CourseHub-Project/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── services/
│   ├── public/
│   ├── index.html
│
└── README.md
```

## ⚙️ Local Development Setup (Optional)

This section is intended for developers who wish to run the project locally.

## Prerequisites
Node.js (v18 or higher)

MongoDB Atlas account

## Backend Setup
```
cd backend
npm install
```

## Create a .env file inside the backend/ folder:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## Run the backend server:
```
npm start
```

## Frontend Setup
```
cd frontend
npm install
npm run dev
```

# 🔐 Environment Variables
## Backend
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

## Frontend
```
VITE_API_BASE_URL=https://coursehub-backend-07lk.onrender.com
```

## 🚀 Deployment

Frontend deployed on Vercel

Backend deployed on Render

CI/CD enabled via GitHub integration

## 📌 Future Enhancements

Payment gateway integration (Stripe / Razorpay)

Admin dashboard for course management

Email notifications

Role-based access control (RBAC)

# Screenshots
## Signup page
![Screenshot 2026-01-08 124451](https://github.com/user-attachments/assets/63884b91-1a21-4b19-b512-ad381d7d74db)

## Courses List
![Screenshot 2026-01-08 121407](https://github.com/user-attachments/assets/b1ba54b6-32e2-4bdc-877d-c670e4f2657f)

## Course Details
![Screenshot 2026-01-08 124830](https://github.com/user-attachments/assets/58ee9f1c-c4a6-4c79-a59d-6029139bd092)

## My Courses
![Screenshot 2026-01-08 121426](https://github.com/user-attachments/assets/4e24a9ec-f949-4643-a52b-628e46f92db9)

## Footer Component
![footer](https://github.com/user-attachments/assets/4f6b0025-2b35-465d-b813-932d7bf4e410)



## 🧑‍💻 Author

Rajveer

Full-Stack Developer (MERN)

Focused on building scalable, real-world web applications

