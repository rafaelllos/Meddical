import './Navbar.css'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function Navbar() {
    return (  
        <nav className="navbar">
            <div className="navbar__container">
                <div className="navbar__container-item">
                    <Link to="/">Главная</Link>
                    <Link to="/about">О нас</Link>
                    <Link to="/services">Услуги</Link>
                    <Link to="/doctors">Наши врачи</Link>
                </div>
                
                <div className="navbar__container-item">
                    <HashLink className="item__buttons" to={{
                        pathname: "/",
                        hash: "#bookForm"  
                    }}>
                        Запись на прием 
                    </HashLink>
                    <Link className="item__buttons" to="/account">Личный кабинет</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar