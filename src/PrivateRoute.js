import React from 'react'
import { Navigate, Route } from "react-router-dom";
import { useAuth } from './context/auth-context';


const PrivateRoute = (props) => {

    const { login } = useAuth()

    return (
        <>
            { login ?
                <Route {...props} />
                :
                <Navigate state={{ from: props.path }} replace to="/login" />
            }
        </>
    )
}

export default PrivateRoute
