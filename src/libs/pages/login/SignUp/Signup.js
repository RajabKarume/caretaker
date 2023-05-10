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
                    <input />
                    <h3>UserName</h3>
                    <input />
                    <h3>Password</h3>
                    <input />
                    <Button buttonText={"Signup"} />
                </form>
            </div>
        </div>
    )
}

export default SignUp