AppVerse - a universe of small application.

AppVerse is a multi-functional React-based web application that consolidates multiple apps into a single platform. It features an intuitive UI with seamless navigation across different modules such as user authentication, shopping, movie browsing, a counter app, and a to-do list manager.

## Features

-  User Authentication : Secure login and signup functionalities with session persistence.
-  Shopping Module : Browse products, view details, add to cart, and manage wishlists.
-  Movie Browser : Discover a collection of movies with detailed descriptions.
-  Counter Application : A simple counter app showcasing state management.
-  To-Do List : Create, edit, and delete tasks efficiently.
-  Dashboard Layout : Sidebar-based navigation for easy access to all modules.

## Technologies Used

- ReactJS - JavaScript library for building UI components.
- React Router - Declarative routing for navigation.
- Redux Toolkit - State management solution.
- Axios - HTTP client for API requests.
- React Icons - Collection of icons for UI elements.

Application Modules

#Authentication

 The authentication system ensures secure login and signup functionalities. User data is stored in `localStorage`, allowing persistent authentication across sessions.

- Login & Signup : Users can create an account or sign in to access protected routes.
- Protected Routes : Certain pages are accessible only to authenticated users.
- Session Management : The application retains user login sessions until explicitly logged out.
- <div style="width:360px;max-width:100%;"><div style="height:0;padding-bottom:60.83%;position:relative;"><iframe width="360" height="219" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameBorder="0" src="https://imgflip.com/embed/9ooerx"></iframe></div><p><a href="https://imgflip.com/gif/9ooerx">via Imgflip</a></p></div>

  #Shopping Module

  A full-fledged shopping experience where users can browse products, view details, and manage a cart and wishlist.

- Product Listing : Fetches products dynamically from an API.
- Product Details Page : Clicking on a product opens a detailed view.
- Add to Cart : Users can add and remove items from the cart.
- Wishlist Management : Users can save favorite products for later.

  #Movie Browser

  Explore a list of movies with descriptions and other details.

  - Movie Listing: Fetches and displays movie details.
  - Movie Details Page: Clicking on a movie shows more details.

 #Counter Application

 A simple counter to demonstrate state management using Redux.

- Increment & Decrement: Modify the counter value using buttons.
- Reset Button: Resets the counter to its default value.

 #To-Do Application

 Manage tasks efficiently with add, edit, and delete options.

- Task Creation : Users can add new tasks.
- Task Editing: Modify existing tasks.
- Task Deletion: Remove completed tasks.




