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
    return (
        <>
            <Header />
            <About />
            <Service />
            <Portfolio />
            <Client />
            <Gallery />
            <Blog />
            <Instagram />
        </>
    );
};
