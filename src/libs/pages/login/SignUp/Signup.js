import React, { useState } from "react";
import './SignUp.css'
import Button from "../../../features/button/Button";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../../../firebase";
import { setDoc, doc } from "firebase/firestore";

function SignUp({setClick}){

    const [email, setEmail] = useState("")
    const [displayName, setDisplayName] = useState("")
    const [password, setPassword] = useState("")
    const [signup, setSignup] = useState("SignUp")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSignup("Signing Up...")
        try{
            const res = await createUserWithEmailAndPassword(auth, email, password)
            try{
                updateProfile(res.user,{
                    displayName
                })
                setDoc(doc(db, "user", res.user.uid),{
                    uid: res.user.uid,
                    email,
                    displayName
                })
                console.log("added to db")
            } catch(err){
                console.log('Error submiting to db')
            }
            setClick(true)
        } catch (err){
            console.log("error Singing in")
        }
        setSignup("SignUp")
    }
    return(
        <div className="signup-div">
            <div className="h1-div">
                <h1>SignUp</h1>
            </div>
            <div className="form-div">
                <form onSubmit={handleSubmit}>
                    <h3>Email Adress</h3>
                    <input type="text" placeholder="email@website.com" value={email} onChange={(e)=> setEmail(e.target.value)} />
                    <h3>UserName</h3>
                    <input type="text" placeholder="John Doe" value={displayName} onChange={(e)=>setDisplayName(e.target.value)} />
                    <h3>Password</h3>
                    <input type="password" placeholder="************" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <Button buttonText={signup} />
                </form>
            </div>
        </div>
    )
}

export default SignUp