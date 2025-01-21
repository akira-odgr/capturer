import { About } from "./components/about/About";
import { Header } from "./components/header/Header";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Service } from "./components/service/Service";
import { Client } from "./components/client/Client";

import "./App.scss";

export const App = () => {
    return (
        <>
            <Header />
            <About />
            <Portfolio />
            <Service />
            <Client />
        </>
    );
};
