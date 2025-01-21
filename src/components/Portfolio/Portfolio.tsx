import { FC } from "react";
import "./Portfolio.scss";
import { PortfolioCard } from "./PortfolioCard";

export const Portfolio: FC = () => {
    return (
        <section className="portfolio">
            <div className="portfolio__container">
                <h2 className="portfolio__title">portfolio</h2>
                <div className="portfolio__grid">
                    <PortfolioCard />
                </div>
            </div>
        </section>
    );
};
