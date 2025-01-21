import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { clientData } from "./ClientData";

import "./Client.scss";

import "swiper/css";
import "swiper/css/pagination";
import { FC } from "react";

export const Client: FC = () => {
    return (
        <section className="client">
            <div className="client__container">
                <h2 className="client__title">testimonials</h2>

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    className="swiper"
                >
                    {clientData.map((data) => (
                        <SwiperSlide>
                            <div className="client__card">
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
