import { useState } from 'react'

import axios from 'axios'

// import test from './test.js'

const ABC = () => {
    const [token, setToken] = useState('')

    // const obj = test()
    // const map = new Map()
    // map.set(obj.email)
    // const obj1 = Array.from(map).reduce((obj_ids, [value]) => (
    //     Object.assign(obj_ids, {value})
    // ), {})

    // axios
    //     .get(`http://localhost:5000/getApplication/${obj1.value}`)
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(() => {
    //         alert("An error occurred on the server")
    //     })

    axios
        .post('http://localhost:5000/auth/login', { email: 'rafa@gmail.com', password: 'rafa123' })
        .then(res => {
            setToken(res.data.token)
        })
        .catch(() => {
            alert("An error occurred on the server")
        })

    return (  
        <>
            <p>Hello, my token is: <br /><b>{token}</b></p>
        </>
    );
}
 
export default ABC