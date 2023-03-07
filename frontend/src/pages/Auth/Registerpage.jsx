import './Loginpage.css';

import axios from 'axios';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
                        await axios.post('http://localhost:8800/auth', values)
                        alert('Data sent to DB!')
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
                        <Field type="text" name="password" /> 
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
}

export default Registerpage;