import React from "react";
import '../SignUp/SignUp.css'
import Button from "../../../features/button/Button";

function SignIn(){

    return(
        <div className="signup-div">
            <div className="h1-div">
                <h1>SignIn</h1>
            </div>
            <div className="form-div">
                <form>
                    <h3>Email Adress</h3>
                    <input />
                    <h3>Password</h3>
                    <input />
                    <Button buttonText={"SignIn"} />
                </form>
            </div>
        </div>
    )
}

export default SignIn