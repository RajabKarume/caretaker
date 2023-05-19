import React, { useState } from "react";
import '../SignUp/SignUp.css'
import Button from "../../../features/button/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";
import { useNavigate } from "react-router-dom";

function SignIn(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState("Login")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLogin("Logging in...")
        try{
            await signInWithEmailAndPassword(auth, email, password)
            console.log("Login Successfull")
            navigate('/')
        } catch(err){
            console.log("Login error")
        }
        setLogin("LogIn")
    }
    return(
        <div className="signup-div">
            <div className="h1-div">
                <h1>LogIn</h1>
            </div>
            <div className="form-div">
                <form onSubmit={handleSubmit}>
                    <h3>Email Adress</h3>
                    <input type="email" placeholder="email@website.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <h3>Password</h3>
                    <input type="password" placeholder="*************" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <Button buttonText={login} />
                </form>
            </div>
        </div>
    )
}

export default SignIn