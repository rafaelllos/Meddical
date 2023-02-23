import './Loginpage.css';

import { Link } from 'react-router-dom';

function Loginpage() {
    return (  
        <div className="auth__container">
            <div className="auth__box">
                <h2>Авторизация</h2>
                <form>
                    <div className="user__box">
                        <input type="text" name="" required="" />
                        <label>Почта</label>
                    </div>
                    <div className="user__box">
                        <input type="password" name="" required="" />
                        <label>Пароль</label>
                    </div>
                    <div className="login__links">
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Войти
                        </a>
                            
                        <Link to="/register">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Регистрация
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Loginpage;