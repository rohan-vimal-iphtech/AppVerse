import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [searchData , setSearchData] = useState([]);
    const[searchMovie,setSearchMovie] = useState('');
    
    const [movieMoreData , setMovieMoreData] = useState([]);
    const popularMovies = 'https://api.themoviedb.org/3/movie/popular?api_key=da75cdfdd3702cbf418206d53e499f71';
    const trendingMovies = 'https://api.themoviedb.org/3/trending/movie/week?api_key=da75cdfdd3702cbf418206d53e499f71';
    const allMovies  =  'https://api.themoviedb.org/3/movie/top_rated?api_key=da75cdfdd3702cbf418206d53e499f71';
    const getdata = async() => {
        if (searchMovie.length > 1) {
            await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchMovie}&api_key=da75cdfdd3702cbf418206d53e499f71`)
                .then((response) => {
                    
                        setSearchData(response.data.results);
                  
                    
                })
                .catch((error) => console.error("Error fetching movies:", error));
        }
    }
  
  const getIdData = async(id) => {
    
      await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=da75cdfdd3702cbf418206d53e499f71`)
        .then((response) => {

          setMovieMoreData(response.data);
          

        })
        .catch((error) => console.error("Error fetching movies:", error));
    
  }


    const getPopular = ()=>{
       axios.get(popularMovies)
       .then((response) => {
            setSearchData(response.data.results);
           
           
            
        })
       .catch((error) => console.error("Error fetching movies:", error));
    }
 
    const getTrending = ()=>{
      axios.get(trendingMovies)
      .then((response) => {
           setSearchData(response.data.results);
       })
      .catch((error) => console.error("Error fetching movies:", error));
   }
   
   const getTop = ()=>{
    axios.get(allMovies)
    .then((response) => {
         setSearchData(response.data.results);
     })
    .catch((error) => console.error("Error fetching movies:", error));
 }
   
   
   
  return (
    <MovieContext.Provider value={{searchData , setSearchData , searchMovie,setSearchMovie , getdata , getPopular , getTrending , movieMoreData  , getIdData , getTop }}>
      {children}
    </MovieContext.Provider>
  );
};