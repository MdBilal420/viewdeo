import { createContext, useContext, useEffect, useState } from "react"
import fakeAuthApi from '../api/fakeauthapi'

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [login, setLogin] = useState(false)

    useEffect(() => {
        const login = JSON.parse(localStorage?.getItem("login"))
        login ? setLogin(true) : setLogin(false)
    }, [])

    const checkLogin = async (username, password) => {
        try {
            const response = await fakeAuthApi(username, password)
            if (response.success) {
                setLogin(true)
                localStorage?.setItem(
                    "login",
                    JSON.stringify({ login: true })
                )
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        localStorage?.removeItem(
            "login",
            JSON.stringify({ login: false })
        )
        setLogin(false)
    }


    return <AuthContext.Provider value=
        {{ login, logout, checkLogin }}
    >
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}