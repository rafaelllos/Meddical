import './HomepageBackgroundImage.css';

import { Link } from 'react-router-dom';

import background from "../../images/background-img.svg";

function IndexPageBackground() {
    return (  
        <section className="section" style={{ 
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
            <div className="section__container">
                <p className="section__container-suptitle">Забота о жизни</p>
                <p className="section__container-title">
                    Лидирующие позиции <br /> в области медицины                
                </p>
                
                <Link to="/services"> Наши услуги</Link>
            </div>
        </section>
    );
}

export default IndexPageBackground;