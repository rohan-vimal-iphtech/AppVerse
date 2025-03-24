import React from 'react'
import './component.css'
import { useRef } from 'react';
const SideMenuCard = ({ name, isSelected, onClick }) => {
    const cardRef = useRef(null);
    return (
        <div
            className={`side-menu-card ${isSelected ? 'selected' : ''}`}
            onClick={onClick}
        >
            {name}
        </div>
    )
}

export default SideMenuCard