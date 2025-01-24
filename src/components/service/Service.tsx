import { CSSProperties, FC } from "react";
import ServiceImage from "../../assets/images/service.jpg";
import { motion } from "framer-motion";
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
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0 }}
                    viewport={{ once: true }}
                    className="service__title"
                >
                    services
                </motion.h2>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="service__description"
                >
                    At Capturer, we offer a range of professional photography
                    services tailored to meet your unique needs. With a
                    commitment to excellence and creativity, we strive to exceed
                    your expectations, delivering captivating visuals that tell
                    your story with authenticity and passion.
                </motion.p>
                <div className="service__grid">
                    <ServiceCard />
                </div>
            </div>
        </section>
    );
};
