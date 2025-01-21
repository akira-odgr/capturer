import { FC } from "react";

type Service = {
    title: string;
    desc: string;
};

const serviceData: Service[] = [
    {
        title: "Portrait Sessions",
        desc: "Our portrait sessions are designed to showcase your personality and style in stunning imagery.",
    },
    {
        title: "Maternity Sessions",
        desc: "Embrace the beauty and miracle of new life with our maternity and newborn photography sessions.",
    },
    {
        title: "Family Sessions",
        desc: "Cherish the bond of family with our custom-designed playful candid moments and portrait sessions.",
    },
];

export const ServiceCard: FC = () => {
    return (
        <>
            {serviceData.map((data, index) => (
                <div key={index} className="service__card">
                    <h4>{data.title}</h4>
                    <p>{data.desc}</p>
                </div>
            ))}
        </>
    );
};
