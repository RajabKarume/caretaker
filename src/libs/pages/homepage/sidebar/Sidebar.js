import React from "react";
import './Sidebar.css'

function Sidebar() {
    
    return(
        <div className="sidebar-div">
            <div className="sidebar-h1">
                <h1>Caretaker</h1>
            </div>
            <div className="icon-div">
                <img src="https://i.ibb.co/5KZcTkn/home.png" alt="properties icon" />
                <h4>Properties</h4>
            </div>
            <div className="icon-div">
                <img src="https://i.ibb.co/0jNF7v2/people.png" alt="tenats icon" />
                <h4>Tenants</h4>
            </div>

        </div>
    )
}

export default Sidebar