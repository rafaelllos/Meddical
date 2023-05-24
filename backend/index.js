const express = require('express')
const authRouter = require('./routes/authRouter.js')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/auth', authRouter)
app.use(cookieParser())

const start = () => {    
    try {
        app.listen(5000, () => console.log("Server opened!"))
    } catch (err) {
        console.log(err)   
    }
}

start()