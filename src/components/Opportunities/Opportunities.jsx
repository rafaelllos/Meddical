import './Opportunities.css';

import {
    calendar, 
    team, 
    cash,
} from '../helper.jsx';

function Opportunities() {
    return (  
        <div className="opportunities">
            <div className="opportunities__container">
                <div className="opportunities__container-item" id="item1">
                    <p>Запись на прием</p>
                    <img src={calendar} alt="Calendar" />
                </div>

                <div className="opportunities__container-item" id="item2">
                    <p>Команда профессионалов</p>
                    <img src={team} alt="Team" />
                </div>

                <div className="opportunities__container-item" id="item3">
                    <p>Разные виды оплаты</p>
                    <img src={cash} alt="Cash" />
                </div>
            </div>
        </div>
    );
}

export default Opportunities;