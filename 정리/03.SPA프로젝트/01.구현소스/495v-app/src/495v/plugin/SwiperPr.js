import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./swiperpr.css";
import { Navigation } from "swiper";

import product_data from "../data/product";

export default function SwiperPr(props) {
    const sdt = product_data;
    return (

        <section className={props.sec}>
        <Swiper
                slidesPerView={3}
                navigation={true}
                initialSlide= {1}
                centeredSlides={true}
                modules={[Navigation]}
                breakpoints={{
                    700: {
                        slidesPerView: 1,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                }}
                className="mySwiper"
            >
                {sdt.map((v, i) => (
                    <SwiperSlide key={i}>
                        <div className="pbx">
                            <div className="pbx__img">
                                <img src={v.img} />
                            </div>
                        </div>
                        <div className="pbx-curve">
                            <div className="pbx-cure__top">
                                <img src={v.ctimg} />
                            </div>
                            <div className="pbx-cure__bottom">
                                <img src={v.cbimg} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper> 
        </section>
            
    );
}
