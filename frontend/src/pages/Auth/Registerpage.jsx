import './Auth.css'

import { useAuth } from '../../hooks/useAuth.js'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Schema = Yup.object().shape({
    email: Yup.string()
        .email('Некорректный email-адрес')
        .required('Обязательно к заполнению'),
    password: Yup.string()
        .min(6, "Длина пароля должна составлять минимум 6 символов, но не больше 100 символов")
        .max(100, 'Длина пароля должна составлять минимум 6 символов, но не больше 100 символов')
        .required('Обязательно к заполнению'),
})

function Registerpage() {
    const isAuth = useAuth()

    if (!isAuth) {
        return (  
            <Formik
                initialValues={
                    {
                        email: '',
                        password: ''
                    }
                }

                validationSchema={Schema}    

                onSubmit={
                    async (values) => {
                        try {
                            await axios
                                .post('/auth/registration', values)
                                .then(res => {
                                    // Если сервер вернул true после отправки данных в БД, то происходит следующее
                                    if (res.data === true) {
                                        // Переадресовывает пользователя на страницу login
                                        window.location.href = "http://localhost:3000/login"
                                    } else {
                                        // return res.json({message: 'User with this email already registered'}) - обрабатывает
                                        // эту строку и выводит текст из объекта
                                        alert(res.data.message)
                                    }
                                })
                                .catch(() => {
                                    alert("An error occurred on the server")
                                })
                        } catch (err) {
                            console.log(err)
                        }
                    }
                }        
            >
                <Form className="auth__container" autoComplete="off">
                    <div className="auth__box">
                        <h2>Регистрация</h2>
                        <div className="user__box">
                            <Field type="text" name="email" /> 
                            <label>Почта</label>
                            <p><ErrorMessage name="email" /></p>
                        </div>
                        <div className="user__box">
                            <Field type="password" name="password" /> 
                            <label>Пароль</label>
                            <p><ErrorMessage name="password" /></p>
                        </div>
                        <div className="login__links">
                            <Field name="auth_submit" type="submit" value="Зарегистрировать" />
                        </div>
                    </div>
                </Form>
            </Formik>
        );
    } else {
        return <Navigate to="/account" replace />
    }
}

export default Registerpage