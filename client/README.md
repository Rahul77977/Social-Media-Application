Social Media Application

A simple full-stack social media application where users can create posts, like, comment, and connect with others. Built with the MERN stack (MongoDB, Express, React, Node.js).

Features

User authentication (signup/login)

Create and manage posts

Like & comment on posts

Follow/unfollow users

Realtime updates (basic feed system)

Tech Stack

Frontend: React.js, Redux, Axios

Backend: Node.js, Express.js, MongoDB

Authentication: JWT

Setup Instructions
1. Clone the repository
git clone 
cd social-media-app

2. Install dependencies

For both client and server, run:

cd client
npm install

cd ../server
npm install

3. Environment Variables

Create a .env file in the server folder and add:

PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_jwt_secret

4. Run the project

Start backend:

cd server
npm start


Start frontend:

cd client
npm start


The app will be running at:

Frontend → http://localhost:3000  
Backend → http://localhost:5000  

About the Project

This project is a learning-oriented clone of common social media platforms, built step by step using the MERN stack. The goal is to practice authentication, state management, and API integration while keeping the UI clean and functional.