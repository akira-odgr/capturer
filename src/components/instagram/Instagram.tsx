import { FC, useEffect } from "react";
import InstagramImg1 from "../../assets/images/image-1.jpg";
import InstagramImg2 from "../../assets/images/image-2.jpg";
import InstagramImg3 from "../../assets/images/image-3.jpg";
import InstagramImg4 from "../../assets/images/image-4.jpg";
import InstagramImg5 from "../../assets/images/image-5.jpg";
import InstagramImg6 from "../../assets/images/image-6.jpg";
import InstagramImg7 from "../../assets/images/image-7.jpg";
import InstagramImg8 from "../../assets/images/image-8.jpg";
import { gsap } from "gsap";

import "./Instagram.scss";

const InstagramImages: string[] = [
    InstagramImg1,
    InstagramImg2,
    InstagramImg3,
    InstagramImg4,
    InstagramImg5,
    InstagramImg6,
    InstagramImg7,
    InstagramImg8,
];

export const Instagram: FC = () => {
    useEffect(() => {
        const content = document.querySelector(".instagram__content");
        gsap.to(content, {
            x: "-50%", // 50%左に移動
            duration: 45,
            repeat: -1,
            ease: "linear",
        });
    }, []);

    return (
        <section className="instagram__container">
            <div className="instagram__title">instagram</div>
            <div className="instagram__content">
                {InstagramImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Instagram image ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};
