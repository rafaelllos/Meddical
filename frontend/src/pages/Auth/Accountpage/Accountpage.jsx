import './Accountpage.css'
import axios from 'axios'
import { useState } from 'react'
 
import deleteTokenAndLogout from '../deleteTokenAndLogout.js'
import decodeToken from '../decodeToken.js'
import AccountItem from './AccountItem.jsx'

const obj = decodeToken()
const map = new Map()
map.set(obj.email)
const obj1 = Array.from(map).reduce((obj_ids, [value]) => (
    Object.assign(obj_ids, {value})
), {})

const Accountpage = () => {
    const [arrays, setArrays] = useState([])

    axios
        .get(`/getApplication/${obj1.value}`)
        .then(res => {
            setArrays(res.data)
        })

    return ( 
        <>
            <div className="account__container">
                <div className="account__flex">
                    <p className="flex__title">Здравствуйте!</p>
                    <button className="flex__btn" onClick={deleteTokenAndLogout}>Выйти</button>
                </div>

                <div className="account__item">
                    <p className="account__item-title">Ваши записи в клинике</p>
                    <div className="account__item-tables">    
                        { arrays?.map((data) => (
                            <AccountItem info={data} /> 
                        ))}
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Accountpage