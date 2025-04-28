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

## 📁 Folder Structure

```plaintext
src/
  api/             # Product fetching (Platzi Fake API)
  components/      # Navbar
  context/         # AuthContext, CartContext, OrderContext
  firebase/        # Firebase configuration
  pages/           # Home, Cart, ProductDetail, Checkout, Login, Signup, MyAccount, MyOrders
  App.jsx          # Route setup
  main.jsx         # React root file
  index.css        # Custom styles (button styles, background)
