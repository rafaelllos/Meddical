import './InputForm.css';

import input_form_background from '../../images/input-form-background.svg';
import { useState } from 'react';
import axios from 'axios';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function InputForm() {
    const [data, setData] = useState({
        user_name: '',
        user_gender: '',
        user_email: '',
        user_phone: '',
        application_date: '',
        application_time: '',
        application_department: '',
        user_text: ''
    })

    const handleChange = (e) => {
        setData(prev => 
            ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8800/data', data)
            alert('Data sent to DB!')
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <Formik
            initialValues={data}

            validationSchema={ 
                Yup.object({
                user_name: Yup.string()
                    .max(20, 'Должно быть 20 символов или меньше')
                    .required('Обязательно к заполнению'),
                user_gender: Yup.string()
                    .required('Обязательно к заполнению'),
                user_email: Yup.string()
                    .email('Некорректный email-адрес')
                    .required('Обязательно к заполнению'),
                user_phone: Yup.string()
                    .min(11, "Введите номер телефона, 11 символов")
                    .max(11, 'Введите номер телефона, 11 символов')
                    .required('Обязательно к заполнению'),
                application_date: Yup.string()
                    .required('Обязательно к заполнению'),
                application_time: Yup.string()
                    .required('Обязательно к заполнению'),
                application_department: Yup.string()
                    .required('Обязательно к заполнению'),
                })
            }
        >
            <div id="bookForm" className="main__inputform" style={{
                backgroundImage: `url(${input_form_background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%",
                height: "100%", 
            }}>
                <div className="main__container">
                    <div className="inputform__inner">
                        <div className="inputform__flex">
                            <p className="inputform__title">Записаться на прием</p>
                            <p className="inputform__text">
                                Записываясь на прием дистанционно, с помощью нашего сайта, вы избавляете себя от прохождения живой очереди и экономите время. <br />
                                Выбирайте свободную дату и время, область вашей проблемы и врача. <br />
                                Дальше наши сотрудники свяжутся с вами. <br />
                                Это проще чем вы думаете!
                            </p>
                        </div>

                        <Form className="inputform__grid" autoComplete="off">
                            <Field type="text" onChange={handleChange} name="user_name" placeholder="Имя *" />
                            <div className="department">
                                <select className="department-select" onChange={handleChange} name="user_gender"> 
                                    <option selected disabled>Выберите пол *</option>
                                    <option>Женский</option>
                                    <option>Мужской</option>
                                </select>
                            </div>
                            <Field type="email" onChange={handleChange} name="user_email" placeholder="Почта *" />
                            <Field type="tel" onChange={handleChange} name="user_phone" placeholder="Телефон *" />
                            <Field name="application_date" onChange={handleChange} placeholder="Дата *" type="text" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} />
                            <Field name="application_time" onChange={handleChange} placeholder="Время *" type="text" onFocus={(e) => (e.target.type = "time")} onBlur={(e) => (e.target.type = "text")} />
                            <div id="select_department" className="department">
                                <select className="department-select" onChange={handleChange} name="application_department"> 
                                    <option selected disabled>Выберите отдел *</option>
                                    <option>Неврология</option>
                                    <option>Травматология</option>
                                    <option>Онкология</option>
                                    <option>Отолорингология</option>
                                    <option>Офтальмология</option>
                                    <option>Кардиология</option>
                                </select>
                            </div>
                            <textarea id="inputbox_message" onChange={handleChange} name="user_text" placeholder="Пожелания" rows="10" cols="30" /> 
                            <Field type="submit" value="ОТПРАВИТЬ" id="inputbox_submit" onClick={handleClick} />
                        </Form>
                    </div>
                </div>
            </div>
        </Formik>   
    );
}

export default InputForm;