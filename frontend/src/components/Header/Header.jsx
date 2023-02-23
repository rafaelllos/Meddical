import './Header.css';

import { 
    phone_icon,
    work_hours_icon,
    location_icon,
} from '../helper.jsx';

function Header() {
    return ( 
        <header className="header">
            <div className="header__container">
                <p className="header__container-logo">
                    Med<span>dical</span>
                </p>
                
                <div className="header__container-items">
                    <div className="item">
                        <img src={phone_icon} alt="Phone" width={30} height={30} />
                        <div>
                            <p className="item__title">Неотложная помощь</p>
                            <p className="item__text">+7 (900) 320 37-22</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={work_hours_icon} alt="Hours" width={30} height={30} />
                        <div>
                            <p className="item__title">Рабочие часы</p>
                            <p className="item__text">09:00 - 20:00 <br /> Каждый день</p>
                        </div>
                    </div>  
                    <div className="item">
                        <img src={location_icon} alt="Location" width={30} height={30} />
                        <div>
                            <p className="item__title">Местоположение</p>
                            <p className="item__text">г. Казань, <br /> ул. Гвардейская, 16A</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;