import './Aboutpage.css';

import Headling from '../components/Headling/Headling.jsx';
import Doctors from '../components/Doctors/Doctors.jsx';
import Contacts from '../components/Contacts/Contacts.jsx';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import {     
    bestDoctors_card,
    slogan_circle,
    medic_girl,
    quotes,
    desc_section_background 
} from '../components/helper.jsx';

function Aboutpage() {
    const doctors__quotes = [
        {text: "Врач, должен быть благоразумным по своему нраву человеком, прекрасным, добрым и человеколюбивым.", name: "Гиппократ"},
        {text: "Радостное выражение лица врача – начало выздоровления больного.", name: "Фернандо де Рохас"},
        {text: "Никакой искусный и гениальный врач не возьмется лечить болезнь до тех пор, пока не узнает весь ход ее и все излучины сопровождавших ее обстоятельств.", name: "Николай Гоголь"},
        {text: "Начинающий врач выписывает по двадцать лекарств для каждой болезни; опытный врач – одно лекарство на двадцать болезней.", name: "Уильям Ослер"},
        {text: "Чем лучше врач, тем больше он знает бесполезных лекарств.", name: "Бенджамин Франклин"}
    ];

    return (  
        <>
            <div className="content-img"></div>

            <div className="desc__section">
                <div className="desc__section-container">
                    <div className="desc__section-left">
                        <img src={medic_girl} alt="" width={300} height={500} className="desc__section-left-img" />
                    </div>

                    <div className="desc__section-right">
                        <p className="desc__section-title">Добро пожаловать в Meddical</p>
                        <p className="desc__section-subtitle">Лучшее обслуживание <br /> и качество лечения</p>

                        <div className="desc__section-items">
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
                </div>

                <div className="desc__section-quotes" style={{ 
                    backgroundImage: `url(${desc_section_background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}>
                    <div className="quotes__container">
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                        >
                            <SwiperSlide>
                                <img src={quotes} alt="" width={45} height={30} />
                                <p className="quotes__text">
                                    {doctors__quotes[0].text}
                                </p>
                                <div className="quotes__divider"></div>
                                <p className="quotes__name">
                                    {doctors__quotes[0].name}
                                </p>
                            </SwiperSlide>
                            <SwiperSlide> 
                                <img src={quotes} alt="" width={45} height={30} />
                                <p className="quotes__text">
                                    {doctors__quotes[1].text}
                                </p>
                                <div className="quotes__divider"></div>
                                <p className="quotes__name">
                                    {doctors__quotes[1].name}
                                </p>
                            </SwiperSlide>
                            <SwiperSlide> 
                                <img src={quotes} alt="" width={45} height={30} />
                                <p className="quotes__text">
                                    {doctors__quotes[2].text}
                                </p>
                                <div className="quotes__divider"></div>
                                <p className="quotes__name">
                                    {doctors__quotes[2].name}
                                </p>
                            </SwiperSlide>
                            <SwiperSlide> 
                                <img src={quotes} alt="" width={45} height={30} />
                                <p className="quotes__text">
                                    {doctors__quotes[3].text}
                                </p>
                                <div className="quotes__divider"></div>
                                <p className="quotes__name">
                                    {doctors__quotes[3].name}
                                </p>
                            </SwiperSlide>
                            <SwiperSlide> 
                                <img src={quotes} alt="" width={45} height={30} />
                                <p className="quotes__text">
                                    {doctors__quotes[4].text}
                                </p>
                                <div className="quotes__divider"></div>
                                <p className="quotes__name">
                                    {doctors__quotes[4].name}
                                </p>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <Headling suptitle="Надежная забота" title="Наши лучшие врачи" />

                <div className="doctors">
                    { bestDoctors_card.map((item) => 
                        <Doctors item={item} />
                    )}
                </div>

                <Headling suptitle="Связь в одно касание" title="Контакты" />

                <Contacts />

                
                <iframe
                    title="map"
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A47f4f4795b2ed71182d82212a67df95e76e3617855891daacb53ea4900695c28&amp;source=constructor" 
                    width="992" height="400" frameborder="0">
                </iframe>
            </div>
        </>
    );
}

export default Aboutpage;