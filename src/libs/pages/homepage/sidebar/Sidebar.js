import React from "react";
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUsers } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    
    return(
        <div className="sidebar-div">
            <div className="sidebar-h1">
                <h1>Caretaker</h1>
            </div>
            <div className="icon-div">
                 <FontAwesomeIcon icon={faBuilding} />
                <h4>Properties</h4>
            </div>
            <div className="icon-div">
                <FontAwesomeIcon icon={faUsers} />
                <h4>Tenants</h4>
            </div>

        </div>
    )
}

export default Sidebar