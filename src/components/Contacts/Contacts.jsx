import './Contacts.css';

import { 
    phone_icon,
    work_hours_icon,
    location_icon,
    message_icon,
} from '../helper.jsx';

function Contacts() {
    return (  
        <div className="contacts">
            <div className="contacts__container">
                <div className="contacts__item">
                    <img src={phone_icon} alt="" className="contacts__icon" />
                    <p className="contacts__title">Неотложная помощь</p>
                    <p className="contacts__text">+7 (900) 320 37-22</p>
                </div>

                <div className="contacts__item">
                    <img src={location_icon} alt="" className="contacts__icon" />
                    <p className="contacts__title">Местоположение</p>
                    <p className="contacts__text">г. Казань, ул. Гвардейская, 16A</p>
                </div>

                <div className="contacts__item">
                    <img src={message_icon} alt="" className="contacts__icon" />
                    <p className="contacts__title">Электронная почта</p>
                    <p className="contacts__text">cobberaf@gmail.com</p>
                </div>

                <div className="contacts__item">
                    <img src={work_hours_icon} alt="" className="contacts__icon" />
                    <p className="contacts__title">Рабочие часы</p>
                    <p className="contacts__text">09:00 - 20:00 Каждый день</p>
                </div>
            </div>
        </div>
    );
}

export default Contacts;