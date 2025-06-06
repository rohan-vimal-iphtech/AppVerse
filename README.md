

# 🚀 **AppVerse — A Universe of Small Applications**

**AppVerse** is a multifunctional, modular **React-based web platform** that seamlessly combines various standalone applications—like user authentication, e-commerce shopping, a movie browser, a to-do manager, and a Redux-powered counter—into a single intuitive interface.

This project serves as a **micro-app ecosystem** to demonstrate modern web development practices such as state persistence, third-party API integrations, responsive layouts, and modular architecture.

---

## 🌟 Features at a Glance

* 🔐 **Secure User Authentication**
  Sign-up/login functionality with persistent sessions using `Redux Toolkit` and `Redux Persist`.

* 🛍️ **E-commerce Module (Shopify API)**
  Browse a catalog, view product details, manage cart and wishlist.

* 🎬 **Movie Browser**
  View listings and explore individual movie metadata.

* ✅ **To-Do List Manager**
  A task manager to create, edit, and delete tasks.

* ➕ **Counter App**
  Simple counter using Redux for demonstrating state updates.

* 👤 **Profile Section**
  View and edit user details, including profile photo uploads.

* 💡 **Form Validation + Location Dropdowns**
  Robust form validation with dynamically populated country/state/city selectors.

* 🧠 **Redux-powered State Management**
  Modular slice architecture with state persistence.

* 📱 **Responsive UI**
  Fully mobile-optimized with clean transitions and modern UI components.

---

## 🛠️ Tech Stack

| Layer            | Tech Used                                                   |
| ---------------- | ----------------------------------------------------------- |
| Frontend         | React 19, React Router v7                                   |
| State Management | Redux Toolkit 2.6.0, React Redux 9.2.0, Redux Persist 6.0.0 |
| Forms            | React Hook Form, React Datepicker                           |
| API Integration  | Shopify API, Axios 1.8.1                                    |
| UI/UX            | React Icons, React Toastify, React Easy Crop, Spinners      |
| Styling          | CSS Modules / Tailwind (if applicable)                      |

---

## 📦 Installation & Setup

### ⚙️ Prerequisites

* Node.js & npm/yarn installed

### 🧑‍💻 Setup Instructions

```bash
# Clone the repo
git clone https://github.com/rohan-vimal-iphtech/AppVerse.git
cd AppVerse

# Install dependencies
npm install

# Start the dev server
npm start
```

The app will be live at: [http://localhost:3000](http://localhost:3000)

---

## 📚 Usage Guide

* **📝 Sign Up / Log In**: Authenticate to unlock full access
* **🧭 Navigate Dashboard**: Switch between apps via sidebar
* **🛍️ Try Shopping Module**: Browse products & manage cart
* **🎬 Browse Movies**: See trending or demo-listed films
* **✅ Manage Tasks**: Create and track to-dos
* **➕ Counter**: Play with Redux logic in real-time
* **👤 Edit Profile**: Upload avatar, edit details, or delete account

---

# 🧩 Application Modules

---

## 🔐 Authentication

* 🔑 **Login & Signup**
* 🔒 **Protected Routes**
* 🧠 **Session Persistence**

[![GIF Preview](https://i.imgflip.com/9pp09b.gif)](https://imgflip.com/gif/9pp09b)

---

## 🛍️ Shopping Module

* 📦 Product Listing via Shopify API
* 🛒 Cart & Wishlist Management
* 🔍 Product Detail Pages

![Shopping GIF](https://i.imgflip.com/9wevca.gif)

---

## 🎬 Movie Browser

* 🎞️ Explore movie listings
* 📖 Detailed movie views

![Movie GIF](https://i.imgflip.com/9oofyo.gif)

---

## ➕ Counter App

* ➕ Increment / ➖ Decrement
* 🔄 Reset Functionality

![Counter GIF](https://i.imgflip.com/9oogse.gif)

---

## ✅ To-Do Application

* 🆕 Add new tasks
* ✏️ Edit existing tasks
* ❌ Delete completed tasks

![To-Do GIF](https://i.imgflip.com/9oohg0.gif)

---

## 👤 Profile Section

* 📸 Upload/Update Profile Picture
* ✏️ Edit Profile Info
* ❌ Delete Account Option

![Profile GIF](https://i.imgflip.com/9pp1km.gif)

---

## 📁 Folder Structure

```
/src
├── /apps              → Independent app modules (e.g. /shopping, /movies)
├── /components        → Reusable UI components (buttons, inputs, etc.)
├── /redux             → Redux slices & store setup
├── /pages             → Layout-specific views (Login, Dashboard, etc.)
├── /utils             → Helpers and config files
└── App.jsx            → Root component & routing
```

---

## 💡 Developer Notes

* Form validation uses native constraints + `React Hook Form`.
* API-integrated modules (Shopify, Movie Browser) are mock/demonstration setups—replace with production-ready backends if scaling.
* Includes state sync across tabs and automatic logout on token expiration (if integrated).

---

## 🔗 Resources

* GitHub Repo: [AppVerse](https://github.com/rohan-vimal-iphtech/AppVerse)
* [Shopify API Docs](https://shopify.dev/docs/api)
* [React Hook Form Docs](https://react-hook-form.com/)
* [Redux Toolkit Docs](https://redux-toolkit.js.org/)

---

## 💬 Feedback & Contributions

Have an idea for a new micro-app? Found a bug? Feel free to open issues or submit PRs!

---

### 🚀 Built with passion by [@rohan-vimal-iphtech](https://github.com/rohan-vimal-iphtech)

**Made with ❤️ for React devs who love modularity.**

