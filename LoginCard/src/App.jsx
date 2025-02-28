
import './App.css'
import { Front } from './Login/Front'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CardMain}  from './Card/CardMain';
import { CounterMain } from './CounterApp/CounterMain';
import { TodoMain } from './TodoApp/TodoMain';
import { useState } from 'react';
import MovieAppMain from './MovieApp/MovieAppMain';

function App() {

   
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />}></Route>
        <Route path="/card" element={<CardMain />}></Route>
        
        
        <Route path="/card/countapp" element={<CounterMain />}></Route>
        <Route path="/card/todoapp" element={<TodoMain />}></Route>
        <Route path='card/movieapp' element={<MovieAppMain />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

  
export default App
