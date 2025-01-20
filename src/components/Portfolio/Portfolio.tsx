import { PortfolioCard } from "./PortfolioCard";

import "./Portfolio.scss";

export const Portfolio = () => {
    return (
        <section className="portfolio__container section__container">
            <h2 className="section__header">~ PORTFOLIO ~</h2>
            <div className="portfolio__grid">
                <PortfolioCard />
            </div>
        </section>
    );
};
