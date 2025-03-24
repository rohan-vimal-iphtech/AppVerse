import React from "react";
import "./todomain.css";
import ToDoCard from "./ToDoCard";
import { FaPlus } from "react-icons/fa";
import BackBtn from "../Card/BackBtn,";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/todoSlice";

export const TodoMain = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo.todos);

    const handleAddCard = () => {
        const newCard = {
            id: Date.now(),
            text: "",
            content: "",
            isNew: true,
            isEditing: true,
            isUpdateMode: false,
        };
        dispatch(addTodo(newCard));
    };

    return (
        <div>
            <div className="backBtn">
                <BackBtn />
            </div>
            <div className="todoheading"><h2>TODO LIST</h2></div>
            <div className="lists">
                {todos.map(card => (
                    <ToDoCard key={card.id} id={card.id} />
                ))}
                <div className="add-card" onClick={handleAddCard}>
                    <FaPlus size={25} color="black" />
                </div>
            </div>
        </div>
    );
};
