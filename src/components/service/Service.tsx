import { CSSProperties, FC } from "react";
import ServiceImage from "../../assets/images/service.jpg";
import { ServiceCard } from "./ServiceCata";

import "./Service.scss";

const backgroundImg: CSSProperties = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(${ServiceImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

export const Service: FC = () => {
    return (
        <section className="service" style={backgroundImg}>
            <div className="service__container">
                <h2 className="service__title">services</h2>
                <p className="service__description">
                    At Capturer, we offer a range of professional photography
                    services tailored to meet your unique needs. With a
                    commitment to excellence and creativity, we strive to exceed
                    your expectations, delivering captivating visuals that tell
                    your story with authenticity and passion.
                </p>
                <div className="service__grid">
                    <ServiceCard />
                </div>
            </div>
        </section>
    );
};
