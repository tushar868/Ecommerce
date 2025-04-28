# 🛒 E-Commerce React Application

A clean, modern, and professional **E-commerce Frontend** built using **React.js**, **Firebase Authentication**, and **Bootstrap** for responsive design.  
Users can browse products, search/filter, add to cart, checkout securely, and manage their orders — with **Login via Email/Password or Google**.

---

## 🚀 Live Demo

👉 [View Project Live Here](https://ecommerce-t.netlify.app/)

---

## 📋 Features

- 🏠 Home Page with Product Grid
- 🔍 Search Products by Name
- 📂 Filter Products by Category
- 📄 Product Details Page
- 🛍️ Add/Remove Products from Cart
- 🧾 Checkout Form (Login Required)
- 🔐 User Authentication (Email/Password + Google Sign-in)
- 👤 My Account Page (User Info)
- 📦 My Orders Page (Order History)
- 🚪 Logout functionality
- 📱 Fully Responsive (Bootstrap 5)
- 🎨 Custom Styled Buttons for Modern UI

---

## 🛠 Tech Stack Used

- **React.js** (Frontend)
- **React Router Dom** (Routing)
- **Context API** (Global State Management: Cart, Auth, Orders)
- **Firebase Authentication** (Login/Signup/Google Sign-In)
- **Bootstrap 5** (Responsive Styling)
- **Netlify** (Hosting)

---


🛠️ Setup Instructions for E-Commerce React Project
Follow these steps carefully to set up and run the project locally on your machine.

1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/ecommerce-clone.git
cd ecommerce-clone
Replace yourusername with your actual GitHub username.

2. Install Dependencies
bash
Copy
Edit
npm install
✅ This will install React, React Router, Firebase, Bootstrap, and other dependencies.

3. Setup Firebase Authentication
This project uses Firebase Authentication for Login, Signup, and Google Sign-In.

Steps:

Go to Firebase Console.

Create a new project (or use an existing one).

Go to Authentication → Sign-in method:

Enable Email/Password.

Enable Google Sign-In.

Create a Web App inside Firebase → Get your Firebase Config.

Now, replace the Firebase configuration inside:

plaintext
Copy
Edit
src/firebase/firebase.js
Example Firebase Config:

javascript
Copy
Edit
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
✅ Make sure you also export auth and googleProvider properly.

4. Run the Development Server
bash
Copy
Edit
npm run dev
Open your browser and visit:

plaintext
Copy
Edit
http://localhost:5173/
✅ You should now see the full E-commerce Application running locally.

5. Build for Production (Optional)
When you're ready to deploy:

bash
Copy
Edit
npm run build
This will create a production-ready optimized folder:

plaintext
Copy
Edit
dist/
✅ You can then deploy the dist/ folder on Netlify or Vercel easily.







