import './Doctors.css';

import { 
    unknown_man, 
    linkedin,
    facebook,
    insta,
} from '../helper.jsx';

function Doctors({item}) {
    return (  
        <div className="doctors__item">
            <img src={unknown_man} alt="" className="doctors__img" />
            <div className="doctors__text">
                <p>{item.name}</p>
                <span>{item.spec}</span>
                <div className="doctors__social-media">
                    <a href="https://ru.wikipedia.org/wiki/LinkedIn"><img src={linkedin} alt="" width={25} height={25}/></a>
                    <a href="https://ru.wikipedia.org/wiki/Facebook"><img src={facebook} alt="" width={25} height={25}/></a>
                    <a href="https://ru.wikipedia.org/wiki/Instagram"><img src={insta} alt="" width={25} height={25}/></a>
                </div>
            </div>
            {/* <button className="doctors__btn">Просмотр</button> */}
        </div>
    );
}

export default Doctors;