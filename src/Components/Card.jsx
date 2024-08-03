import "./Card.css"
import Button from './Button.jsx'
import React from 'react';

function Card({cardName, description, text, url}){
    return(
        
        <div className = "card">
            <div className="card-content">
                <h1>{cardName}</h1>
                <p>{description}</p>
            </div>
            <Button url = {url} text = {text} />
        </div>
    );
}

export default Card;