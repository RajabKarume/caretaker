import React from "react";
import './Button.css'

function Button({clickHandler, buttonText}){

    return(
        <button className="my-button" onClick={clickHandler}>
            {buttonText}
        </button>
    )
}
export default Button