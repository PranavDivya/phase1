import { useNavigate } from "react-router-dom"
import { useAuth } from "./auth"

export const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/')
        auth.logout()
    }

    return(
        <div>
            Welcome {auth.user}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}