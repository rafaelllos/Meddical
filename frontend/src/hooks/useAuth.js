import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import { userContext } from './userContext.js'

export default function useAuth() {
    let history = useHistory()
    const { setUser } = useContext(userContext)
    const [error, setError] = useState(null)

    // set user in context and push them home
    const setUserContext = async () => {
        return await axios.get('/user')
            .then(res => {
                setUser(res.data.currentUser)
                history.push('/home')
            }).catch(err => {
                setError(err.response.data)
            })
    }

    // register user
    // const registerUser = async (data) => {
    //     const { email, password } = data
    //     return axios.post('http://localhost:5000/auth/login', {
    //         email, password
    //     }).then(async () => {
    //         await setUserContext()
    //     }).catch(err => {
    //         setError(err.response.data)
    //     })
    // }

    // login user
    const loginUser = async (data) => {
        const { email, password } = data
        return axios.post('http://localhost:5000/auth/login', {
                email, password
            }).then(async () => {
                await setUserContext()
            }).catch(err => {
                setError(err.response.data);
            })
    }


    return {
        // registerUser,
        loginUser,
        error
    }
}