export const useAuth = () => {
    let isAuth = false
    const token = localStorage.getItem('jwt-token')
    if (token) 
        isAuth = true
    return isAuth
}