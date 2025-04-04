# **AppVerse - A Universe Of Small Application.**

AppVerse is a multi-functional React-based web application that consolidates multiple apps into a single platform. It features an intuitive UI with seamless navigation across different modules such as user authentication, shopping, movie browsing, a counter app, and a to-do list manager.

## Features

- User Authentication: Secure signup and login with Redux state management.
- Dynamic Dashboard: Interactive UI with multiple sections and sidebar navigation.
- Redux Persist: Ensures session persistence for user data.
- Form Validation: Robust validation with error handling and custom dropdowns for country, state, and city selection.
- Shopify API Integration: E-commerce features for demo purposes.
- Responsive Design: Fully optimized for desktop and mobile screens.



## Technologies Used

- Frontend: React (19.0.0), Redux Toolkit (2.6.0), Redux Persist (6.0.0), React Router (7.1.5)
- State Management: Redux Toolkit (2.6.0), React Redux (9.2.0)
- API Integration: Shopify API, Axios (1.8.1)
- Form Handling: React Hook Form, React Datepicker (8.1.0)
- Other Libraries: React Easy Crop (5.4.1), React Icons (5.5.0), React Spinners (0.15.0), React Toastify (11.0.5)

## Installation & Setup

 **Prerequisites**

- Ensure you have Node.js and npm/yarn installed.
- **Steps**
  - Clone the repository:
  - git clone https://github.com/rohan-vimal-iphtech/AppVerse.git
  - cd AppVerse
- **Install dependencies:**
  - npm install
  - Start the development server:
  - npm start
  - Open your browser and navigate to http://localhost:3000


**Usage Guide**
  - Sign Up & Login: Create an account and log in.
  - Explore Dashboard: Navigate through different sections.
  - Use Shopify API Features: Browse integrated e-commerce functionalities.
  - Customize Data: Modify your profile and settings.

# **Application Modules**

## Authentication

 The authentication system ensures secure login and signup functionalities. User data is stored in `localStorage`, allowing persistent authentication across sessions.

- Login & Signup : Users can create an account or sign in to access protected routes.
- Protected Routes : Certain pages are accessible only to authenticated users.
- Session Management : The application retains user login sessions until explicitly logged out.
[![GIF Preview](https://i.imgflip.com/9pp09b.gif)](https://imgflip.com/gif/9pp09b)



## Shopping Module

  A full-fledged shopping experience where users can browse products, view details, and manage a cart and wishlist.

- Product Listing : Fetches products dynamically from an API.
- Product Details Page : Clicking on a product opens a detailed view.
- Add to Cart : Users can add and remove items from the cart.
- Wishlist Management : Users can save favorite products for later.

## Movie Browser

  Explore a list of movies with descriptions and other details.

  - Movie Listing: Fetches and displays movie details.
  - Movie Details Page: Clicking on a movie shows more details.

  ![GIF Title](https://i.imgflip.com/9oofyo.gif)
    
## Counter Application

 A simple counter to demonstrate state management using Redux.

- Increment & Decrement: Modify the counter value using buttons.
- Reset Button: Resets the counter to its default value.
- ![GIF Title](https://i.imgflip.com/9oogse.gif)

## To-Do Application

 Manage tasks efficiently with add, edit, and delete options.

- Task Creation : Users can add new tasks.
- Task Editing: Modify existing tasks.
- Task Deletion: Remove completed tasks.

  ![GIF Title](https://i.imgflip.com/9oohg0.gif)


## Profile Section

 A User Profile section

 - Show the details about the user.
 - Update the details.
 - Upload profile picture.
 - Edit and Delete account options.

 ![GIF Preview](https://i.imgflip.com/9pp1km.gif) 

**Developed with ❤️ by Rohan** 
