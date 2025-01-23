import { FC } from "react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { clientData } from "./ClientData";

import "./Client.scss";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// import "swiper/css/navigation";

export const Client: FC = () => {
    return (
        <section className="client">
            <div className="client__container">
                <h2 className="client__title">testimonials</h2>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="swiper"
                >
                    {clientData.map((data) => (
                        <SwiperSlide>
                            <div key={data.id} className="client__card">
                                <img
                                    src={data.image}
                                    alt="client"
                                    className="client__card__image"
                                />
                                <p className="client__card__description">
                                    {data.desc}
                                </p>
                                <h4>{data.title}</h4>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
