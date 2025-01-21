import { FC } from "react";
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
            <div className="gallery__container">
                <h2 className="gallery__title">gallery</h2>
                <div className="gallery__grid">
                    {GalleryImages.map((image) => {
                        return (
                            <div className="gallery__grid__image">
                                <img src={image} alt="" />
                            </div>
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
