export default function deleteTokenAndLogout() {
    const token = localStorage.getItem('jwt-token')
    if (token) 
        localStorage.removeItem('jwt-token')    
    window.location.href = "http://localhost:3000/login"
}