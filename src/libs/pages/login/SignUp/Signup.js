import React from "react";
import './SignUp.css'
import Button from "../../../features/button/Button";

function SignUp(){

    return(
        <div className="signup-div">
            <div className="h1-div">
                <h1>SignUp</h1>
            </div>
            <div className="form-div">
                <form>
                    <h3>Email Adress</h3>
                    <input type="text" placeholder="email@website.com" />
                    <h3>UserName</h3>
                    <input type="text" placeholder="John Doe" />
                    <h3>Password</h3>
                    <input type="password" placeholder="************"/>
                    <Button buttonText={"Signup"} />
                </form>
            </div>
        </div>
    )
}

export default SignUp