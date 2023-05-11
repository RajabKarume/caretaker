import React from "react";
import'./Card.css'

function Card({cardIcon, amount, cardTitle, cardDescription}){

    return(
        <div className="card-div">
            <div className="card-icon"> <img src={cardIcon} alt="card icon" /> </div>
            <div className="card-number">
                <h1>{amount}</h1>
                <h2>{cardTitle}</h2>
                <p>{cardDescription}</p>
            </div>
        </div>
    )
}

export default Card