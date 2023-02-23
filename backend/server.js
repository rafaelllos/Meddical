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
    else {
        console.log('Database connected!') 
    }
})

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json('Homepage')
})

app.get('/data', (req, res) => {
    const q = 'SELECT * FROM applications;'

    connection.query(q, (err, results) => {
        if (err) return res.json(err)
        return res.json(results)
    })
})

app.post('/data', (req, res) => {
    const q = 'INSERT INTO applications ' + 
    '(user_name, user_gender, user_email, user_phone, application_date, application_time, application_department, user_text) VALUES(?);'
    // const values = ["Сергей", "Мужской", "deminov@gmail.com", "79003563743", "25.02.2023", "18:10", "Неврология"]
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

    connection.query(q, [values], (err, results) => {
        if (err) return res.json(err)
        return res.json('Data delivered into DB!')
    })
})

// connection.query(
//     'INSERT INTO applications (user_name, user_gender, user_email, user_phone, application_date, application_time, application_department) ' +
//     'VALUES("Рафаэль", "Мужской", "cobberaf@gmail.com", "79003203722", "18.02.2023", "16:30", "Офтальмология");',
// )