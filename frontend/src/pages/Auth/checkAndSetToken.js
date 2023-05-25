export default function checkAndSetToken(tokenName, token) {
    let getToken = localStorage.getItem(tokenName)
    if (!getToken) 
        localStorage.setItem(tokenName, token)  
    else 
        alert('Вы уже авторизованы!')
    return token
}