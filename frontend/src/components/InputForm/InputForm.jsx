import './InputForm.css';

import input_form_background from '../../images/input-form-background.svg';
import axios from 'axios';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Schema = Yup.object().shape({
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

function InputForm() {
    return (
        <Formik
            initialValues={
                {
                    user_name: '',
                    user_gender: '',
                    user_email: '',
                    user_phone: '',
                    application_date: '',
                    application_time: '',
                    application_department: '',
                    user_text: ''
                }
            }

            validationSchema={Schema}    

            onSubmit={
                async (values) => {
                    try {
                        await axios
                            .post('/application', values)
                            .then(res => {
                                alert(res.data.message)
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
            <div id="bookForm" className="main__inputform" style={{
                backgroundImage: `url(${input_form_background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%",
                height: "100%", 
            }}>
                <div className="main__container">
                        <div className="inputform__title">Записаться на прием</div>

                        <Form className="inputform__flex" autoComplete="off">
                            <div className="inputform__flex-item">
                                <label>Имя <span>*</span></label>
                                <Field type="text" name="user_name" />
                                <p><ErrorMessage name="user_name" /></p>
                            </div>

                            <div className="inputform__flex-item">
                                <label>Почта <span>*</span></label>
                                <Field type="email" name="user_email" />
                                <p><ErrorMessage name="user_email" /></p>
                            </div>

                            <div className="inputform__flex-item">
                                <label>Телефон <span>*</span></label>
                                <Field type="tel" name="user_phone" />
                                <p><ErrorMessage name="user_phone" /></p>
                            </div>

                            <div className="inputform__flex-item">
                                <label>Дата <span>*</span></label>
                                <Field type="date" name="application_date" />
                                <p><ErrorMessage name="application_date" /></p>
                            </div>

                            <div className="inputform__flex-item">
                                <label>Время <span>*</span></label>
                                <Field type="time" name="application_time" />
                                <p><ErrorMessage name="application_time" /></p>
                            </div>

                            <div className="inputform__flex-select">
                                <label>Пол <span>*</span></label>
                                <Field as="select" name="user_gender" className="department-select"> 
                                    <option selected disabled>Выберите пол</option>
                                    <option>Женский</option>
                                    <option>Мужской</option>
                                </Field>
                                <p><ErrorMessage name="user_gender" /></p>
                            </div>

                            <div className="inputform__flex-select">
                                <label>Отдел <span>*</span></label>
                                <Field as="select" name="application_department" className="department-select"> 
                                    <option selected disabled>Выберите отдел</option>
                                    <option>Неврология</option>
                                    <option>Травматология</option>
                                    <option>Онкология</option>
                                    <option>Отолорингология</option>
                                    <option>Офтальмология</option>
                                    <option>Кардиология</option>
                                </Field>
                                <p>
                                    <ErrorMessage name="application_department" />
                                </p>
                            </div>

                            <Field as="textarea" id="inputbox_message" name="user_text" placeholder="Пожелания" rows="5" cols="30" /> 

                            <Field id="inputbox_submit" type="submit" value="ОТПРАВИТЬ" />
                        </Form>
                    </div>
                </div>
        </Formik>   
    );
}

export default InputForm;