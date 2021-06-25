import {React, useState} from 'react'
import { NavLink } from "react-router-dom";
import './signup.css';
import { useAuth } from "../../Contexts"

export function Signup() {

    const { signup } = useAuth();
    const [credentials, setCredentials] = useState({username: "", password: "", confirmPassword: "", email: "", name: ""});
    const signupHandler = (data) => {
        if(data.username === "" || data.password === "" || data.confirmPassword === "" || data.email === "" || data.name === ""){
            return console.log("All fields are required.")
        }
        if(data.password === data.confirmPassword){
            signup(data);
        }else{
            console.log("Password should be same.")
        }
    }

    return (
        <div className="login-page">
            <div class="login-box">
            <div className="box-content">
                <h1 className="logo">learnit</h1>
                <div className="form">
                    <input type="text" placeholder="Name" className="login-input signup-input" required onChange={(e)=>{setCredentials({ ...credentials, name: e.target.value })}} />
                    <input type="email" placeholder="Email" className="login-input signup-input" required onChange={(e)=>{setCredentials({ ...credentials, email: e.target.value })}} />
                    <input type="text" placeholder="Username" className="login-input signup-input" required onChange={(e)=>{setCredentials({ ...credentials, username: e.target.value })}} />
                    <input type="password" placeholder="Password" className="login-input signup-input" required onChange={(e)=>{setCredentials({ ...credentials, password: e.target.value })}} />
                    <input type="password" placeholder="Confirm Password" className="login-input signup-input" required onChange={(e)=>{setCredentials({ ...credentials, confirmPassword: e.target.value })}} />
                    <button className="btn" onClick={()=>{signupHandler(credentials)}}>SignUp</button>
                </div>
                <p style={{color: '#EBEBF5'}}>
                    Already have an account?
                </p>
                <NavLink to='/login' className="sign-up">Login</NavLink>
            </div>
            </div>
        </div>
    )
}
