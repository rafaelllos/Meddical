import jwt_decode from 'jwt-decode'

export default function decodeToken(){
    const codedEmail = localStorage.getItem('jwt-token')
    let decodedEmail
    if (codedEmail && codedEmail !== undefined) {
        decodedEmail = jwt_decode(codedEmail)
        return decodedEmail
    } else
        return {message: 'Token is not valid'}
}