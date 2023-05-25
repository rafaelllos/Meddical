import './Homepage.css';

import { Link } from 'react-router-dom'

import HomepageBackgroundImage from '../components/HomepageBackgroundImage/HomepageBackgroundImage.jsx'
import Opportunities from '../components/Opportunities/Opportunities.jsx'
import Headling from '../components/Headling/Headling.jsx'
import InputForm from '../components/InputForm/InputForm.jsx'
import Doctors from '../components/Doctors/Doctors.jsx'
import Contacts from '../components/Contacts/Contacts.jsx'

import {  
    bestDoctors_card,
    arrow_to_right,
    doctors_team,
    med_patch, 
    med_cardio, 
    med_plus, 
    med_dropper,
    slogan_circle,
    slogan_doctor,
    slogan_doctor1,
    heart,
} from '../components/helper.jsx'

function Homepage() {
    return (  
    <>
        <HomepageBackgroundImage />
        <Opportunities />

        <main className="main">
            <div className="main__container">
                <p className="suptitle">Добро пожаловать в Meddical</p>
                <p className="title">Отличное место для получения медицинской помощи</p>
                <p className="subtitle">
                    Проходя лечение у нас - вы получаете <br />
                    комплексное обследование и возможность выбирать врача. <br />
                    Или предоставьте эту ношу нам, мы подберем из нашего большого <br />
                    штата опытных медиков правильного и нужного вам специалиста!
                </p>
                <div className="learnMore-btn">
                    <Link to="/about">Изучить больше</Link>
                    <img src={arrow_to_right} alt="" width={10} height={10} />
                </div>

                <img src={doctors_team} alt="" className="main__content-img" />

                <Headling suptitle="Забота, в которую вы можете верить" title="Наши услуги" />

                <div className="main__slogan">
                    <div className="slogan__buttons">
                        <button id="btn-first">
                            <img src={med_patch} alt="" width={32} height={32} />
                            <p>Бесплатное <br /> обследование</p>
                        </button>

                        <button>
                            <img src={med_cardio} alt="" width={32} height={32} />
                            <p>Кардиограмма</p>
                        </button>

                        <button>
                            <img src={med_plus} alt="" width={32} height={32} />
                            <p>ДНК-тестирование</p>
                        </button>

                        <button id="btn-last">
                            <img src={med_dropper} alt="" width={32} height={32} />
                            <p>Банк крови</p>
                        </button>
                    </div>

                    <div className="slogan__desc">
                        <div className="title" style={{textAlign: "left", marginBottom: "24px"}}>
                            Стремление ставить пациентов на первое место.
                        </div>

                        <div className="desc__items">
                            <div className="desc__items-point">
                                <img src={slogan_circle} alt="" />
                                <p>Для нас это честь вам помочь</p>
                            </div>
                            <div className="desc__items-point">
                                <img src={slogan_circle} alt="" />
                                <p>Все наше лучшее - Вам</p>
                            </div>
                            <div className="desc__items-point">
                                <img src={slogan_circle} alt="" />
                                <p>Мы постоянно совершенствуемся</p>
                            </div>
                            <div className="desc__items-point">
                                <img src={slogan_circle} alt="" />
                                <p>Пятизвездочное обслуживание</p>
                            </div>
                            <div className="desc__items-point">
                                <img src={slogan_circle} alt="" />
                                <p>Вы можете нам довериться</p>
                            </div>
                            <div className="desc__items-point">
                                <img src={slogan_circle} alt="" />
                                <p>Постоянная забота</p>
                            </div>
                        </div>

                        <div className="desc__text">
                            Коммерческое медицинское учреждение здравоохранения «Meddical» работает с 1999 года. Тысячи довольных и здоровых клиентов рекомендуют нас, как одно из лучших заведений города Казани.
                        </div>

                        <div className="desc__text">
                            Залог нашего успеха - чистота, аккуратность и высокая компетентность в своем деле. Вы можете довериться нам, здесь вас примут с любовью!
                        </div>
                    </div>

                    <div className="slogan__images">
                        <img src={slogan_doctor} alt="" width={320} height={200} />
                        <img src={slogan_doctor1} alt="" width={320} height={250} />
                    </div>
                </div>

                <Headling suptitle="Постоянная забота" title="Наши специализации" />

                <div className="main__specializations">
                    <button className="specializations__button">
                        <img src={heart} alt="" />
                        <p>Неврология</p>
                    </button>

                    <button className="specializations__button">
                        <img src={heart} alt="" />
                        <p>Травматология</p>
                    </button>

                    <button className="specializations__button">
                        <img src={heart} alt="" />
                        <p>Онкология</p>
                    </button>

                    <button className="specializations__button">
                        <img src={heart} alt="" />
                        <p>Отолорингология</p>
                    </button>

                    <button className="specializations__button">
                        <img src={heart} alt="" />
                        <p>Офтальмология</p>
                    </button>

                    <button className="specializations__button">
                        <img src={heart} alt="" />
                        <p>Кардиология</p>
                    </button>
                </div>
            </div>

            <InputForm />

            <Headling suptitle="Надежная забота" title="Наши лучшие врачи" />

            <div className="doctors">
                { bestDoctors_card.map((item) => 
                    <Doctors item={item} />
                )}
            </div>

            <Headling suptitle="Связь в одно касание" title="Контакты" />

            <Contacts />
        </main>
    </>
    )
}

export default Homepage