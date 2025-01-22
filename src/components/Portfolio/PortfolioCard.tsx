import { FC, useCallback, useEffect, useRef, useState } from "react";
import PortfolioImage1 from "../../assets/images/portfolio-1.jpg";
import PortfolioImage2 from "../../assets/images/portfolio-2.jpg";
import PortfolioImage3 from "../../assets/images/portfolio-3.jpg";
import gsap from "gsap";

type PortfolioImageType = {
    image: string;
};

const portfolioImages: PortfolioImageType[] = [
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
    const [inView, setInView] = useState<boolean[]>(
        new Array(portfolioImages.length).fill(false)
    );
    const refs = useRef<HTMLDivElement[]>([]);

    const handleScroll = useCallback(() => {
        refs.current.forEach((ref, index) => {
            if (ref) {
                const { top } = ref.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // 画像が画面に30%入ってきたら
                if (top < windowHeight * 0.7 && !inView[index]) {
                    setInView((prev) => {
                        const newVisible = [...prev];
                        newVisible[index] = true;
                        return newVisible;
                    });

                    // GSAPを使用してフェードインアニメーションを実行
                    gsap.fromTo(
                        ref,
                        { opacity: 0, y: 150 },
                        { opacity: 1, y: 0, duration: 3, delay: index * 0.2 }
                    );
                }
            }
        });
    }, [inView]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll); // スクロールイベントリスナーを追加
        return () => {
            window.removeEventListener("scroll", handleScroll); // クリーンアップ関数でリスナーを削除
        };
    }, [handleScroll]);

    return (
        <>
            {portfolioImages.map((data: PortfolioImageType, index: number) => {
                return (
                    <div
                        key={index}
                        className="portfolio__card"
                        ref={(el) => {
                            if (el) {
                                refs.current[index] = el;
                            }
                        }}
                    >
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

// ... existing code ...
