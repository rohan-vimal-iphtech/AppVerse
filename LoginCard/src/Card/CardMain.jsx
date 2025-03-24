import React from 'react'
import "./CardMain.css"
import { Card } from './Card'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CardMain = () => {
    const nevigate = useNavigate();
    

    const user = useSelector((state) => state.auth.user);
    const styles = {
        height: "2rem",
        width: "4rem",
        backgroundColor: "hsl(213, 87%, 34%)",
        color: "white",
        borderRadius: "2rem",
        position: "absolute",  // Allows precise positioning
        top: "1rem",  // Distance from the top
        right: "2rem",
    }

    const handleBtn = () => {

        nevigate("/");
    }

    const handleCounter = () => {
        nevigate("/card/countapp");
    }
    const handleTodo = () => {
        nevigate("/card/todoapp");
    }


    const handleMovie = () => {
        nevigate("/card/movieapp");
    }
    return (
        <div className='card-main'>


            <div className="Buttons">
                <h2 className='heading-main' >My Demo Projects</h2>
                <div className="btn-card">
                    <button className='card-button' onClick={handleBtn}>Logout</button>
                </div>

            </div>


            <div className='card-container'>
                <Card name="Counter App" func={handleCounter} />
                <Card name="ToDo List" func={handleTodo} />
                <Card name="Movie Search App" func={handleMovie} />
                <Card name="React Demo 4" />
                <Card name="React Demo 5" />
                <Card name=" React Demo 6" />
            </div>

        </div>
    )
}
