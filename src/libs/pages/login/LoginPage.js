import React, { useState } from "react";
import './LoginPage.css'
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/Signup";

function LoginPage(){

    const [click, setClick] = useState(true)

    return(
        <div className="loginpage-div" >
            <div className="auth-div">
                <ul className="auth-list">
                    <li onClick={()=>setClick(true)}> LogIn</li>
                    <li onClick={()=>setClick(false)}> SignUp</li>
                </ul>
                <div className="loginpage-display">
                    {click? <SignIn /> : <SignUp />}
                </div>
            </div>

        </div>
    )
}

export default LoginPage