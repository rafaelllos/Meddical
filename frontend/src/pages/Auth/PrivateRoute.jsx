import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

export default function PrivateRoute() {
    const isAuth = useAuth()

    if (isAuth)
        return <Outlet />
    else 
        return <Navigate to='/login' replace />
}