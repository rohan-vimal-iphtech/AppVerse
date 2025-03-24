import './App.css';
import { Front } from './Login/Front';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardMain } from './Card/CardMain';
import { CounterMain } from './CounterApp/CounterMain';
import { TodoMain } from './TodoApp/TodoMain';
import PrivateRoute from './Redux/PrivateRoute';
import MovieAppMain from './MovieApp/MovieAppMain';
import { MovieProvider } from './MovieApp/MovieContext';
import { SignUpPage } from './Login/SignUpPage';
import { useDispatch } from "react-redux";
import { login } from "./Redux/authSlice";
import { useEffect } from 'react';
import DashboardLayout from './components/DashboardLayout';  // New layout for SideMenu-based routes
import ProfileSection from './components/ProfileSection';
import UserProfile from './components/UserProfile';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    console.log(storedUser);
    if (storedUser) {
      dispatch(login(storedUser));  // Auto-login if session exists
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <MovieProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Front />} />
          <Route path="/signup" element={<SignUpPage />} />

          {/* Protected Routes with SideMenu */}
          <Route path="/card" element={<PrivateRoute><DashboardLayout /></PrivateRoute>}>
            <Route index element={<CardMain />} />
            <Route path="countapp" element={<CounterMain />} />
            <Route path="todoapp" element={<TodoMain />} />
            <Route path="movieapp" element={<MovieAppMain />} />
            <Route path="profile" element={<UserProfile />} />
          </Route>
        </Routes>
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
