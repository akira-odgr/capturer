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
        new Array(portfolioImages.length).fill(false) // 各ポートフォリオ画像の表示状態を管理するためのステートを初期化
    );
    const refs = useRef<HTMLDivElement[]>([]); // 各ポートフォリオカードの参照を保持するためのrefを作成

    const handleScroll = useCallback(() => {
        refs.current.forEach((ref, index) => {
            // 各ポートフォリオカードの参照をループ処理
            if (ref) {
                const { top } = ref.getBoundingClientRect(); // カードの位置を取得
                const windowHeight = window.innerHeight; // ウィンドウの高さを取得

                // 画像が画面に30%入ってきたら
                if (top < windowHeight * 0.7 && !inView[index]) {
                    // 画像が画面に入ったかどうかをチェック
                    setInView((prev) => {
                        const newVisible = [...prev]; // 現在の表示状態をコピー
                        newVisible[index] = true; // 現在のインデックスを表示済みに更新
                        return newVisible; // 更新された表示状態を返す
                    });

                    // GSAPを使用してフェードインアニメーションを実行
                    gsap.fromTo(
                        ref,
                        { opacity: 0, y: 120 }, // 初期状態（透明で下に位置）
                        { opacity: 1, y: 0, duration: 3, delay: index * 0.2 } // 最終状態（不透明で元の位置に）
                    );
                }
            }
        });
    }, [inView]); // inViewが変更されるたびにhandleScrollが再生成される

    useEffect(() => {
        window.addEventListener("scroll", handleScroll); // スクロールイベントリスナーを追加
        return () => {
            window.removeEventListener("scroll", handleScroll); // クリーンアップ関数でリスナーを削除
        };
    }, [handleScroll]); // handleScrollが変更されるたびにリスナーを再設定

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
