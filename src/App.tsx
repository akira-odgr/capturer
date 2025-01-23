import { useEffect, useState } from "react";

import { About } from "./components/about/About";
import { Header } from "./components/header/Header";
import { Service } from "./components/service/Service";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Client } from "./components/client/Client";
import { Gallery } from "./components/gallery/Gallery";
import { Blog } from "./components/blog/Blog";
import { Instagram } from "./components/instagram/Instagram";

import "./App.scss";

export const App = () => {
    const [loading, setLoading] = useState(true); // ローディング状態を管理

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // 3秒後にローディングを終了
        }, 3000);
        return () => clearTimeout(timer); // クリーンアップ

        //     // データ取得や処理をシミュレート
        //     const fetchData = async () => {
        //         // ここでデータを取得する処理を行う
        //         // 例: await fetch("api_endpoint");
        //         setLoading(false); // ロードが完了したらローディングを終了
        //     };

        //     fetchData(); // データ取得を実行
    }, []);

    return (
        <>
            {loading ? ( // ローディング中はLoadingメッセージを表示
                <div className="loading__container">
                    <div className="loader"></div>
                    <p>Loading...</p>
                </div>
            ) : (
                <div className="fade-in">
                    <Header />
                    <About />
                    <Service />
                    <Portfolio />
                    <Client />
                    <Gallery />
                    <Blog />
                    <Instagram />
                </div>
            )}
        </>
    );
};
