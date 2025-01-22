import { FC } from "react";
import { motion } from "framer-motion";

import GalleryImage1 from "../../assets/images/image-1.jpg";
import GalleryImage2 from "../../assets/images/image-2.jpg";
import GalleryImage3 from "../../assets/images/image-3.jpg";
import GalleryImage4 from "../../assets/images/image-4.jpg";
import GalleryImage5 from "../../assets/images/image-5.jpg";
import GalleryImage6 from "../../assets/images/image-6.jpg";
import GalleryImage7 from "../../assets/images/image-7.jpg";
import GalleryImage8 from "../../assets/images/image-8.jpg";

import "./Gallery.scss";

const GalleryImages: string[] = [
    GalleryImage1,
    GalleryImage2,
    GalleryImage3,
    GalleryImage4,
    GalleryImage5,
    GalleryImage6,
    GalleryImage7,
    GalleryImage8,
];

export const Gallery: FC = () => {
    return (
        <section className="gallery">
            <div className="custom-shape-divider-top-1737474192">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"
                        fill="hsla(224, 45%, 89%, 0.635)"
                    ></path>
                </svg>
            </div>
            <div className="gallery__container">
                <h2 className="gallery__title">gallery</h2>
                <div className="gallery__grid">
                    {GalleryImages.map((image, index) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{
                                    duration: 1.5,
                                    delay: 0.6 * index,
                                }}
                                viewport={{ once: true }}
                                className="gallery__grid__image"
                            >
                                <img src={image} alt="" />
                            </motion.div>
                        );
                    })}
                </div>
                <div className="gallery__btn">
                    <button>view gallery</button>
                </div>
            </div>
        </section>
    );
};
