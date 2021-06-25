import {React, useState} from 'react';
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Contexts"
import './login.css';

export function Login() {

    const { login } = useAuth();
    const [credentials, setCredentials] = useState({username: "", password: ""});
    const loginHandler = (data) => {
        if(data.username === "" || data.password === ""){
            console.log("Username or Password cannot be empty.")
        }else{
            login(data);
        }
    }

    return (
        <>
        <div className="login-page">
            <div class="login-box">
            <div className="box-content">
                <h1 className="logo">learnit</h1>
                <div className="form">
                    <input type="test" placeholder="Username" className="login-input" required onChange={(e)=>{setCredentials({ ...credentials, username: e.target.value })}}/>
                    <input type="password" placeholder="Password" className="login-input" required onChange={(e)=>{setCredentials({ ...credentials, password: e.target.value })}}/>
                    <button type="submit" className="btn" onClick={()=>{loginHandler(credentials)}}>Login</button>
                </div>
                <p style={{color: '#EBEBF5'}}>
                    Don't have an account?
                </p>
                <NavLink to='/signup' className="sign-up">SignUp</NavLink>
            </div>
            </div>
        </div>
        </>
    )
}
