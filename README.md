# E-Commerce Platform (MERN Stack)

Welcome to our full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This platform offers a seamless shopping experience with a user-friendly interface, secure payments, and a robust backend.

## Features
- **User Authentication & Authorization** (JWT-based login/signup)
- **Product Management** (Add, edit, delete products)
- **Secure Payments** (Integrated payment gateway)
- **Shopping Cart** (Add to cart, update quantity, remove items)
- **Order Management** (Track orders, manage deliveries)
- **Admin Dashboard** (Manage users, products, and orders)
- **Responsive UI** (Optimized for all devices)

## Tech Stack
- **Frontend**: React.js, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Gateway**: Razorpay (for INR transactions)
- **Database**: MongoDB (using Mongoose ORM)
- **Hosting**: Vercel (Frontend), Render/Heroku (Backend)

## Installation & Setup
### Prerequisites
- Node.js & npm installed
- MongoDB installed (or use MongoDB Atlas)
- Git installed

### Steps to Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/PK00044/E-Commerce-Platform.git
   cd E-Commerce-Platform
   ```
2. Install dependencies for both frontend and backend:
   ```sh
   cd backend
   npm install
   cd ../frontend
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file inside the backend folder.
   - Add the following variables:
     ```env
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     RAZORPAY_KEY_ID=your_razorpay_key_id
     RAZORPAY_SECRET=your_razorpay_secret
     ```
4. Run the backend server:
   ```sh
   cd backend
   npm start
   ```
5. Run the frontend:
   ```sh
   cd frontend
   npm start
   ```
6. Open your browser and go to `http://localhost:3000`

## Contributors
- **Pratham Kubsad**
- **Pushpa Nayak**

