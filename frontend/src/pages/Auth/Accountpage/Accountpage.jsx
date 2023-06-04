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

    let output
    if (arrays !== "" && arrays !== null && arrays !== undefined)
        output = arrays?.map((data) => (<AccountItem info={data} />))
    else
        output = ""

    if (obj1.value !== "" && obj1.value !== null && obj1.value !== undefined)
        axios
            .get(`/getApplication/${obj1.value}`)
            .then(res => {
                if (res.data)
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
                        { output }
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Accountpage