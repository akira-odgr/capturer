import { FC } from "react";
import { motion } from "framer-motion";

type Service = {
    title: string;
    desc: string;
    delay: number;
};

const serviceData: Service[] = [
    {
        title: "Portrait Sessions",
        desc: "Our portrait sessions are designed to showcase your personality and style in stunning imagery.",
        delay: 1.5,
    },
    {
        title: "Maternity Sessions",
        desc: "Embrace the beauty and miracle of new life with our maternity and newborn photography sessions.",
        delay: 2,
    },
    {
        title: "Family Sessions",
        desc: "Cherish the bond of family with our custom-designed playful candid moments and portrait sessions.",
        delay: 2.5,
    },
];

export const ServiceCard: FC = () => {
    return (
        <>
            {serviceData.map((data, index) => (
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: data.delay }}
                    viewport={{ once: true }}
                    key={index}
                    className="service__card"
                >
                    <h4>{data.title}</h4>
                    <p>{data.desc}</p>
                </motion.div>
            ))}
        </>
    );
};
