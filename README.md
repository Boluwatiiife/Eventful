# 📌 Eventful - Event Ticket Platform

Eventful is a robust event management and ticketing backend platform that enables creators to host events and eventees to discover, register, purchase tickets, and gain access using QR code verification. The system supports secure authentication, payments via Paystack, reminders, analytics, and scalable caching using Redis.

This repository contains the code for the Eventful platform, built with Node.js, TypeScript, Express, Prisma ORM, and PostgreSQL.

**AltSchool Africa Capstone Project**

---

## 🚀 Features

### 🔐 Authentication & Authorization

- User registration and login
- JWT-based authentication
- Role-based access (Creator & Eventee)

### 🎫 Event Management

- Creators can create and manage events
- Eventees can browse available events
- Eventees can apply for or attend events

### 💳 Payment Processing (Paystack)

- Initialize payments
- Verify payments
- Store payment records
- Automatic ticket creation after successful payment

### 🔳 QR Code System

- Generate QR codes for tickets
- Scan and verify tickets
- Prevent reuse of tickets

### 🔔 Notifications & Reminders

- Creators can set reminder schedules
- Eventees can set custom reminders
- Background cron job processes reminders

### 📊 Analytics

- Tickets sold per event
- Total revenue
- Total attendees
- Creator-level and event-level analytics

### ⚡ Caching

- Redis used for frequently accessed data
- Improves performance and reduces database load

### 📄 API Documentation

- Swagger/OpenAPI documentation available

---

## 🛠 Tech Stack

- Node.js + TypeScript
- Express.js
- PostgreSQL
- Prisma ORM
- Redis
- Paystack API
- JWT
- Swagger
- Docker (optional for Redis)

---

## 📁 Project Structure

src/
├── config/
├── controllers/
├── routes/
├── services/
├── middlewares/
├── prisma/
├── jobs/
├── utils/
├── generated/
└── server.ts

---

## ⚙️ Prerequisites

### Ensure the following are installed:

- Node.js (v18+ recommended)
- PostgreSQL
- Redis (or Docker)
- Git

---

## 🔑 Environment Variables

- Create a .env file in the root directory:
- PORT=3000
- DATABASE_URL=postgresql://username:password@localhost:5432/eventful
- JWT_SECRET=your_jwt_secret
- PAYSTACK_SECRET_KEY=sk_test_xxxxxxxxxxxxxx
- PAYSTACK_PUBLIC_KEY=pk_test_xxxxxxxxxxxxxx
- REDIS_URL=redis://localhost:6379
- CLIENT_URL=http://localhost:5173

---

## 📦 Installation

- git clone https://github.com/your-username/eventful-api.git
- cd eventful-api
- npm install

---

## 🗄 Database Setup

- Create database:
- CREATE DATABASE eventful;

---

## Run migrations:

- npx prisma migrate dev --name init
- npx prisma generate

---

## 🚀 Running the Server

- Development mode:
- npm run dev

### Build:

- npm run build

### Production:

- npm start

---

## 🧪 Testing API

Swagger Docs:
http://localhost:3000/api/docs

Health Check:
http://localhost:3000/api/health

---

## 🐳 Running Redis With Docker (Optional)

- docker run -d --name redis-server -p 6379:6379 redis

---

## 🔁 Background Jobs

- A cron job runs every minute to:
- Check pending reminders
- Send notifications
- Mark reminders as sent

---

## 🔐 Authentication Flow

- User registers
- User logs in
- Server returns JWT token
- Token added to Authorization header:
- Authorization: Bearer <token>

---

## 💳 Payment Flow

- Eventee initializes payment
- Paystack returns authorization URL
- Eventee completes payment
- Backend verifies payment
- Ticket generated
- QR code created

---

## 🔳 QR Verification Flow

- QR code scanned
- Backend verifies ticket
- Access granted or denied

---

## 📊 Analytics Available

- Total tickets sold
- Revenue generated
- Event attendance
- Creator dashboard statistics

---

## 🔒 Security Practices

- Password hashing
- JWT authentication
- Input validation
- Rate limiting
- Environment variables

---

## 🧠 Best Practices Implemented

- Layered architecture
- Service-based logic
- Reusable utilities
- Centralized error handling
- Caching with Redis
- Prisma ORM

---

## 👨‍💻 Author

- Tunde-Lawal Boluwatife
- Backend Developer

---

## 📄 License

This project is for educational purposes.
