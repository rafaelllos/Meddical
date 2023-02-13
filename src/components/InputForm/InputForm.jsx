import './InputForm.css';

import input_form_background from '../../images/input-form-background.svg';

function InputForm() {
    return (  
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
                        <p className="inputfrom__text">
                            Записываясь на прием дистанционно, с помощью нашего сайта, вы избавляете себя от прохождения живой очереди и экономите время. <br />
                            Выбирайте свободную дату и время, область вашей проблемы и врача. <br />
                            Дальше наши сотрудники свяжутся с вами. <br />
                            Это проще чем вы думаете!
                        </p>
                    </div>

                    <form className="inputform__grid" autoComplete="off">
                        <input type="text" name="name" placeholder="Имя" />
                        {/* <input type="text" name="gender" placeholder="Пол" /> */}
                        <div className="department">
                            <select className="department-select" name="department"> 
                                <option selected disabled>Выберите пол</option>
                                <option>Женский</option>
                                <option>Мужской</option>
                            </select>
                        </div>
                        <input type="email" name="email" placeholder="Почта" />
                        <input type="tel" name="tel" placeholder="Телефон" />
                        <input type="date" name="date" />
                        <input type="time" name="time" />
                        <input type="text" name="doctor" placeholder="Врач" />
                        <div className="department">
                            <select className="department-select" name="department"> 
                                <option selected disabled>Выберите отдел</option>
                                <option>Неврология</option>
                                <option>Травматология</option>
                                <option>Онкология</option>
                                <option>Отолорингология</option>
                                <option>Офтальмология</option>
                                <option>Кардиология</option>
                            </select>
                        </div>
                        <textarea name="message" id="inputbox_message" placeholder="Пожелания" rows="10" cols="30" /> 
                        <input type="submit" value="ОТПРАВИТЬ" id="inputbox_submit" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default InputForm;