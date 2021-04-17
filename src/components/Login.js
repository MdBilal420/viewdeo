import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAuth } from '../context/auth-context';
import "../styles/login.css"

const Login = () => {

    const { login, checkLogin } = useAuth()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { state } = useLocation()
    const navigate = useNavigate()


    const handleClick = (username, password) => {
        checkLogin(username, password)
        navigate(state?.from ? state.from : "/")
    }

    return (
        <div className="container">
            {!login &&
                <form className="login-container" onSubmit={() => handleClick(username, password)}>
                    <label>Username:</label>
                    <input

                        type="text"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Password:</label>
                    <input
                        type="text"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="btn-primary" onClick={() => handleClick(username, password)}>{login ? "Logout" : "Login"}</button>
                </form>
            }


        </div>
    )
}

export default Login
