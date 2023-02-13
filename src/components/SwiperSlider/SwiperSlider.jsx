import './SwiperSlider.css';

import { SwiperSlide } from "swiper/react";

import { 
    quotes,
 } from '../helper.jsx';

function SwiperSlider(item) {
    return (  
        <SwiperSlide>
            <img src={quotes} alt="" width={45} height={30} />
            <p className="quotes__text">
                {item.text}
            </p>
            <div className="quotes__divider"></div>
            <p className="quotes__name">
                {item.name}
            </p>
        </SwiperSlide>
    );
}

export default SwiperSlider;