import { sendMail } from './mailer.js'

import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express()

app.listen(8800, () => {
    console.log("Server opened!");
})

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'react-hospital-app',
    password: 'rafaelllo'
})

connection.connect(err => {
    if (err) {
        console.log(err)
        return err
    }
    else console.log('Database connected!')
})

app.use(express.json())
app.use(express.urlencoded( {extended: false} ))
app.use(cors())



app.get('/', (req, res) => {
    res.send('Homepage')
})



app.get('/applications', (req, res) => {
    const q = 'SELECT * FROM applications;'

    connection.query(q, (err, response) => {
        return res.send(response)
    })
})

app.post('/applications', (req, res) => {
    const q = 'INSERT INTO applications ' + 
    '(user_name, user_gender, user_email, user_phone, application_date, application_time, application_department, user_text) VALUES(?);'

    const values = [
        req.body.user_name,
        req.body.user_gender,
        req.body.user_email,
        req.body.user_phone,
        req.body.application_date,
        req.body.application_time,
        req.body.application_department,
        req.body.user_text
    ]

    connection.query(q, [values], (err, response) => {
        return res.send('Заявка создана!')
    })

    sendMail(req.body.user_name, req.body.user_phone, req.body.application_date, req.body.application_time, req.body.application_department)
})



app.get('/register', (req, res) => {
    const q = 'SELECT * FROM auth;'

    connection.query(q, (err, response) => {
        return res.send(response)
    })
})

app.post('/register', (req, res) => {
    const q = "SELECT * FROM auth WHERE user_email = ?;"
	let email = req.body.email
	let password = req.body.password

	connection.query(q, email, (err, resp) => {
        if (resp.length < 1) {
            const query = "INSERT INTO auth (user_email, user_password) VALUES(?, ?);"

            connection.query(query, [email, password], (err, response) => {
                return res.send("Регистрация прошла успешно!")
            })
        }
        else return res.send('Пользователь с таким email уже существует!')
	})
})



app.get('/login', (req, res) => {
    const q = 'SELECT * FROM auth;'

    connection.query(q, (err, response) => {
        return res.json(response)
    })
})