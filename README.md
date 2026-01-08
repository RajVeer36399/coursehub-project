## 📘SubscribEd – Full Stack Course Subscription Platform

SubscribEd is a full-stack web application that allows users to browse courses, view detailed descriptions, apply promotional discounts, and subscribe to paid or free courses securely. The project demonstrates real-world full-stack development practices including authentication, protected routes, API integration, database relationships, and deployment.

## 🔗 Live Demo

## Frontend (Vercel):
https://coursehub-project.vercel.app/

## Backend (Render):
https://coursehub-backend-07lk.onrender.com

## 🧠 Key Features
👤 Authentication & Authorization

User signup and login using JWT-based authentication

Secure token storage using localStorage

Protected routes for subscribed content

Logout clears session safely

## 📚 Course Management

List of available courses with images, price, and short description

Detailed course view with:

Full description

Promo code input

Discounted pricing (Black Friday edition)

Hover animations and smooth UI transitions

## 💳 Subscriptions

Subscribe to free or paid courses

Promo code validation (BFSALE25)

Prevents duplicate subscriptions

User-specific subscription history

## 🧾 My Courses

Displays only courses the logged-in user has subscribed to

Shows price paid and subscription date

Protected route (unauthorized users cannot access)

## 🎨 UI & UX

Responsive design using Tailwind CSS

Skeleton loaders for better perceived performance

Consistent layout with sticky footer

Custom favicon & branding

Black Friday promo banner

# 🏗️ Tech Stack
## Frontend

React (Vite)

React Router DOM

Tailwind CSS

Axios

Vercel (Deployment)

## Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

JWT

Render (Deployment)

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

# 🔐 Environment Variables
## Backend
MONGO_URI=your_mongodb_uri

JWT_SECRET=your_secret_key

## Frontend
VITE_API_BASE_URL=https://coursehub-backend-07lk.onrender.com

## 🚀 Deployment

Backend deployed on Render

Frontend deployed on Vercel

CI/CD via GitHub integration

## 📌 Future Enhancements

Payment gateway integration (Stripe/Razorpay)

Admin dashboard for course management

Email notifications

Role-based access control

## 🧑‍💻 Author

Rajveer
Aspiring Full-Stack Developer
