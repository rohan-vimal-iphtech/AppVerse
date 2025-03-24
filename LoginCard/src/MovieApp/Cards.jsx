import React  from 'react'
import { MovieContext } from './MovieContext.jsx';
import { useContext , useState , useEffect } from "react";

import { BsInfoCircle } from "react-icons/bs";

const getRandomRating = () => {
    return parseFloat((Math.random() * 4 + 1).toFixed(1)); // Between 1 and 5
};
const getStars = (rating) => {
    rating = Number(rating) || 1; // Ensure a valid number
    rating = Math.max(1, Math.min(5, rating)); // Clamp between 1 and 5

    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = Math.max(0, 5 - fullStars - halfStar); // Prevent negative numbers

    return (
        <>
            {[...Array(fullStars)].map((_, i) => (
                <i key={`full-${i}`} className="fa-solid fa-star star sm"></i>
            ))}
            {halfStar === 1 && <i key="half" className="fa-solid fa-star-half-alt star"></i>}
            {[...Array(emptyStars)].map((_, i) => (
                <i key={`empty-${i}`} className="fa-regular fa-star star"></i>
            ))}
        </>
    );
};
export const Cards = ({data , openModal }) => {
 
  
    const { setMovieId  , getIdData} = useContext(MovieContext);

  

    const handleInfoClick = () => {
      getIdData(data.id);  // Fetch movie details
      openModal();         // Open the modal
  };
    
 
 
  
    

  const movieRating = data?.imdbRating ? parseFloat(data.imdbRating) : getRandomRating();
  return (
    <div className="cardsmain">
      <div className="cardUpper">
        <img src={data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : "https://media.istockphoto.com/id/2173059563/vector/coming-soon-image-on-white-background-no-photo-available.jpg?s=612x612&w=0&k=20&c=v0a_B58wPFNDPULSiw_BmPyhSNCyrP_d17i2BPPyDTk="}
          alt={data.original_title} />
      </div>
      <div className="cardLower">
        <div className="cardnameandinfo">
          <h4 className="movie-title" data-title={data.original_title}>
            {data.original_title.slice(0,15)+'...'}
          </h4>

        </div>


        <div className='cardlast'>
          <h3>{data.release_date.slice(0, 4)}</h3>
          <p> {getStars(movieRating)} </p>

        </div>
        <div className="watchbutton">
          <BsInfoCircle
            size={20}
            onClick={handleInfoClick}
            style={{ cursor: "pointer", pointerEvents: "auto" }}
          />

          <button>Watch</button>
        </div>
      </div>
      
       

    </div>
  )
}
