import './Navbar.css';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import search_icon from '../../images/search-icon.svg';

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
                    <img src={search_icon} alt="Search" width={30} height={30} />
                    <button className="navbar__container-button">
                        <HashLink to={{
                            pathname: "/",
                            hash: "#bookForm"  
                        }}>
                            Запись на прием 
                        </HashLink>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;