import React, { useState  } from 'react'
import './MovieApp.css';
import { MovieContext } from './MovieContext';
import { useContext } from "react";


export const Search = () => {
  const { searchMovie, setSearchMovie, getdata } = useContext(MovieContext);

  const handleSearch = (e) => {
    
    const input = e.target.value;
      setSearchMovie(input);
      getdata();

  }

//  const handleData = (e)=>{
//     if(e.key === 'Enter'){
//       getdata();
//     }
 
//  }




  return (


    <div className='searchbar'>
      <i className="fa-solid fa-magnifying-glass"></i> <input type="text" value={searchMovie } onChange={handleSearch}  className='searchplace' placeholder="Search Movie..." />
    </div>



  )
}
