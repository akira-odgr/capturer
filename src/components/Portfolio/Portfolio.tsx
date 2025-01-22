import { FC } from "react";
import { PortfolioCard } from "./PortfolioCard";

import "./Portfolio.scss";
// ... existing code ...

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

// ... existing code ...
