import { useState } from 'react'

import axios from 'axios'

const ABC = () => {
    const [token, setToken] = useState('')

    axios
        .post('http://localhost:5000/auth/login', { email: 'rafa5@gmail.com', password: 'rafa12345' })
        .then(res => {
            setToken(res.data.token)
        })
        .catch(() => {
            alert("An error occurred on the server")
        })

    return (  
        <p>Hello, my token is: <br /><b>{token}</b></p>
    );
}
 
export default ABC