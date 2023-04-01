import './Footer.css';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__items">
                    <div className="footer__item">
                        <p className="footer__logo">Meddical</p>
                        <p className="footer__text">
                            Лидирующие позиции в области <br /> медицины, надежная забота.
                        </p>
                    </div>
                    
                    <div className="footer__item">
                        <p className="footer__title">Важные ссылки</p>
                        <HashLink to={{
                            pathname: "/",
                            hash: "#bookForm"  
                        }}>
                            Запись на прием
                        </HashLink>
                        <Link to="/services">Услуги</Link>
                        <Link to="/about">О нас</Link>
                        <Link to="/doctors">Врачи</Link>
                    </div>

                    <div className="footer__item">
                        <p className="footer__title">Свяжитесь с нами</p>
                        <p>Позвонить: <br /> +7 (900) 320 37-22</p>
                        <p>Эл. почта: <br /> cobberaf@gmail.com</p>
                        <p>Адрес: г. Казань, ул. Гвардейская, 16А</p>
                    </div>

                    {/* <div className="footer__item">
                        <p className="footer__title">Новостная рассылка</p>
                        <input type="text" placeholder="Введите свой email-адрес" />
                    </div> */}
                </div>

                <div className="footer__divider"></div>

                <div className="footer__text" style={{paddingBottom: "50px"}}>
                    © 2023 Meddical All Rights Reserved
                </div>
            </div>
        </footer>
    );
}

export default Footer;