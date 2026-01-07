import { useState } from "react"
import { useAuth } from "./auth"
import { useLocation, useNavigate } from "react-router-dom"

export const Login = () => {
    const[user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const loaction = useLocation()
    const redirect = location.state?.path || '/'

    const handleLogin = () => {
        if(user.length <= 3){
            throw new Error("Invalid username");
        }
        else {
            auth.login(user)
            navigate(redirect, { replace: true })
        }
    }


    return (
        <div>
            <label>
                Username: <input type="text" onChange={event => setUser(event.target.value)}/>
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}