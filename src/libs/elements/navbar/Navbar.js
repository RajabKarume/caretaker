import React from "react";
import './Navbar.css'

function Navbar({navbarHeader, profileName, profilePicture}){

    return(
        <div className="navbar-div">
            <h1>{navbarHeader}</h1>
           <div className="span-div">
           <span><img src={profilePicture} alt="profile" /></span>
            <span>{profileName}</span>
           </div>
        </div>
    )
}

export default Navbar