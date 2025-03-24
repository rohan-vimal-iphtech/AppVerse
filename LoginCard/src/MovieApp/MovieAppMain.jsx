
import './MovieApp.css';
import { Search } from './Search';
import { Cards } from './Cards';

import { MovieContext } from './MovieContext.jsx';
import { useContext, useEffect, useState } from "react";
import BackBtn from '../Card/BackBtn,.jsx';
import { Spinning } from './Spinning.jsx';
import React, { useRef } from "react";

const MovieAppMain = () => {
    const { searchData, getPopular, getTrending,  movieMoreData , getTop} = useContext(MovieContext);
    const [isModalOpen, setModalOpen] = useState(false);
    const tabsRef = useRef([]);

    const handleTabClick = (index, action) => {

        tabsRef.current.forEach((tab) => tab.classList.remove("active"));


        tabsRef.current[index].classList.add("active");


        if (action) action();
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
            document.body.style.overflow = "auto"; // Enable scrolling
        }
    }, [isModalOpen, movieMoreData ]);

    useEffect(()=>{
        getPopular();
    },[]);

   console.log( movieMoreData.genres);
   

   
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className='moviedivmainpart'>

            <div className='moviemaindiv'>
                <div className="upperfooter">
                    
                        <BackBtn />
                    
                    
                    <h2>Movie Search App</h2>
                    <Search />
                </div>
                <div className="movietabs">
                    <button
                        ref={(el) => (tabsRef.current[0] = el)}
                        className="tab-button active"
                        onClick={() => handleTabClick(0, getPopular)}
                    >
                        POPULAR MOVIES
                    </button>

                    <button
                        ref={(el) => (tabsRef.current[1] = el)}
                        className="tab-button"
                        onClick={() => handleTabClick(1, getTrending)}
                    >
                        TRENDING MOVIES
                    </button>

                    <button
                        ref={(el) => (tabsRef.current[2] = el)}
                        className="tab-button"
                        onClick={() => handleTabClick(2, getTop)}
                    >
                        ALL MOVIES
                    </button>
                </div>
                <div className="moviebody">
                    {searchData.length > 1 && searchData.map((movie) => (
                        <Cards key={movie.id} data={movie}  openModal={openModal} />
                    ))}

                </div>
                {isModalOpen && movieMoreData && (
                    <div className="modal-overlay">

                        <div className="modal-content">
                            <span className="close-button" onClick={closeModal}>&times;</span>
                            <h3>{movieMoreData.title}</h3>
                            <hr></hr>
                            <div className="model-body">


                                <div className="model-genreshead">
                                    {movieMoreData?.genres?.length > 0 ? (
                                        <span className='model-genres'>
                                            {movieMoreData.genres.map((genre) => (
                                                <p key={genre.id}>{genre.name}</p>
                                            ))}
                                        </span>
                                    ) : (
                                        <p>Loading genres...</p>
                                    )}
                                </div>
                                <div className="model-overview">
                                    <p><b>Overview : </b>{movieMoreData.overview}</p>
                                </div>
                                <div className="model-production-company">
                                    <p>
                                        <b>Production Companies: </b>
                                        {movieMoreData?.production_companies?.map((production) => production.name).join(", ")}
                                    </p>
                                </div>

                                <div className="model-languages">
                                    <p>
                                        <b>Languages: </b>
                                        {movieMoreData?.spoken_languages?.map((language) => language.name).join(", ")}
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                )}

            </div>
        </div>




    )
}

export default MovieAppMain;

