import { FC } from "react";
import PortfolioImage1 from "../../assets/images/portfolio-1.jpg";
import PortfolioImage2 from "../../assets/images/portfolio-2.jpg";
import PortfolioImage3 from "../../assets/images/portfolio-3.jpg";

type PortfolioImageType = {
    image: string;
};

const portfolioImage: PortfolioImageType[] = [
    {
        image: PortfolioImage1,
    },
    {
        image: PortfolioImage2,
    },
    {
        image: PortfolioImage3,
    },
];

export const PortfolioCard: FC = () => {
    return (
        <>
            {portfolioImage.map((data, index) => {
                return (
                    <div key={index} className="portfolio__card">
                        <img src={data.image} alt="" />
                        <div className="portfolio__card__content">
                            <button className="portfolio__card__content-btn">
                                view portfolio
                            </button>
                        </div>
                    </div>
                );
            })}
        </>
    );
};
